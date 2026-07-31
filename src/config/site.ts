export const SITE_CONFIG = {
  whatsappNumber: "32498669887",
  whatsappDisplay: "+32 498 66 98 87",
  whatsappUrl: "https://wa.me/32498669887",
  instagramUrl: "https://www.instagram.com/tallita.cumi/",
  serviceArea: "Bruxelas e região",
} as const;

export const buildWhatsappLink = (message: string) =>
  `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(message)}`;

export const openExternal = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
