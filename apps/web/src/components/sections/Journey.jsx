import BrainMark from '@/components/BrainMark';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { JOURNEY } from '@/config/site';

const Journey = () => (
  <section id="trajetoria" className="grain relative overflow-hidden bg-ink py-24 text-white md:py-32">
    <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-darkblue-700/30 blur-[120px]" />

    <div className="container relative">
      <SectionHeading
        dark
        eyebrow="Trajetória"
        title={
          <>
            Formação e <span className="accent">atuação</span>.
          </>
        }
        intro="Da graduação ao último ano de residência, com experiência em ambulatório, clínica e hospital."
      />

      <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <span aria-hidden="true" className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-darkblue-300/60 via-white/15 to-transparent lg:block" />
        {JOURNEY.map((item, i) => (
          <Reveal as="li" key={item.place} delay={i * 110} className="relative pl-14 lg:pl-0">
            <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-ink ring-1 ring-darkblue-300/50 lg:relative">
              <BrainMark className="h-5 w-5 text-darkblue-300" highlight={i} dimOpacity={0.25} />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-darkblue-300 lg:mt-7">{item.tag}</p>
            <h3 className="mt-2 text-2xl font-semibold leading-snug">{item.title}</h3>
            <p className="mt-1 font-serif text-lg italic text-darkblue-100">{item.place}</p>
            <p className="mt-3 leading-relaxed text-darkblue-100/70">{item.text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Journey;
