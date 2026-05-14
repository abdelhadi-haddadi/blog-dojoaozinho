import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import Script from 'next/script';

const SITE_URL = 'https://blog-dojoaozinho.vercel.app'; // ← update to your real domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Blog do Joãozin',
    template: '%s | Blog do Joãozin',
  },
  description:
    'Blog sobre tecnologia, programação, Linux e desenvolvimento web. Tutoriais e guias práticos atualizados regularmente.',
  keywords: ['linux', 'programação', 'react', 'docker', 'tecnologia', 'tutoriais'],
  authors: [{ name: 'Joãozin' }],
  creator: 'Joãozin',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Blog do Joãozin',
    title: 'Blog do Joãozin',
    description:
      'Blog sobre tecnologia, programação, Linux e desenvolvimento web.',
    images: [{ url: '/LGO.png', width: 512, height: 512, alt: 'Blog do Joãozin' }],
  },
  twitter: {
    card: 'summary',
    title: 'Blog do Joãozin',
    description: 'Blog sobre tecnologia, programação, Linux e desenvolvimento web.',
    images: ['/LGO.png'],
  },
  icons: {
    icon: '/LGO.avif',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/*
          AdSense: replace ca-pub-XXXXXXXXXX with your publisher ID.
          Keep this script here even before approval — Google requires it
          to verify site ownership.
        */}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
