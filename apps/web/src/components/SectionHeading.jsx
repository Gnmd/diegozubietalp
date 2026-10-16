import Reveal from '@/components/Reveal';

const SectionHeading = ({ eyebrow, title, intro, center = false }) => (
  <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
    <p className="eyebrow">
      <span className="h-px w-8 bg-darkblue-700" aria-hidden="true" />
      {eyebrow}
    </p>
    <h2 className="mt-4 text-4xl leading-[1.1] text-ink md:text-5xl">{title}</h2>
    {intro && <p className="mt-5 text-lg leading-relaxed text-slate-600">{intro}</p>}
  </Reveal>
);

export default SectionHeading;
