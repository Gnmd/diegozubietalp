import { ArrowUpRight, Globe, MapPin, MessageCircle } from 'lucide-react';
import BrainMark from '@/components/BrainMark';
import WhatsAppLink from '@/components/WhatsAppLink';
import { LOCATIONS, SITE } from '@/config/site';
import { FOTO_SOBRE } from '@/lib/images';

// Página de links para a bio do Instagram (/links).
const LINKS = [
  { href: '/', label: 'Conhecer o site', hint: 'Formação, áreas de atuação e dúvidas', icon: Globe },
  {
    href: LOCATIONS.presencial.mapsUrl,
    label: 'Como chegar ao consultório',
    hint: `${LOCATIONS.presencial.place} · ${LOCATIONS.presencial.city}`,
    icon: MapPin,
    external: true,
  },
];

const LinksPage = () => (
  <div className="grain relative min-h-screen overflow-hidden bg-ink text-white">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-darkblue-500/25 blur-[110px]" />
      <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-darkblue-800/50 blur-[120px]" />
    </div>

    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-8 pt-12">
      <header className="flex flex-col items-center text-center">
        <div className="relative h-44 w-44">
          <BrainMark
            className="absolute -inset-7 h-[calc(100%+3.5rem)] w-[calc(100%+3.5rem)] text-transparent"
            fill="none"
            stroke="#4db6d8"
            strokeWidth={1.25}
          />
          <img
            src={FOTO_SOBRE}
            alt="Foto do Dr. Diego Zubieta"
            width="1067"
            height="1600"
            className="relative h-full w-full rounded-full object-cover object-[55%_18%] ring-1 ring-white/20 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.8)]"
          />
        </div>

        <h1 className="mt-10 text-3xl font-semibold">{SITE.name}</h1>
        <p className="mt-1 text-sm text-darkblue-100/70">
          {SITE.crm} · {SITE.role}
        </p>
        <p className="mt-4 font-serif text-xl italic text-darkblue-200">
          Residência no Instituto Bairral · último ano
        </p>
      </header>

      <nav aria-label="Links" className="mt-10 grid gap-3">
        <WhatsAppLink
          source="links"
          className="group flex items-center gap-4 rounded-2xl bg-darkblue-300 p-4 text-ink shadow-[0_14px_36px_-14px_rgba(77,182,216,0.8)] transition hover:bg-darkblue-200"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-darkblue-300">
            <MessageCircle size={20} aria-hidden="true" />
          </span>
          <span className="flex-1">
            <span className="block font-display text-lg font-semibold leading-tight">Agendar consulta</span>
            <span className="block text-sm text-ink/70">WhatsApp · {SITE.whatsappDisplay}</span>
          </span>
          <ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </WhatsAppLink>

        {LINKS.map(({ href, label, hint, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex items-center gap-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/[0.1]"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-darkblue-300">
              <Icon size={20} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-lg font-semibold leading-tight">{label}</span>
              <span className="block truncate text-sm text-darkblue-100/65">{hint}</span>
            </span>
            <ArrowUpRight size={18} aria-hidden="true" className="text-darkblue-100/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </nav>

      <p className="mt-6 text-center text-sm text-darkblue-100/70">
        Presencial em {LOCATIONS.presencial.city} · Online para todo o Brasil e o exterior
      </p>

      <footer className="mt-auto pt-12 text-center">
        <p className="rounded-2xl bg-white/[0.04] p-4 text-xs leading-relaxed text-darkblue-100/70 ring-1 ring-white/10">
          <strong className="text-white">Em crise?</strong> Este canal não atende emergências. Ligue para o{' '}
          <a href="tel:188" className="font-semibold text-darkblue-200 underline underline-offset-2">CVV · 188</a> ou o{' '}
          <a href="tel:192" className="font-semibold text-darkblue-200 underline underline-offset-2">SAMU · 192</a>.
        </p>
        <a href="/" className="mt-6 inline-flex items-center gap-2 text-xs text-darkblue-100/50 hover:text-white">
          <BrainMark className="h-4 w-4" />
          drdiegozubieta.com.br
        </a>
      </footer>
    </main>
  </div>
);

export default LinksPage;
