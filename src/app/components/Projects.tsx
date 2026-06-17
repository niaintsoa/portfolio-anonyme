import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, ExternalLink, Server, Activity, Lock, X, Eye, Briefcase, Target, CheckCircle2, Wrench, Calendar, MapPin } from 'lucide-react';

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  stats: { tech: string; status: string; year: string };
  company: string;
  category: string;
  sector: string;
  period: string;
  context: string[];
  contributions: string[];
  environment: string;
}

const projects: ProjectData[] = [
  {
    title: 'ASO Hospitalité - Plateforme Événementielle',
    description: 'Conception et développement d\'une API REST hautement sécurisée avec Symfony 7.1.1 et API Platform. Gestion fine de l\'authentification et migration de base de données avec Doctrine ORM et PostgreSQL.',
    tags: ['Symfony 7.1.1', 'API Platform', 'Doctrine ORM', 'PostgreSQL', 'Postman', 'Docker', 'Jira', 'TDD'],
    image: '/images/aso.png',
    link: 'https://aso-hospitalite.fr/en',
    stats: { tech: 'Symfony', status: 'Production', year: '2025' },
    company: 'MyAgency',
    category: 'API & Backend',
    sector: 'Événementiel sportif / Hospitalité premium',
    period: 'Mars 2025 – Jan 2026',
    context: [
      'Migration vers une architecture moderne, sécurisée et scalable',
      'Séparation claire Frontend / Backend'
    ],
    contributions: [
      'Conception et développement d\'une API REST avec Symfony & API Platform',
      'Mise en place des règles de sécurité (authentification, autorisations)',
      'Conception et migration de la base de données (Doctrine, migrations)',
      'Exposition des endpoints pour le frontend',
      'Tests des endpoints via Postman',
      'Travail en collaboration avec Product Owner et équipe Agile'
    ],
    environment: 'Symfony 7.1.1, API Platform, Doctrine ORM, PostgreSQL, Postman, Git, Jira, Docker, Méthodologie Agile, TDD'
  },
  {
    title: 'Aty Aminay - Blog & SEO',
    description: 'Conception et mise à jour d\'un webservice WordPress dédié à l\'exposition et syndication de contenus. Optimisation SEO on-page pour améliorer la vitesse d\'indexation et la visibilité.',
    tags: ['WordPress', 'PHP', 'REST API', 'SEO', 'Docker'],
    image: '/images/aty-aminay.png',
    link: 'https://www.aty-aminay.com/blog',
    stats: { tech: 'WordPress', status: 'Production', year: '2025' },
    company: 'MyAgency',
    category: 'CMS & SEO',
    sector: 'Tourisme',
    period: 'Mars 2025 – Jan 2026',
    context: [
      'Besoin d\'une solution interne pour améliorer le référencement naturel du blog et la structuration des contenus'
    ],
    contributions: [
      'Conception et mise à jour d\'un webservice WordPress pour l\'exposition des contenus',
      'Optimisation de la structure des données (SEO on-page)',
      'Amélioration de la performance et de l\'indexation du blog'
    ],
    environment: 'WordPress, PHP, REST API, Git, Docker'
  },
  {
    title: 'FJKM - Refonte Institutionnelle',
    description: 'Migration intégrale vers un thème moderne et responsive. Développement d\'extensions WordPress en architecture orientée objet et intégration de lecture de flux radio en direct.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'OOP', 'Streaming Audio', 'Docker'],
    image: '/images/fjkm.png',
    link: 'https://www.fjkm.mg/',
    stats: { tech: 'WordPress', status: 'Production', year: '2025' },
    company: 'MyAgency',
    category: 'CMS & Dev',
    sector: 'Religion',
    period: 'Mars 2025 – Jan 2026',
    context: [
      'Refonte complète d\'un site WordPress existant, initialement basique, avec une UX/UI limitée et des modules développés en vanilla sans architecture orientée objet',
      'Objectif : moderniser l\'interface, améliorer la maintenabilité du code, la performance et le référencement naturel'
    ],
    contributions: [
      'Migration du site vers un nouveau thème WordPress moderne et responsive',
      'Conception et développement de plugins WordPress personnalisés avec une architecture orientée objet',
      'Refactorisation des fonctionnalités existantes pour améliorer la lisibilité et la maintenabilité du code',
      'Optimisation des performances (temps de chargement, structure des pages)',
      'Optimisation SEO (structure HTML, contenus, performance)',
      'Intégration d\'une fonctionnalité de lecture de radio en ligne en direct directement sur le site',
      'Amélioration globale de l\'expérience utilisateur (UX) et de l\'interface (UI)'
    ],
    environment: 'WordPress, PHP, JavaScript, HTML/CSS, Architecture orientée objet (OOP), Git, Docker'
  },
  {
    title: 'BIANCO - Site Institutionnel',
    description: 'Ajustements fonctionnels sur une architecture Symfony CMS personnalisé. Modifications front-end avec Twig pour garantir cohérence d\'affichage et ergonomie.',
    tags: ['Symfony 7.1.1', 'Twig', 'CMS', 'Docker'],
    image: '/images/bianco.png',
    link: 'https://bianco-mg.org',
    stats: { tech: 'Symfony', status: 'Production', year: '2025' },
    company: 'MyAgency',
    category: 'CMS & Symfony',
    sector: 'Institution publique / Lutte contre la corruption',
    period: 'Mars 2025 – Jan 2026',
    context: [
      'Projet existant déjà en production, nécessitant des ajustements fonctionnels et éditoriaux suite aux retours clients',
      'Amélioration de la cohérence des contenus, de l\'affichage et de certaines fonctionnalités front et back',
      'Travail réalisé en environnement de préproduction avant mise en ligne publique'
    ],
    contributions: [
      'Ajustements des contenus et des templates selon les retours clients',
      'Modifications front-end (Twig) pour améliorer l\'affichage et l\'expérience utilisateur',
      'Interventions back-end sur une architecture Symfony type CMS personnalisé léger',
      'Amélioration de la maintenabilité du code existant',
      'Travail en environnement versionné et containerisé'
    ],
    environment: 'Symfony 7.1.1, Twig, Architecture CMS personnalisée, Git, Docker'
  },
  {
    title: 'GEFP Madagascar - Emploi & Formation',
    description: 'Intégration et personnalisation avec Bricks Builder. Développement d\'intégration cartographique interactive avec Google Maps pour localisation dynamique.',
    tags: ['WordPress', 'Bricks Builder', 'Google Maps', 'JavaScript', 'Docker'],
    image: '/images/gefp.png',
    link: 'https://gefp.mg/',
    stats: { tech: 'WordPress', status: 'Production', year: '2025' },
    company: 'MyAgency',
    category: 'CMS & Maps',
    sector: 'Institution publique / Emploi & Formation',
    period: 'Mars 2025 – Jan 2026',
    context: [
      'Projet WordPress existant nécessitant l\'ajout de nouvelles pages et fonctionnalités',
      'Objectif : enrichir le contenu du site tout en respectant l\'architecture et l\'éditeur visuel en place'
    ],
    contributions: [
      'Intégration et personnalisation de pages via l\'éditeur de thème Bricks (WYSIWYG)',
      'Mise en place d\'une intégration Google Maps pour la localisation et la visualisation des informations',
      'Ajout de nouvelles fonctionnalités front-end selon les besoins du projet',
      'Travail sur un projet existant avec respect des contraintes techniques et éditoriales'
    ],
    environment: 'WordPress, Bricks Builder (éditeur WYSIWYG), JavaScript, HTML/CSS, Docker, Git'
  },
  {
    title: 'NICOLS - Tourisme Fluvial & E-commerce',
    description: 'Interventions techniques sur système WordPress hautement personnalisé. Implémentation de filtres complexes basés sur dates pour gestion de disponibilités et réservations.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'E-commerce', 'Réservations', 'Docker'],
    image: '/images/nicols.png',
    link: 'https://www.nicols.com/',
    stats: { tech: 'WordPress', status: 'Production', year: '2025' },
    company: 'MyAgency',
    category: 'E-commerce',
    sector: 'Tourisme fluvial / Location de bateaux',
    period: 'Mars 2025 – Jan 2026',
    context: [
      'Projet WordPress fortement customisé, en cours de migration depuis un ancien site vers une nouvelle interface',
      'Enjeux principaux : modernisation de l\'expérience utilisateur et adaptation des fonctionnalités métier existantes',
      'Travail réalisé sur un projet en production progressive, avec des contraintes fortes liées à l\'existant'
    ],
    contributions: [
      'Interventions sur des fonctionnalités spécifiques liées à l\'affichage et à la commande des produits (logique type boutique)',
      'Implémentation et amélioration de filtres complexes par dates pour la disponibilité et la réservation',
      'Ajustements front-end et back-end sur une base WordPress custom',
      'Participation à la migration fonctionnelle vers la nouvelle interface',
      'Travail collaboratif dans un environnement versionné et containerisé'
    ],
    environment: 'WordPress (custom), PHP, JavaScript, HTML/CSS, Logique e-commerce / réservation, Git, Docker'
  },
  {
    title: 'Café Anne Caron - E-commerce Gastronomie',
    description: 'Optimisation des performances et du temps de chargement front-end sur plateforme PrestaShop. Audit et renforcement de la sécurité sans interruption.',
    tags: ['PrestaShop', 'PHP', 'JavaScript', 'Performance', 'Sécurité', 'Docker'],
    image: '/images/anne-caron.png',
    link: 'https://cafeannecaron.com/',
    stats: { tech: 'PrestaShop', status: 'Production', year: '2025' },
    company: 'MyAgency',
    category: 'E-commerce',
    sector: 'Gastronomie / E-commerce',
    period: 'Mars 2025 – Jan 2026',
    context: [
      'Site PrestaShop déjà en production avec des enjeux forts de performance, de sécurité et d\'amélioration de l\'interface utilisateur',
      'Objectif : optimiser l\'existant sans perturber l\'activité e-commerce'
    ],
    contributions: [
      'Optimisation des performances du site (temps de chargement, comportement front-end)',
      'Renforcement de la sécurité du site PrestaShop',
      'Ajustements et améliorations de l\'interface utilisateur (UI)',
      'Interventions ciblées sur un site e-commerce en production',
      'Travail en environnement maîtrisé afin de limiter les risques en production'
    ],
    environment: 'PrestaShop, PHP, JavaScript, HTML/CSS, Docker, Git'
  },
  {
    title: 'Autosecuritas - Plateforme Intranet',
    description: 'Migration applicative complète d\'une infrastructure existante vers une architecture moderne sous Symfony 5.4. Développement de modules métiers internes et tunnel d\'adhésion sécurisé.',
    tags: ['Symfony 5.4', 'PHP', 'Twig', 'Migration'],
    image: '/images/autosecuritas.png',
    link: 'https://autosecuritas.fr/public/intranet/center/login',
    stats: { tech: 'Symfony', status: 'Production', year: '2023' },
    company: 'eTech',
    category: 'API & Backend',
    sector: 'Centre de Contrôle Technique des Véhicules',
    period: 'Oct 2021 – Déc 2024',
    context: [
      'Migration d\'une plateforme existante vers une architecture plus moderne et maintenable',
      'Besoin d\'intégrer de nouvelles fonctionnalités métiers internes'
    ],
    contributions: [
      'Migration des fonctionnalités existantes vers Symfony',
      'Développement de nouvelles fonctionnalités métier',
      'Mise en place et gestion de librairies de qualité (bonnes pratiques, structuration du code)',
      'Développement d\'une page d\'adhésion',
      'Participation à l\'évolution globale de la plateforme intranet'
    ],
    environment: 'Symfony 5.4, PHP, Twig, Git'
  },
  {
    title: 'Syner Glass - Solution B2B',
    description: 'Création de vitrine professionnelle intégrant WooCommerce pour présentation et commande de produits. Développement d\'un thème WordPress sur mesure.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'GitLab'],
    image: '/images/synerglass.png',
    link: 'https://www.syner.glass/fr/tarifs/',
    stats: { tech: 'WordPress', status: 'Production', year: '2023' },
    company: 'eTech',
    category: 'E-commerce',
    sector: 'Développement de solutions logicielles de gestion',
    period: 'Oct 2021 – Déc 2024',
    context: [
      'Mise en place d\'une vitrine numérique intégrant une logique e-commerce pour la présentation et la commande de produits',
      'Besoin d\'un site évolutif, aligné avec l\'image d\'une solution logicielle professionnelle'
    ],
    contributions: [
      'Création des pages et développement des bases d\'un thème WordPress personnalisé',
      'Mise en place de WooCommerce pour la gestion des produits et des commandes',
      'Développement des fonctionnalités liées à la boutique en ligne',
      'Structuration du site pour une navigation claire et efficace'
    ],
    environment: 'WordPress, WooCommerce, PHP, JavaScript, HTML/CSS, Git, Gitlab'
  },
  {
    title: 'STAR Madagascar - Distribution Industrielle',
    description: 'Refonte complète de la vitrine digitale du groupe avec migration des données vers WordPress. Développement d\'un thème exclusif et intégration cartographique personnalisée avec OpenStreetMap.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'OpenStreetMap'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGlzdHJpYnV0aW9ufGVufDF8fHx8MTc3MTM1NTcyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'https://www.star.mg/',
    stats: { tech: 'WordPress', status: 'Production', year: '2023' },
    company: 'eTech',
    category: 'CMS & Dev',
    sector: 'Distribution et fabrication de boissons',
    period: 'Oct 2021 – Déc 2024',
    context: [
      'Refonte d\'une vitrine digitale existante pour un grand groupe industriel',
      'Migration vers WordPress afin de faciliter la gestion des contenus et l\'évolution du site',
      'Ajout d\'une première approche e-commerce'
    ],
    contributions: [
      'Migration des fonctionnalités existantes vers WordPress',
      'Développement et intégration d\'un thème WordPress personnalisé',
      'Mise en place OpenStreetMap personnalisé',
      'Adaptation de l\'interface aux besoins métier du client'
    ],
    environment: 'WordPress, PHP, JavaScript, HTML/CSS, Git'
  },
  {
    title: 'JPA - Gestion des Dons Scolaires',
    description: 'Évolution de la logique métier PHP/WordPress pour simplifier la gestion des établissements, classes et simulations de dons.',
    tags: ['WordPress', 'PHP', 'Métier'],
    image: '/images/jpa.png',
    link: 'https://jpa.asso.fr/',
    stats: { tech: 'WordPress', status: 'Production', year: '2023' },
    company: 'eTech',
    category: 'Application Métier',
    sector: 'Association / Éducation / Enfance',
    period: 'Oct 2021 – Déc 2024',
    context: [
      'Amélioration d\'une plateforme existante afin d\'enrichir les fonctionnalités métiers et de faciliter la gestion interne des dons et des structures scolaires'
    ],
    contributions: [
      'Développement de nouvelles fonctionnalités pour la gestion des écoles, des classes et des simulations de dons',
      'Adaptation des interfaces aux besoins administratifs de l\'association',
      'Amélioration de la logique métier de la plateforme',
      'Participation à l\'évolution globale de la plateforme'
    ],
    environment: 'PHP, WordPress, Git'
  },
  {
    title: 'Nexilink - API Télécommunications',
    description: 'Mise à jour et maintenance d\'une API Laravel selon nouvelles spécifications. Refactorisation des requêtes MySQL pour optimiser le temps de réponse.',
    tags: ['Laravel', 'PHP', 'MySQL', 'API REST', 'Postman'],
    image: '/images/nexilink.png',
    link: 'https://www.nexilink.fr/',
    stats: { tech: 'Laravel', status: 'Production', year: '2022' },
    company: 'eTech',
    category: 'API & Backend',
    sector: 'Télécommunications filaires',
    period: 'Oct 2021 – Déc 2024',
    context: [
      'Mise à jour de l\'API existante pour répondre aux nouvelles spécifications',
      'Optimisation des performances et amélioration de l\'affichage front-end'
    ],
    contributions: [
      'Mise à jour de l\'API Laravel et adaptation des endpoints',
      'Optimisation du code pour améliorer l\'efficacité des requêtes API',
      'Mise à jour des affichages en front-end'
    ],
    environment: 'Laravel, PHP, MySQL, Git, Postman'
  },
  {
    title: 'Citoyens & Territoires - Participation Citoyenne',
    description: 'Développement d\'extensions WordPress personnalisées et modification de scripts Jenkins pour optimiser les processus de déploiement continu.',
    tags: ['WordPress', 'PHP', 'MySQL', 'Jenkins', 'CI/CD'],
    image: '/images/ct.png',
    link: 'https://citoyensterritoires.fr/',
    stats: { tech: 'WordPress', status: 'Production', year: '2022' },
    company: 'eTech',
    category: 'CMS & DevOps',
    sector: 'Développement local & participation citoyenne',
    period: 'Oct 2021 – Déc 2024',
    context: [
      'Développement de fonctionnalités personnalisées pour la plateforme citoyenne',
      'Gestion des déploiements et des contenus sur différents environnements'
    ],
    contributions: [
      'Intégration de fonctionnalités via des extensions personnalisées',
      'Déploiement sur environnements de test et production',
      'Modification de jobs Jenkins pour automatiser les déploiements',
      'Mise en production des nouvelles fonctionnalités'
    ],
    environment: 'WordPress, PHP, MySQL, Git, Jenkins'
  },
  {
    title: 'Kill The Tape - Plateforme Multimédia',
    description: 'Maintenance corrective et refactorisation de code sur plateforme legacy Symfony 3 gérée via SVN.',
    tags: ['Symfony 3', 'PHP', 'MySQL', 'SVN', 'JIRA'],
    image: '/images/ktt.png',
    link: 'https://www.killthetape.com/site/accueil',
    stats: { tech: 'Symfony', status: 'Production', year: '2021' },
    company: 'eTech',
    category: 'Maintenance',
    sector: 'Multimédia',
    period: 'Oct 2021 – Déc 2024',
    context: [
      'Amélioration et maintenance d\'une plateforme multimédia',
      'Enrichissement des fonctionnalités et optimisation de la maintenabilité'
    ],
    contributions: [
      'Correction de bugs et amélioration des performances de la plateforme',
      'Intégration de modules pour enrichir les collections de films',
      'Refactorisation du code pour optimiser la maintenabilité'
    ],
    environment: 'Symfony 3, PHP, MySQL, SVN, JIRA'
  },
  {
    title: 'Plateforme de Recrutement & Entretiens',
    description: 'Conception de l\'architecture back-end avec Symfony 4 et implémentation d\'une API REST sécurisée pour centraliser offres d\'emploi et utilisateurs.',
    tags: ['Symfony 4', 'PHP', 'MySQL', 'REST API', 'VPS'],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNydWl0bWVudCUyMGludGVydmlld3xlbnwxfHx8fDE3NzEzNTU3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '',
    stats: { tech: 'Symfony', status: 'Terminé', year: '2021' },
    company: 'Humble Digital',
    category: 'API & Backend',
    sector: 'Emploi / Recrutement',
    period: 'Oct 2020 – Mars 2021',
    context: [
      'Développement d\'une plateforme permettant la gestion des offres d\'emploi et la planification des entretiens en ligne',
      'Mise en place d\'une API REST pour la gestion des utilisateurs et des offres'
    ],
    contributions: [
      'Développement backend avec Symfony 4',
      'Implémentation d\'API REST pour la gestion des utilisateurs et des offres d\'emploi'
    ],
    environment: 'Symfony 4, MySQL, REST API, Git, VPS'
  }
];

