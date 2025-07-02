import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Tentang Saya</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Dari Cetak Biru Menjadi Realita
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Selama lebih dari satu dekade, sejak memulai perjalanan saya pada tahun 2014, saya telah berada di garis depan rekayasa drafting. Gairah saya terletak pada proses teliti dalam mengubah visi arsitektur dan rekayasa yang kompleks menjadi cetak biru yang presisi dan dapat ditindaklanjuti.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Keahlian saya berakar pada konstruksi bangunan berisiko tinggi, di mana presisi bukan hanya tujuan, tetapi suatu keharusan. Saya memiliki rekam jejak yang terbukti dalam memberikan gambar detail untuk struktur komersial skala besar, fasilitas industri, dan proyek perumahan yang rumit, memastikan setiap spesifikasi berkontribusi pada pembangunan yang sukses dan aman.
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
