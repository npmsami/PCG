'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = 'en';

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'language.english': 'English',
    'language.spanish': 'Spanish',
    
    // Hero Section
    'hero.title.line1': 'Restore Your Roof',
    'hero.title.line2': 'Restore Your Peace of Mind',
    'hero.description': 'Roof damage can be overwhelming, but it doesn\'t have to be. At PCG, we prioritize your family\'s safety by efficiently restoring your roof and managing the repair process.',
    'hero.cta': 'Book an Appointment',
    
    // Process Section
    'process.title': 'Our Process',
    'process.subtitle': 'Simple, Effective, and Hassle-Free',
    'process.step1.title': 'Free Inspection',
    'process.step1.description': 'We thoroughly examine your roof for damage and determine if you qualify for an insurance claim.',
    'process.step2.title': 'Insurance Claim',
    'process.step2.description': 'Our experts handle the entire insurance claim process, ensuring maximum coverage for your roof repair.',
    'process.step3.title': 'Quality Restoration',
    'process.step3.description': 'Our skilled team efficiently restores your roof using premium materials and expert craftsmanship.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Professional Roofing Solutions',
    'services.residential.title': 'Residential Roofing',
    'services.residential.description': 'Protect your home with our expert residential roofing services, from repairs to complete replacements.',
    'services.commercial.title': 'Commercial Roofing',
    'services.commercial.description': 'Minimize business disruption with our efficient commercial roofing solutions.',
    'services.insurance.title': 'Insurance Claims',
    'services.insurance.description': 'We handle the entire insurance claim process to ensure you receive maximum coverage.',
    'services.emergency.title': 'Emergency Repairs',
    'services.emergency.description': 'Fast response to urgent roof damage to prevent further issues with your property.',
    
    // Stats Section
    'stats.years': 'Years of Experience',
    'stats.projects': 'Projects Completed',
    'stats.insurance': 'Insurance Approval Rate',
    'stats.satisfaction': 'Customer Satisfaction',
    
    // Testimonials Section
    'testimonials.title': 'Customer Testimonials',
    'testimonials.subtitle': 'Hear what our satisfied customers have to say about their experience with PCG Roofing services.',
    'testimonials.1.quote': 'Insurance approved my claim fast, and PCG had my roof done in a week. I paid $0.',
    'testimonials.1.name': 'Maria G.',
    'testimonials.1.location': 'Homeowner, San Antonio',
    'testimonials.2.quote': 'They explained everything clearly and handled all the insurance headaches. Highly recommend.',
    'testimonials.2.name': 'Ken R.',
    'testimonials.2.location': 'Homeowner, San Antonio',
    'testimonials.3.quote': 'PCG Roofing made the entire process stress-free and quick!',
    'testimonials.3.name': 'John D.',
    'testimonials.3.location': 'Business Owner, Local',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.1.question': 'Do I really pay $0?',
    'faq.1.answer': 'Yes, if your claim is approved, the insurance covers the entire cost of the repairs. You won\'t pay anything out of pocket. We handle all the paperwork to ensure a smooth process.',
    'faq.2.question': 'What if my claim is denied?',
    'faq.2.answer': 'If your claim is denied, we will provide you with a clear explanation of your options. Our team will offer a fair quote for the necessary repairs. We are committed to helping you navigate the situation.',
    'faq.3.question': 'How fast is the process?',
    'faq.3.answer': 'Typically, most roofs are restored within 1 to 2 weeks after your claim is approved. Our efficient process ensures minimal disruption to your home. We prioritize getting your roof repaired quickly and effectively.',
    'faq.4.question': 'Are you licensed and insured?',
    'faq.4.answer': 'Absolutely! PCG Roofing is fully licensed and insured. With over 15 years of experience, we are a trusted name in the San Antonio area.',
    'faq.5.question': 'Still have questions?',
    'faq.5.answer': 'We\'re here to help you.',
    
    // CTA Section
    'cta.title': 'Ready to Get Started?',
    'cta.description': 'Contact us today for a free roof inspection.',
    'cta.button': 'Book an Appointment',
    
    // Footer
    'footer.company': 'PCG Roofing',
    'footer.contact.title': 'Contact',
    'footer.address': '123 Roofing Way, San Antonio, TX 78201',
    'footer.phone': '(210) 555-1234',
    'footer.email': 'info@pcgroofing.com',
    'footer.hours.title': 'Hours',
    'footer.hours.weekdays': 'Monday-Friday: 8am - 6pm',
    'footer.hours.weekends': 'Saturday: 9am - 2pm',
    'footer.hours.closed': 'Sunday: Closed',
    'footer.links.title': 'Links',
    'footer.links.home': 'Home',
    'footer.links.about': 'About Us',
    'footer.links.services': 'Services',
    'footer.links.testimonials': 'Testimonials',
    'footer.links.faq': 'FAQ',
    'footer.copyright': '© 2025 PCG Roofing. All rights reserved.',
    
    // 404 Page
    'notFound.title': 'Page Not Found',
    'notFound.message': 'The page you are looking for doesn\'t exist or has been moved.',
    'notFound.button': 'Back to Home'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.testimonials': 'Testimonios',
    'nav.faq': 'Preguntas Frecuentes',
    'language.english': 'Inglés',
    'language.spanish': 'Español',
    
    // Hero Section
    'hero.title.line1': 'Restaura Tu Techo',
    'hero.title.line2': 'Restaura Tu Tranquilidad',
    'hero.description': 'Los daños en el techo pueden ser abrumadores, pero no tiene por qué ser así. En PCG, priorizamos la seguridad de su familia restaurando eficientemente su techo y gestionando el proceso de reparación.',
    'hero.cta': 'Reservar una Cita',
    
    // Process Section
    'process.title': 'Nuestro Proceso',
    'process.subtitle': 'Simple, Efectivo y Sin Complicaciones',
    'process.step1.title': 'Inspección Gratuita',
    'process.step1.description': 'Examinamos minuciosamente su techo en busca de daños y determinamos si califica para un reclamo de seguro.',
    'process.step2.title': 'Reclamo de Seguro',
    'process.step2.description': 'Nuestros expertos manejan todo el proceso de reclamo de seguro, asegurando la máxima cobertura para la reparación de su techo.',
    'process.step3.title': 'Restauración de Calidad',
    'process.step3.description': 'Nuestro equipo especializado restaura eficientemente su techo utilizando materiales de primera calidad y artesanía experta.',
    
    // Services Section
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones Profesionales de Techado',
    'services.residential.title': 'Techado Residencial',
    'services.residential.description': 'Proteja su hogar con nuestros servicios expertos de techado residencial, desde reparaciones hasta reemplazos completos.',
    'services.commercial.title': 'Techado Comercial',
    'services.commercial.description': 'Minimice la interrupción del negocio con nuestras eficientes soluciones de techado comercial.',
    'services.insurance.title': 'Reclamaciones de Seguros',
    'services.insurance.description': 'Nos encargamos de todo el proceso de reclamación del seguro para garantizar que reciba la máxima cobertura.',
    'services.emergency.title': 'Reparaciones de Emergencia',
    'services.emergency.description': 'Respuesta rápida a daños urgentes en el techo para prevenir problemas adicionales en su propiedad.',
    
    // Stats Section
    'stats.years': 'Años de Experiencia',
    'stats.projects': 'Proyectos Completados',
    'stats.insurance': 'Tasa de Aprobación de Seguros',
    'stats.satisfaction': 'Satisfacción del Cliente',
    
    // Testimonials Section
    'testimonials.title': 'Testimonios de Clientes',
    'testimonials.subtitle': 'Escuche lo que nuestros clientes satisfechos tienen que decir sobre su experiencia con los servicios de PCG Roofing.',
    'testimonials.1.quote': 'El seguro aprobó mi reclamación rápidamente, y PCG terminó mi techo en una semana. Pagué $0.',
    'testimonials.1.name': 'María G.',
    'testimonials.1.location': 'Propietaria, San Antonio',
    'testimonials.2.quote': 'Explicaron todo claramente y se encargaron de todos los dolores de cabeza del seguro. Muy recomendable.',
    'testimonials.2.name': 'Ken R.',
    'testimonials.2.location': 'Propietario, San Antonio',
    'testimonials.3.quote': '¡PCG Roofing hizo que todo el proceso fuera rápido y sin estrés!',
    'testimonials.3.name': 'Juan D.',
    'testimonials.3.location': 'Dueño de Negocio, Local',
    
    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.1.question': '¿Realmente pago $0?',
    'faq.1.answer': 'Sí, si su reclamación es aprobada, el seguro cubre el costo total de las reparaciones. No pagará nada de su bolsillo. Nos encargamos de todo el papeleo para garantizar un proceso sin problemas.',
    'faq.2.question': '¿Qué pasa si mi reclamación es denegada?',
    'faq.2.answer': 'Si su reclamación es denegada, le proporcionaremos una explicación clara de sus opciones. Nuestro equipo le ofrecerá un presupuesto justo para las reparaciones necesarias. Estamos comprometidos a ayudarle a navegar por la situación.',
    'faq.3.question': '¿Qué tan rápido es el proceso?',
    'faq.3.answer': 'Típicamente, la mayoría de los techos se restauran dentro de 1 a 2 semanas después de que su reclamación es aprobada. Nuestro eficiente proceso asegura una mínima interrupción en su hogar. Priorizamos la reparación rápida y efectiva de su techo.',
    'faq.4.question': '¿Están licenciados y asegurados?',
    'faq.4.answer': '¡Absolutamente! PCG Roofing está completamente licenciado y asegurado. Con más de 15 años de experiencia, somos un nombre de confianza en el área de San Antonio.',
    'faq.5.question': '¿Todavía tiene preguntas?',
    'faq.5.answer': 'Estamos aquí para ayudarle.',
    
    // CTA Section
    'cta.title': '¿Listo para Comenzar?',
    'cta.description': 'Contáctenos hoy para una inspección gratuita de su techo.',
    'cta.button': 'Reservar una Cita',
    
    // Footer
    'footer.company': 'PCG Roofing',
    'footer.contact.title': 'Contacto',
    'footer.address': '123 Roofing Way, San Antonio, TX 78201',
    'footer.phone': '(210) 555-1234',
    'footer.email': 'info@pcgroofing.com',
    'footer.hours.title': 'Horario',
    'footer.hours.weekdays': 'Lunes-Viernes: 8am - 6pm',
    'footer.hours.weekends': 'Sábado: 9am - 2pm',
    'footer.hours.closed': 'Domingo: Cerrado',
    'footer.links.title': 'Enlaces',
    'footer.links.home': 'Inicio',
    'footer.links.about': 'Nosotros',
    'footer.links.services': 'Servicios',
    'footer.links.testimonials': 'Testimonios',
    'footer.links.faq': 'Preguntas Frecuentes',
    'footer.copyright': '© 2025 PCG Roofing. Todos los derechos reservados.',
    
    // 404 Page
    'notFound.title': 'Página No Encontrada',
    'notFound.message': 'La página que estás buscando no existe o ha sido movida.',
    'notFound.button': 'Volver al Inicio'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [isMounted, setIsMounted] = useState(false);

  // Load language preference from localStorage on component mount
  useEffect(() => {
    setIsMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('language', language);
    }
  }, [language, isMounted]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};