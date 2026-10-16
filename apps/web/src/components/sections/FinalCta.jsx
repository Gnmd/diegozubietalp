import { LifeBuoy } from 'lucide-react';
import BrainMark from '@/components/BrainMark';
import Reveal from '@/components/Reveal';
import WhatsAppLink from '@/components/WhatsAppLink';
import { SITE } from '@/config/site';

const FinalCta = () => (
  <section aria-labelledby="cta-titulo" className="bg-white px-3 pb-3 md:px-6 md:pb-6">
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-100 via-sky-50 to-sand-100 px-6 py-20 text-center ring-1 ring-sky-200 md:py-28">
      <BrainMark
        className="pointer-events-none absolute -bottom-24 left-1/2 w-[38rem] max-w-none -translate-x-1/2 text-transparent"
        fill="none"
        stroke="#b5d4e5"
        strokeWidth={1.25}
      />

      <Reveal className="relative mx-auto max-w-3xl">
        <h2 id="cta-titulo" className="text-4xl leading-[1.1] text-ink md:text-6xl">
          Cuidar da mente também é <span className="accent">um primeiro passo</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700">
          Envie uma mensagem e agende sua consulta, presencial em Piracicaba ou online.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <WhatsAppLink source="cta_final" className="btn-primary px-8 py-4 text-base">
            Agendar pelo WhatsApp
          </WhatsAppLink>
          <span className="text-sm text-slate-600">{SITE.whatsappDisplay}</span>
        </div>
      </Reveal>

      <Reveal delay={150} className="relative mx-auto mt-16 flex max-w-2xl items-start gap-4 rounded-2xl bg-white/80 p-5 text-left ring-1 ring-sky-200 backdrop-blur-sm">
        <LifeBuoy size={22} className="mt-0.5 shrink-0 text-darkblue-700" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-slate-700">
          <strong className="text-ink">Está em crise ou pensando em se machucar?</strong> Este canal não atende emergências.
          Ligue para o{' '}
          <a href="tel:188" className="font-semibold text-darkblue-800 underline underline-offset-2">
            CVV · 188
          </a>{' '}
          (gratuito, 24 horas), para o{' '}
          <a href="tel:192" className="font-semibold text-darkblue-800 underline underline-offset-2">
            SAMU · 192
          </a>{' '}
          ou procure o pronto-socorro mais próximo.
        </p>
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
