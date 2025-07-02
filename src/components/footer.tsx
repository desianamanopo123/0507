import { Code2, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 md:px-8 md:py-8 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <p className="text-sm font-medium text-muted-foreground">
            &copy; {currentYear} KreasiVista. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-foreground">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
