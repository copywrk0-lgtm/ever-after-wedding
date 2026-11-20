import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://ever-after-wedding.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Ever After Weddings — Thoughtful Wedding Planning & Design', template: '%s — Ever After Weddings' },
  description: 'Thoughtful wedding planning and design for celebrations in Mumbai, Bahrain and beyond.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Ever After Weddings',
    title: 'Ever After Weddings — Thoughtful Wedding Planning & Design',
    description: 'Thoughtful wedding planning and design for celebrations in Mumbai, Bahrain and beyond.',
    images: [{ url: '/images/0001-779fed9f.webp', width: 1200, height: 1600, alt: 'Ever After wedding celebration' }],
  },
  twitter: { card: 'summary_large_image', title: 'Ever After Weddings', description: 'Thoughtful wedding planning and design for celebrations in Mumbai, Bahrain and beyond.', images: ['/images/0001-779fed9f.webp'] },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
