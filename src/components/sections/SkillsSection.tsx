
import React from 'react';

const SkillsSection = () => {
  console.log('SkillsSection component rendering...');
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <p>Java, JavaScript, TypeScript</p>
          </div>
          <div className="bg-dark-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
            <p>React, Spring Boot</p>
          </div>
          <div className="bg-dark-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Cloud</h3>
            <p>AWS, Cloud Computing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
