'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Cookie } from 'lucide-react';

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') {
    return undefined;
  }
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}

function setCookie(name: string, value: string, days: number) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}


export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('cookie_consent', 'true', 365);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="container mx-auto p-4">
          <div className="bg-secondary text-secondary-foreground p-3 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Cookie className="h-6 w-6 shrink-0" />
              <p className="text-sm">
                We use cookies to enhance your user experience.
              </p>
            </div>
            <Button onClick={handleAccept} size="sm">
              Accept
            </Button>
          </div>
      </div>
    </div>
  );
}
