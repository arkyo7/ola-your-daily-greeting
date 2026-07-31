import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { buildWhatsappLink } from "@/config/site";

export function VipCourse() {
  const { t } = useLanguage();
  const link = buildWhatsappLink(`${t.course.cta} — ${t.course.title}`);

  return (
    <section id="curso" className="bg-cocoa py-20 lg:py-28" aria-labelledby="curso-title">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-[55fr_45fr] lg:gap-20 lg:px-10">
        <Reveal stagger>
          <RevealItem>
            <p className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-muted-gold">
              <span className="h-px w-6 bg-muted-gold" aria-hidden="true" />
              {t.course.eyebrow}
            </p>
          </RevealItem>
          <RevealItem>
            <h2
              id="curso-title"
              className="mt-6 font-serif text-[clamp(2rem,4vw,3.1rem)] leading-[1.06] text-warm-white"
            >
              {t.course.title}
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-6 max-w-[58ch] font-sans leading-relaxed text-warm-white/75">
              {t.course.text}
            </p>
          </RevealItem>
          <RevealItem>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex min-h-11 items-center gap-2 rounded-[3px] bg-muted-gold px-7 font-sans text-[12px] uppercase tracking-[0.16em] text-cocoa transition-all duration-300 hover:-translate-y-px hover:bg-warm-white active:scale-[0.98]"
            >
              {t.course.cta}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </a>
          </RevealItem>
        </Reveal>

        <Reveal stagger className="lg:pt-6">
          <RevealItem as="div">
            <ul className="space-y-4 border-l border-muted-gold/40 pl-6">
              {t.course.list.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-sm text-warm-white/85"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-muted-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
          <RevealItem as="p" className="mt-8 max-w-[46ch] font-sans text-xs leading-relaxed text-warm-white/55">
            {t.course.note}
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
