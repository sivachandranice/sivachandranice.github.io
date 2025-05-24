
import React from 'react';

const AboutSection = () => {
  console.log('AboutSection component rendering...');
  return (
    <section id="about" className="bg-dark-card/50 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-white/80 mb-6">
            With over 12 years of experience in the IT industry, I specialize in product development, testing, business process improvement, and full-cycle application development.
          </p>
          <p className="text-lg text-white/80">
            As an AWS Community Builder, I continuously explore cloud technologies to enhance my skill set and deliver innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
