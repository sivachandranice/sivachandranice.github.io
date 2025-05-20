import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  const achievementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Fix: Specify the correct type for repeatType
  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop" as const, // Fixed type error by using 'as const'
      ease: "easeInOut"
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-40 right-[5%] w-64 h-64 rounded-full bg-highlight/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-highlight/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      <div className="container z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-heading text-center mb-16">Projects & Achievements</h2>
        </motion.div>

        <div className="space-y-24">
          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Cloud Migration Framework",
                  description: "Developed a comprehensive framework for migrating on-premises applications to AWS cloud, resulting in 40% reduction in migration time and significant cost savings.",
                  tags: ["AWS", "Java", "Terraform", "DevOps"],
                  link: "#",
                  github: "#"
                },
                {
                  title: "Flight Operations Digitalization",
                  description: "Led the development of an iPad application that transformed Singapore Airlines' flight operations from paper-based to digital workflows, enhancing efficiency and reducing environmental impact.",
                  tags: ["Java", "Spring Boot", "AWS", "iOS"],
                  link: "#",
                  github: "#"
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-card p-8 rounded-lg border border-dark-border hover:border-highlight/20 transition-all overflow-hidden group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <h4 className="text-xl font-bold mb-3 text-gradient">{project.title}</h4>
                  <p className="text-white/70 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:text-highlight group-hover:text-highlight/80">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:text-highlight group-hover:text-highlight/80">
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <div className="pt-16">
            <motion.h3 
              className="text-2xl font-semibold mb-12 text-center text-gradient"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Achievements & Recognition
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="h-8 w-8 text-highlight" />,
                  category: "Apple CEO Showcase",
                  title: "iPad Flight Ops App",
                  description: "Presented our revolutionary iPad app to Tim Cook during his Singapore Airlines visit, showcasing how we transformed paper-based flight operations into a seamless digital experience.",
                  gradient: "from-orange-500/20 to-red-600/5"
                },
                {
                  icon: <Award className="h-8 w-8 text-highlight" />,
                  category: "Community Recognition",
                  title: "AWS Community Builder",
                  description: "Selected as an AWS Community Builder for contributions to cloud computing knowledge sharing and community support.",
                  gradient: "from-blue-500/20 to-purple-600/5"
                },
                {
                  icon: <Award className="h-8 w-8 text-highlight" />,
                  category: "Industry Impact",
                  title: "Digital Transformation Award",
                  description: "Received recognition for leading digital transformation initiatives that significantly improved operational efficiency.",
                  gradient: "from-green-500/20 to-teal-600/5"
                }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={achievementVariants}
                  className={cn(
                    "bg-dark-card rounded-lg p-8 border border-dark-border hover:border-highlight/30",
                    "transition-all duration-300 group relative overflow-hidden"
                  )}
                  whileHover={{ y: -5 }}
                >
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    achievement.gradient
                  )} />
                  
                  <motion.div animate={floatingAnimation} className="mb-6">
                    {achievement.icon}
                  </motion.div>
                  
                  <span className="text-xs font-medium text-highlight/80 bg-highlight/10 px-3 py-1 rounded-full inline-block mb-4">
                    {achievement.category}
                  </span>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-white/70">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
