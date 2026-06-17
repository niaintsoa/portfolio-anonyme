"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Terminal, Coffee, MapPin } from 'lucide-react';

export function Contact() {
  

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Discutons de Votre <span className="text-blue-600 underline decoration-blue-600/20 underline-offset-8">Projet</span></h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Que vous cherchiez un développeur PHP confirmé, un consultant technique, ou que vous souhaitiez simplement échanger sur votre projet, n'hésitez pas à me contacter.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-mono">CONTACT</div>
                  <div className="text-gray-900 font-medium">Informations disponibles sur demande</div>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <div className="p-5 bg-white flex items-center gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MapPin className="text-blue-600" size={22} />
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="text-gray-900 font-bold block">Basé à Madagascar</span>
                    Antananarivo 101 • Disponible pour projets à distance
                  </div>
                </div>
                <iframe
                  title="Localisation Antananarivo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60085.91937694516!2d47.48992617!3d-18.91367705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e49a8a1af5f%3A0x5b5ab9ad27e76fe6!2sAntananarivo!5e0!3m2!1sfr!2smg!4v1717000000000!5m2!1sfr!2smg"
                  width="100%"
                  height="180"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-6 rounded-2xl border border-gray-200 bg-blue-50/50 flex items-start gap-6">
                <div className="text-4xl">💻</div>
                <div className="text-sm text-gray-600">
                  <span className="text-gray-900 font-bold block mb-2">Prêt pour le Télétravail</span>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> PC Core i7, 8Go RAM</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Connexion Orange 4G & Vidéoconférence stable</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Anti-délestage : Onduleur (1h d'autonomie)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white border border-gray-200 rounded-2xl shadow-xl relative"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 p-2 px-4 bg-blue-600 rounded-full text-[10px] font-mono font-bold text-white shadow-lg">
              Disponible immédiatement
            </div>

            <div className="space-y-8 mt-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Prêt à collaborer ?</h3>
                <p className="text-gray-600 mb-6">
                  N'hésitez pas à me contacter directement via votre client de messagerie préféré.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-full py-6 bg-blue-600 text-white rounded-lg text-center font-bold shadow-lg">
                  Contact et détails disponibles sur demande.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-blue-600 shadow-lg bg-gray-100 text-blue-600 mx-auto mb-0">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Développeur Backend PHP</div>
                  <div className="text-sm text-gray-600">Symfony • Laravel • API REST</div>
                  <div className="text-xs text-gray-500">Spécialiste en architecture et performance back-end</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 font-mono text-blue-600 font-bold">
                <Terminal size={18} /> Développeur Backend
              &copy; {new Date().getFullYear()} Tous droits réservés
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
