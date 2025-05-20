
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Check, Trophy, Medal, Star, BadgeCheck, Tablet } from 'lucide-react';
import { motion } from 'framer-motion';

// Updated achievements with more impactful descriptions and organization
const achievements = [
  {
    id: 1,
    title: "LEAP Data Migration Success",
    description: "Led the seamless LEAP data migration at OCBC with zero production issues, ensuring perfect data integrity and business continuity throughout the transition.",
    icon: BadgeCheck,
    organization: "OCBC",
    category: "Technical Excellence"
  },
  {
    id: 2,
    title: "Best Team Award - LSQ2 Project",
    description: "Recognized for exceptional leadership in developing critical flight operation system LSQ2, establishing new benchmarks in aviation technology.",
    icon: Trophy,
    organization: "TATA CONSULTANCY SERVICES",
    date: "07/2021",
    category: "Leadership"
  },
  {
    id: 3,
    title: "Innovation Showcased to Apple CEO",
    description: "Developed revolutionary iPad-based flight operations solution for Singapore Airlines that transformed paper processes into digital workflows, personally showcased to Tim Cook during his visit to Singapore.",
    icon: Tablet,
    organization: "Singapore Airlines",
    date: "12/2019",
    category: "Innovation"
  },
  {
    id: 4,
    title: "Standing Ovation Award",
    description: "Honored with prestigious Standing Ovation Award for delivering exceptional performance that significantly advanced business objectives.",
    icon: Award,
    organization: "SINGAPORE AIRLINES",
    date: "05/2023",
    category: "Excellence"
  },
  {
    id: 5,
    title: "Applause for Team Award",
    description: "Earned recognition for pioneering ELB device solution using iPad technology, creating an innovative interface that transformed user workflows.",
    icon: Award,
    organization: "TATA CONSULTANCY SERVICES",
    date: "10/2021",
    category: "Innovation"
  },
  {
    id: 6,
    title: "Service and Commitment Award",
    description: "Recognized for outstanding dedication and exceptional service quality that set new standards for client engagement and satisfaction.",
    icon: Medal,
    organization: "Newgen Software Private Limited",
    date: "01/2016 - 12/2016",
    category: "Service Excellence"
  },
  {
    id: 7,
    title: "Best Team Award",
    description: "Acknowledged for extraordinary team collaboration that drove successful project outcomes and exceeded stakeholder expectations.",
    icon: Trophy,
    organization: "SINGAPORE AIRLINES",
    date: "01/2014 - 12/2014",
    category: "Teamwork"
  },
  {
    id: 8,
    title: "On the Spot Award",
    description: "Honored for exceptional problem-solving abilities, delivering immediate solutions that prevented critical business disruptions.",
    icon: Check,
    organization: "SINGAPORE AIRLINES",
    date: "01/2013 - 12/2013",
    category: "Problem Solving"
  }
];

// Enhanced animation variants for elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // Custom ease curve for more elegant motion
    }
  }
};

// Enhanced floating animation for icons
const floatingIconVariants = {
  animate: {
    y: [0, -5, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }
  }
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const lineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

const ProjectsSection = () => {
  // Group achievements by category for better organization
  const achievementCategories = achievements.reduce((categories, achievement) => {
    const { category } = achievement;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(achievement);
    return categories;
  }, {});

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-black/60 z-0" />
      
      <motion.div 
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-highlight/5 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-highlight/5 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, delay: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Add more dynamic background elements */}
      <motion.div 
        className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-highlight/5 blur-2xl"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 3 }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <motion.div
            variants={lineVariants}
            className="h-px bg-gradient-to-r from-transparent via-highlight/50 to-transparent mx-auto mb-6 max-w-[100px]"
          />
          
          <h2 className="section-heading mb-4 text-center inline-block">Achievements & Recognition</h2>
          
          <motion.div
            variants={lineVariants}
            className="h-px bg-gradient-to-r from-transparent via-highlight/50 to-transparent mx-auto mb-6 max-w-[100px]"
          />
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A track record of excellence and innovation recognized by industry leaders and organizations.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.id} variants={itemVariants}>
              <motion.div
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card 
                  className="bg-dark-card/80 backdrop-blur-sm border-dark-border hover:border-highlight transition-all duration-500 h-full overflow-hidden group"
                >
                  <CardContent className="p-6 flex flex-col h-full relative">
                    {/* Enhanced glowing effect on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-highlight/0 to-highlight/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10"
                      animate={{
                        background: ["linear-gradient(to top right, rgba(245, 158, 11, 0), rgba(245, 158, 11, 0))", 
                                    "linear-gradient(to top right, rgba(245, 158, 11, 0.05), rgba(245, 158, 11, 0.2))",
                                    "linear-gradient(to top right, rgba(245, 158, 11, 0), rgba(245, 158, 11, 0))"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    
                    {/* Category badge with enhanced animation */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Badge className="absolute top-2 right-2 bg-highlight/20 text-highlight border-none">
                        {achievement.category}
                      </Badge>
                    </motion.div>
                    
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center flex-shrink-0 group-hover:bg-highlight/20 transition-all duration-500"
                        variants={floatingIconVariants}
                        animate="animate"
                      >
                        <achievement.icon className="h-6 w-6 text-highlight" />
                      </motion.div>
                      
                      <div>
                        <motion.h3 
                          className="text-xl font-bold text-white mb-2 group-hover:text-highlight transition-colors duration-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          {achievement.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-white/70 mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          {achievement.description}
                        </motion.p>
                        
                        <motion.div 
                          className="mt-auto flex flex-col pt-3 border-t border-white/10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          {achievement.organization && (
                            <span className="text-sm font-medium text-highlight/90">
                              {achievement.organization}
                            </span>
                          )}
                          {achievement.date && (
                            <span className="text-xs text-white/50 mt-1">
                              {achievement.date}
                            </span>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
