
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Assistant Vice President",
    company: "OCBC",
    location: "Singapore",
    period: "Apr 2024 – Present",
    description: "Currently serving as Assistant Vice President, focusing on financial technology solutions and process optimization."
  },
  {
    id: 2,
    title: "Senior Application Technologist",
    company: "Modular Infotech Pte. Ltd.",
    location: "Singapore",
    period: "May 2022 – Apr 2024",
    description: "Led the development of enterprise applications using Java and AWS technologies. Designed scalable architectures and implemented best practices for application performance."
  },
  {
    id: 3,
    title: "Senior Application Consultant",
    company: "Tata Consultancy Services Pt. Ltd.",
    location: "India, Singapore",
    period: "Jan 2013 – May 2022",
    description: "Provided expert consultation on application development, testing, and business process improvement. Delivered full-cycle application development and implemented automation solutions for clients."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="mt-10 space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-[50%] before:-ml-px md:before:ml-0 before:h-full before:w-0.5 before:bg-dark-border before:content-['']">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="flex items-center ml-10 md:ml-0 md:w-1/2">
                <span className="absolute left-0 md:left-[50%] flex items-center justify-center w-8 h-8 rounded-full bg-dark-bg border-4 border-highlight transform md:-translate-x-1/2">
                  <Briefcase className="h-3 w-3 text-highlight" />
                </span>
                
                <Card className="w-full bg-dark-card border-dark-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{experience.title}</h3>
                    <h4 className="text-highlight font-medium mb-1">{experience.company}</h4>
                    <p className="text-white/70 text-sm mb-2">{experience.location}</p>
                    <div className="flex items-center text-white/70 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{experience.period}</span>
                    </div>
                    <p className="text-white/80">{experience.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
