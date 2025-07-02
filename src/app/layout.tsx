import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'Alif Fauzan | Drafter Engineer',
  description: 'A dedicated Drafter Engineer with over a decade of experience since 2014, specializing in high-risk building construction and transforming complex designs into precise, actionable blueprints.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "font-body antialiased",
        fontBody.variable,
        fontHeadline.variable
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
