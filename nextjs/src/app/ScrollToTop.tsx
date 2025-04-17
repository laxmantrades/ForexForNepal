
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // or 'next/router' if using pages/

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
    handleRouteChange()

   
  }, [router]);

  return null;
}
