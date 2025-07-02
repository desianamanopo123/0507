'use client';

import { DraftingCompass } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <DraftingCompass className="h-6 w-6" />
            <span className="font-bold">Alif Fauzan</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            <Link
              href="#about"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-primary text-foreground/80"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
