import { ArrowUpRight, Globe, MapPin, MessageCircle } from 'lucide-react';
import BrainMark from '@/components/BrainMark';
import WhatsAppLink from '@/components/WhatsAppLink';
import { LOCATIONS, SITE } from '@/config/site';

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
  <div className="relative min-h-screen overflow-hidden bg-sand-100 text-ink">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/70 blur-[110px]" />
      <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky-100 blur-[120px]" />
    </div>

    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-8 pt-14">
      <header className="flex flex-col items-center text-center">
        <div className="relative grid h-32 w-32 place-items-center rounded-full bg-white shadow-[0_20px_45px_-25px_rgba(12,33,56,0.5)] ring-1 ring-sky-200">
          <BrainMark className="h-16 w-16 text-ink" title="Logo Dr. Diego Zubieta" />
        </div>

        <h1 className="mt-8 text-4xl text-ink">{SITE.name}</h1>
        <p className="mt-2 text-sm text-slate-600">
          {SITE.crm} · {SITE.role}
        </p>
        <p className="mt-4 font-serif text-lg italic text-darkblue-700">Residência no Instituto Bairral · último ano</p>
      </header>

      <nav aria-label="Links" className="mt-10 grid gap-3">
        <WhatsAppLink
          source="links"
          className="group flex items-center gap-4 rounded-2xl bg-ink p-4 text-white shadow-[0_14px_32px_-16px_rgba(12,33,56,0.7)] transition hover:bg-darkblue-900"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200">
            <MessageCircle size={20} aria-hidden="true" />
          </span>
          <span className="flex-1">
            <span className="block font-serif text-lg font-semibold leading-tight">Agendar consulta</span>
            <span className="block text-sm text-white/70">WhatsApp · {SITE.whatsappDisplay}</span>
          </span>
          <ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </WhatsAppLink>

        {LINKS.map(({ href, label, hint, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex items-center gap-4 rounded-2xl bg-white/80 p-4 ring-1 ring-sand-200 backdrop-blur-sm transition hover:bg-white hover:ring-sky-300"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-100 text-darkblue-800">
              <Icon size={20} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-serif text-lg font-semibold leading-tight">{label}</span>
              <span className="block truncate text-sm text-slate-600">{hint}</span>
            </span>
            <ArrowUpRight size={18} aria-hidden="true" className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </nav>

      <p className="mt-6 text-center text-sm text-slate-600">
        Presencial em {LOCATIONS.presencial.city} · Online para todo o Brasil e o exterior
        <br />
        Atendimento particular
      </p>

      <footer className="mt-auto pt-12 text-center">
        <p className="rounded-2xl bg-white/70 p-4 text-xs leading-relaxed text-slate-600 ring-1 ring-sand-200">
          <strong className="text-ink">Em crise?</strong> Este canal não atende emergências. Ligue para o{' '}
          <a href="tel:188" className="font-semibold text-darkblue-800 underline underline-offset-2">CVV · 188</a> ou o{' '}
          <a href="tel:192" className="font-semibold text-darkblue-800 underline underline-offset-2">SAMU · 192</a>.
        </p>
        <a href="/" className="mt-6 inline-flex items-center gap-2 text-xs text-slate-500 hover:text-ink">
          <BrainMark className="h-4 w-4" />
          drdiegozubieta.com.br
        </a>
      </footer>
    </main>
  </div>
);

export default LinksPage;
