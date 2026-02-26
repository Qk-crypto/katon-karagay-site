import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="font-semibold">{site.brand}</div>
            <div className="mt-2 text-sm text-zinc-700">{site.contact.footerNote}</div>
          </div>
          <div>
            <div className="text-sm font-semibold">Байланыс</div>
            <div className="mt-2 text-sm text-zinc-700">{site.contact.phoneText}</div>
            <div className="text-sm text-zinc-700">{site.contact.emailText}</div>
          </div>
          <div>
            <div className="text-sm font-semibold">Жылдам әрекет</div>
            <a
              className="mt-2 inline-block rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
              href={site.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ашу
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} {site.brand}</div>
      </div>
    </footer>
  );
}