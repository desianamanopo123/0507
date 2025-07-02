import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero" className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex flex-col items-start gap-4 text-left">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline">
          Welcome to KreasiVista
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          A passionate developer showcasing innovative projects and a commitment to clean, efficient code. Explore my work and see how I can bring your ideas to life.
        </p>
      </div>
      <div className="flex justify-start gap-4">
        <Button asChild size="lg">
          <Link href="#projects">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="relative mx-auto mt-12 w-full max-w-5xl">
        <div className="aspect-video w-full rounded-xl bg-muted shadow-lg overflow-hidden">
           <Image
            src="https://placehold.co/1280x720.png"
            alt="Portfolio Highlight"
            width={1280}
            height={720}
            className="rounded-xl object-cover w-full h-full"
            data-ai-hint="abstract developer"
            priority
          />
        </div>
        <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/20 -z-10 animate-blob animation-delay-2000" />
        <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-accent/20 -z-10 animate-blob" />
      </div>
    </section>
  );
}
