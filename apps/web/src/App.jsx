import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import About from '@/components/sections/About';
import Areas from '@/components/sections/Areas';
import Care from '@/components/sections/Care';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Journey from '@/components/sections/Journey';
import Pillars from '@/components/sections/Pillars';

const App = () => (
  <>
    <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
      Pular para o conteúdo
    </a>
    <Header />
    <main id="conteudo">
      <Hero />
      <About />
      <Pillars />
      <Areas />
      <Journey />
      <Care />
      <Faq />
      <FinalCta />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default App;
