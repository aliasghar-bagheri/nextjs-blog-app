import localFont from 'next/font/local';

// Vazir font
export const vazirFont = localFont({
  src: [
    {
      path: '../../public/assets/fonts/vazir/Vazir-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../../public/assets/fonts/vazir/Vazir-Medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts/vazir/Vazir.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/vazir/Vazir-Light.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts/vazir/Vazir-Thin.woff2',
      style: 'normal',
      weight: '100',
    },
  ],
  display: 'block',
  style: 'normal',
  variable: '--font-vazir',
});
