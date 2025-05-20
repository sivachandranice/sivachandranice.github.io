
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
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-highlight/5 blur-3xl"
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
          className="absolute bottom-20 left-[15%] w-72 h-72 rounded-full bg-highlight/10 blur-3xl"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          {/* Left Side - Content */}
          <div className="lg:col-span-7 z-20">
            {/* Vertical "Product Designer" text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -ml-12 transform -rotate-90 origin-center"
            >
              <span className="text-white/60 tracking-widest uppercase text-sm font-light">Java Developer</span>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="flex mb-16 space-x-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div>
                <motion.h3 
                  className="text-5xl font-light text-white"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  +12
                </motion.h3>
                <motion.p 
                  className="text-white/60 text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Years Experience
                </motion.p>
              </div>
              <div>
                <motion.h3 
                  className="text-5xl font-light text-white"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  +30
                </motion.h3>
                <motion.p 
                  className="text-white/60 text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Projects Completed
                </motion.p>
              </div>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              className="text-[120px] lg:text-[150px] font-bold leading-none -ml-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 50
              }}
            >
              Hello
            </motion.h1>
            
            <motion.h2 
              className="text-xl text-white/80 font-light mb-8 ml-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              — It's Sivachandran, an AWS Community Builder & Java Developer
            </motion.h2>

            {/* Social links */}
            <motion.div 
              className="flex gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
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
                  className="text-white/70 hover:text-highlight transition-colors relative group"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + social.delay }}
                >
                  <social.icon className="h-6 w-6" />
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
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <span className="text-white/60 text-sm mb-2">Scroll down</span>
              <motion.div
                animate={{ 
                  y: [0, 5, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <ArrowDown className="h-5 w-5 text-highlight" />
              </motion.div>
            </motion.div>

            {/* Year */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="hidden lg:block absolute left-8 bottom-8 text-white/40 text-sm"
            >
              © 2024
            </motion.div>
          </div>
          
          {/* Right Side - Image */}
          <motion.div 
            className="lg:col-span-5 z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div 
                className="w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://i.postimg.cc/KY0cQZW2/1735342491943.jpg" 
                  alt="Sivachandran Ariyaputhuri" 
                  className="w-full h-auto rounded-lg grayscale contrast-125 brightness-110"
                />
              </motion.div>
              
              {/* AWS Badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-dark-card glass-effect py-2 px-4 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <a 
                  href="https://community.aws/@sivachandranice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-highlight font-semibold hover:text-highlight/80"
                >
                  AWS Community Builder
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
