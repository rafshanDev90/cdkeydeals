import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'CDKeyDeals - Best Deals on Game Keys & Software',
  description: 'Get the best deals on game keys, software licenses, gift cards and more. Instant delivery, secure payments, 24/7 support.',
  keywords: 'game keys, software keys, gift cards, steam keys, xbox keys, playstation keys, windows keys, office keys',
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-[#1a1a1a]" suppressHydrationWarning>
        <div className="min-h-screen bg-white">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
