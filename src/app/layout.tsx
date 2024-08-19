import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from '@vercel/analytics/react';

import { Providers } from '@/app/providers';
import Navbar from '@/partials/app-partials/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FlipKart',
  description: 'All the products listing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NextTopLoader />
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
