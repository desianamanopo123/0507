
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Contact } from '@/components/sections/contact';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Preloader } from '@/components/preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the preloader after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 second delay

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
