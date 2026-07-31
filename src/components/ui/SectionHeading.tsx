import { cn } from "@/lib/utils";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className,
  id,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  id?: string;
}) {
  return (
    <Reveal
      stagger
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <RevealItem>
        <p
          className={cn(
            "flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.3em]",
            tone === "light" ? "text-muted-gold" : "text-taupe",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-muted-gold" aria-hidden="true" />
          {eyebrow}
        </p>
      </RevealItem>
      <RevealItem>
        <h2
          id={id}
          className={cn(
            "mt-5 font-serif text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.08] tracking-[-0.01em]",
            tone === "light" ? "text-warm-white" : "text-charcoal",
          )}
        >
          {title}
        </h2>
      </RevealItem>
      {subtitle ? (
        <RevealItem>
          <p
            className={cn(
              "mt-4 max-w-prose font-sans text-base leading-relaxed",
              tone === "light" ? "text-warm-white/75" : "text-taupe",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </RevealItem>
      ) : null}
    </Reveal>
  );
}
