import type { Metadata } from 'next';
import { headingFont, bodyFont, monoFont } from '@/lib/fonts';
import ClientLayout from '@/components/layout/ClientLayout';
import CartDrawer from '@/components/shared/CartDrawer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'THREADLAB — A Global Hub for Fashion Manufacturing in 3D',
  description: 'THREADLAB is the premier digital fashion hub connecting global manufacturing with 3D design and innovation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="bg-black text-white overflow-x-hidden antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
        <CartDrawer />
      </body>
    </html>
  );
}
