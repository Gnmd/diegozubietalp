import { ArrowUpRight, MapPin, Video } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppLink from '@/components/WhatsAppLink';
import { LOCATIONS, STEPS } from '@/config/site';

const Care = () => (
  <section id="atendimento" className="bg-sand-100 py-24 md:py-32">
    <div className="container">
      <SectionHeading
        eyebrow="Atendimento"
        title={
          <>
            No consultório ou <span className="accent">de onde você estiver</span>.
          </>
        }
        intro="Atendimento exclusivamente particular."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Reveal className="flex flex-col rounded-[2rem] bg-white p-8 ring-1 ring-sand-200 md:p-10">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sand-100 text-darkblue-800">
            <MapPin size={24} aria-hidden="true" />
          </span>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-darkblue-700">Presencial</p>
          <h3 className="mt-2 text-3xl text-ink">{LOCATIONS.presencial.city}</h3>
          <p className="mt-3 text-lg text-slate-700">{LOCATIONS.presencial.place}</p>
          <p className="text-slate-600">{LOCATIONS.presencial.address}</p>
          <a
            href={LOCATIONS.presencial.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-8 self-start"
          >
            Ver no mapa <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={100} className="flex flex-col rounded-[2rem] bg-sky-100 p-8 ring-1 ring-sky-200 md:p-10">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-darkblue-800">
            <Video size={24} aria-hidden="true" />
          </span>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-darkblue-700">Online</p>
          <h3 className="mt-2 text-3xl text-ink">{LOCATIONS.online.reach}</h3>
          <p className="mt-3 text-lg text-slate-700">O mesmo cuidado do consultório, sem sair de casa.</p>
          <WhatsAppLink source="atendimento_online" className="btn-primary mt-8 self-start">
            Agendar consulta online
          </WhatsAppLink>
        </Reveal>
      </div>

      <div className="mt-24">
        <Reveal>
          <h3 className="text-3xl text-ink md:text-4xl">
            Do primeiro contato à <span className="accent">consulta</span>.
          </h3>
        </Reveal>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 100} className="relative border-t border-ink/10 pt-8">
              <span className="absolute -top-px left-0 h-px w-16 bg-darkblue-700" aria-hidden="true" />
              <span className="font-serif text-5xl italic leading-none text-darkblue-700">{i + 1}</span>
              <h4 className="mt-4 text-xl text-ink">{step.title}</h4>
              <p className="mt-2 leading-relaxed text-slate-600">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Care;
