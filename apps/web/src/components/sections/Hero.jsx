import { ArrowDown, Building2, MapPin, Video } from 'lucide-react';
import BrainMark from '@/components/BrainMark';
import WhatsAppLink from '@/components/WhatsAppLink';
import { AREAS, SITE } from '@/config/site';
import { FOTO_HERO, FOTO_HERO_MOBILE } from '@/lib/images';

const HIGHLIGHTS = [
  { icon: MapPin, title: 'Presencial', text: 'Piracicaba/SP' },
  { icon: Video, title: 'Online', text: 'Brasil e exterior' },
  { icon: Building2, title: 'Instituto Bairral', text: 'Residência em Psiquiatria' },
];

const Marquee = () => {
  const items = AREAS.map((a) => a.title);
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((label) => (
        <li key={label} className="flex items-center">
          <span className="px-6 font-serif text-xl italic text-ink/80 md:text-2xl">{label}</span>
          <BrainMark className="h-3.5 w-3.5 text-darkblue-600/60" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative overflow-hidden border-t border-ink/10 bg-sky-100 py-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
};

const Hero = () => (
  <section id="inicio" className="relative overflow-hidden bg-sand-100">
    {/* foto em sangria à direita, dissolvida no fundo bege */}
    <div className="relative h-[26rem] sm:mx-auto sm:h-[34rem] sm:max-w-lg lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-auto lg:w-[50%] lg:max-w-none">
      <picture>
        <source media="(max-width: 1023px)" srcSet={FOTO_HERO_MOBILE} width="740" height="880" />
        <img
          src={FOTO_HERO}
          alt="Dr. Diego Zubieta, médico residente em psiquiatria"
          width="960"
          height="1200"
          className="h-full w-full object-cover object-[50%_0%] [mask-image:linear-gradient(to_bottom,#000_65%,transparent)] sm:[mask-image:radial-gradient(50%_60%_at_50%_42%,#000_60%,transparent)] lg:object-[50%_22%] lg:[mask-image:linear-gradient(to_right,transparent,#000_32%)]"
        />
      </picture>
    </div>

    <div className="container relative -mt-24 pb-14 sm:-mt-28 lg:mt-0 lg:flex lg:min-h-[44rem] lg:items-center lg:pb-16 lg:pt-36">
      <div className="max-w-xl">
        <p className="eyebrow">
          <span className="h-px w-8 bg-darkblue-700" aria-hidden="true" />
          {SITE.name} · {SITE.crm}
        </p>

        <h1 className="mt-6 text-[2.7rem] leading-[1.05] text-ink sm:text-6xl lg:text-[4.1rem]">
          Saúde mental com <span className="accent">escuta</span>, ciência e <span className="accent">presença</span>.
        </h1>

        <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-700">
          Médico residente do último ano de psiquiatria no <strong className="font-semibold text-ink">Instituto Bairral</strong>.
          Atendimento presencial em Piracicaba e online para todo o Brasil.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <WhatsAppLink source="hero" className="btn-primary">
            Agendar pelo WhatsApp
          </WhatsAppLink>
          <a href="#sobre" className="btn-outline">
            Conhecer o Dr. Diego
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>

    <div className="container relative pb-10">
      <dl className="grid gap-px overflow-hidden rounded-2xl bg-ink/10 ring-1 ring-ink/10 sm:grid-cols-3 lg:max-w-3xl">
        {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3 bg-white/70 p-4 backdrop-blur-sm">
            <Icon size={18} className="mt-0.5 shrink-0 text-darkblue-700" aria-hidden="true" />
            <div>
              <dt className="font-serif text-[1.05rem] font-semibold text-ink">{title}</dt>
              <dd className="text-sm text-slate-600">{text}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>

    <Marquee />
  </section>
);

export default Hero;
