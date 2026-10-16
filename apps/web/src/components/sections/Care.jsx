import { ArrowUpRight, MapPin, Video } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppLink from '@/components/WhatsAppLink';
import { LOCATIONS, STEPS } from '@/config/site';

const Care = () => (
  <section id="atendimento" className="bg-white py-24 md:py-32">
    <div className="container">
      <SectionHeading
        eyebrow="Atendimento"
        title={
          <>
            No consultório ou <span className="accent text-darkblue-600">de onde você estiver</span>.
          </>
        }
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Reveal className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-mist p-8 ring-1 ring-ink/5 md:p-10">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-darkblue-300">
            <MapPin size={24} aria-hidden="true" />
          </span>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-darkblue-700">Presencial</p>
          <h3 className="mt-2 text-3xl font-semibold text-ink">{LOCATIONS.presencial.city}</h3>
          <p className="mt-3 text-lg text-slate-700">{LOCATIONS.presencial.place}</p>
          <p className="text-slate-600">{LOCATIONS.presencial.address}</p>
          <a
            href={LOCATIONS.presencial.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 self-start border-b border-ink/30 pb-0.5 font-semibold text-ink transition-colors hover:border-ink"
          >
            Ver no mapa <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={100} className="relative flex flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-darkblue-900 to-ink p-8 text-white md:p-10">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-darkblue-400/30 blur-3xl" />
          <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-darkblue-300">
            <Video size={24} aria-hidden="true" />
          </span>
          <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-darkblue-300">Online</p>
          <h3 className="relative mt-2 text-3xl font-semibold">{LOCATIONS.online.reach}</h3>
          <p className="relative mt-3 text-lg text-darkblue-100/80">{LOCATIONS.online.platform}</p>
          <WhatsAppLink source="atendimento_online" className="btn-primary relative mt-8 self-start">
            Agendar consulta online
          </WhatsAppLink>
        </Reveal>
      </div>

      <div className="mt-24">
        <Reveal>
          <h3 className="text-3xl font-semibold text-ink md:text-4xl">
            Do primeiro contato à <span className="accent text-darkblue-600">consulta</span>.
          </h3>
        </Reveal>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 100} className="relative border-t border-slate-200 pt-8">
              <span className="absolute -top-px left-0 h-px w-16 bg-darkblue-500" aria-hidden="true" />
              <span className="font-serif text-5xl italic leading-none text-darkblue-400">{i + 1}</span>
              <h4 className="mt-4 text-xl font-semibold text-ink">{step.title}</h4>
              <p className="mt-2 leading-relaxed text-slate-600">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Care;
