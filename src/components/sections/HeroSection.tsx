
import React from 'react';

const HeroSection = () => {
  console.log('HeroSection component rendering...');
  return (
    <section className="bg-dark-bg text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl">I'm a software developer with 12+ years of experience</p>
      </div>
    </section>
  );
};

export default HeroSection;
