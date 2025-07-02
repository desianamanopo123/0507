import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
           <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium mb-4">About Me</div>
           <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Bridging Design and Construction</h2>
        </div>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center lg:order-last">
              <Image
                src="https://placehold.co/250x250.png"
                alt="Alif Fauzan"
                width={250}
                height={250}
                className="rounded-full object-cover shadow-lg"
                data-ai-hint="drafter engineer portrait"
              />
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground md:text-xl/relaxed">
              A dedicated Drafter Engineer since 2014, I specialize in transforming complex designs into precise, actionable blueprints for high-risk building construction. My work is the critical bridge between creative design and tangible construction, ensuring every project is built to exact specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
