
import React from 'react';
import { Github, Linkedin, Mail, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Animation variants for staggered elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// Extra animation for floating elements
const floatingVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-0 relative overflow-hidden">
      {/* Enhanced background elements */}
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
        {/* Additional animated background elements for the wow effect */}
        <motion.div 
          className="absolute top-1/3 left-[20%] w-40 h-40 rounded-full bg-highlight/10 blur-2xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 50, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-[30%] w-56 h-56 rounded-full bg-highlight/8 blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3
          }}
        />
      </div>

      <div className="container z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-3 py-1 px-3 rounded-full bg-highlight/10 text-highlight text-sm font-medium"
            >
              <span className="animate-pulse-slow inline-block mr-2">✦</span>
              AWS Community Builder
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-gradient relative">
                Sivachandran
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-highlight"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 1.2,
                    ease: "easeInOut" 
                  }}
                />
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-highlight font-bold mb-6"
              variants={itemVariants}
            >
              Java Developer & AWS Community Builder
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              Passionate about building, optimizing, and innovating—crafting high-performance solutions that align with business goals. 
              From robust applications to cloud-native transformations, I thrive on delivering tech that makes an impact.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button 
                  size="lg" 
                  className="bg-highlight hover:bg-highlight/90 text-white relative overflow-hidden group pulse-button"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <a href="#contact" className="flex items-center gap-2 relative z-10">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
            </motion.div>
            
            <motion.div 
              className="flex gap-6"
              variants={itemVariants}
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
                  whileHover={{ 
                    scale: 1.2,
                    color: "#f59e0b",
                    transition: { duration: 0.2 }
                  }}
                  variants={itemVariants}
                  custom={index}
                >
                  <social.icon className="h-6 w-6" />
                  <motion.span 
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-dark-card rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="relative">
              {/* Enhanced animated rings with glow effect */}
              <motion.div 
                className="absolute inset-0 border-4 border-highlight/20 rounded-full animate-glow"
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
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              />
              
              {/* Profile Image with enhanced hover effects */}
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-highlight relative z-10"
                variants={floatingVariants}
                animate="float"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300 
                }}
              >
                <img 
                  src="https://i.postimg.cc/KY0cQZW2/1735342491943.jpg" 
                  alt="Sivachandran Ariyaputhuri" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* QR Code with improved animation */}
              <motion.div 
                className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  rotate: [0, -5, 0, 5, 0],
                  transition: {
                    rotate: {
                      duration: 1,
                      repeat: 0
                    }
                  }
                }}
                variants={floatingVariants}
                custom={1}
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
              
              {/* AWS Badge with enhanced animation */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-dark-card glass-effect py-2 px-4 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                variants={floatingVariants}
                custom={2}
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
              
              {/* Add floating tech particles for enhanced visual appeal */}
              {["AWS", "Java", "Spring", "Cloud", "DevOps"].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute bg-dark-card glass-effect px-2 py-1 rounded-lg text-xs text-white/80"
                  initial={{ 
                    opacity: 0,
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                  }}
                  animate={{ 
                    opacity: [0.4, 0.8, 0.4],
                    x: Math.random() * 60 - 30,
                    y: Math.random() * 60 - 30,
                  }}
                  transition={{
                    duration: 10 + index * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5,
                  }}
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