/* ─── Modal Popup Component ─── */
function ProjectModal({ project, onClose }: { project: ProjectData; onClose: () => void }) {
  // Lock body scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape key
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors backdrop-blur-sm cursor-pointer"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">
          {/* Image Section */}
          <div className="relative w-full h-64 sm:h-80 overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Badges over image */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                    {project.company}
                  </span>
                  <span className="px-3 py-1.5 bg-white/90 text-gray-800 text-xs font-medium rounded-full shadow-lg">
                    {project.category}
                  </span>
                  <span className="px-3 py-1.5 bg-emerald-500/90 text-white text-xs font-medium rounded-full shadow-lg">
                    {project.sector}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm font-mono">
                  <Calendar size={14} />
                  {project.period}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm mb-6">{project.description}</p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 mb-8 border border-blue-100">
              <div className="text-center">
                <div className="text-blue-600 font-bold text-sm font-mono">{project.stats.tech}</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider mt-1">Technologie</div>
              </div>
              <div className="text-center border-x border-blue-200">
                <div className="text-blue-600 font-bold text-sm font-mono">{project.stats.status}</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider mt-1">Statut</div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-bold text-sm font-mono">{project.stats.year}</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider mt-1">Année</div>
              </div>
            </div>

            {/* Context & Enjeux */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Target size={16} className="text-amber-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Contexte & Enjeux</h4>
              </div>
              <ul className="space-y-2.5 pl-1">
                {project.context.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contributions */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Contributions & Réalisations</h4>
              </div>
              <ul className="space-y-2.5 pl-1">
                {project.contributions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <CheckCircle2 size={14} className="mt-0.5 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Environment Technique */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                  <Wrench size={16} className="text-violet-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Environnement Technique</h4>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {project.environment.split(', ').map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white text-gray-700 text-xs font-mono rounded-lg border border-gray-200 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-mono rounded-lg border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-semibold shadow-lg shadow-blue-600/25"
                >
                  <ExternalLink size={16} /> Visiter le site
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-400 rounded-xl text-sm font-medium">
                  <Lock size={16} /> Projet confidentiel
                </span>
              )}
              <button
                onClick={onClose}
                className="px-6 py-3 text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-colors text-sm font-medium cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Projects Section ─── */
export function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Tous');
  const [selectedProject, setSelectedProject] = React.useState<ProjectData | null>(null);

  const categories = ['Tous', 'API & Backend', 'CMS & Dev', 'E-commerce', 'Application Métier', 'CMS & SEO', 'Maintenance'];

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tous Mes Projets</h2>
            <div className="h-1 w-20 bg-blue-600"></div>
            <p className="text-gray-600 mt-4">
              {projects.length} projets réalisés • Symfony, Laravel, WordPress
            </p>
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-400'
                }`}
            >
              {cat}
              {cat === 'Tous' && ` (${projects.length})`}
              {cat !== 'Tous' && ` (${projects.filter(p => p.category === cat).length})`}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Hover overlay with "Voir détails" */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/30 transition-all duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/90 text-blue-700 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <Eye size={16} /> Voir détails
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-white/90 text-blue-700 text-[10px] font-mono rounded">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 bg-blue-600/80 text-white text-[10px] font-mono rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-mono">
                    {project.company}
                  </span>
                  <span className="text-xs text-gray-500">{project.sector}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">
                  {project.description}
                </p>

                {/* Mini contributions preview */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">Contributions clés</span>
                  </div>
                  <ul className="space-y-1">
                    {project.contributions.slice(0, 2).map((c, i) => (
                      <li key={i} className="text-xs text-gray-500 truncate flex items-start gap-1.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                    {project.contributions.length > 2 && (
                      <li className="text-xs text-blue-500 font-medium">
                        +{project.contributions.length - 2} autres contributions...
                      </li>
                    )}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-2 border-y border-gray-200 py-3 mb-4">
                  <div className="text-center">
                    <div className="text-blue-600 font-mono text-xs">{project.stats.tech}</div>
                    <div className="text-[10px] text-gray-500 uppercase">Tech</div>
                  </div>
                  <div className="text-center border-x border-gray-200 px-2">
                    <div className="text-blue-600 font-mono text-xs">{project.stats.status}</div>
                    <div className="text-[10px] text-gray-500 uppercase">Statut</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-600 font-mono text-xs">{project.stats.year}</div>
                    <div className="text-[10px] text-gray-500 uppercase">Année</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} /> Voir le site
                    </a>
                  )}
                  {!project.link && (
                    <span className="text-xs text-gray-400 italic">Projet confidentiel</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
