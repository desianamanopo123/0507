import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
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
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">About Me</div>
          <p className="text-muted-foreground md:text-xl/relaxed">
            As a professional Drafter Engineer with a journey that began in 2014, I possess a deep passion for transforming complex architectural and engineering visions into precise, actionable blueprints. My work is the critical bridge between creative design and tangible construction, ensuring every detail is accurately captured and communicated.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed">
            I specialize in high-risk building construction, an environment where precision is paramount. My expertise includes delivering comprehensive drawing packages for large-scale commercial structures, industrial facilities, and custom residential projects. I am dedicated to maintaining the highest standards of accuracy and quality, ensuring that every project is built safely, on schedule, and to exact specifications.
          </p>
        </div>
      </div>
    </section>
  );
}
