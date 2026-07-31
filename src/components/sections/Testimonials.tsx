import { useLanguage } from "@/hooks/useLanguage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section
      id="depoimentos"
      className="bg-warm-white py-20 lg:py-28"
      aria-labelledby="depoimentos-title"
    >
      <div className="mx-auto max-w-[1240px] px-5 lg:px-10">
        <SectionHeading
          id="depoimentos-title"
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[58fr_42fr] lg:gap-16">
          <Reveal stagger as="ul" className="space-y-8">
            {t.testimonials.items.map((item) => (
              <RevealItem
                as="li"
                key={item.author}
                className="border-t border-charcoal/10 pt-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-muted-gold/70"
              >
                <blockquote className="max-w-[54ch] font-serif text-[1.4rem] leading-snug text-charcoal">
                  “{item.quote}”
                </blockquote>
                <p className="mt-4 font-sans text-[11px] uppercase tracking-[0.24em] text-taupe">
                  {item.author}
                </p>
              </RevealItem>
            ))}

            <RevealItem as="li" className="bg-ivory p-7">
              <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-muted-gold">
                {t.testimonials.caseLabel}
              </p>
              <p className="mt-3 max-w-[56ch] font-sans text-sm leading-relaxed text-cocoa/85">
                {t.testimonials.caseText}
              </p>
            </RevealItem>
          </Reveal>

          <Reveal>
            <SmartImage
              src="/images/08-noiva-emocao.webp"
              alt={t.testimonials.alt}
              ratio="3 / 4"
              className="rounded-[6px]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
