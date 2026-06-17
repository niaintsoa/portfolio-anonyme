import React from 'react';
import { motion } from 'motion/react';
import { Layers, Database, Globe, Shield, Terminal, Zap, Code2, Cloud } from 'lucide-react';

const categories = [
  {
    title: 'Langages',
    icon: <Code2 className="text-blue-600" />,
    skills: ['PHP', 'JavaScript', 'Python', 'Java', 'HTML/CSS', 'SQL']
  },
  {
    title: 'Frameworks & CMS',
    icon: <Layers className="text-blue-600" />,
    skills: ['Symfony (3, 4, 5, 7)', 'Laravel', 'API Platform', 'WordPress', 'PrestaShop', 'WooCommerce']
  },
  {
    title: 'Bases de Données',
    icon: <Database className="text-blue-600" />,
    skills: ['PostgreSQL', 'MySQL', 'Doctrine ORM']
  },
  {
    title: 'Outils & DevOps',
    icon: <Cloud className="text-blue-600" />,
    skills: ['Git', 'GitLab', 'Docker', 'Jenkins', 'Postman', 'JIRA', 'SVN']
  }
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Expert dans les bonnes pratiques de développement : TDD, Architecture Hexagonale, SOLID, Clean Code et API REST.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-lg inline-block group-hover:bg-blue-100 transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Zap size={14} className="text-blue-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
