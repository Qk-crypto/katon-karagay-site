"use client";
import { useState } from "react";

type Guide = {
  title: string;
  description: string;
  tracks: {
    kz: string;
    ru: string;
    en: string;
  };
};

export default function AudioGuides(props: {
  items: ReadonlyArray<Guide>;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {props.items.map((item) => (
        <AudioCard key={item.title} item={item} />
      ))}
    </div>
  );
}

function AudioCard({ item }: { item: Guide }) {
  const [lang, setLang] = useState<"kz" | "ru" | "en">("kz");

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="text-lg font-semibold">{item.title}</div>
      <p className="mt-2 text-sm text-zinc-700">{item.description}</p>

      {/* Тіл батырмалары */}
      <div className="mt-4 flex gap-2">
        {["kz", "ru", "en"].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l as any)}
            className={`rounded-lg px-3 py-1 text-xs font-semibold ${
              lang === l
                ? "bg-zinc-900 text-white"
                : "border border-zinc-300 text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Аудио плеер */}
      <div className="mt-4">
        <audio key={lang} controls className="w-full">
          <source src={item.tracks[lang]} type="audio/mpeg" />
          Браузер аудионы қолдамайды.
        </audio>
      </div>
    </div>
  );
}