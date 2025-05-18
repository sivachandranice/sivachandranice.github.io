
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Check } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "LEAP Data Migration Success",
    description: "Successfully completed the LEAP data migration at OCBC with zero production issues or data mismatches, ensuring seamless transition and business continuity.",
    icon: Check
  },
  {
    id: 2,
    title: "Best Team Award - LSQ2 Project",
    description: "Received 'Best Team' award for solutioning critical flight operation system LSQ2 in 2021, demonstrating exceptional teamwork and technical expertise.",
    icon: Award
  },
  {
    id: 3,
    title: "Applause for Team Award",
    description: "Earned 'Applause for Team' award for innovative solutioning of ELB device using iPad, creating an efficient and user-friendly interface.",
    icon: Award
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-heading">Projects & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className="bg-dark-card border-dark-border hover:border-highlight/50 transition-all duration-300 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center mb-4">
                  <achievement.icon className="h-6 w-6 text-highlight" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
                <p className="text-white/70 flex-grow">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Featured Projects</h3>
          
          <div className="bg-dark-bg rounded-lg border border-dark-border p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-medium text-highlight mb-2">Financial System Integration</h4>
                <p className="text-white/80 mb-4">
                  Led the development of a robust financial system integration platform that streamlined data flow between multiple banking applications, reducing processing time by 40% and improving data accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/70">Java</span>
                  <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/70">Spring Boot</span>
                  <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/70">AWS</span>
                  <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/70">PostgreSQL</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-highlight mb-2">Process Automation Framework</h4>
                <p className="text-white/80 mb-4">
                  Designed and implemented an enterprise-wide process automation framework using RPA technologies, resulting in 65% reduction in manual processes and significant improvement in operational efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/70">Automation Anywhere</span>
                  <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/70">Java</span>
                  <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/70">Shell Scripting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
