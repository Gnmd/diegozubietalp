import Reveal from '@/components/Reveal';

const SectionHeading = ({ eyebrow, title, intro, dark = false, center = false }) => (
  <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
    <p className={`eyebrow ${dark ? 'text-darkblue-300' : ''}`}>
      <span className={`h-px w-8 ${dark ? 'bg-darkblue-300' : 'bg-darkblue-700'}`} aria-hidden="true" />
      {eyebrow}
    </p>
    <h2 className={`mt-4 text-4xl md:text-5xl font-semibold leading-[1.05] ${dark ? 'text-white' : 'text-ink'}`}>
      {title}
    </h2>
    {intro && (
      <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-darkblue-100/80' : 'text-slate-600'}`}>{intro}</p>
    )}
  </Reveal>
);

export default SectionHeading;
