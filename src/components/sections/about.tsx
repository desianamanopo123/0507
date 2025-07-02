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
            For over a decade, since starting my journey in 2014, I have been at the forefront of drafting engineering. My passion lies in the meticulous process of transforming complex architectural and engineering visions into precise, actionable blueprints.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed">
            My expertise is rooted in high-risk building construction, where precision is not just a goal, but a necessity. I have a proven track record of delivering detailed drawings for large-scale commercial structures, industrial facilities, and intricate residential projects, ensuring every specification contributes to a successful and safe build.
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
