
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="text-center mb-12">
           <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium mb-4">About Me</div>
           <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Bridging Design and Construction</h2>
        </div>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:order-last">
              <Image
                src="https://placehold.co/300x300.png"
                alt="Rendianto Priadi"
                width={300}
                height={300}
                className="rounded-full object-cover shadow-lg w-48 h-48 md:w-64 md:h-64"
                data-ai-hint="portrait professional"
              />
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-xl/relaxed">
              A dedicated Drafter Engineer since 2014, I specialize in transforming complex designs into precise, actionable blueprints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
