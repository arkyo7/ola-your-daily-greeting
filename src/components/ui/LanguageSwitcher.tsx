import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

type Lang = "pt" | "fr";

interface LanguageSwitcherProps {
  className?: string;
  tone?: "light" | "dark";
}

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "pt", label: "Português" },
  { code: "fr", label: "Français" },
];

export function LanguageSwitcher({ className, tone = "dark" }: LanguageSwitcherProps) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "inline-flex min-h-11 items-center gap-1.5 rounded-full px-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa/40",
          tone === "light"
            ? "text-warm-white hover:bg-warm-white/10"
            : "text-charcoal hover:bg-cocoa/7",
        )}
      >
        <Globe2 className="size-[18px]" aria-hidden="true" />
        <span>{lang.toUpperCase()}</span>
        <ChevronDown
          className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.nav.language}
          className="absolute right-0 top-full z-[70] mt-2 min-w-[172px] overflow-hidden rounded-[4px] border border-cocoa/10 bg-warm-white p-1.5 shadow-[0_16px_45px_rgba(58,42,33,0.16)]"
        >
          {LANGUAGES.map((item) => {
            const active = lang === item.code;
            return (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  setLang(item.code);
                  setOpen(false);
                }}
                className={cn(
                  "flex min-h-11 w-full items-center gap-3 rounded-[3px] px-3 text-left font-sans text-sm transition-colors",
                  active ? "bg-cocoa/8 text-cocoa" : "text-charcoal hover:bg-cocoa/5",
                )}
              >
                <span className="flex-1">{item.label}</span>
                <span className="text-[10px] font-semibold tracking-[0.14em] text-taupe">
                  {item.code.toUpperCase()}
                </span>
                <Check className={cn("size-4", !active && "invisible")} aria-hidden="true" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
