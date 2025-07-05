'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Contact Me</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-xl/relaxed">
            Have a project in mind or just want to say hello? I would love to hear from you.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4">
           <Button asChild size="lg" variant="accent">
            <Link href="mailto:rendianto.priadi@example.com">
              Send an Email
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground">
            Please replace the placeholder email with your actual email address.
          </p>
        </div>
      </div>
    </section>
  );
}
