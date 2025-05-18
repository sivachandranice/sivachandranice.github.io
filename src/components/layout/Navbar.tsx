
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Code, User, Briefcase, Award } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', icon: <User className="h-4 w-4" /> },
  { label: 'About', href: '#about', icon: <User className="h-4 w-4" /> },
  { label: 'Experience', href: '#experience', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Skills', href: '#skills', icon: <Code className="h-4 w-4" /> },
  { label: 'Projects', href: '#projects', icon: <Award className="h-4 w-4" /> },
  { label: 'Contact', href: '#contact', icon: <Mail className="h-4 w-4" /> },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Find the section that is currently in view
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        
        if (sectionTop < 100 && sectionTop >= -100 && sectionId) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed w-full top-0 z-50 transition-all duration-300 py-4',
      isScrolled ? 'bg-dark-bg/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
    )}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-white">
            Siva<span className="text-highlight">chandran</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white"
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors flex items-center gap-1',
                    activeSection === item.href ? 'text-highlight' : 'text-white hover:text-highlight'
                  )}
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <nav className={cn(
        "absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-lg transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
      )}>
        <ul className="flex flex-col space-y-4 container">
          {navItems.map((item) => (
            <li key={item.href}>
              <a 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'text-sm font-medium block py-2 transition-colors flex items-center gap-2',
                  activeSection === item.href ? 'text-highlight' : 'text-white hover:text-highlight'
                )}
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
