import { Activity, Brain, Moon, Waves, Wine, Zap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { AREAS } from '@/config/site';

const ICONS = [Brain, Activity, Waves, Zap, Moon, Wine];

const Areas = () => (
  <section id="areas" className="bg-sky-50 py-24 md:py-32">
    <div className="container">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Áreas de atuação"
          title={
            <>
              Quando vale a pena <span className="accent">conversar</span> com um psiquiatra.
            </>
          }
        />
        <Reveal delay={100} className="max-w-sm leading-relaxed text-slate-600">
          Atendimento a adultos em saúde mental. Se algo tem afetado o seu sono, o trabalho, as relações ou o bem-estar, uma
          avaliação pode ajudar.
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((area, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal
              as="li"
              key={area.title}
              delay={i * 70}
              className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-sky-200"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-darkblue-800">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl text-ink">{area.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{area.text}</p>
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-8 text-sm text-slate-500">
        As informações deste site têm caráter informativo e não substituem uma consulta médica.
      </Reveal>
    </div>
  </section>
);

export default Areas;
