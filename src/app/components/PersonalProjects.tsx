import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, BookOpen, Construction } from 'lucide-react';

const personalProjects = [
  {
    title: 'Application Mobile Baiboly FFPM',
    description: "App mobile native simple et accessible pour consulter le Baiboly FFPM. MVP : navigation intuitive liste → lecture d'article, recherche, favoris hors‑ligne, gestion thèmes (clair/sombre). Je fournirai les screenshots pour adapter l'UI. Architecture proposée : Kotlin + Jetpack Compose, MVVM, Room pour cache local et Retrofit/Ktor pour l'API.",
    tags: ['Kotlin', 'Jetpack Compose', 'Android'],
    icon: <BookOpen className="text-blue-600" size={32} />,
    status: 'En cours de développement'
  },
  {
    title: 'Application Mobile asa.mg',
    description: "Plateforme sociale légère inspirée des réseaux sociaux pour permettre aux petites entreprises (soudure, pharmacie, etc.) de s'inscrire professionnellement et déposer des annonces/publicités. MVP : profils entreprise, création d'annonce (photo + texte), fil d'actualité, recherche par catégorie et modération simple. Stacks ciblés : Next.js (web), Flutter (mobile) et possibilité d'une version Nuxt (Vue).",
    tags: ['Next.js', 'Flutter', 'Nuxt'],
    icon: <Smartphone className="text-blue-600" size={32} />,
    status: 'En cours de développement'
  }
  ,
  {
    title: 'Gestion de stock (Allemagne / Mada)',
    description: "Système de gestion de stock et place de marché cross‑border (DE ↔ MG). Fonctions clés : catalogue produits, suivi des stocks, commandes, multi‑devise, rôles vendeurs/acheteurs et dashboard admin. Tech stack proposé : Symfony (API) + Doctrine/Postgres, JWT/OAuth2 pour auth et intégration paiements. Objectif : permettre d'acheter et vendre localement et à l'étranger avec synchronisation des stocks.",
    tags: ['Symfony', 'API', 'Stock'],
    icon: <Construction className="text-blue-600" size={32} />,
    status: 'En conception'
  }
];

export function PersonalProjects() {
  return (
    <section id="personal-projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projets <span className="text-blue-600">Personnels</span></h2>
          <div className="h-1 w-20 bg-blue-600"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Mes initiatives privées et expérimentations, actuellement en cours de création.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {personalProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-6 gap-4 sm:gap-0">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  {project.icon}
                </div>
                <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 text-xs px-3 py-1.5 rounded-full font-medium w-fit">
                  <Construction className="shrink-0" size={14} />
                  {project.status}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-sm font-medium rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
