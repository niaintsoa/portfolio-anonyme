import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'Développeur Symfony et WordPress',
    company: 'MyAgency',
    period: 'Mars 2025 - Présent',
    location: 'Antananarivo, Madagascar',
    achievements: [
      'Conception d\'une API REST sécurisée avec Symfony 7.1.1 et API Platform pour la plateforme aso-hospitalite.fr',
      'Migration et optimisation de bases de données avec Doctrine ORM et PostgreSQL',
      'Refonte institutionnelle FJKM avec développement d\'extensions WordPress en architecture orientée objet',
      'Optimisation SEO et développement d\'API pour aty-aminay.com'
    ]
  },
  {
    role: 'Développeur Web',
    company: 'eTech',
    period: 'Octobre 2021 - Décembre 2024',
    location: 'Antananarivo, Madagascar',
    achievements: [
      'Migration applicative complète vers Symfony 5.4 pour la plateforme Autosecuritas',
      'Développement de solutions e-commerce avec WordPress et WooCommerce (Syner Glass)',
      'Refonte digitale complète avec thème personnalisé et cartographie OpenStreetMap (STAR Madagascar)',
      'Évolution d\'API Laravel et optimisation MySQL pour Nexilink'
    ]
  },
  {
    role: 'Développeur Web',
    company: 'Humble Digital',
    period: 'Octobre 2020 - Mars 2021',
    location: 'Antananarivo, Madagascar',
    achievements: [
      'Conception d\'architecture back-end avec Symfony 4 pour plateforme de recrutement',
      'Implémentation d\'API REST sécurisée pour centraliser offres d\'emploi',
      'Développement de thèmes WordPress responsives avec Bootstrap et Sass'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Parcours Professionnel</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:left-8 before:h-full before:w-0.5 before:bg-gray-200 before:content-[''] md:before:left-1/2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white z-10 md:left-1/2" />

              <div className="w-full md:w-1/2">
                <div className={`p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all group ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="flex items-center gap-2 mb-2 text-blue-600 font-mono text-sm uppercase tracking-wider justify-center md:justify-start">
                    <Calendar size={14} /> {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                  <div className={`flex items-center gap-2 text-gray-600 font-medium mb-4 justify-center ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Briefcase size={16} /> {exp.company}
                    <span className="text-gray-300">•</span>
                    <MapPin size={16} /> {exp.location}
                  </div>

                  <ul className={`space-y-3 text-sm text-gray-600 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {exp.achievements.map((item, i) => (
                      <li key={i} className={`flex gap-3 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <ChevronRight size={14} className="text-blue-600 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
