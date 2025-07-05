'use client';

import { CookieBanner } from './cookie-banner';
import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-6 md:py-8 border-t mt-12">
      <div className="container flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear || new Date().getFullYear()} Alif Fauzan. All rights reserved.
          </p>
        </div>
      </div>
      <CookieBanner />
    </footer>
  );
}
