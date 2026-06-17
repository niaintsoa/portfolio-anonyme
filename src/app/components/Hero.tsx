import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight, Database, Server, Cpu } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Disponible pour de nouveaux projets
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Développeur Backend PHP
          </h1>

          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Spécialiste Symfony & Laravel pour des architectures back-end performantes.
          </p>

          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Conception d'APIs REST, optimisation des performances et automatisation de déploiements back-end.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg">
              Voir mes projets <ChevronRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Années d'Expérience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Projets Réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Entreprises</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 bg-white border border-gray-200 p-4 rounded-xl shadow-xl animate-bounce-subtle hidden lg:block">
        <Database className="text-blue-600" size={32} />
      </div>
      <div className="absolute bottom-32 left-10 bg-white border border-gray-200 p-4 rounded-xl shadow-xl delay-75 animate-bounce-subtle hidden lg:block">
        <Server className="text-blue-600" size={32} />
      </div>
      <div className="absolute top-1/2 right-20 bg-white border border-gray-200 p-4 rounded-xl shadow-xl delay-150 animate-bounce-subtle hidden lg:block">
        <Cpu className="text-blue-600" size={32} />
      </div>
    </section>
  );
}
