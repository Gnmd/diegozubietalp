import { Plus } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { FAQ } from '@/config/site';

const Faq = () => (
  <section id="duvidas" className="bg-mist py-24 md:py-32">
    <div className="container grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Antes de <span className="accent text-darkblue-600">agendar</span>.
            </>
          }
        />
      </div>

      <div className="lg:col-span-7">
        {FAQ.map((item, i) => (
          <Reveal key={item.q} delay={i * 60}>
            <details className="group border-b border-slate-200 py-2 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl py-5 font-display text-lg font-medium text-ink md:text-xl">
                {item.q}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-darkblue-700 ring-1 ring-ink/10 transition-transform duration-300 group-open:rotate-45 group-open:bg-ink group-open:text-white">
                  <Plus size={18} aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-12 leading-relaxed text-slate-600">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
