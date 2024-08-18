import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import Navbar from '@/partials/app-partials/navbar';
import { Analytics } from '@vercel/analytics/react';

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
        <NextTopLoader />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
