import { useEffect, useRef, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "inicio", key: "home" },
  { id: "sobre", key: "about" },
  { id: "servicos", key: "services" },
  { id: "portfolio", key: "portfolio" },
  { id: "curso", key: "course" },
  { id: "depoimentos", key: "testimonials" },
  { id: "contato", key: "contact" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const scrolled = useScrollHeader();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-all duration-500",
          scrolled
            ? "border-charcoal/8 bg-warm-white/92 shadow-[0_1px_20px_rgba(58,46,42,0.06)] backdrop-blur-md"
            : "border-transparent bg-ivory/78 backdrop-blur-sm",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 transition-all duration-500 lg:px-10",
            scrolled ? "py-3" : "py-4 lg:py-5",
          )}
        >
          <a href="#inicio" className="min-w-0 shrink-0 leading-none">
            <span className="block font-serif text-[1.55rem] tracking-[0.02em] text-charcoal">
              Tallita Cumi
            </span>
            <span className="mt-1 block font-sans text-[9px] uppercase tracking-[0.32em] text-taupe">
              Bridal Hair &amp; Makeup
            </span>
          </a>

          <div className="hidden items-center gap-4 lg:flex">
            <nav aria-label={t.nav.home} className="flex items-center gap-5 xl:gap-6">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={"#" + s.id}
                  className="font-sans text-[11px] uppercase tracking-[0.14em] text-taupe transition-colors hover:text-charcoal"
                >
                  {t.nav[s.key]}
                </a>
              ))}
            </nav>
            <LanguageSwitcher />
            <a
              href="#contato"
              className="inline-flex min-h-11 items-center rounded-[3px] border border-cocoa bg-cocoa px-5 font-sans text-[11px] uppercase tracking-[0.14em] text-warm-white transition-all duration-300 hover:-translate-y-px hover:bg-charcoal active:scale-[0.98]"
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitcher />
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[3px] text-charcoal transition-colors hover:bg-cocoa/5"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="border-b border-charcoal/8 bg-warm-white px-5 pb-7 pt-3 shadow-lg lg:hidden"
        >
          <nav aria-label={t.nav.home} className="flex flex-col">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={"#" + s.id}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/5 py-3 font-sans text-sm uppercase tracking-[0.16em] text-charcoal"
              >
                {t.nav[s.key]}
              </a>
            ))}
          </nav>
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.nav.instagram}
            className="mt-5 inline-flex min-h-11 items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-taupe"
          >
            <Instagram className="size-4" aria-hidden="true" /> Instagram
          </a>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-[3px] bg-cocoa px-5 font-sans text-[12px] uppercase tracking-[0.16em] text-warm-white"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
