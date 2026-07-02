import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED_ARTWORKS = [
  { id: 1, title: 'Floral Elegance', category: 'Embroidered Handkerchief', price: '$45', image: '/art_1.png', badge: 'Made to Order' },
  { id: 2, title: 'Serene Landscape', category: 'Digital Illustration', price: '$80', image: '/art_2.png', badge: 'Ready to Ship' },
  { id: 3, title: 'Golden Hour', category: 'Watercolor Painting', price: '$120', image: '/hero_bg.png', badge: 'Ready to Ship' },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1, opacity }}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src="/hero_bg.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center scale-105"
          />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white/80 font-medium tracking-[0.2em] uppercase text-sm mb-6 block">Original Handcrafted Art</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight max-w-5xl"
          >
            Art That Speaks <br className="hidden md:block" /> From the Heart
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mb-12 leading-relaxed text-balance"
          >
            Welcome to Art Fusion, where creativity meets craftsmanship. Every artwork is thoughtfully created by hand or digitally designed with passion. Whether you're looking for a customized embroidered handkerchief, a meaningful painting, a digital illustration, or a personalized sketch, every piece is made uniquely for you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link 
              to="/collections"
              className="px-8 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:shadow-xl rounded-sm flex items-center justify-center gap-2 group"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/custom-orders"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium hover:bg-white hover:text-black transition-all rounded-sm flex items-center justify-center"
            >
              Order a Custom Artwork
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
            <motion.div 
              className="w-full h-full bg-white absolute top-0 left-0"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">Selected Works</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">Featured Artworks</h2>
            </div>
            <Link to="/collections" className="text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors flex items-center gap-2 group w-fit">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_ARTWORKS.map((art, index) => (
              <motion.div 
                key={art.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col gap-4"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted rounded-sm">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-sm uppercase tracking-wider text-charcoal shadow-sm">
                      {art.badge}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="w-full bg-white text-charcoal py-3 font-medium hover:bg-primary hover:text-white transition-colors rounded-sm shadow-lg">
                      Quick Add
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-serif text-foreground">{art.title}</h3>
                    <span className="text-lg text-foreground font-medium">{art.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{art.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-full border-8 border-white shadow-2xl">
                <img 
                  src="/artist.png" 
                  alt="Artist in studio" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-primary/20"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/10 border-dashed"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 flex flex-col gap-6"
            >
              <span className="text-primary font-medium tracking-widest uppercase text-sm block">Behind the Art</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">Meet the Artist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that art is not just something you look at, but something you feel. Every piece in my collection is born from a desire to capture fleeting moments, intense emotions, and the quiet beauty of the world around us.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether my hands are covered in paint, carefully guiding an embroidery needle, or sketching on a digital tablet, my goal is always the same: to tell a story that resonates with your heart.
              </p>
              <div className="mt-4">
                <Link 
                  to="/about"
                  className="inline-flex px-8 py-4 bg-transparent border border-foreground text-foreground font-medium hover:bg-foreground hover:text-background transition-colors rounded-sm"
                >
                  Read My Story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
