import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { Rubik, Tajawal, Anton, Caveat, Paytone_One, Inter } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-rubik',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-caveat',
  display: 'swap',
});

const paytone_one = Paytone_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-paytone-one',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          },
        );
      });
    }
  }, []);

  return (
    <LanguageProvider>
      <div
        className={`${rubik.variable} ${tajawal.variable} ${anton.variable} ${caveat.variable} ${paytone_one.variable} ${inter.variable}`}
      >
<<<<<<< Updated upstream
        {/* Video Background - Fixed for all pages */}
=======
        {/* Video Background - Direct video tag for better performance */}
>>>>>>> Stashed changes
        <div className="site-bg">
          <video
            className="site-bg-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source 
<<<<<<< Updated upstream
              src="https://ik.imagekit.io/kq7rvhenqr/Untitled-%D9%A2%D9%A0%D9%A2%D9%A5-%D9%A0%D9%A9-%D9%A1%D9%A8%20%D9%A0%D9%A8%20%D9%A3%D9%A3%20%D9%A0%D9%A2(copy)-2.mp4" 
=======
              src="https://ik.imagekit.io/kq7rvhenqr/Untitled-%D9%A2%D9%A0%D9%A2%D9%A5-%D9%A0%D9%A5-%D9%A1%D9%A8%20%D9%A0%D9%A8%20%D9%A3%D9%A3%20%D9%A0%D9%A2(copy)-2.mp4" 
>>>>>>> Stashed changes
              type="video/mp4" 
            />
          </video>
          <div className="site-bg-overlay"></div>
        </div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </LanguageProvider>
  );
}

export default MyApp;
