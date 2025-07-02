'use client';

import { Code2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">KreasiVista</span>
          </Link>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            <Link
              href="#projects"
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
