import type { Metadata, Viewport } from 'next'
import './globals.css'

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
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#F4F7F6',
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
      url: 'https://prnajib.vercel.app/',
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  )
}
