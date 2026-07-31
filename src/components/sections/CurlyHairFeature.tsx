import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";

export function CurlyHairFeature() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory" aria-labelledby="cachos-title">
      <div className="grid lg:grid-cols-2">
        <Reveal>
          <SmartImage
            src="/images/03-penteado-noiva-cacheada.webp"
            alt={t.curly.alt}
            ratio="4 / 5"
            className="h-full w-full"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>

        <Reveal
          stagger
          className="flex flex-col justify-center bg-cocoa px-5 py-16 lg:px-16 lg:py-24"
        >
          <RevealItem>
            <p className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-muted-gold">
              <span className="h-px w-6 bg-muted-gold" aria-hidden="true" />
              {t.curly.eyebrow}
            </p>
          </RevealItem>
          <RevealItem>
            <h2
              id="cachos-title"
              className="mt-6 max-w-[18ch] font-serif text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.08] text-warm-white"
            >
              {t.curly.title}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-6 max-w-[52ch] font-sans leading-relaxed text-warm-white/75">
              {t.curly.text}
            </p>
          </RevealItem>
          <RevealItem>
            <a
              href="#contato"
              className="group mt-9 inline-flex min-h-11 w-fit items-center gap-2 rounded-[3px] border border-muted-gold px-7 font-sans text-[12px] uppercase tracking-[0.16em] text-muted-gold transition-all duration-300 hover:-translate-y-px hover:bg-muted-gold hover:text-cocoa active:scale-[0.98]"
            >
              {t.curly.cta}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </a>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
