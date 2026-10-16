import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrainMark from '@/components/BrainMark';
import WhatsAppLink from '@/components/WhatsAppLink';
import { NAV, SITE } from '@/config/site';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const light = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div
        className={`mx-auto max-w-6xl rounded-[1.75rem] transition-all duration-500 ${
          light
            ? 'bg-white/85 shadow-[0_12px_40px_-18px_rgba(12,33,56,0.45)] ring-1 ring-ink/5 backdrop-blur-xl'
            : 'bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-4 py-2.5 pl-4 pr-2.5 md:pl-5">
          <a href="#inicio" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <BrainMark className={`h-9 w-9 transition-colors duration-500 ${light ? 'text-ink' : 'text-white'}`} />
            <span className="leading-tight">
              <span className={`block font-display text-[1.05rem] font-semibold ${light ? 'text-ink' : 'text-white'}`}>
                {SITE.name}
              </span>
              <span className={`block text-xs ${light ? 'text-slate-500' : 'text-darkblue-100/70'}`}>{SITE.crm}</span>
            </span>
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      light ? 'text-slate-600 hover:bg-mist hover:text-ink' : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppLink
              source="header"
              className={`hidden sm:inline-flex btn py-2.5 text-sm ${light ? 'bg-ink text-white hover:bg-darkblue-900' : 'bg-darkblue-300 text-ink hover:bg-darkblue-200'}`}
            >
              Agendar consulta
            </WhatsAppLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className={`lg:hidden grid h-11 w-11 place-items-center rounded-full transition-colors ${
                light ? 'text-ink hover:bg-mist' : 'text-white hover:bg-white/10'
              }`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="menu-mobile" aria-label="Menu" className="lg:hidden border-t border-ink/5 px-3 pb-4 pt-2">
            <ul className="grid gap-1">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-display text-lg text-ink hover:bg-mist"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <WhatsAppLink source="menu" className="btn-dark mt-3 w-full" onClick={() => setOpen(false)}>
              Agendar consulta
            </WhatsAppLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
