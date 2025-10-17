'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const countryLocales: Record<string, string> = {
  usa: 'en-US',
  uk: 'en-GB',
  ca: 'en-CA',
};

export default function LangAttribute() {
  const pathname = usePathname();

  useEffect(() => {
    // Extract country from pathname
    const pathParts = pathname?.split('/') || [];
    const country = pathParts[pathParts.length - 1];
    
    // Get locale for the country
    const locale = countryLocales[country.toLowerCase()];
    
    // Update html lang attribute if we have a valid locale
    if (locale && typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    } else if (typeof document !== 'undefined') {
      document.documentElement.lang = 'en';
    }
  }, [pathname]);

  return null;
}

