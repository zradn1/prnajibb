import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const sans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const serif = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://prnajib.vercel.app'),
  title: 'Pr Najeb Youssef | Chirurgien orthopédiste à Casablanca',
  description:
    'Pr Najeb Youssef, chirurgien orthopédiste et traumatologue à Aïn Sebaâ, Casablanca. Pathologies articulaires, traumatiques et sportives.',
  applicationName: 'Pr Najeb Youssef',
  keywords: [
    'Pr Najeb Youssef',
    'chirurgien orthopédiste Casablanca',
    'traumatologue Aïn Sebaâ',
    'prothèse genou Casablanca',
    'chirurgie orthopédique',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://prnajib.vercel.app/',
    siteName: 'Pr Najeb Youssef',
    title: 'Pr Najeb Youssef — Chirurgien orthopédiste à Casablanca',
    description:
      'Retrouver le mouvement. Retrouver la liberté. Chirurgie orthopédique et traumatologie à Aïn Sebaâ, Casablanca.',
    images: [{ url: '/cabinet/5.jpg', width: 1080, height: 810, alt: 'Espace patients du cabinet Pr Najeb Youssef' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pr Najeb Youssef | Orthopédie à Casablanca',
    description: 'Chirurgien orthopédiste et traumatologue à Aïn Sebaâ, Casablanca.',
    images: ['/cabinet/5.jpg'],
  },
  icons: {
    icon: [
      { url: '/logo-mark-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/logo-mark-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/logo-mark-48.png',
    apple: [{ url: '/logo-mark-192.png', sizes: '192x192' }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  formatDetection: { telephone: true, email: true, address: true },
  category: 'health',
}

export const viewport: Viewport = {
  themeColor: '#F5F6F3',
  width: 'device-width',
  initialScale: 1,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': 'https://prnajib.vercel.app/#physician',
      name: 'Pr Najeb Youssef',
      medicalSpecialty: ['Orthopedic', 'Traumatologic'],
      description:
        'Chirurgien orthopédiste et traumatologue à Casablanca. Pathologies articulaires, traumatiques et sportives.',
      telephone: '+212665247995',
      email: 'youssefnajeb@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Angle Bd Chefchaouni & Rue Abdelhamid Ibn Badis, Résidence Robert B, RDC, Bureau 2',
        addressLocality: 'Casablanca',
        postalCode: '20250',
        addressCountry: 'MA',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 33.6076, longitude: -7.5366 },
      openingHours: ['Mo-Fr 09:00-19:00', 'Sa 09:00-13:00'],
      image: 'https://prnajib.vercel.app/cabinet/5.jpg',
      url: 'https://prnajib.vercel.app/',
      hasMap: 'https://maps.app.goo.gl/kspc5B2zU7YjAfBHA',
      sameAs: ['https://instagram.com/cabinet_pr_najeb_youssef'],
      worksFor: { '@id': 'https://prnajib.vercel.app/#clinic' },
      logo: 'https://prnajib.vercel.app/logo-pr-najeb-youssef.png',
    },
    {
      '@type': 'MedicalClinic',
      '@id': 'https://prnajib.vercel.app/#clinic',
      name: 'Cabinet Pr Najeb Youssef',
      medicalSpecialty: ['Orthopedic', 'Traumatologic'],
      telephone: '+212665247995',
      email: 'youssefnajeb@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Angle Bd Chefchaouni & Rue Abdelhamid Ibn Badis, Résidence Robert B, RDC, Bureau 2',
        addressLocality: 'Casablanca',
        postalCode: '20250',
        addressCountry: 'MA',
      },
      openingHours: ['Mo-Fr 09:00-19:00', 'Sa 09:00-13:00'],
      hasMap: 'https://maps.app.goo.gl/kspc5B2zU7YjAfBHA',
      geo: { '@type': 'GeoCoordinates', latitude: 33.6076, longitude: -7.5366 },
      image: 'https://prnajib.vercel.app/cabinet/1.jpg',
      logo: 'https://prnajib.vercel.app/logo-pr-najeb-youssef.png',
      sameAs: ['https://instagram.com/cabinet_pr_najeb_youssef'],
      employee: { '@id': 'https://prnajib.vercel.app/#physician' },
      url: 'https://prnajib.vercel.app/',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://prnajib.vercel.app/#website',
      url: 'https://prnajib.vercel.app/',
      name: 'Pr Najeb Youssef',
      inLanguage: 'fr',
      publisher: { '@id': 'https://prnajib.vercel.app/#clinic' },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  )
}
