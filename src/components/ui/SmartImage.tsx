import { useState } from "react";
import { cn } from "@/lib/utils";

type SmartImageProps = {
  src: string;
  alt: string;
  /** CSS aspect-ratio, e.g. "3 / 4" */
  ratio?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Renderiza a imagem quando o arquivo existir em public/images/.
 * Caso contrário, mostra um placeholder elegante preservando a proporção.
 * TODO: adicionar imagem em public/images/
 */
export function SmartImage({
  src,
  alt,
  ratio = "3 / 4",
  className,
  imgClassName,
  priority = false,
  sizes,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const fileName = src.split("/").pop();

  return (
    <div
      className={cn("relative overflow-hidden bg-ivory", className)}
      style={{ aspectRatio: ratio }}
    >
      {failed ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(160deg,var(--color-ivory),var(--color-soft-blush)/40,var(--color-cocoa)/10)] px-4 text-center"
        >
          <span className="h-px w-10 bg-muted-gold/60" />
          <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-taupe">
            {fileName}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          sizes={sizes}
          onError={() => setFailed(true)}
          className={cn("h-full w-full object-cover object-center", imgClassName)}
        />
      )}
    </div>
  );
}
