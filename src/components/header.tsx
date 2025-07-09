'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Header() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center">
            <span className="font-bold">Rendianto Priadi</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-4">
                  <Link href="/" className="mb-4 flex items-center">
                     <span className="font-bold">Rendianto Priadi</span>
                  </Link>
                  <nav className="grid gap-2">
                    {navLinks.map(link => (
                      <SheetClose key={link.href} asChild>
                        <Link
                          href={link.href}
                          className="flex w-full items-center py-2 text-lg font-semibold"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
