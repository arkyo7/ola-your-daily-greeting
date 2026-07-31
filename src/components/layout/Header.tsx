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
      {/* Barra superior */}
      <div
        className={cn(
          "border-b transition-colors duration-500",
          scrolled
            ? "border-charcoal/5 bg-warm-white/80 text-taupe"
            : "border-warm-white/15 bg-charcoal/25 text-warm-white/85",
        )}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-2 lg:px-10">
          <p className="truncate font-sans text-[10px] uppercase tracking-[0.22em]">
            {t.topbar}
          </p>
          <div className="hidden shrink-0 items-center gap-5 md:flex">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.nav.instagram}
              className="font-sans text-[10px] uppercase tracking-[0.22em] transition-colors hover:text-muted-gold"
            >
              Instagram
            </a>
            <LanguageSwitcher tone={scrolled ? "dark" : "light"} />
          </div>
        </div>
      </div>

      {/* Cabeçalho */}
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-charcoal/8 bg-warm-white/90 shadow-[0_1px_20px_rgba(58,46,42,0.06)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 transition-all duration-500 lg:px-10",
            scrolled ? "py-3" : "py-5",
          )}
        >
          <a href="#inicio" className="min-w-0 leading-none">
            <span
              className={cn(
                "block font-serif text-[1.55rem] tracking-[0.02em] transition-colors",
                scrolled ? "text-charcoal" : "text-warm-white",
              )}
            >
              Tallita Cumi
            </span>
            <span
              className={cn(
                "mt-1 block font-sans text-[9px] uppercase tracking-[0.32em] transition-colors",
                scrolled ? "text-taupe" : "text-warm-white/70",
              )}
            >
              Bridal Hair &amp; Makeup
            </span>
          </a>

          <nav
            aria-label={t.nav.home}
            className="hidden items-center gap-7 lg:flex"
          >
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  "font-sans text-[12px] uppercase tracking-[0.16em] transition-colors",
                  scrolled
                    ? "text-taupe hover:text-charcoal"
                    : "text-warm-white/85 hover:text-warm-white",
                )}
              >
                {t.nav[s.key]}
              </a>
            ))}
            <a
              href="#contato"
              className={cn(
                "inline-flex min-h-11 items-center rounded-[3px] border px-5 font-sans text-[12px] uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-px active:scale-[0.98]",
                scrolled
                  ? "border-cocoa bg-cocoa text-warm-white hover:bg-charcoal"
                  : "border-warm-white/70 text-warm-white hover:border-muted-gold hover:text-muted-gold",
              )}
            >
              {t.nav.cta}
            </a>
          </nav>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-[3px] transition-colors lg:hidden",
              scrolled ? "text-charcoal" : "text-warm-white",
            )}
          >
            {open ? <Menu className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="border-b border-charcoal/8 bg-warm-white px-5 pb-7 pt-3 shadow-lg lg:hidden"
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.nav.closeMenu}
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-taupe"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav aria-label={t.nav.home} className="flex flex-col">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/5 py-3 font-sans text-sm uppercase tracking-[0.16em] text-charcoal"
              >
                {t.nav[s.key]}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.nav.instagram}
              className="inline-flex min-h-11 items-center gap-2 font-sans text-[11px] uppercase tracking-[0.2em] text-taupe"
            >
              <Instagram className="size-4" aria-hidden="true" /> Instagram
            </a>
            <LanguageSwitcher />
          </div>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-[3px] bg-cocoa px-5 font-sans text-[12px] uppercase tracking-[0.16em] text-warm-white"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
