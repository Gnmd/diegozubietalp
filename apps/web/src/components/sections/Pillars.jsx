import { useState } from 'react';
import BrainMark from '@/components/BrainMark';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { PILLARS } from '@/config/site';

// Os quatro pilares do cuidado, cada um ligado a um lobo do logo.
const Pillars = () => {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="pilares-titulo" className="bg-sand-100 py-24 md:py-32">
      <div className="container grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div id="pilares-titulo">
            <SectionHeading
              eyebrow="Como cuido"
              title={
                <>
                  Quatro pilares, <span className="accent">um só cuidado</span>.
                </>
              }
              intro="Assim como os lobos do logo formam um único cérebro, cada consulta reúne estes quatro princípios."
            />
          </div>
          <Reveal delay={150} className="mt-12 hidden lg:block">
            <div className="relative mx-auto w-72">
              <div className="absolute inset-6 rounded-full bg-sky-200/80 blur-3xl" aria-hidden="true" />
              <BrainMark className="relative w-full text-ink" highlight={active} dimOpacity={0.1} />
              <BrainMark
                className="pointer-events-none absolute inset-0 w-full text-darkblue-600"
                highlight={active}
                dimOpacity={0}
              />
            </div>
          </Reveal>
        </div>

        <ol className="grid gap-4">
          {PILLARS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`group flex w-full items-start gap-5 rounded-3xl border p-6 text-left transition-all duration-300 md:p-8 ${
                  active === i
                    ? 'border-sky-300 bg-sky-100 text-ink shadow-[0_24px_50px_-30px_rgba(12,33,56,0.45)]'
                    : 'border-sand-200 bg-white/70 text-ink hover:border-sky-300'
                }`}
              >
                <BrainMark
                  className={`mt-1 h-10 w-10 shrink-0 ${active === i ? 'text-darkblue-700' : 'text-ink'}`}
                  highlight={i}
                  dimOpacity={0.15}
                />
                <span>
                  <span className="block text-xs font-semibold tracking-[0.18em] text-darkblue-700">
                    0{i + 1}
                  </span>
                  <span className="mt-1 block font-serif text-2xl font-medium">{p.title}</span>
                  <span className="mt-2 block leading-relaxed text-slate-600">
                    {p.text}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Pillars;
