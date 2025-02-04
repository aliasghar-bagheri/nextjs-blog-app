import type { Metadata } from 'next';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/globals.css';
import { vazirFont } from '@/constants/font';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from 'react-hot-toast';
import { TanstackQueryProvider } from '@/lib/tanstack-query/config';
import { ThemeProvider } from '@/context/theme/ThemeProvider';

export const metadata: Metadata = {
  title: {
    template: '%s | دیجی نیوز',
    default: 'دیجی نیوز | وبلاگی پر از مطالب بروز در حوزه ی تکنولوژی',
  },
  description:
    'دیجی نیوز یک وبلاگ برای خواندن و نوشتن و به اشتراک گذاشتن مطالب در حوزه ی تکنولوژی هست',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
    >
      <body className={`${vazirFont.variable} font-sans antialiased`}>
        <TanstackQueryProvider>
          <ThemeProvider>
            <AuthProvider>
              {children}
              <Toaster
                toastOptions={{
                  style: {
                    background: 'hsl(var(--secondary-100))',
                    color: 'hsl(var(--secondary-700))',
                  },
                }}
              />
            </AuthProvider>
          </ThemeProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
