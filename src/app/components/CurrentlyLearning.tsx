import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Smartphone, Code2, Layers } from 'lucide-react';

const learningTopics = [
  {
    title: 'Développement Mobile',
    description: 'Création d\'applications natives et cross-platform performantes.',
    icon: <Smartphone className="text-blue-600" size={28} />
  },
  {
    title: 'Kotlin',
    description: 'Langage moderne pour le développement natif Android.',
    icon: <Code2 className="text-blue-600" size={28} />
  },
  {
    title: 'Dart & Flutter',
    description: 'Framework UI pour créer des applications multiplateformes compilées nativement.',
    icon: <Layers className="text-blue-600" size={28} />
  },
  {
    title: 'Intelligence Artificielle',
    description: 'Exploration des concepts IA, machine learning et intégration de modèles.',
    icon: <BrainCircuit className="text-blue-600" size={28} />
  }
];

export function CurrentlyLearning() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que j'apprends <span className="text-blue-400">actuellement</span></h2>
            <p className="text-gray-400 text-lg">
              Le domaine de la tech évolue vite. Je consacre une partie de mon temps à la veille technologique et à l'apprentissage de nouveaux outils pour rester à la pointe.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningTopics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-800/50 backdrop-blur border border-gray-700/50 p-6 rounded-2xl hover:bg-gray-800 transition-colors group"
            >
              <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-gray-800">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100">{topic.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
