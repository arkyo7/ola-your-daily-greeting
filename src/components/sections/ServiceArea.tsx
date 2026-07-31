import { useLanguage } from "@/hooks/useLanguage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function ServiceArea() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory py-20 lg:py-24" aria-labelledby="area-title">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 lg:grid-cols-[45fr_55fr] lg:gap-20 lg:px-10">
        <SectionHeading id="area-title" eyebrow={t.area.eyebrow} title={t.area.title} />

        <Reveal stagger className="lg:pt-16">
          <RevealItem as="p" className="max-w-[56ch] font-sans leading-relaxed text-cocoa/85">
            {t.area.text}
          </RevealItem>
          <RevealItem as="div">
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {t.area.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-t border-charcoal/10 pt-3 font-sans text-sm text-taupe"
                >
                  <span
                    className="mt-[0.55rem] size-1.5 shrink-0 rounded-full border border-muted-gold bg-muted-gold/25"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
