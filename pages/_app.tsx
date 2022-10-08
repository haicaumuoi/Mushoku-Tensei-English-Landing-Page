import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DashboardLayout from '../components/DashboardLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeError', (e) => setLoading(false));
    router.events.on('routeChangeStart', (e) => setLoading(false));
    router.events.on('routeChangeComplete', (e) =>
      setTimeout(() => {
        setLoading(true);
      }, 3000)
    );

    return () => {
      router.events.off('routeChangeError', (e) => setLoading(false));
      router.events.off('routeChangeStart', (e) => setLoading(false));
      router.events.off('routeChangeComplete', (e) =>
        setTimeout(() => {
          setLoading(true);
        }, 3000)
      );
    };
  });

  return () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  };
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </>
  );
}

export default MyApp;
