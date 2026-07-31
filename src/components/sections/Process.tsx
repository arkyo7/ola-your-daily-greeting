import { useLanguage } from "@/hooks/useLanguage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function Process() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory py-20 lg:py-28" aria-labelledby="processo-title">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-10">
        <SectionHeading
          id="processo-title"
          eyebrow={t.process.eyebrow}
          title={t.process.title}
        />

        <Reveal stagger as="ol" className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <RevealItem
              as="li"
              key={step.title}
              className="group border-t border-charcoal/10 pt-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-muted-gold/70"
            >
              <span className="font-serif text-[2.2rem] leading-none text-muted-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-[1.35rem] leading-tight text-charcoal">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[38ch] font-sans text-sm leading-relaxed text-taupe">
                {step.text}
              </p>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-12">
          <p className="max-w-[62ch] font-sans text-sm leading-relaxed text-cocoa/75">
            {t.process.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
