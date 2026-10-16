import BrainMark from '@/components/BrainMark';
import WhatsAppLink from '@/components/WhatsAppLink';
import { LOCATIONS, NAV, SITE } from '@/config/site';

const Footer = () => (
  <footer className="bg-mist pb-24 pt-16 text-slate-600 md:pb-12">
    <div className="container">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <BrainMark className="h-10 w-10 text-ink" title="Logo Dr. Diego Zubieta" />
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold text-ink">{SITE.name}</p>
              <p className="text-sm">{SITE.role}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            {SITE.crm} · Residência em Psiquiatria no Instituto Bairral · Graduação em Medicina pela UNIFEV.
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-5 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Onde atende</p>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed">
              <span className="block">
                {LOCATIONS.presencial.place}
                <br />
                {LOCATIONS.presencial.address}
                <br />
                {LOCATIONS.presencial.city}
              </span>
              <span className="block">Online · Brasil e exterior</span>
            </address>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Contato</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <WhatsAppLink source="footer" className="hover:text-ink">
                  WhatsApp {SITE.whatsappDisplay}
                </WhatsAppLink>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-ink">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-8 text-xs leading-relaxed md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl">
          Este site tem caráter exclusivamente informativo e não substitui a consulta médica, essencial para diagnóstico e
          tratamento.
        </p>
        <p className="shrink-0">© {new Date().getFullYear()} {SITE.name}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
