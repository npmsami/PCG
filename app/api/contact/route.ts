import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'] as const;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function validatePayload(payload: ContactPayload) {
  const fullName = payload.fullName?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const message = payload.message?.trim() ?? '';
  const phone = payload.phone?.trim() ?? '';
  const subject = payload.subject?.trim() ?? '';

  if (!fullName || !email || !message) {
    return { ok: false as const, error: 'Full Name, Email Address, and Message are required.' };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { ok: false as const, error: 'Please provide a valid email address.' };
  }

  return {
    ok: true as const,
    value: { fullName, email, phone, subject, message },
  };
}

function getMissingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validated = validatePayload(payload);

    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const missing = getMissingEnvVars();
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Email service is not configured. Missing: ${missing.join(', ')}` },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || 'pcgroofing.richard@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER!;
    const replyTo = validated.value.email;

    const readableSubject = validated.value.subject || 'General Inquiry';
    const safeFullName = escapeHtml(validated.value.fullName);
    const safeEmail = escapeHtml(validated.value.email);
    const safePhone = escapeHtml(validated.value.phone || 'Not provided');
    const safeSubject = escapeHtml(readableSubject);
    const safeMessage = escapeHtml(validated.value.message);
    const emailSubject = `New Contact Form Submission - ${readableSubject}`;

    const plainTextBody = [
      'New contact form submission',
      '',
      `Full Name: ${validated.value.fullName}`,
      `Email Address: ${validated.value.email}`,
      `Phone Number: ${validated.value.phone || 'Not provided'}`,
      `Subject: ${readableSubject}`,
      '',
      'Message:',
      validated.value.message,
    ].join('\n');

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2 style="margin-bottom: 8px;">New Contact Form Submission</h2>
        <p style="margin-top: 0; color: #666;">PCG Contractors website contact page</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${safeFullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email Address</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone Number</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${safeSubject}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${safeMessage}</td>
          </tr>
        </table>
      </div>
    `;

    const result = await transporter.sendMail({
      from: `PCG Contractors Contact Form <${fromEmail}>`,
      to: toEmail,
      replyTo,
      subject: emailSubject,
      text: plainTextBody,
      html: htmlBody,
    });

    console.log('Contact form email sent', {
      messageId: result.messageId,
      accepted: result.accepted,
      rejected: result.rejected,
      envelope: result.envelope,
      toEmail,
      fromEmail,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown email sending error';
    console.error('Contact form email error:', error);

    if (errorMessage.includes('535-5.7.8') || errorMessage.toLowerCase().includes('badcredentials')) {
      return NextResponse.json(
        {
          error:
            'Email authentication failed. Use a Gmail App Password (not your normal Gmail password) in SMTP_PASS.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Unable to send your message right now. Please try again shortly.' },
      { status: 500 }
    );
  }
}
