import BrainMark from '@/components/BrainMark';
import Reveal from '@/components/Reveal';
import { FOTO_SOBRE } from '@/lib/images';

const About = () => (
  <section id="sobre" className="relative overflow-hidden bg-white py-24 md:py-32">
    <div className="container grid items-center gap-14 lg:grid-cols-12">
      <Reveal className="relative lg:col-span-5">
        <div className="relative mx-auto max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-[2.5rem] rounded-tr-[7rem] shadow-[0_30px_60px_-30px_rgba(12,33,56,0.5)]">
            <img
              src={FOTO_SOBRE}
              alt="Retrato do Dr. Diego Zubieta"
              width="1067"
              height="1600"
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 grid h-28 w-28 place-items-center rounded-full bg-sky-200 shadow-xl ring-8 ring-white md:-right-8 md:h-32 md:w-32">
            <BrainMark className="h-14 w-14 text-ink md:h-16 md:w-16" />
          </div>
        </div>
      </Reveal>

      <div className="lg:col-span-7 lg:pl-8">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-darkblue-700" aria-hidden="true" />
            Sobre
          </p>
          <h2 className="mt-4 text-4xl leading-[1.1] text-ink md:text-5xl">
            Formado no maior complexo de <span className="accent">saúde mental</span> da América Latina.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-8 space-y-5 text-lg leading-relaxed text-slate-600">
          <p>
            O Dr. Diego Zubieta é médico e cursa o último ano da residência em psiquiatria no{' '}
            <strong className="font-semibold text-ink">Instituto Bairral</strong>, referência no manejo de casos graves e
            complexos.
          </p>
          <p>
            Com uma abordagem centrada na <strong className="font-semibold text-ink">ética</strong>, na{' '}
            <strong className="font-semibold text-ink">empatia</strong> e no compromisso com o bem-estar, dedica-se ao cuidado
            integral da saúde mental, com um atendimento humanizado e baseado em evidências científicas.
          </p>
          <p>
            Sua prática parte do respeito à individualidade de cada paciente: um ambiente acolhedor e seguro para falar sobre o
            que está difícil.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
