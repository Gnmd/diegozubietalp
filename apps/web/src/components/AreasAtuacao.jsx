import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Moon, Smile, Activity, Heart, Zap } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const areas = [
  {
    icon: Brain,
    title: 'Depressão',
    description: 'Acompanhamento especializado para transtornos depressivos, com abordagem individualizada e baseada em evidências.'
  },
  {
    icon: Activity,
    title: 'Ansiedade',
    description: 'Tratamento de transtornos de ansiedade, incluindo TAG, fobias e transtorno do pânico.'
  },
  {
    icon: Moon,
    title: 'Transtornos do Sono',
    description: 'Avaliação e tratamento de insônia e outros distúrbios relacionados ao sono.'
  },
  {
    icon: Smile,
    title: 'Transtorno Bipolar',
    description: 'Acompanhamento especializado para estabilização do humor e prevenção de crises.'
  },
  {
    icon: Zap,
    title: 'TDAH',
    description: 'Diagnóstico e tratamento do Transtorno de Déficit de Atenção e Hiperatividade em adultos.'
  },
  {
    icon: Heart,
    title: 'Dependência Química',
    description: 'Avaliação e tratamento de transtornos por uso de substâncias com abordagem personalizada.'
  }
];

const AreasAtuacao = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="areas" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-darkblue-50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-darkblue-900 mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-darkblue-900 to-darkblue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Atendimento especializado em diversas áreas da psiquiatria, sempre com foco no cuidado integral e humanizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-darkblue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-darkblue-900 to-darkblue-700 rounded-2xl flex items-center justify-center mb-6">
                <area.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-darkblue-900 mb-3">{area.title}</h3>
              <p className="text-slate-600 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-darkblue-900 text-white rounded-2xl p-8 text-center"
        >
          <p className="text-lg leading-relaxed">
            <strong>Importante:</strong> As informações apresentadas têm caráter exclusivamente informativo e educacional. Não substituem a consulta médica, que é essencial para diagnóstico e tratamento adequados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AreasAtuacao;