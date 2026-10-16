import { Activity, Brain, Moon, Waves, Zap, Wine } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { AREAS } from '@/config/site';

const ICONS = [Brain, Activity, Waves, Zap, Moon, Wine];

// Grade "bento": os dois primeiros cartões ocupam mais espaço.
const LAYOUT = [
  'lg:col-span-2 bg-ink text-white',
  'lg:col-span-2 bg-darkblue-900 text-white',
  'bg-white',
  'bg-white',
  'bg-white',
  'bg-white',
];

const Areas = () => (
  <section id="areas" className="bg-mist py-24 md:py-32">
    <div className="container">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Áreas de atuação"
          title={
            <>
              Quando vale a pena <span className="accent text-darkblue-600">conversar</span> com um psiquiatra.
            </>
          }
        />
        <Reveal delay={100} className="max-w-sm text-slate-600 leading-relaxed">
          Atendimento a adultos em saúde mental. Se algo tem afetado o seu sono, o trabalho, as relações ou o bem-estar, uma
          avaliação pode ajudar.
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {AREAS.map((area, i) => {
          const Icon = ICONS[i];
          const dark = i < 2;
          return (
            <Reveal
              as="li"
              key={area.title}
              delay={i * 70}
              className={`group relative overflow-hidden rounded-3xl p-7 ring-1 ring-ink/5 ${LAYOUT[i]} ${dark ? 'md:min-h-[15rem]' : ''}`}
            >
              <div className="flex h-full flex-col">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${
                    dark ? 'bg-white/10 text-darkblue-300' : 'bg-darkblue-50 text-darkblue-800'
                  }`}
                >
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className={`mt-auto pt-10 font-semibold ${dark ? 'text-3xl' : 'text-xl text-ink'}`}>{area.title}</h3>
                <p className={`mt-2 leading-relaxed ${dark ? 'max-w-sm text-darkblue-100/75' : 'text-slate-600'}`}>{area.text}</p>
              </div>
              {dark && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-2 font-serif text-[7rem] italic leading-none text-white/[0.06]"
                >
                  0{i + 1}
                </span>
              )}
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
