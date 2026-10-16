import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import WhatsAppLink from '@/components/WhatsAppLink';

// Botão fixo de agendamento no celular, exibido depois que a pessoa passa do topo.
const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-500 sm:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <WhatsAppLink
        source="flutuante"
        tabIndex={visible ? undefined : -1}
        className="btn w-full bg-ink py-4 text-white shadow-[0_18px_40px_-12px_rgba(12,33,56,0.7)]"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Agendar pelo WhatsApp
      </WhatsAppLink>
    </div>
  );
};

export default FloatingWhatsApp;
