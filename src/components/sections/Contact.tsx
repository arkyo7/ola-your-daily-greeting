import { useState, type FormEvent } from "react";
import { ArrowRight, Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { SITE_CONFIG, buildWhatsappLink, openExternal } from "@/config/site";

type Fields = {
  name: string;
  service: string;
  date: string;
  city: string;
  message: string;
};

const EMPTY: Fields = { name: "", service: "", date: "", city: "", message: "" };

export function Contact() {
  const { t } = useLanguage();
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [copied, setCopied] = useState(false);

  const set = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: false }));
  };

  const buildMessage = () =>
    [
      t.contact.greeting,
      "",
      `${t.contact.labels.name}: ${values.name}`,
      `${t.contact.labels.service}: ${values.service}`,
      `${t.contact.labels.date}: ${values.date}`,
      `${t.contact.labels.city}: ${values.city}`,
      values.message ? `${t.contact.labels.message}: ${values.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  const validate = () => {
    const next: Partial<Record<keyof Fields, boolean>> = {};
    (["name", "service", "date", "city"] as const).forEach((k) => {
      if (!values[k].trim()) next[k] = true;
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    openExternal(buildWhatsappLink(buildMessage()));
  };

  const onInstagram = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage());
      setCopied(true);
    } catch {
      setCopied(false);
    }
    openExternal(SITE_CONFIG.instagramUrl);
  };

  const fieldClass = (invalid?: boolean) =>
    `mt-2 w-full rounded-[3px] border bg-warm-white px-4 py-3 font-sans text-sm text-charcoal transition-colors placeholder:text-taupe/70 ${
      invalid ? "border-destructive" : "border-charcoal/15 focus:border-muted-gold"
    }`;

  const labelClass = "font-sans text-[11px] uppercase tracking-[0.2em] text-taupe";

  return (
    <section id="contato" className="bg-warm-white py-20 lg:py-28" aria-labelledby="contato-title">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-[42fr_58fr] lg:gap-20 lg:px-10">
        <Reveal stagger>
          <RevealItem>
            <p className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em] text-taupe">
              <span className="h-px w-6 bg-muted-gold" aria-hidden="true" />
              {t.contact.eyebrow}
            </p>
          </RevealItem>
          <RevealItem>
            <h2
              id="contato-title"
              className="mt-6 font-serif text-[clamp(2rem,4vw,3.1rem)] leading-[1.06] text-charcoal"
            >
              {t.contact.title}
            </h2>
          </RevealItem>
          <RevealItem as="p" className="mt-5 max-w-[48ch] font-sans leading-relaxed text-cocoa/80">
            {t.contact.text}
          </RevealItem>
          <RevealItem as="div">
            <div className="mt-9 space-y-3 border-t border-charcoal/10 pt-6">
              <a
                href={buildWhatsappLink(t.contact.greeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-sm text-charcoal transition-colors hover:text-muted-gold"
              >
                <MessageCircle className="size-4 text-muted-gold" aria-hidden="true" />
                {SITE_CONFIG.whatsappDisplay}
              </a>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-sm text-charcoal transition-colors hover:text-muted-gold"
              >
                <Instagram className="size-4 text-muted-gold" aria-hidden="true" />
                @tallita.cumi
              </a>
            </div>
          </RevealItem>
        </Reveal>

        <Reveal>
          <form noValidate onSubmit={onSubmit} className="bg-ivory p-6 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="tc-name" className={labelClass}>
                  {t.contact.name} *
                </label>
                <input
                  id="tc-name"
                  name="name"
                  required
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "tc-name-error" : undefined}
                  className={fieldClass(errors.name)}
                />
                {errors.name && (
                  <p id="tc-name-error" className="mt-1 font-sans text-xs text-destructive">
                    {t.contact.required}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="tc-service" className={labelClass}>
                  {t.contact.service} *
                </label>
                <select
                  id="tc-service"
                  name="service"
                  required
                  value={values.service}
                  onChange={(e) => set("service", e.target.value)}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "tc-service-error" : undefined}
                  className={fieldClass(errors.service)}
                >
                  <option value="">{t.contact.servicePlaceholder}</option>
                  {t.contact.options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p id="tc-service-error" className="mt-1 font-sans text-xs text-destructive">
                    {t.contact.required}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="tc-date" className={labelClass}>
                  {t.contact.date} *
                </label>
                <input
                  id="tc-date"
                  name="date"
                  type="date"
                  required
                  value={values.date}
                  onChange={(e) => set("date", e.target.value)}
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? "tc-date-error" : undefined}
                  className={fieldClass(errors.date)}
                />
                {errors.date && (
                  <p id="tc-date-error" className="mt-1 font-sans text-xs text-destructive">
                    {t.contact.required}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="tc-city" className={labelClass}>
                  {t.contact.city} *
                </label>
                <input
                  id="tc-city"
                  name="city"
                  required
                  value={values.city}
                  onChange={(e) => set("city", e.target.value)}
                  aria-invalid={!!errors.city}
                  aria-describedby={errors.city ? "tc-city-error" : undefined}
                  className={fieldClass(errors.city)}
                />
                {errors.city && (
                  <p id="tc-city-error" className="mt-1 font-sans text-xs text-destructive">
                    {t.contact.required}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="tc-message" className={labelClass}>
                  {t.contact.message}
                </label>
                <textarea
                  id="tc-message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => set("message", e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className={fieldClass()}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="submit"
                className="group inline-flex min-h-11 items-center gap-2 rounded-[3px] bg-cocoa px-7 font-sans text-[12px] uppercase tracking-[0.16em] text-warm-white transition-all duration-300 hover:-translate-y-px hover:bg-charcoal active:scale-[0.98]"
              >
                {t.contact.submit}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-[3px]"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                onClick={onInstagram}
                className="inline-flex min-h-11 items-center gap-2 rounded-[3px] border border-cocoa/25 px-7 font-sans text-[12px] uppercase tracking-[0.16em] text-cocoa transition-all duration-300 hover:-translate-y-px hover:border-muted-gold active:scale-[0.98]"
              >
                <Instagram className="size-4" aria-hidden="true" />
                {t.contact.instagram}
              </button>
            </div>

            <p className="mt-4 font-sans text-xs leading-relaxed text-taupe">
              {t.contact.whatsappHint}
            </p>
            <p aria-live="polite" className="mt-2 font-sans text-xs text-muted-gold">
              {copied ? t.contact.copied : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
