import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">About Me</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            From Blueprint to Reality
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            I'm a drafter engineer with a passion for precision and a deep understanding of building construction. My expertise lies in translating complex architectural and engineering designs into detailed, accurate, and actionable blueprints.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Whether it's a high-risk commercial structure or a residential project, I thrive on the challenge of ensuring every line and every measurement contributes to a successful build. I am proficient in the latest CAD software and BIM technologies, always aiming for efficiency and clarity in my work.
          </p>
        </div>
        <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Alif Fauzan"
              width={500}
              height={500}
              className="rounded-xl object-cover shadow-lg"
              data-ai-hint="drafter engineer portrait"
            />
        </div>
      </div>
    </section>
  );
}
