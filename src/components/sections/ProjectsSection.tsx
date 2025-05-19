
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Check, Trophy, Medal, Star, BadgeCheck } from 'lucide-react';
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
    title: "Application Showcased to Apple CEO",
    description: "Designed innovative solution officially acknowledged by Apple CEO Tim Cook on his social media, representing breakthrough user experience design.",
    icon: Star,
    organization: "Apple Inc.",
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

// Animation variants for elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
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
    <section id="projects" className="py-20 bg-gradient-to-b from-dark-bg to-black/40">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-3 text-center">Achievements & Recognition</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A track record of excellence and innovation recognized by industry leaders and organizations.</p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.id} variants={itemVariants}>
              <Card 
                className="bg-dark-card border-dark-border hover:border-highlight transition-all duration-300 h-full overflow-hidden group"
              >
                <CardContent className="p-6 flex flex-col h-full relative">
                  {/* Category badge */}
                  <Badge className="absolute top-2 right-2 bg-highlight/20 text-highlight border-none">
                    {achievement.category}
                  </Badge>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center flex-shrink-0 group-hover:bg-highlight/20 transition-all duration-300">
                      <achievement.icon className="h-6 w-6 text-highlight" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-highlight transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-white/70 mb-4">{achievement.description}</p>
                      
                      <div className="mt-auto flex flex-col pt-2 border-t border-white/10">
                        {achievement.organization && (
                          <span className="text-sm font-medium text-highlight">
                            {achievement.organization}
                          </span>
                        )}
                        {achievement.date && (
                          <span className="text-xs text-white/50 mt-1">
                            {achievement.date}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
