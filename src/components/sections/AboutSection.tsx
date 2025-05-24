
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="bg-dark-card/50 py-20">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            <p className="text-lg text-white/80 mb-6">
              With over 12 years of experience in the IT industry, I specialize in product development, testing, business process improvement, and full-cycle application development. My passion lies in creating scalable solutions that align perfectly with business objectives.
            </p>
            
            <p className="text-lg text-white/80 mb-6">
              As an AWS Community Builder, I continuously explore cloud technologies to enhance my skill set and deliver innovative solutions. My technical foundation in Java development has allowed me to build robust applications across various domains.
            </p>
            
            <p className="text-lg text-white/80">
              I believe in continuous learning and staying updated with emerging technologies to deliver efficient and future-proof solutions for complex business challenges.
            </p>
          </div>
          
          <div>
            <Card className="bg-dark-bg border-dark-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-highlight">Education & Credentials</h3>
                
                <div className="mb-4">
                  <h4 className="font-medium text-white">B.Tech in Instrumentation and Control Engineering</h4>
                  <p className="text-white/70">Pondicherry University, 2012</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-white">AWS Community Builder</h4>
                  <p className="text-white/70">Active member exploring cloud technologies</p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-highlight">Personal Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/80">Cloud Computing</span>
                    <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/80">Emerging Tech</span>
                    <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/80">Business Solutions</span>
                    <span className="px-3 py-1 bg-dark-card rounded-full text-sm text-white/80">Process Improvement</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
