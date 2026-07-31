import { useLanguage } from "@/hooks/useLanguage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="bg-ivory py-20 lg:py-28" aria-labelledby="sobre-title">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-[42fr_58fr] lg:gap-20 lg:px-10">
        <Reveal className="lg:pt-10">
          <div className="relative">
            <SmartImage
              src="/images/01-retrato-tallita.jpg"
              alt={t.about.alt}
              ratio="4 / 5"
              className="rounded-[6px]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-muted-gold/60 lg:block"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            id="sobre-title"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
          />

          <Reveal stagger className="mt-7 space-y-5">
            <RevealItem as="p" className="max-w-[62ch] font-sans leading-relaxed text-cocoa/85">
              {t.about.p1}
            </RevealItem>
            <RevealItem as="p" className="max-w-[62ch] font-sans leading-relaxed text-cocoa/85">
              {t.about.p2}
            </RevealItem>
          </Reveal>

          <Reveal stagger as="ul" className="mt-10 space-y-5 border-l border-muted-gold/40 pl-6">
            {t.about.timeline.map((item) => (
              <RevealItem as="li" key={item.place}>
                <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-muted-gold">
                  {item.place}
                </p>
                <p className="mt-1 max-w-[52ch] font-sans text-sm leading-relaxed text-taupe">
                  {item.text}
                </p>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <blockquote className="max-w-[58ch] border-t border-charcoal/10 pt-6 font-serif text-[1.35rem] leading-snug text-charcoal">
              {t.about.quote}
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
