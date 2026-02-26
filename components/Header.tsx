import { site } from "@/content/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="font-semibold">{site.brand}</div>

        <nav className="hidden gap-4 text-sm text-zinc-700 md:flex">
          {site.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-zinc-900">
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={site.contact.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}