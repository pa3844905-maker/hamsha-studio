import './globals.css';
import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300','400','600','700','800'],
  variable: '--font-plus'
});

export const metadata = {
  title: 'Hamsha Studio — Crafting Digital Experiences That Inspire.',
  description: 'Luxury digital agency — branding, Shopify, WordPress, and premium web design.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable}`}>
      <body className="bg-primaryBg text-text antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
