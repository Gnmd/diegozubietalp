import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Building2, Stethoscope } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const formacoes = [
  {
    icon: GraduationCap,
    title: 'Graduação em Medicina',
    institution: 'UNIFEV - Centro Universitário de Votuporanga',
    description: 'Formação médica com sólida base científica e humanística.'
  },
  {
    icon: Award,
    title: 'Residência em Psiquiatria',
    institution: 'Instituto Bairral de Psiquiatria',
    description: 'Especialização em uma das mais renomadas instituições de saúde mental do Brasil.'
  },
  {
    icon: Building2,
    title: 'Clínica Vivare',
    institution: 'Santo Antônio da Posse/SP',
    description: 'Responsável pelo setor de saúde mental, oferecendo atendimento especializado e acolhedor.'
  },
  {
    icon: Stethoscope,
    title: 'Hospital 22 de Outubro',
    institution: 'Mogi Mirim/SP',
    description: 'Membro da equipe de psiquiatria, contribuindo para o cuidado hospitalar em saúde mental.'
  }
];

const Formacao = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="formacao" className="py-20 px-4 bg-white" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-darkblue-900 mb-4">
            Formação e Atuação
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-darkblue-900 to-darkblue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trajetória acadêmica e profissional dedicada à excelência no cuidado em saúde mental.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {formacoes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-darkblue-50 to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-darkblue-900">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-darkblue-900 to-darkblue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-darkblue-900 mb-2">{item.title}</h3>
                    <p className="text-darkblue-700 font-semibold mb-2">{item.institution}</p>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-darkblue-900 to-darkblue-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Compromisso com a Ética Profissional</h3>
          <p className="text-lg leading-relaxed text-darkblue-100">
            A prática médica do Dr. Diego Zubieta é fundamentada nos mais altos padrões éticos estabelecidos pelo Conselho Regional de Medicina, priorizando sempre o bem-estar, a dignidade e a autonomia de cada paciente.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Formacao;