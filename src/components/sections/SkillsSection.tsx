
import React from 'react';

const skillCategories = [
  {
    id: 1,
    category: "Languages",
    skills: ["Java (J2EE)", "Shell Scripting", "PowerShell Scripting"]
  },
  {
    id: 2,
    category: "Frameworks",
    skills: ["Struts", "Spring", "Spring Boot", "Camunda"]
  },
  {
    id: 3,
    category: "Databases",
    skills: ["Oracle", "PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    id: 4,
    category: "Servers",
    skills: ["Solaris", "Linux", "Windows Server"]
  },
  {
    id: 5,
    category: "Cloud",
    skills: ["AWS"]
  },
  {
    id: 6,
    category: "RPA",
    skills: ["Automation Anywhere"]
  },
  {
    id: 7,
    category: "AI",
    skills: ["Spring AI"]
  }
];

const SkillSection = () => {
  return (
    <section id="skills" className="bg-dark-card/50 py-20">
      <div className="container">
        <h2 className="section-heading">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-card">
              <h3 className="text-xl font-semibold text-highlight mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-highlight rounded-full"></div>
                    <span className="text-white/90">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-dark-bg p-6 rounded-lg border border-dark-border">
          <h3 className="text-xl font-semibold text-white mb-4">Professional Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Product Development", "Application Testing", "Business Process Improvement",
              "Full-Cycle Development", "Cloud Architecture", "Performance Optimization",
              "System Integration", "Technical Documentation"].map((expertise, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-dark-card/50 rounded-md p-3"
                >
                  <div className="w-1.5 h-1.5 bg-highlight rounded-full"></div>
                  <span className="text-sm text-white/80">{expertise}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
