This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, create a `.env.local` file in the root directory with the following environment variables (optional, defaults are shown):

```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
AUTH_SECRET=your-secret-key-change-in-production
```

**Important:** Change these values in production for security!

Now, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The root path will redirect to `/admin`, and you will be redirected to the login page if not authenticated.

## Dashboard Location

The admin dashboard is accessible at:
- **Production**: `https://pcgroofing.net/admin`
- **Development**: `http://localhost:3000/admin`

## Authentication

This dashboard requires admin authentication:
- **Login Page**: `/login`
- **Dashboard**: `/admin` (protected route)
- **Default Credentials**: 
  - Username: `admin`
  - Password: `admin123`
- Change credentials by setting `ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables
- Sessions last 7 days
- All routes except `/login` and `/api/auth/*` are protected

## Netlify Deployment

**Configuration**: When deploying to Netlify:

1. **Publish Directory**: Set in `netlify.toml` to `.next`
   - The `netlify.toml` file already has `publish = ".next"` configured
   - **DO NOT** override this in the Netlify UI - leave it empty or match `.next`
   - The `@netlify/plugin-nextjs` processes the `.next` directory and creates the final deployment

2. **The `@netlify/plugin-nextjs` automatically handles**:
   - Processing the `.next` build output
   - Function routing and serverless functions
   - Static file serving

3. **If deployment fails**:
   - Ensure Netlify UI "Publish directory" is either empty or set to `.next`
   - Clear build cache and redeploy
   - Check that `netlify.toml` has `publish = ".next"` set

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
