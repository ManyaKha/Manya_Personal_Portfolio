import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: './HelveticaNeue-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './HelveticaNeue-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './HelveticaNeue-Roman.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './HelveticaNeue-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './HelveticaNeue-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});
