import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { AOSInit } from '../../utils/aos';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { CookiesProvider } from 'next-client-cookies/server';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/vi';

dayjs.locale('vi');
dayjs.extend(relativeTime);

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movie',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-saira-condensed">
      <AOSInit />
      <body className={inter.className}>
        <AntdRegistry>
          <CookiesProvider>
            <Header />
            {children}
            <Footer />
          </CookiesProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
