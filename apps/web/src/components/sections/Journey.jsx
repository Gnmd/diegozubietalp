import BrainMark from '@/components/BrainMark';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { JOURNEY } from '@/config/site';

const Journey = () => (
  <section id="trajetoria" className="bg-white py-24 md:py-32">
    <div className="container">
      <SectionHeading
        eyebrow="Trajetória"
        title={
          <>
            Formação e <span className="accent">experiência</span>.
          </>
        }
        intro="Da graduação ao último ano de residência, com experiência em ambulatório, clínica e hospital."
      />

      <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <span aria-hidden="true" className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-darkblue-600/50 via-sky-300 to-transparent lg:block" />
        {JOURNEY.map((item, i) => (
          <Reveal as="li" key={item.place} delay={i * 110} className="relative pl-14 lg:pl-0">
            <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-sky-100 ring-1 ring-sky-300 lg:relative">
              <BrainMark className="h-5 w-5 text-darkblue-700" highlight={i} dimOpacity={0.25} />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-darkblue-700 lg:mt-7">{item.tag}</p>
            <h3 className="mt-2 text-2xl leading-snug text-ink">{item.title}</h3>
            <p className="mt-1 font-serif text-lg italic text-slate-700">{item.place}</p>
            <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Journey;
