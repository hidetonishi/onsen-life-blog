// import type { Metadata } from 'next';
// // import Script from 'next/script';
// import './globals.css';
// import Header from '@/_components/Header';
// import { GTM } from '@/_components/GTM';

// export const metadata: Metadata = {
//   metadataBase: new URL(process.env.BASE_URL as string),
//   title: {
//     template: '%s｜公式メディアテンプレート',
//     default: '公式メディアテンプレート',
//   },
//   description: 'Next.js製のメディア向けスケルトンテンプレートです',
//   openGraph: {
//     title: '公式メディアテンプレート',
//     description: 'Next.js製のメディア向けスケルトンテンプレートです',
//     type: 'website',
//     images: '/ogp.png',
//   },
//   twitter: {
//     card: 'summary_large_image',
//   },
//   alternates: {
//     canonical: '/',
//   },
// };

// const isProduction: boolean = process.env.NODE_ENV === 'production';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="ja">
//       {/* {isProduction && (
//         <Script
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000"
//           crossOrigin="anonymous"
//         />
//       )} */}
//       {isProduction && <GTM />}
//       <body>
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata } from 'next';
import './globals.css';
import { GTM } from '@/_components/GTM';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: {
    template: '%s｜Onsen Life Blog',
    default: 'Onsen Life Blog',
  },
  description: '全国の温泉を楽しむあなたのためのブログメディア。',
  openGraph: {
    title: 'Onsen Life Blog',
    description: '全国の温泉を楽しむあなたのためのブログメディア。',
    type: 'website',
    images: '/ogp.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
  },
};

const isProduction: boolean = process.env.NODE_ENV === 'production';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      {isProduction && <GTM />}
      <body className="bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}
