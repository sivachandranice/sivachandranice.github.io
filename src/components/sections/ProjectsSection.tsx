
import React from 'react';

const ProjectsSection = () => {
  console.log('ProjectsSection component rendering...');
  return (
    <section id="projects" className="bg-dark-card/50 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-dark-bg p-6 rounded-lg border border-dark-border">
            <h3 className="text-xl font-semibold mb-4">Project 1</h3>
            <p className="text-white/80">Description of project 1</p>
          </div>
          <div className="bg-dark-bg p-6 rounded-lg border border-dark-border">
            <h3 className="text-xl font-semibold mb-4">Project 2</h3>
            <p className="text-white/80">Description of project 2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
