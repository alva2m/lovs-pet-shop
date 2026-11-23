/**
 * Dados editáveis da Lovs Pet Shop.
 * Tudo que está marcado como "A confirmar" ainda não foi validado com o estabelecimento.
 * Para publicar uma informação, troque o texto e (nos serviços) mude `confirmed` para true.
 */

export const SITE = {
  name: "Lovs Pet Shop",
  shortName: "Lovs",
  location: "Centro, Contagem - MG",
  phoneDisplay: "(31) 99300-1010",
  whatsapp: "https://wa.me/5531993001010",
  instagramHandle: "@lovspetshop",
  instagram: "https://www.instagram.com/lovspetshop/",
  // Busca pelo bairro/cidade apenas. Não há endereço completo confirmado.
  mapsQuery: "Centro, Contagem - MG",
} as const;

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;

export const PENDING = "A confirmar";

export type Service = { title: string; description: string; confirmed: boolean };

// EDITAR: troque título e descrição quando os serviços forem confirmados.
export const services: Service[] = [
  { title: "Serviço a confirmar", description: "Informações em breve. Consulte nossa equipe pelo WhatsApp.", confirmed: false },
  { title: "Serviço a confirmar", description: "Informações em breve. Consulte nossa equipe pelo WhatsApp.", confirmed: false },
  { title: "Serviço a confirmar", description: "Informações em breve. Consulte nossa equipe pelo WhatsApp.", confirmed: false },
];

// EDITAR: troque "A confirmar" pelo horário real (ex.: "09:00 às 18:00") ou "Fechado".
export const hours: readonly (readonly [string, string])[] = [
  ["Segunda-feira", PENDING],
  ["Terça-feira", PENDING],
  ["Quarta-feira", PENDING],
  ["Quinta-feira", PENDING],
  ["Sexta-feira", PENDING],
  ["Sábado", PENDING],
  ["Domingo", PENDING],
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
