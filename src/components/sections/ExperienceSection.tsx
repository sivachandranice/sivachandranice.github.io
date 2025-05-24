
import React from 'react';

const ExperienceSection = () => {
  console.log('ExperienceSection component rendering...');
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          <div className="bg-dark-card p-6 rounded-lg border border-dark-border">
            <h3 className="text-xl font-semibold mb-2">Assistant Vice President</h3>
            <p className="text-highlight mb-2">OCBC | Singapore</p>
            <p className="text-white/70 mb-4">Apr 2024 – Present</p>
            <p className="text-white/80">Currently serving as Assistant Vice President, focusing on financial technology solutions and process optimization.</p>
          </div>
          <div className="bg-dark-card p-6 rounded-lg border border-dark-border">
            <h3 className="text-xl font-semibold mb-2">Senior Application Technologist</h3>
            <p className="text-highlight mb-2">Modular Infotech Pte. Ltd. | Singapore</p>
            <p className="text-white/70 mb-4">May 2022 – Apr 2024</p>
            <p className="text-white/80">Led the development of enterprise applications using Java and AWS technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
