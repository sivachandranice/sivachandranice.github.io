
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

console.log('Index component loading...');

const Index = () => {
  console.log('Index component rendering...');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
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
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, sectionId]));
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
