import { SITE } from '@/config/site';

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

// Link para o WhatsApp que registra o clique no Google Analytics.
const WhatsAppLink = ({ source, onClick, children, ...props }) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      window.gtag?.('event', 'whatsapp_click', { source });
      onClick?.(e);
    }}
    {...props}
  >
    {children}
  </a>
);

export default WhatsAppLink;
