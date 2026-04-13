import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShiftC — CRM & IA | Experts Salesforce & Dynamics 365',
  description:
    'ShiftC est un collectif de consultants seniors spécialisés CRM et IA. Experts Salesforce et Microsoft Dynamics 365. Projets grands comptes, adoption CRM, agents IA.',
  keywords: [
    'CRM', 'Salesforce', 'Dynamics 365', 'consultant CRM', 'intégration CRM',
    'agent IA', 'adoption CRM', 'grands comptes', 'ShiftC',
  ],
  openGraph: {
    title: 'ShiftC — Cabinet CRM & IA',
    description: 'Consultants seniors CRM, augmentés par l\'IA.',
    url: 'https://shiftc.fr',
    siteName: 'ShiftC',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
