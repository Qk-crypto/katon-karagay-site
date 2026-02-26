import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      
      {/* Фон сурет */}
      <img
        src="/hero.jpeg"
        alt="Katon-Karagay"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Қараңғы overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Контент */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 text-white">
        
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-widest text-zinc-200">
            {site.locationShort}
          </div>

          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
            {site.title}
          </h1>

          <p className="mt-4 text-lg text-zinc-200">
            {site.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#overview"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Толығырақ көру
            </a>

            <a
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
            >
              Картада ашу
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}