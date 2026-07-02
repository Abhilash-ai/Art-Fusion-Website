import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { id: 'embroidered', name: 'Embroidered Handkerchiefs', desc: 'Delicate floral and custom thread work.', image: '/art_1.png' },
  { id: 'digital', name: 'Digital Art', desc: 'Modern, vibrant, and infinitely creative.', image: '/art_2.png' },
  { id: 'watercolor', name: 'Watercolor Paintings', desc: 'Fluid, emotive, and naturally beautiful.', image: '/hero_bg.png' },
  { id: 'sketch', name: 'Pencil Sketches', desc: 'Detailed and expressive graphite art.', image: '/artist.png' },
  { id: 'portrait', name: 'Portrait Illustrations', desc: 'Capturing personality and likeness.', image: '/art_1.png' },
  { id: 'acrylic', name: 'Acrylic Paintings', desc: 'Bold textures and striking colors.', image: '/hero_bg.png' },
  { id: 'photography', name: 'Photography Prints', desc: 'Moments frozen in time.', image: '/art_2.png' },
  { id: 'calligraphy', name: 'Calligraphy', desc: 'The elegant art of beautiful writing.', image: '/artist.png' },
  { id: 'greeting', name: 'Greeting Cards', desc: 'Share a piece of art with a loved one.', image: '/art_1.png' },
  { id: 'custom', name: 'Custom Gifts', desc: 'Personalized treasures for special occasions.', image: '/hero_bg.png' },
];

export default function Collections() {
  return (
    <div className="flex flex-col w-full pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6"
          >
            Curated Collections
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Explore our diverse range of handcrafted and digital artworks, each created with passion and meticulous attention to detail.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link to={`/collections/${cat.id}`} className="group relative block aspect-square overflow-hidden rounded-sm bg-muted">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Always visible gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-serif mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">{cat.name}</h3>
                  
                  {/* Hidden description revealed on hover */}
                  <div className="overflow-hidden">
                    <div className="transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-3">
                      <p className="text-sm text-white/90">{cat.desc}</p>
                      <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-medium">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
