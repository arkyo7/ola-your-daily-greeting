import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { PORTFOLIO } from "@/data/portfolio";

export function Portfolio() {
  const { t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close]);

  return (
    <section
      id="portfolio"
      className="bg-warm-white py-20 lg:py-28"
      aria-labelledby="portfolio-title"
    >
      <div className="mx-auto max-w-[1240px] px-5 lg:px-10">
        <SectionHeading
          id="portfolio-title"
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        <Reveal
          stagger
          className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
        >
          {PORTFOLIO.map((item, i) => (
            <RevealItem as="figure" key={item.src} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${t.portfolio.captions[item.caption]} — ${t.portfolio.open}`}
                className="group relative block w-full overflow-hidden rounded-[6px] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-26px_rgba(33,29,27,0.55)]"
              >
                <SmartImage
                  src={item.src}
                  alt={t.portfolio.captions[item.caption]}
                  ratio={item.ratio}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  imgClassName="transition-transform duration-[550ms] ease-out group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 px-4 pb-4 text-left font-sans text-[11px] uppercase tracking-[0.22em] text-warm-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {t.portfolio.captions[item.caption]}
                </figcaption>
              </button>
              <span className="mt-2 block font-sans text-[11px] uppercase tracking-[0.2em] text-taupe sm:hidden">
                {t.portfolio.captions[item.caption]}
              </span>
            </RevealItem>
          ))}
        </Reveal>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.portfolio.captions[PORTFOLIO[active].caption]}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            autoFocus
            aria-label={t.portfolio.close}
            className="absolute right-4 top-4 inline-flex min-h-11 min-w-11 items-center justify-center rounded-[3px] text-warm-white transition-colors hover:text-muted-gold"
          >
            <X className="size-6" />
          </button>
          <figure
            className="max-h-[88vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              src={PORTFOLIO[active].src}
              alt={t.portfolio.captions[PORTFOLIO[active].caption]}
              ratio={PORTFOLIO[active].ratio}
              className="max-h-[80vh] rounded-[4px]"
              imgClassName="object-contain"
            />
            <figcaption className="mt-3 text-center font-sans text-[11px] uppercase tracking-[0.22em] text-warm-white/80">
              {t.portfolio.captions[PORTFOLIO[active].caption]}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
