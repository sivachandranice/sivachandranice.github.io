
import React from 'react';

const ContactSection = () => {
  console.log('ContactSection component rendering...');
  return (
    <section id="contact" className="bg-dark-card/50 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-white/80 mb-6">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="space-y-4">
            <p className="text-white/70">
              Email: <a href="mailto:sivachandranice@gmail.com" className="text-highlight hover:underline">sivachandranice@gmail.com</a>
            </p>
            <p className="text-white/70">
              LinkedIn: <a href="https://linkedin.com/in/sivachandran-ariyaputhuri" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">sivachandran-ariyaputhuri</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
