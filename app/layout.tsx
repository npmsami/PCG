import './globals.css'
import { LanguageProvider } from './context/LanguageContext'

export const metadata = {
  title: 'PCG Roofing',
  description: 'Professional roofing services and insurance claim assistance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
