import type { Metadata } from 'next';
import { Syne, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SEHYUN ICT — 세현아이씨티',
  description:
    '세현아이씨티는 SI 개발·GIS 솔루션·IT 컨설팅 전문 기업입니다. 고객의 문제를 정확히 이해하고, 최적의 기술로 해결합니다.',
  keywords: ['SI', 'GIS', 'IT컨설팅', '시스템통합', '세현아이씨티', 'SmartGeoKit'],
  openGraph: {
    title: 'SEHYUN ICT — 세현아이씨티',
    description: 'SI 개발·GIS 솔루션·IT 컨설팅 전문 기업',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${syne.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
