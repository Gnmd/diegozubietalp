import { LifeBuoy } from 'lucide-react';
import BrainMark from '@/components/BrainMark';
import Reveal from '@/components/Reveal';
import WhatsAppLink from '@/components/WhatsAppLink';
import { SITE } from '@/config/site';

const FinalCta = () => (
  <section aria-labelledby="cta-titulo" className="bg-mist px-3 pb-3 md:px-6 md:pb-6">
    <div className="grain relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-darkblue-800 via-darkblue-950 to-ink px-6 py-20 text-center text-white md:py-28">
      <BrainMark
        className="pointer-events-none absolute -bottom-24 left-1/2 w-[38rem] max-w-none -translate-x-1/2 text-transparent opacity-30"
        fill="none"
        stroke="#4db6d8"
        strokeWidth={1}
      />

      <Reveal className="relative mx-auto max-w-3xl">
        <h2 id="cta-titulo" className="text-4xl font-semibold leading-[1.05] md:text-6xl">
          Cuidar da mente também é <span className="accent">um primeiro passo</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-darkblue-100/80">
          Envie uma mensagem e agende sua consulta, presencial em Piracicaba ou online.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <WhatsAppLink source="cta_final" className="btn-primary px-8 py-4 text-base">
            Agendar pelo WhatsApp
          </WhatsAppLink>
          <span className="text-sm text-darkblue-100/70">{SITE.whatsappDisplay}</span>
        </div>
      </Reveal>

      <Reveal delay={150} className="relative mx-auto mt-16 flex max-w-2xl items-start gap-4 rounded-2xl bg-white/[0.06] p-5 text-left ring-1 ring-white/10 backdrop-blur-sm">
        <LifeBuoy size={22} className="mt-0.5 shrink-0 text-darkblue-300" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-darkblue-100/85">
          <strong className="text-white">Está em crise ou pensando em se machucar?</strong> Este canal não atende emergências.
          Ligue para o{' '}
          <a href="tel:188" className="font-semibold text-darkblue-200 underline underline-offset-2">
            CVV · 188
          </a>{' '}
          (gratuito, 24 horas), para o{' '}
          <a href="tel:192" className="font-semibold text-darkblue-200 underline underline-offset-2">
            SAMU · 192
          </a>{' '}
          ou procure o pronto-socorro mais próximo.
        </p>
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
