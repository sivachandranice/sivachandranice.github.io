
import React from 'react';
import { Github, Linkedin, Mail, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-0 relative overflow-hidden">
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

      <div className="container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-3 py-1 px-3 rounded-full bg-highlight/10 text-highlight text-sm font-medium"
            >
              AWS Community Builder
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hi, I'm <span className="text-gradient">Sivachandran</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-highlight font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Java Developer & AWS Community Builder
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Passionate about building, optimizing, and innovating—crafting high-performance solutions that align with business goals. 
              From robust applications to cloud-native transformations, I thrive on delivering tech that makes an impact.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <Button 
                size="lg" 
                className="bg-highlight hover:bg-highlight/90 text-white relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <a href="#contact" className="flex items-center gap-2 relative z-10">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 hover:bg-white/5 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <a href="#about" className="flex items-center gap-2 relative z-10">
                  Learn More
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex gap-6"
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
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Animated rings around the profile image */}
              <motion.div 
                className="absolute inset-0 border-4 border-highlight/20 rounded-full"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute -inset-3 border-2 border-highlight/10 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              />
              
              {/* Profile Image */}
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-highlight relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://i.postimg.cc/KY0cQZW2/1735342491943.jpg" 
                  alt="Sivachandran Ariyaputhuri" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* QR Code */}
              <motion.div 
                className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <img 
                  src="/lovable-uploads/69c46467-3d13-4800-8881-ff4bff2fb1a2.png" 
                  alt="AWS Community Builder QR Code" 
                  className="w-24 h-24"
                />
                <div className="text-center mt-1 text-xs text-black font-medium">
                  AWS Profile
                </div>
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
