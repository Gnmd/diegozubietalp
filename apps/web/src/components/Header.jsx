import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LOGO, LOGO_ROLAGEM } from '@/lib/images';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              {isScrolled ? (
                <img src={LOGO_ROLAGEM} alt="Logo Dr. Diego Zubieta" className="h-full w-full object-contain" />
              ) : (
                <img src={LOGO} alt="Logo Dr. Diego Zubieta" className="h-full w-full object-contain" />
              )}
            </div>
            <div>
              <h3 className={`font-bold text-lg ${isScrolled ? 'text-darkblue-900' : 'text-white'}`}>Dr. Diego Zubieta</h3>
              <p className={`text-sm ${isScrolled ? 'text-slate-600' : 'text-white'}`}>CRM/SP 246.697</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('sobre')} className={`${isScrolled ? 'text-slate-700' : 'text-white'} hover:text-darkblue-900 transition-colors font-medium`}>
              Sobre
            </button>
            <button onClick={() => scrollToSection('areas')} className={`${isScrolled ? 'text-slate-700' : 'text-white'} hover:text-darkblue-900 transition-colors font-medium`}>
              Áreas de Atuação
            </button>
            <button onClick={() => scrollToSection('formacao')} className={`${isScrolled ? 'text-slate-700' : 'text-white'} hover:text-darkblue-900 transition-colors font-medium`}>
              Formação
            </button>
            <button
              onClick={() => scrollToSection('agendamento')}
              className="bg-gradient-to-r from-darkblue-900 to-darkblue-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Agendar Consulta
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-darkblue-900"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col space-y-3"
          >
            <button onClick={() => scrollToSection('sobre')} className="text-slate-700 hover:text-darkblue-900 transition-colors font-medium text-left">
              Sobre
            </button>
            <button onClick={() => scrollToSection('areas')} className="text-slate-700 hover:text-darkblue-900 transition-colors font-medium text-left">
              Áreas de Atuação
            </button>
            <button onClick={() => scrollToSection('formacao')} className="text-slate-700 hover:text-darkblue-900 transition-colors font-medium text-left">
              Formação
            </button>
            <button
              onClick={() => scrollToSection('agendamento')}
              className="bg-gradient-to-r from-darkblue-900 to-darkblue-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-center"
            >
              Agendar Consulta
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;