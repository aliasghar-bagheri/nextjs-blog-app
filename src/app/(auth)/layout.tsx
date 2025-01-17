import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen py-10 px-5 flex items-center justify-center">{children}</div>;
}
