import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Globe, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6"
          >
            Let's Talk Art
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Have a question about an order, a potential collaboration, or just want to say hi? I'd love to hear from you.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/3 flex flex-col gap-10"
          >
            <div>
              <h3 className="text-2xl font-serif text-foreground mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Email</h4>
                    <a href="mailto:hello@artfusion.com" className="hover:text-primary transition-colors">hello@artfusion.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">Studio (By Appointment)</h4>
                    <p>123 Creative Avenue, Art District<br/>New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-foreground mb-6">Follow My Journey</h3>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-foreground"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <span>@artfusion.studio</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-foreground"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </div>
                  <span>Art Fusion</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-2/3"
          >
            {isSubmitted ? (
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-sm h-full flex flex-col items-center justify-center text-center min-h-[400px]">
                <h3 className="text-3xl font-serif text-foreground mb-4">Message Sent</h3>
                <p className="text-muted-foreground mb-8">Thank you for reaching out! I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-primary text-white hover:bg-primary/90 transition-colors rounded-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 bg-white p-8 border border-border/50 shadow-sm rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <input 
                      type="text" 
                      {...register("name")}
                      className={`px-4 py-3 bg-transparent border ${errors.name ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-primary`}
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input 
                      type="email" 
                      {...register("email")}
                      className={`px-4 py-3 bg-transparent border ${errors.email ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-primary`}
                    />
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <input 
                    type="text" 
                    {...register("subject")}
                    className={`px-4 py-3 bg-transparent border ${errors.subject ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-primary`}
                  />
                  {errors.subject && <span className="text-xs text-red-500">{errors.subject.message}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea 
                    {...register("message")}
                    rows={6}
                    className={`px-4 py-3 bg-transparent border ${errors.message ? 'border-red-500' : 'border-border'} rounded-sm focus:outline-none focus:border-primary resize-none`}
                  ></textarea>
                  {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-foreground text-background font-medium py-4 px-6 rounded-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
