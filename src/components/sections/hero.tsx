import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero" className="relative flex h-[calc(100vh-56px)] flex-col items-center justify-center text-center">
      <div className="container flex flex-col items-center gap-6">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Alif Fauzan
        </h1>
        <p className="max-w-[700px] text-lg text-foreground/80 sm:text-xl">
          A dedicated Drafter Engineer with over a decade of experience, transforming complex designs into precise, actionable blueprints for high-risk building construction since 2014.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/alif-fauzan-cv.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10">
        <Link href="#about" aria-label="Scroll to next section">
          <ArrowDown className="h-8 w-8 animate-bounce text-foreground/50 hover:text-primary" />
        </Link>
      </div>
    </section>
  );
}
