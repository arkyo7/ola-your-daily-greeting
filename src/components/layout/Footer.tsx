import { Instagram } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE_CONFIG } from "@/config/site";

const LINKS = [
  { id: "sobre", key: "about" },
  { id: "servicos", key: "services" },
  { id: "portfolio", key: "portfolio" },
  { id: "curso", key: "course" },
  { id: "contato", key: "contact" },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-14 text-warm-white/70">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:grid-cols-3 lg:px-10">
        <div>
          <p className="font-serif text-2xl text-warm-white">Tallita Cumi</p>
          <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.28em] text-muted-gold">
            {t.footer.tagline}
          </p>
          <p className="mt-5 max-w-[32ch] font-sans text-xs leading-relaxed">
            {t.footer.area}
          </p>
        </div>

        <nav aria-label={t.footer.links}>
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-warm-white/50">
            {t.footer.links}
          </p>
          <ul className="mt-4 space-y-2">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="font-sans text-sm transition-colors hover:text-muted-gold"
                >
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-warm-white/50">
            {t.footer.contact}
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm transition-colors hover:text-muted-gold"
              >
                {SITE_CONFIG.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.nav.instagram}
                className="inline-flex items-center gap-2 font-sans text-sm transition-colors hover:text-muted-gold"
              >
                <Instagram className="size-4" aria-hidden="true" /> @tallita.cumi
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1240px] flex-col gap-2 border-t border-warm-white/10 px-5 pt-6 font-sans text-[11px] text-warm-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© {year} Tallita Cumi. {t.footer.rights}</p>
        <p>
          <a href="#contato" className="underline underline-offset-4 hover:text-muted-gold">
            {t.footer.privacy}
          </a>{" "}
          · {t.footer.privacyNote}
        </p>
      </div>
    </footer>
  );
}
