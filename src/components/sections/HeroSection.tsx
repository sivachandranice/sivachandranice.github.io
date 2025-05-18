
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Sivachandran</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-highlight font-bold mb-4">
              Java Developer & AWS Community Builder
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              With over 12 years of expertise in product development, testing, and business process improvement. 
              I'm passionate about delivering scalable and efficient solutions aligned with business goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-white">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/5">
                <a href="#about" className="flex items-center gap-2">
                  Learn More
                </a>
              </Button>
            </div>
            
            <div className="flex mt-8 gap-6">
              <a 
                href="https://linkedin.com/in/sivachandran-ariyaputhuri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-highlight transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/sivachandranice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-highlight transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:sivachandranice@gmail.com" 
                className="text-white/70 hover:text-highlight transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in order-first lg:order-last mb-6 lg:mb-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-highlight">
                <img 
                  src="https://i.postimg.cc/KY0cQZW2/1735342491943.jpg" 
                  alt="Sivachandran Ariyaputhuri" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-dark-card glass-effect py-2 px-4 rounded-full">
                <span className="text-highlight font-semibold">12+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
