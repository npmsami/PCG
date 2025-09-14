import './globals.css'
import { Roboto, Open_Sans } from 'next/font/google'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import SplashScreen from './components/SplashScreen'
import { LanguageProvider } from './context/LanguageContext'

// Optimize font loading
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

export const metadata = {
  title: 'PCG Roofing - Restore Your Peace of Mind',
  description: 'Professional roofing services with quality craftsmanship and reliable solutions.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const themeColor = '#E04826'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetching for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//api.builder.io" />
        
        {/* Critical CSS inline to prevent FOUC */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical CSS for immediate rendering */
          :root {
            --primary-orange: #E04826;
            --black: #000;
            --white: #FFF;
            --dark-gray: #323232;
            --border-gray: #4B4949;
            --font-roboto: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            --font-open-sans: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            --container-max-width: 1280px;
            --section-padding: 112px;
            --page-padding: 64px;
            --border-radius-large: 66px;
            --border-radius-medium: 46px;
            --border-radius-small: 25px;
          }
          
          * { box-sizing: border-box; padding: 0; margin: 0; }
          
          html, body {
            max-width: 100vw;
            overflow-x: hidden;
            font-family: var(--font-roboto);
            color: var(--black);
            background: var(--white);
          }
          
          .container {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: 0 var(--page-padding);
          }
          
          @media (max-width: 390px) {
            :root {
              --section-padding: 40px;
              --page-padding: 16px;
            }
          }
          
          .section { padding: var(--section-padding) 0; }
          
          /* Prevent layout shift */
          img { max-width: 100%; height: auto; }
          
          /* Smooth scrolling */
          html { scroll-behavior: smooth; }
        `}} />
        
        {/* Performance meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={roboto.className}>
        <PerformanceOptimizer />
        <SplashScreen />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
