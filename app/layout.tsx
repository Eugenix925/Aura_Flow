import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
title: 'Aura Flow | AI Workplace Productivity Assistant',
    description: 'Aura Flow helps professionals draft emails, summarize meetings, and plan tasks with practical AI assistance.',
  generator: 'v0.app',
  keywords: 'AI, workplace productivity, email generator, meeting notes, task planner, automation',
  authors: [{ name: 'AI Skills Accelerator' }],
  openGraph: {
title: 'Aura Flow | AI Workplace Productivity Assistant',
    description: 'Automate your workplace productivity with intelligent email generation, meeting summarization, and smart task planning powered by AI.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
