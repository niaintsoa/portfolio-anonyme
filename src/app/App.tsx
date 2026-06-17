import React from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { PersonalProjects } from './components/PersonalProjects';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <PersonalProjects />
        <CurrentlyLearning />
        <Experience />
        <Contact />
      </main>
      <BackToTop />
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#ffffff',
          color: '#111827',
          border: '1px solid #e5e7eb',
        },
      }} />
    </div>
  );
}
