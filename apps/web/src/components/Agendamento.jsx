import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Clock, MapPin } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
const Agendamento = () => {
  const [ref, isInView] = useInView({
    threshold: 0.2
  });
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5519991412825', '_blank');
  };
  return <section id="agendamento" className="py-20 px-4 bg-gradient-to-br from-darkblue-950 via-darkblue-900 to-darkblue-800 text-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-darkblue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Agende sua Consulta
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-darkblue-100 max-w-2xl mx-auto">
            Dê o primeiro passo para cuidar da sua saúde mental. Entre em contato e agende seu atendimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Presencial</h3>
                <p className="text-darkblue-100">Piracicaba/SP</p>
                <p className="text-sm text-darkblue-200 mt-2">Splendor Office - Rua Tiradentes, 1200, Centro - Sala 37</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Online</h3>
                <p className="text-darkblue-100">Para todo Brasil e mundo</p>
                <p className="text-sm text-darkblue-200 mt-2">Plataforma MentalMe</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-darkblue-900 mb-4">Como Agendar</h3>
              <p className="text-slate-600">Entre em contato através do WhatsApp para agendar sua consulta</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4 text-slate-700">
                <div className="w-10 h-10 bg-darkblue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-darkblue-900" size={20} />
                </div>
                <p>Agendamento rápido e prático</p>
              </div>
              <div className="flex items-center space-x-4 text-slate-700">
                <div className="w-10 h-10 bg-darkblue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-darkblue-900" size={20} />
                </div>
                <p>Horários flexíveis</p>
              </div>
              <div className="flex items-center space-x-4 text-slate-700">
                <div className="w-10 h-10 bg-darkblue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-darkblue-900" size={20} />
                </div>
                <p>Atendimento personalizado</p>
              </div>
            </div>

            <button onClick={handleWhatsAppClick} className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
              <MessageCircle size={24} />
              <span>Agendar via WhatsApp</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Agendamento;