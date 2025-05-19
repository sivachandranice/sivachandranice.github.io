
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Check, Trophy, Medal } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "LEAP Data Migration Success",
    description: "Successfully completed the LEAP data migration at OCBC with zero production issues or data mismatches, ensuring seamless transition and business continuity.",
    icon: Check,
    organization: "OCBC"
  },
  {
    id: 2,
    title: "Best Team Award - LSQ2 Project",
    description: "Received 'Best Team' award for solutioning critical flight operation system LSQ2 in 2021, demonstrating exceptional teamwork and technical expertise.",
    icon: Trophy,
    organization: "TATA CONSULTANCY SERVICES"
  },
  {
    id: 3,
    title: "Applause for Team Award",
    description: "Earned 'Applause for Team' award for innovative solutioning of ELB device using iPad, creating an efficient and user-friendly interface.",
    icon: Award,
    organization: "TATA CONSULTANCY SERVICES",
    date: "10/2021"
  },
  {
    id: 4,
    title: "Application Showcased to Apple CEO",
    description: "Application designed by our team was showcased to Apple CEO (Tim Cook) which he officially mentioned in his Twitter page.",
    icon: Trophy,
    date: "12/2019"
  },
  {
    id: 5,
    title: "Standing Ovation Award",
    description: "Recognized with the Standing Ovation Award for exceptional performance and contributions.",
    icon: Award,
    organization: "SINGAPORE AIRLINES",
    date: "05/2023"
  },
  {
    id: 6,
    title: "Service and Commitment Award",
    description: "Honored with the Service and Commitment Award for dedication and excellence in service delivery.",
    icon: Medal,
    organization: "Newgen Software Private Limited",
    date: "01/2016 - 12/2016"
  },
  {
    id: 7,
    title: "Best Team Award",
    description: "Received Best Team Award for outstanding collaborative achievements and project success.",
    icon: Trophy,
    organization: "SINGAPORE AIRLINES",
    date: "01/2014 - 12/2014"
  },
  {
    id: 8,
    title: "On the Spot Award",
    description: "Recognized with On the Spot Award for exceptional problem-solving skills and immediate impact.",
    icon: Award,
    organization: "SINGAPORE AIRLINES",
    date: "01/2013 - 12/2013"
  }
];

const projects = [
  {
    id: 1,
    title: "Financial System Integration",
    description: "Led the development of a robust financial system integration platform that streamlined data flow between multiple banking applications, reducing processing time by 40% and improving data accuracy.",
    technologies: ["Java", "Spring Boot", "AWS", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Process Automation Framework",
    description: "Designed and implemented an enterprise-wide process automation framework using RPA technologies, resulting in 65% reduction in manual processes and significant improvement in operational efficiency.",
    technologies: ["Automation Anywhere", "Java", "Shell Scripting"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-heading">Projects & Achievements</h2>
        
        {/* Projects Section */}
        <div className="mt-10 mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Featured Projects</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-dark-bg rounded-lg border border-dark-border p-6 hover:border-highlight/40 transition-all duration-300"
              >
                <h4 className="text-xl font-medium text-highlight mb-2">{project.title}</h4>
                <p className="text-white/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Achievements & Recognition</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.id} 
                className="bg-dark-card border-dark-border hover:border-highlight/50 transition-all duration-300 h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center mb-4">
                    <achievement.icon className="h-6 w-6 text-highlight" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-white/70 flex-grow mb-3">{achievement.description}</p>
                  
                  <div className="mt-auto flex flex-col">
                    {achievement.organization && (
                      <span className="text-sm text-highlight font-medium">
                        {achievement.organization}
                      </span>
                    )}
                    {achievement.date && (
                      <span className="text-xs text-white/50">
                        {achievement.date}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
