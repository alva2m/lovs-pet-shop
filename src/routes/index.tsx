import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Heart, Instagram, MapPin, Menu, MessageCircle, Navigation, PawPrint, Phone, Star, X, type LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { MAPS_EMBED, MAPS_LINK, PENDING, SITE, hours, nav, services } from "@/lib/site-config";
import caoGravata from "@/assets/lovs-cao-gravata.png";
import caoTouca from "@/assets/lovs-cao-touca.png";
import gatoCaminha from "@/assets/lovs-gato-caminha.png";
import gatoColeira from "@/assets/lovs-gato-coleira.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lovs Pet Shop | Pet shop no Centro de Contagem - MG" },
      { name: "description", content: `Lovs Pet Shop, pet shop no Centro de Contagem - MG. Fale com a gente pelo WhatsApp ${SITE.phoneDisplay} ou acompanhe ${SITE.instagramHandle} no Instagram.` },
      { property: "og:title", content: "Lovs Pet Shop" },
      { property: "og:description", content: "Pet shop no Centro de Contagem - MG. Carinho e atenção para o seu melhor amigo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const serviceIcons: LucideIcon[] = [PawPrint, Heart, Star];

const gallery = [
  { src: caoTouca, alt: "Cachorro branco e caramelo usando touca de banho, de língua para fora", pos: "50% 45%" },
  { src: gatoColeira, alt: "Gato branco com manchas pretas e coleira azul, sentado e olhando para a câmera", pos: "50% 30%" },
  { src: caoGravata, alt: "Cachorro branco e peludo de gravatinha e língua de fora diante do painel da Lovs Pet", pos: "50% 55%" },
  { src: gatoCaminha, alt: "Gato preto e branco deitado em uma caminha de corda ao lado de um tigre de pelúcia", pos: "50% 45%" },
];

const btnBase = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200";
const btnWhats = `${btnBase} bg-accent text-accent-foreground hover:-translate-y-0.5 hover:brightness-105`;
const btnPlum = `${btnBase} bg-primary text-primary-foreground hover:-translate-y-0.5 hover:brightness-110`;
const btnOutline = `${btnBase} border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground`;

function Wordmark({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`font-display leading-none ${light ? "wordmark-light" : "wordmark"} ${className}`}>
      {SITE.shortName}
    </span>
  );
}

