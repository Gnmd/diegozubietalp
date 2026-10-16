import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="https://horizons-cdn.hostinger.com/b3776de1-03b0-4e95-bce0-e39f3d919431/68a47b348ad91a19a25bbaea7a5f64aa.png" alt="Logo Dr. Diego Zubieta" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="font-bold text-lg">Dr. Diego Zubieta</p>
                <p className="text-sm text-slate-400">CRM/SP 246.697</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Médico residente em psiquiatria, dedicado ao cuidado integral da saúde mental.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Locais de Atendimento</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p>Splendor Office - Piracicaba/SP</p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p>Online - MentalMe</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <p>WhatsApp: (19) 99141-2825</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <p>E-mail: diegozub94@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="bg-darkblue-900/30 rounded-xl p-6 mb-6">
            <p className="text-sm text-darkblue-100 leading-relaxed">
              <strong>Aviso Importante:</strong> Este site tem caráter exclusivamente informativo e educacional. As informações aqui contidas não substituem a consulta médica, que é essencial para diagnóstico, orientação e tratamento adequados. Sempre procure um médico para avaliação individualizada.
            </p>
          </div>

          <div className="text-center text-slate-500 text-sm">
            <p className="mb-2">Dr. Diego Zubieta - Médico Residente em Psiquiatria</p>
            <p>CRM/SP 246.697 | Residência: Instituto Bairral | Graduação: UNIFEV</p>
            <p className="mt-4">© {new Date().getFullYear()} - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;