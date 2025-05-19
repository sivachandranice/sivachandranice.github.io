
import React, { useState } from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS integration with proper template parameters
    emailjs.send(
      'service_yezr0m8',
      'template_oq8h708',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Sivachandran', // Adding recipient name for the template
      },
      'KtRGB8T4UOSDFeSKY'
    )
      .then((response) => {
        console.log('Email sent successfully!', response);
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('Email sending failed:', err);
        toast({
          title: "Message failed to send",
          description: "There was an issue sending your message. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="bg-dark-card/50 py-20">
      <div className="container">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <div>
            <p className="text-white/80 text-lg mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hello, I'll do my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-highlight/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                  <a href="mailto:sivachandranice@gmail.com" className="text-white/70 hover:text-highlight transition-colors">
                    sivachandranice@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-highlight/10 flex items-center justify-center shrink-0">
                  <Linkedin className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/sivachandran-ariyaputhuri" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-highlight transition-colors"
                  >
                    linkedin.com/in/sivachandran-ariyaputhuri
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-highlight/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-highlight" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                  <p className="text-white/70">Available upon request</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-bg p-6 md:p-8 rounded-lg border border-dark-border">
            <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-dark-card border-dark-border text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-dark-card border-dark-border text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-dark-card border-dark-border text-white"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-dark-card border-dark-border text-white h-32"
                  placeholder="Your message here..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-highlight hover:bg-highlight/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
