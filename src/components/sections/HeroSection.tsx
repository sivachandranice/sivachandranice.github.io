
import React from 'react';
import { Github, Linkedin, Mail, QrCode } from 'lucide-react';
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
              Passionate about building, optimizing, and innovating—crafting high-performance solutions that align with business goals. 
              From robust applications to cloud-native transformations, I thrive on delivering tech that makes an impact.
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
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/sivachandranice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-highlight transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:sivachandranice@gmail.com" 
                className="text-white/70 hover:text-highlight transition-colors"
                aria-label="Email Me"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://community.aws/@sivachandranice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-highlight transition-colors"
                aria-label="AWS Community Builder Profile"
              >
                <QrCode className="h-6 w-6" />
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
              
              {/* QR Code for AWS Community Builder profile */}
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/69c46467-3d13-4800-8881-ff4bff2fb1a2.png" 
                  alt="AWS Community Builder QR Code" 
                  className="w-24 h-24"
                />
                <div className="text-center mt-1 text-xs text-black font-medium">
                  AWS Profile
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-dark-card glass-effect py-2 px-4 rounded-full">
                <a 
                  href="https://community.aws/@sivachandranice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-highlight font-semibold hover:text-highlight/80"
                >
                  AWS Community Builder
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
