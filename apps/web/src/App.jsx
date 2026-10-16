import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import AreasAtuacao from '@/components/AreasAtuacao';
import Formacao from '@/components/Formacao';
import Agendamento from '@/components/Agendamento';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Dr. Diego Zubieta - Médico Residente em Psiquiatria CRM/SP 246.697</title>
        <meta name="description" content="Dr. Diego Zubieta, médico (CRM/SP 246.697) residente em psiquiatria pelo Instituto Bairral. Atendimento especializado em saúde mental com ética, empatia e profissionalismo." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-darkblue-50">
        <Header />
        <Hero />
        <About />
        <AreasAtuacao />
        <Formacao />
        <Agendamento />
        <Footer />
      </div>
    </>
  );
}

export default App;