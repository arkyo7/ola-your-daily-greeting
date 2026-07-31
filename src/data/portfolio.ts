export type PortfolioItem = {
  src: string;
  /** index into translations portfolio.captions */
  caption: number;
  ratio: string;
};

// TODO: adicionar imagens em public/images/
export const PORTFOLIO: PortfolioItem[] = [
  { src: "/images/02-noiva-editorial.webp", caption: 0, ratio: "3 / 4" },
  { src: "/images/03-penteado-noiva-cacheada.webp", caption: 1, ratio: "4 / 5" },
  { src: "/images/04-noiva-ondas-soltas.webp", caption: 2, ratio: "2 / 3" },
  { src: "/images/05-coque-noiva.webp", caption: 3, ratio: "1 / 1" },
  { src: "/images/06-maquiagem-evento.webp", caption: 4, ratio: "3 / 4" },
  { src: "/images/07-bastidores-equipe.webp", caption: 5, ratio: "4 / 5" },
  { src: "/images/08-noiva-emocao.webp", caption: 6, ratio: "2 / 3" },
];
