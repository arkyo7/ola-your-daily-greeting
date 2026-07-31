import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import type { Lang } from "@/data/translations";

export function LanguageSwitcher({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const { lang, setLang, t } = useLanguage();
  const langs: Lang[] = ["pt", "fr"];

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="group"
      aria-label={t.nav.language}
    >
      {langs.map((code, i) => (
        <span key={code} className="flex items-center">
          {i > 0 && (
            <span
              aria-hidden="true"
              className={cn(
                "mx-1 text-[11px]",
                tone === "light" ? "text-warm-white/40" : "text-taupe/50",
              )}
            >
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={cn(
              "rounded-[2px] px-1 py-0.5 font-sans text-[11px] uppercase tracking-[0.2em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-gold",
              lang === code
                ? "text-muted-gold underline underline-offset-4"
                : tone === "light"
                  ? "text-warm-white/60 hover:text-warm-white"
                  : "text-taupe hover:text-charcoal",
            )}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}
