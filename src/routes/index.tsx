import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero, PositioningStrip } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { CurlyHairFeature } from "@/components/sections/CurlyHairFeature";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { VipCourse } from "@/components/sections/VipCourse";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Contact } from "@/components/sections/Contact";

const TITLE = "Tallita Cumi | Penteados e Maquiagem para Noivas em Bruxelas";
const DESCRIPTION =
  "Penteados de noiva, cabelos cacheados e maquiagem profissional em Bruxelas e região. Atendimento personalizado para casamento civil, cerimônias e eventos.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Tallita Cumi — Bridal Hair & Makeup em Bruxelas" },
      {
        property: "og:description",
        content:
          "Penteados e maquiagem para noivas, com especialização em cabelos cacheados e atendimento em Bruxelas e região.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Manrope:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Tallita Cumi",
          description:
            "Bridal hair and makeup — penteados e maquiagem para noivas em Bruxelas e região.",
          areaServed: { "@type": "City", name: "Brussels", address: { "@type": "PostalAddress", addressCountry: "BE" } },
          serviceType: "Bridal Hair and Makeup",
          telephone: "+32498669887",
          sameAs: ["https://www.instagram.com/tallita.cumi/"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <PositioningStrip />
        <About />
        <Services />
        <CurlyHairFeature />
        <Portfolio />
        <Process />
        <VipCourse />
        <Testimonials />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
