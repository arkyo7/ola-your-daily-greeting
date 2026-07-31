import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SmartImage } from "@/components/ui/SmartImage";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  const fade = (delay: number) =>
    reduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: EASE, delay },
        };

  return (
    <section
      id="inicio"
      className="relative bg-ivory pb-16 pt-36 lg:pb-24 lg:pt-44"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 lg:grid-cols-[45fr_55fr] lg:gap-16 lg:px-10">
        <div>
          <motion.p
            {...fade(0.05)}
            className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-taupe"
          >
            <span className="h-px w-8 bg-muted-gold" aria-hidden="true" />
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fade(0.15)}
            id="hero-title"
            className="mt-6 font-serif text-[clamp(2.6rem,6.2vw,4.6rem)] leading-[1.02] tracking-[-0.015em] text-charcoal"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            {...fade(0.28)}
            className="mt-6 max-w-[46ch] font-sans text-[1.02rem] leading-relaxed text-cocoa/80"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div {...fade(0.42)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="group inline-flex min-h-11 items-center gap-2 rounded-[3px] bg-cocoa px-7 font-sans text-[12px] uppercase tracking-[0.16em] text-warm-white transition-all duration-300 hover:-translate-y-px hover:bg-charcoal hover:shadow-[0_10px_24px_-14px_rgba(33,29,27,0.8)] active:scale-[0.98]"
            >
              {t.hero.primary}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </a>
            <a
              href="#portfolio"
              className="inline-flex min-h-11 items-center rounded-[3px] border border-cocoa/25 px-7 font-sans text-[12px] uppercase tracking-[0.16em] text-cocoa transition-all duration-300 hover:-translate-y-px hover:border-muted-gold hover:text-charcoal active:scale-[0.98]"
            >
              {t.hero.secondary}
            </a>
          </motion.div>

          <motion.p
            {...fade(0.55)}
            className="mt-9 inline-flex items-center gap-2 border-t border-muted-gold/40 pt-4 font-sans text-[11px] uppercase tracking-[0.24em] text-taupe"
          >
            <MapPin className="size-3.5 text-muted-gold" aria-hidden="true" />
            {t.hero.badge}
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
          >
            <SmartImage
              src="/images/02-noiva-editorial.jpg"
              alt={t.hero.altMain}
              ratio="4 / 5"
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="rounded-[6px]"
            />
          </motion.div>

          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
            className="absolute -bottom-10 left-0 w-[38%] max-w-[190px] border-[6px] border-ivory sm:-left-8 lg:-left-14"
          >
            <SmartImage
              src="/images/01-retrato-tallita.jpg"
              alt={t.hero.altSecond}
              ratio="3 / 4"
              className="rounded-[4px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PositioningStrip() {
  const { t } = useLanguage();
  return (
    <section aria-label={t.strip.join(", ")} className="border-y border-charcoal/8 bg-warm-white">
      <ul className="mx-auto grid max-w-[1240px] grid-cols-2 gap-x-6 gap-y-4 px-5 py-7 lg:grid-cols-4 lg:px-10">
        {t.strip.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] text-taupe"
          >
            <span className="h-px w-5 shrink-0 bg-muted-gold" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
