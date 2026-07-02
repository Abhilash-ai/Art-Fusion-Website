import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const GALLERY_IMAGES = [
  { id: 1, src: '/art_1.png', category: 'Embroidery', size: 'tall' },
  { id: 2, src: '/hero_bg.png', category: 'Painting', size: 'wide' },
  { id: 3, src: '/artist.png', category: 'Sketch', size: 'small' },
  { id: 4, src: '/art_2.png', category: 'Digital', size: 'large' },
  { id: 5, src: '/hero_bg.png', category: 'Painting', size: 'small' },
  { id: 6, src: '/art_1.png', category: 'Embroidery', size: 'wide' },
];

const CATEGORIES = ['All', 'Embroidery', 'Painting', 'Digital', 'Sketch'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="flex flex-col w-full pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">Artwork Gallery</h1>
          <p className="text-lg text-muted-foreground">A visual journey through past commissions and personal projects.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors border",
                filter === cat 
                  ? "bg-foreground text-background border-foreground" 
                  : "bg-transparent text-foreground border-border hover:border-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  show: { opacity: 1, scale: 1, y: 0 }
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className={cn(
                  "relative overflow-hidden rounded-sm group cursor-pointer bg-muted",
                  img.size === 'tall' && "row-span-2",
                  img.size === 'wide' && "md:col-span-2",
                  img.size === 'large' && "md:col-span-2 row-span-2"
                )}
              >
                <img 
                  src={img.src} 
                  alt={`Gallery piece - ${img.category}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
