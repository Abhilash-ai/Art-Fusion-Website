import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

const FAQS = [
  {
    category: 'Custom Orders',
    questions: [
      {
        q: 'How long do custom orders take?',
        a: 'Custom orders typically take 3-5 weeks from the date of confirmation. This includes time for design consultation, the actual creation process, and preparation for shipping. If you need something by a specific date, please mention it in your request, and I will do my best to accommodate.'
      },
      {
        q: 'Can I request personalized artwork?',
        a: 'Absolutely! Personalization is at the heart of Art Fusion. Whether it\'s a portrait, a specific color palette, or incorporating a meaningful symbol into an embroidery, I love bringing your personal stories to life.'
      }
    ]
  },
  {
    category: 'Shipping & Returns',
    questions: [
      {
        q: 'Do you ship internationally?',
        a: 'Yes, I ship worldwide! International shipping rates vary by location and will be calculated at checkout. Please note that buyers are responsible for any customs and import taxes that may apply.'
      },
      {
        q: 'What is your return policy?',
        a: 'For ready-to-ship items, I accept returns within 14 days of delivery. The item must be returned in its original condition. Custom and personalized orders cannot be returned, but if there is an issue with your order, please contact me and I will make it right.'
      }
    ]
  },
  {
    category: 'Product Care',
    questions: [
      {
        q: 'How should I care for my embroidered artwork?',
        a: 'Keep embroidered pieces away from direct, prolonged sunlight to prevent the threads from fading. If the piece is framed, try to use UV-protective glass. Do not machine wash. If absolutely necessary, spot clean gently with a damp cloth.'
      },
      {
        q: 'Are the digital prints high quality?',
        a: 'Yes, all digital illustrations are printed on premium, archival-quality matte paper using fade-resistant inks, ensuring they remain vibrant for years to come.'
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>('Custom Orders-0');

  const toggleOpen = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Find answers to common questions about orders, shipping, and artwork care.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {FAQS.map((category, catIndex) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h2 className="text-2xl font-serif text-foreground mb-6 pb-2 border-b border-border">{category.category}</h2>
              <div className="flex flex-col gap-4">
                {category.questions.map((faq, index) => {
                  const id = `${category.category}-${index}`;
                  const isOpen = openIndex === id;
                  return (
                    <div 
                      key={index} 
                      className="border border-border/50 rounded-sm overflow-hidden bg-white hover:border-primary/50 transition-colors"
                    >
                      <button
                        onClick={() => toggleOpen(id)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <span className="font-medium text-foreground pr-8">{faq.q}</span>
                        <ChevronDown className={cn(
                          "w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0",
                          isOpen ? "rotate-180 text-primary" : ""
                        )} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/10 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
