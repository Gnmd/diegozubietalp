import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="sobre" className="py-20 px-4 bg-white" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-darkblue-900 mb-4">
            Sobre o Médico
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-darkblue-900 to-darkblue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-darkblue-50 to-slate-50 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            O Dr. Diego Zubieta é médico e atualmente residente em psiquiatria no renomado <strong>Instituto Bairral</strong>, o maior complexo hospitalar de saúde mental da América Latina, reconhecido pelo manejo de casos graves e complexos.
          </p>
          
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Com uma abordagem centrada na <strong>ética</strong>, <strong>empatia</strong> e <strong>compromisso com o bem-estar</strong> de seus pacientes, o Dr. Diego dedica-se ao cuidado integral da saúde mental, oferecendo um atendimento humanizado e baseado em evidências científicas.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Sua prática clínica é fundamentada no respeito à individualidade de cada paciente, promovendo um ambiente acolhedor e seguro para o tratamento de diversas condições psiquiátricas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;