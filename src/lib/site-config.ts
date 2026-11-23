/**
 * Dados editáveis da Lovs Pet Shop.
 * Serviços e horários confirmados com o estabelecimento.
 * Para publicar uma informação, troque o texto e (nos serviços) mude `confirmed` para true.
 */

export const SITE = {
  name: "Lovs Pet Shop",
  shortName: "Lovs",
  location: "Centro, Contagem - MG",
  address: "R. Cel. Augusto Camargos, 702A - Centro, Contagem - MG, 32015-740",
  phoneDisplay: "(31) 99300-1010",
  whatsapp: "https://wa.me/5531993001010",
  mapsQuery: "R. Cel. Augusto Camargos, 702A - Centro, Contagem - MG, 32015-740",
} as const;

export const MAPS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;

export const PENDING = "A confirmar";

export type Service = { title: string; description: string; confirmed: boolean };

export const services: Service[] = [
  { title: "Banho", description: "Banho para deixar o seu pet limpo e cheiroso.", confirmed: true },
  { title: "Tosa", description: "Tosa para o seu pet ficar ainda mais bonito.", confirmed: true },
  {
    title: "Carinho",
    description: "Atenção e carinho para o seu pet em cada atendimento.",
    confirmed: true,
  },
];

// Horários confirmados.
export const hours: readonly (readonly [string, string])[] = [
  ["Segunda a sexta", "08:30 às 18:30"],
  ["Sábado", "08:30 às 15:00"],
  ["Domingo", "Fechado"],
];

export const nav = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Galeria", "#galeria"],
  ["Horários", "#horarios"],
  ["Localização", "#localizacao"],
  ["Contato", "#contato"],
] as const;
