
import React from 'react';
import { Github, Linkedin, Mail, QrCode, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-highlight/10 blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/10 blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          {/* Left Side - Content */}
          <div className="lg:col-span-7 z-20">
            {/* The "DevTitle" banner similar to the Dribbble reference */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2 mb-6 bg-highlight/10 border border-highlight/20 rounded-full"
            >
              <span className="text-highlight uppercase text-sm font-medium tracking-wider">Java Developer</span>
            </motion.div>
            
            {/* Main Heading with highlighted text */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="text-highlight">Sivachandran</span>, Java Developer & AWS Builder
            </motion.h1>
            
            <motion.p 
              className="text-lg text-white/70 font-light mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Experienced Java Developer with 12+ years creating robust applications
              and a passion for cloud technologies as an AWS Community Builder.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                className="bg-highlight hover:bg-highlight/80 text-black font-medium px-8 py-6"
                size="lg"
              >
                My Projects
              </Button>
              <Button 
                variant="outline"
                className="border-white/20 hover:bg-white/5 px-8 py-6"
                size="lg"
              >
                Contact Me
              </Button>
            </motion.div>
            
            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="border-l-2 border-highlight pl-4">
                <h3 className="text-4xl font-bold text-white mb-1">12+</h3>
                <p className="text-white/60 text-sm">Years Experience</p>
              </div>
              <div className="border-l-2 border-highlight pl-4">
                <h3 className="text-4xl font-bold text-white mb-1">30+</h3>
                <p className="text-white/60 text-sm">Projects Done</p>
              </div>
              <div className="border-l-2 border-highlight pl-4">
                <h3 className="text-4xl font-bold text-white mb-1">AWS</h3>
                <p className="text-white/60 text-sm">Community Builder</p>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              {[
                { 
                  href: "https://linkedin.com/in/sivachandran-ariyaputhuri", 
                  icon: Linkedin, 
                  label: "LinkedIn Profile",
                  delay: 0.1
                },
                { 
                  href: "https://github.com/sivachandranice", 
                  icon: Github, 
                  label: "GitHub Profile",
                  delay: 0.2
                },
                { 
                  href: "mailto:sivachandranice@gmail.com", 
                  icon: Mail, 
                  label: "Email Me",
                  delay: 0.3
                },
                { 
                  href: "https://community.aws/@sivachandranice", 
                  icon: QrCode, 
                  label: "AWS Community Builder Profile",
                  delay: 0.4
                }
              ].map((social, index) => (
                <motion.a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/70 hover:text-highlight hover:bg-white/10 transition-colors border border-white/10 relative group"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + social.delay }}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-dark-card rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
            
            {/* Scroll Down */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center lg:left-8 lg:bottom-8 lg:transform-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.div
                animate={{ 
                  y: [0, 5, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="p-3 rounded-full bg-white/5 border border-white/10"
              >
                <ArrowDown className="h-5 w-5 text-highlight" />
              </motion.div>
              <span className="text-white/60 text-sm mt-2">Scroll down</span>
            </motion.div>
          </div>
          
          {/* Right Side - Image with MacBook frame */}
          <motion.div 
            className="lg:col-span-5 z-10 perspective-1000"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative w-full h-auto"
              whileHover={{ 
                rotateY: -5,
                rotateX: 5,
                transition: { type: "spring", stiffness: 100 }
              }}
            >
              {/* MacBook Frame with 3D effect */}
              <div className="relative w-full h-auto">
                {/* MacBook Body */}
                <div className="relative p-4 pt-6 pb-10 bg-gradient-to-b from-[#9F9EA1] to-[#8A898C] rounded-xl shadow-2xl overflow-hidden">
                  {/* Screen Bezel */}
                  <div className="relative rounded-lg bg-[#222222] p-1.5 shadow-inner">
                    {/* Screen Content */}
                    <div className="relative overflow-hidden rounded-md aspect-ratio-16/9 bg-gradient-to-br from-highlight/30 to-purple-500/30">
                      <img 
                        src="https://i.postimg.cc/KY0cQZW2/1735342491943.jpg" 
                        alt="Sivachandran Ariyaputhuri" 
                        className="w-full h-full rounded-md object-cover"
                      />
                      {/* Screen reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* MacBook Bottom with details */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#8A898C] via-[#9F9EA1] to-[#8A898C]">
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-[#777]"></div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500/70 animate-pulse"></div>
                  </div>
                </div>

                {/* MacBook Reflection */}
                <div className="absolute -bottom-6 left-6 right-6 h-8 bg-highlight/5 blur-md rounded-[100%]"></div>
              </div>
              
              {/* AWS Badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-dark-card glass-effect py-2 px-5 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <a 
                  href="https://community.aws/@sivachandranice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-highlight font-medium hover:text-highlight/80 flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 bg-highlight rounded-full animate-pulse"></span>
                  AWS Community Builder
                </a>
              </motion.div>

              {/* Floating UI elements */}
              <motion.div
                className="absolute -top-5 -right-5 px-4 py-2 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                whileHover={{ y: -3 }}
                drag
                dragConstraints={{ top: -10, right: 10, bottom: 10, left: -10 }}
              >
                <p className="text-white text-sm font-medium">Java Expert</p>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 px-3 py-1.5 bg-purple-500/10 backdrop-blur-lg rounded-lg border border-purple-500/20 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                whileHover={{ y: -3 }}
                drag
                dragConstraints={{ top: -10, right: 10, bottom: 10, left: -10 }}
              >
                <p className="text-white/90 text-xs font-medium">12+ Years</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