function WhatsAppLink({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState<(typeof gallery)[number] | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#inicio" className="flex items-baseline gap-2" aria-label={`${SITE.name}, ir para o início`}>
            <Wordmark className="text-3xl" />
            <span className="text-sm font-semibold text-muted-foreground">Pet Shop</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{label}</a>
            ))}
            <WhatsAppLink className={`${btnWhats} px-5 py-2.5 text-sm`}>
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </WhatsAppLink>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <WhatsAppLink className={`${btnWhats} px-4 py-2 text-sm`}>
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </WhatsAppLink>
            <button
              className="grid h-10 w-10 place-items-center rounded-full text-primary hover:bg-muted"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="menu-mobile" aria-label="Principal" className="border-t border-border bg-background px-5 pb-4 pt-2 lg:hidden">
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-border/70 py-3 font-medium last:border-0">{label}</a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Início */}
        <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-12 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-20">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-2 text-sm font-semibold text-primary">
              <MapPin className="h-4 w-4" /> {SITE.location}
            </p>
            <h1 className="mt-6 text-5xl leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
              Pets felizes começam aqui.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              A {SITE.name} fica no Centro de Contagem. Chame a gente pelo WhatsApp e converse sobre o que o seu pet precisa.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppLink className={`${btnWhats} px-7 py-4 text-base shadow-soft`}>
                <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
              </WhatsAppLink>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={`${btnOutline} px-7 py-4 text-base`}>
                <Instagram className="h-5 w-5" /> {SITE.instagramHandle}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:150ms] md:max-w-none">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-primary" style={{ borderRadius: "999px 999px 2rem 2rem" }} />
            <div aria-hidden className="absolute inset-0 -translate-x-3 -translate-y-1 bg-accent" style={{ borderRadius: "999px 999px 2rem 2rem" }} />
            <img
              src={caoGravata}
              alt="Cachorro branco e peludo de gravatinha, com a língua de fora, diante do painel da Lovs Pet"
              className="relative aspect-[4/5] w-full object-cover shadow-soft"
              style={{ borderRadius: "999px 999px 2rem 2rem", objectPosition: "50% 55%" }}
            />
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="bg-secondary py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative mx-auto w-full max-w-md pb-16 pr-12 md:max-w-none">
              <img src={gatoCaminha} alt="Gato preto e branco deitado em uma caminha de corda ao lado de um tigre de pelúcia" loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" style={{ objectPosition: "50% 45%" }} />
              <img src={gatoColeira} alt="Gato branco com manchas pretas e coleira azul, sentado e olhando para a câmera" loading="lazy" className="absolute bottom-0 right-0 aspect-[3/4] w-[42%] rounded-[1.5rem] border-4 border-secondary object-cover shadow-soft" style={{ objectPosition: "50% 30%" }} />
            </div>
            <div>
              <h2 className="text-4xl leading-tight text-primary sm:text-5xl">Bem-vindo à {SITE.name}</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A {SITE.name} é um pet shop no Centro de Contagem - MG, pensado para quem trata o pet como parte da família. Aqui, cada cachorro e cada gato é recebido com carinho e atenção.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Para ver o dia a dia da loja e os clientes de quatro patas, acompanhe {SITE.instagramHandle} no Instagram.
              </p>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={`${btnPlum} mt-8 px-7 py-3.5`}>
                <Instagram className="h-5 w-5" /> Ver o Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-4xl leading-tight text-primary sm:text-5xl">Serviços</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Estamos reunindo os serviços da loja. Pergunte pelo WhatsApp o que está disponível para o seu pet.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => {
              const Icon = serviceIcons[i % serviceIcons.length] ?? PawPrint;
              return (
                <article key={i} className="flex flex-col rounded-[1.5rem] border border-border bg-card p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></span>
                    {!service.confirmed && <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold text-primary">{PENDING}</span>}
                  </div>
                  <h3 className="mt-6 text-2xl text-primary">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </article>
              );
            })}
          </div>
          <WhatsAppLink className={`${btnPlum} mt-10 px-7 py-3.5`}>
            <MessageCircle className="h-5 w-5" /> Perguntar pelo WhatsApp
          </WhatsAppLink>
        </section>

        {/* Galeria */}
        <section id="galeria" className="bg-plum py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-4xl leading-tight sm:text-5xl">Clientes de quatro patas</h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">Toque em uma foto para ampliar.</p>
            <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {gallery.map((photo, i) => (
                <li key={photo.src} className={i % 2 === 1 ? "md:translate-y-10" : ""}>
                  <button type="button" onClick={() => setZoom(photo)} className="group block w-full overflow-hidden rounded-[1.5rem] bg-primary" aria-label={`Ampliar foto: ${photo.alt}`}>
                    <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105" style={{ objectPosition: photo.pos }} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="h-10 md:h-12" aria-hidden />
          </div>
        </section>

        {/* Horários */}
        <section id="horarios" className="mx-auto max-w-6xl px-5 pt-20 md:pt-28">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl leading-tight text-primary sm:text-5xl">Horário de funcionamento</h2>
              <p className="mt-4 text-lg text-muted-foreground">Os horários ainda serão confirmados. Para saber se estamos abertos, chame no WhatsApp.</p>
            </div>
            <ul className="divide-y divide-border rounded-[1.5rem] border border-border bg-card">
              {hours.map(([day, time]) => (
                <li key={day} className="flex items-center justify-between gap-4 px-6 py-4">
                  <span className="font-medium">{day}</span>
                  <span className={time === PENDING ? "rounded-full bg-blush px-3 py-1 text-sm font-semibold text-primary" : time === "Fechado" ? "text-muted-foreground" : "font-semibold text-primary"}>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Localização */}
        <section id="localizacao" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl leading-tight text-primary sm:text-5xl">Onde estamos</h2>
              <p className="mt-6 flex items-start gap-3 text-xl">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" /> {SITE.location}
              </p>
              <p className="mt-3 text-muted-foreground">O endereço completo será divulgado em breve. Para chegar sem erro, peça a localização pelo WhatsApp.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className={`${btnOutline} px-6 py-3`}>
                  <Navigation className="h-4 w-4" /> Abrir no mapa
                </a>
                <WhatsAppLink className={`${btnPlum} px-6 py-3`}>
                  <MessageCircle className="h-4 w-4" /> Pedir localização
                </WhatsAppLink>
              </div>
            </div>
            <iframe title="Mapa do Centro de Contagem - MG" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={MAPS_EMBED} className="h-80 w-full rounded-[1.5rem] border border-border md:h-96" />
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="px-5 pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-accent px-6 py-16 text-center text-accent-foreground sm:px-12">
            <h2 className="text-4xl leading-tight sm:text-5xl">Vamos conversar?</h2>
            <p className="mx-auto mt-4 max-w-md text-lg">Tire dúvidas, pergunte sobre serviços e horários ou veja novidades no Instagram.</p>
            <p className="mt-6 inline-flex items-center gap-2 text-lg font-semibold"><Phone className="h-5 w-5" /> Telefone e WhatsApp: {SITE.phoneDisplay}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <WhatsAppLink className={`${btnPlum} px-8 py-4 text-base`}>
                <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
              </WhatsAppLink>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={`${btnBase} border-2 border-plum px-8 py-4 text-base text-plum hover:bg-plum hover:text-white`}>
                <Instagram className="h-5 w-5" /> {SITE.instagramHandle}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-plum text-white/85">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <p className="flex items-baseline gap-2"><Wordmark light className="text-3xl" /><span className="font-semibold">Pet Shop</span></p>
            <p className="mt-4 flex gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {SITE.location}</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">Contato</p>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 hover:text-accent"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 hover:text-accent"><Instagram className="h-4 w-4" /> {SITE.instagramHandle}</a>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">Navegação</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {nav.map(([label, href]) => <li key={href}><a href={href} className="hover:text-accent">{label}</a></li>)}
            </ul>
          </div>
        </div>
        <p className="border-t border-white/15 px-5 py-5 text-center text-xs text-white/70">
          <Clock className="mr-1 inline h-3 w-3" aria-hidden /> Horários e serviços em confirmação. © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
        </p>
      </footer>

      <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Lovs Pet Shop pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-soft transition hover:-translate-y-0.5 md:hidden">
        <MessageCircle className="h-6 w-6" />
      </a>

      <Dialog open={zoom !== null} onOpenChange={(v) => !v && setZoom(null)}>
        <DialogContent className="max-w-md overflow-hidden border-0 bg-plum p-2">
          <DialogTitle className="sr-only">Foto da galeria</DialogTitle>
          <DialogDescription className="sr-only">{zoom?.alt}</DialogDescription>
          {zoom && <img src={zoom.src} alt={zoom.alt} className="max-h-[80vh] w-full rounded-xl object-contain" />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
