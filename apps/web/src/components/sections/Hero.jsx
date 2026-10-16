import { ArrowDown, MapPin, Video } from 'lucide-react';
import BrainMark from '@/components/BrainMark';
import WhatsAppLink from '@/components/WhatsAppLink';
import { AREAS, SITE } from '@/config/site';
import { FOTO_HERO } from '@/lib/images';

const Marquee = () => {
  const items = [...AREAS.map((a) => a.title), 'Saúde mental', 'Acolhimento'];
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((label) => (
        <li key={label} className="flex items-center">
          <span className="px-6 font-serif text-2xl italic text-white/85 md:text-3xl">{label}</span>
          <BrainMark className="h-4 w-4 text-darkblue-300" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative border-t border-white/10 py-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
};

const Hero = () => (
  <section id="inicio" className="grain relative overflow-hidden bg-ink text-white">
    {/* luzes de fundo */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -left-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-darkblue-800/50 blur-[120px]" />
      <div className="absolute -right-20 -top-20 h-[30rem] w-[30rem] rounded-full bg-darkblue-500/25 blur-[120px]" />
    </div>

    <div className="container relative pt-32 pb-14 md:pt-40 lg:pb-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow text-darkblue-300">
            <span className="h-px w-8 bg-darkblue-300" aria-hidden="true" />
            {SITE.name} · {SITE.crm}
          </p>

          <h1 className="mt-6 text-[2.75rem] font-semibold leading-[1.02] sm:text-6xl xl:text-7xl">
            Saúde mental com <span className="accent">escuta</span>, ciência e{' '}
            <span className="accent">presença</span>.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-darkblue-100/80">
            Médico residente do último ano de psiquiatria no <strong className="font-semibold text-white">Instituto Bairral</strong>.
            Atendimento presencial em Piracicaba e online para todo o Brasil.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <WhatsAppLink source="hero" className="btn-primary">
              Agendar pelo WhatsApp
            </WhatsAppLink>
            <a href="#sobre" className="btn-ghost">
              Conhecer o Dr. Diego
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 text-sm">
            <div className="flex items-start gap-3 bg-ink/80 p-4">
              <MapPin size={18} className="mt-0.5 shrink-0 text-darkblue-300" aria-hidden="true" />
              <div>
                <dt className="font-semibold text-white">Presencial</dt>
                <dd className="text-darkblue-100/70">Piracicaba/SP</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-ink/80 p-4">
              <Video size={18} className="mt-0.5 shrink-0 text-darkblue-300" aria-hidden="true" />
              <div>
                <dt className="font-semibold text-white">Online</dt>
                <dd className="text-darkblue-100/70">Brasil e exterior</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
          {/* o logo, em linha, "respirando" atrás da foto */}
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 hidden w-[112%] -translate-x-1/2 -translate-y-1/2 sm:block">
            <BrainMark className="w-full animate-breathe text-transparent" fill="none" stroke="#4db6d8" strokeWidth={1.25} />
          </div>

          <figure className="relative mx-auto w-[84%] lg:w-[78%]">
            <div className="overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/15">
              <img
                src={FOTO_HERO}
                alt="Dr. Diego Zubieta, médico residente em psiquiatria"
                width="1067"
                height="1600"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-5 -left-6 rounded-2xl bg-white/90 px-5 py-4 text-ink shadow-xl backdrop-blur-md sm:-left-10">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-darkblue-700">Último ano de residência</p>
              <p className="mt-1 font-display text-lg font-semibold leading-snug">Instituto Bairral</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <Marquee />
  </section>
);

export default Hero;
