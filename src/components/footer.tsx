import { DraftingCompass } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 md:px-8 md:py-8 border-t">
      <div className="container flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Alif Fauzan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
