import { ReactNode } from 'react';
import Header from './_/components/Header';
import Sidebar from './_/components/Sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'داشبورد',
  },
};

export default function UserProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 max-h-screen gap-x-3 bg-secondary-0 overflow-hidden">
      <aside className="hidden lg:flex lg:col-span-3 2xl:col-span-2 max-h-screen flex-col justify-between p-6">
        <Sidebar />
      </aside>

      <div className="col-span-full lg:col-span-9 2xl:col-span-10 h-screen flex flex-col">
        <Header />
        <main className="bg-secondary-100 p-8 flex-1 lg:rounded-tr-3xl overflow-y-auto drop-shadow-xl shadow-secondary-500">
          {children}
        </main>
      </div>
    </div>
  );
}
