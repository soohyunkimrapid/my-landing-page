import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI START - 인공지능 개발자 양성 과정',
  description: '인공지능 개발자가 되고 싶으신가요? AI START와 함께 실무 중심의 AI 개발 실력을 키워보세요.',
  keywords: '인공지능, AI, 개발자, 교육, 부트캠프, 코딩, 프로그래밍, 머신러닝',
  authors: [{ name: '김수현' }],
  openGraph: {
    title: 'AI START - 인공지능 개발자 양성 과정',
    description: '인공지능 개발자가 되고 싶으신가요? AI START와 함께 실무 중심의 AI 개발 실력을 키워보세요.',
    url: 'https://aistart.store',
    siteName: 'AI START',
    images: [
      {
        url: 'https://aistart.store/og-image.jpg', // 오픈그래프 이미지 추가 필요
        width: 1200,
        height: 630,
        alt: 'AI START 로고 이미지',
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI START - 인공지능 개발자 양성 과정',
    description: '인공지능 개발자가 되고 싶으신가요? AI START와 함께 실무 중심의 AI 개발 실력을 키워보세요.',
    images: ['https://aistart.store/og-image.jpg'], // 트위터 카드 이미지
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://aistart.store',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics - 표준 코드를 Next.js 방식으로 변환 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3GSC5W5P3Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3GSC5W5P3Z');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
