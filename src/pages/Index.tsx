
import React, { useEffect } from 'react';

console.log('Index component loading...');

// Import components one by one to identify any problematic imports
let Navbar, Footer, HeroSection, AboutSection, ExperienceSection, SkillSection, ProjectsSection, ContactSection;

try {
  console.log('Importing Navbar...');
  Navbar = require('@/components/layout/Navbar').default;
  
  console.log('Importing Footer...');
  Footer = require('@/components/layout/Footer').default;
  
  console.log('Importing HeroSection...');
  HeroSection = require('@/components/sections/HeroSection').default;
  
  console.log('Importing AboutSection...');
  AboutSection = require('@/components/sections/AboutSection').default;
  
  console.log('Importing ExperienceSection...');
  ExperienceSection = require('@/components/sections/ExperienceSection').default;
  
  console.log('Importing SkillSection...');
  SkillSection = require('@/components/sections/SkillsSection').default;
  
  console.log('Importing ProjectsSection...');
  ProjectsSection = require('@/components/sections/ProjectsSection').default;
  
  console.log('Importing ContactSection...');
  ContactSection = require('@/components/sections/ContactSection').default;
  
  console.log('All imports successful!');
} catch (error) {
  console.error('Import error:', error);
}

const Index = () => {
  console.log('Index component rendering...');
  
  // Enhanced smooth scrolling effect for anchor links with proper offset
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && (target as HTMLAnchorElement).getAttribute('href')?.startsWith('#')) {
        const id = (target as HTMLAnchorElement).getAttribute('href');
        const element = document.querySelector(id || '');
        if (element) {
          e.preventDefault();
          
          // Get the actual height of the navbar rather than a fixed value
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
          
          // Calculate the position with offset
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20; // Added 20px extra padding
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Add intersection observer to detect when sections are visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  if (!Navbar || !Footer || !HeroSection || !AboutSection || !ExperienceSection || !SkillSection || !ProjectsSection || !ContactSection) {
    console.error('Some components failed to load');
    return <div>Loading components...</div>;
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
