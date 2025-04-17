
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router'; // or 'next/router' if using pages/

export default function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Smooth scroll
        });
      }, 50); // 🔥 Small 50ms delay to fix mobile issue
    };

    router.events?.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return null;
}
