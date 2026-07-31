import { useLanguage } from "@/hooks/useLanguage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="servicos"
      className="bg-warm-white py-20 lg:py-28"
      aria-labelledby="servicos-title"
    >
      <div className="mx-auto max-w-[1240px] px-5 lg:px-10">
        <SectionHeading
          id="servicos-title"
          eyebrow={t.services.eyebrow}
          title={t.services.title}
        />

        <Reveal stagger as="ul" className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => (
            <RevealItem
              as="li"
              key={item.title}
              className="group border-t border-charcoal/10 pt-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-muted-gold/70"
            >
              <span className="font-sans text-[11px] tracking-[0.24em] text-muted-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-[1.6rem] leading-tight text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[42ch] font-sans text-sm leading-relaxed text-taupe">
                {item.text}
              </p>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-14">
          <p className="max-w-[58ch] border-l border-muted-gold/50 pl-5 font-sans text-sm italic leading-relaxed text-cocoa/80">
            {t.services.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
