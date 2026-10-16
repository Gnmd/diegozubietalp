import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Award } from 'lucide-react';
const Hero = () => {
  const scrollToAgendamento = () => {
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-darkblue-950 via-darkblue-900 to-darkblue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-darkblue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            <div className="inline-block bg-darkblue-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-darkblue-200 text-sm font-medium">Residente em Psiquiatria • CRM/SP 246.697</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Dr. Diego Zubieta
            </h1>
            
            <p className="text-xl text-darkblue-100 mb-8 leading-relaxed">Médico residente em psiquiatria dedicado ao cuidado integral da saúde mental, em formação no Instituto Bairral e compromisso com a ética e o acolhimento.</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Heart className="text-darkblue-300" size={20} />
                <span className="text-sm">Acolhimento</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Shield className="text-darkblue-300" size={20} />
                <span className="text-sm">Ética Profissional</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="text-darkblue-300" size={20} />
                <span className="text-sm">Excelência</span>
              </div>
            </div>

            <button onClick={scrollToAgendamento} className="bg-white text-darkblue-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Agende sua Consulta
            </button>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-darkblue-400 to-cyan-400 rounded-3xl blur-2xl opacity-30"></div>
              <img className="relative rounded-3xl shadow-2xl w-full h-auto object-cover" alt="Dr. Diego Zubieta - Médico Psiquiatra" src="https://horizons-cdn.hostinger.com/b3776de1-03b0-4e95-bce0-e39f3d919431/imagem-do-whatsapp-de-2025-11-06-a-s-21.37.54_bc07db54-Lt3gj.jpg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;