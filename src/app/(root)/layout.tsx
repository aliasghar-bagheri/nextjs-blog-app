import { ReactNode } from 'react';
import Header from '@/components/shared/Header/Header';
import Footer from '@/components/shared/Footer/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="container min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
