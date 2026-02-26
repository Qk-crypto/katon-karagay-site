import { site } from "@/content/site";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Cards from "@/components/Cards";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import EmbeddedMap from "@/components/EmbeddedMap";
import Footer from "@/components/Footer";
import BrandSection from "@/components/BrandSection";
import AudioGuides from "@/components/AudioGuides";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="overview" title="Жалпы мәлімет" subtitle="Аймақ туралы негізгі ақпарат">
          <div className="prose max-w-none prose-zinc">
            {site.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="highlights" title="Неге бұл жерге бару ұсынылады?" subtitle="Негізгі артықшылықтар">
          <Cards items={site.highlights} />
        </Section>

        <Section id="landmarks" title="Негізгі нысандар" subtitle="Табиғи және тарихи локациялар">
          <Cards items={site.landmarks} />
        </Section>

        <Section id="activities" title="Белсенділіктер" subtitle="Туристерге ұсынылатын іс-әрекеттер">
          <Cards items={site.activities} />
        </Section>

        <Section id="health" title="Сауықтыру туризмі" subtitle="Термалды бұлақтар және пантотерапия">
          <Cards items={site.health} />
        </Section>

        <Section id="how" title="Қалай жетуге болады?" subtitle="Маршрут және практикалық кеңестер">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 lg:col-span-2">
              <div className="text-base font-semibold">
                {site.howToGetThere.fromCity} → {site.title}
              </div>
              <div className="mt-2 text-sm text-zinc-700">{site.howToGetThere.distanceText}</div>
              <div className="mt-2 text-sm text-zinc-700">{site.howToGetThere.roadText}</div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                  href={site.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс картада ашу
                </a>
                <a
                  className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
                  href={site.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp арқылы сұрақ қою
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="text-base font-semibold">Кеңестер</div>
              <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700">
                {site.howToGetThere.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="map" title="Карта" subtitle="Орналасуы және бағыт">
          <EmbeddedMap src={site.mapEmbedSrc} title={`${site.title} картасы`} />
        </Section>

        <Section id="gallery" title="Галерея" subtitle="Табиғатты өз көзіңізбен көруге асығыңыз">
          <Gallery images={site.gallery} />
        </Section>
        <Section id="audio" title="Аудиогид" subtitle="Нысандар туралы үш тілде тыңдаңыз">
  <AudioGuides items={site.audioGuides} />
</Section>
        <Section id="brand" title="Бренд" subtitle="Аймақтың визуалды стилі және мерч">
  <BrandSection
    title={site.brandSection.title}
    description={site.brandSection.description}
    items={site.brandSection.items}
  />
</Section>

        <Section id="faq" title="FAQ" subtitle="Жиі қойылатын сұрақтар">
          <FAQ items={site.faq} />
        </Section>
      </main>
      <Footer />
    </>
  );
}