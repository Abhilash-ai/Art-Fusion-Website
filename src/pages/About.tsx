import { motion } from 'framer-motion';

const TIMELINE = [
  { year: '2015', title: 'The First Stroke', description: 'Started as a small hobby, creating custom portraits for friends and family.' },
  { year: '2018', title: 'Discovering Embroidery', description: 'Fell in love with the tactile nature of threads and began combining it with traditional painting.' },
  { year: '2020', title: 'Digital Evolution', description: 'Embraced the digital canvas to explore new dimensions of colors and lighting.' },
  { year: '2023', title: 'Art Fusion is Born', description: 'Launched Art Fusion to share my passion for both traditional and digital handcrafted art with the world.' },
];

export default function About() {
  return (
    <div className="flex flex-col w-full pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            My Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6"
          >
            Every Artwork Tells a Personal Story
          </motion.h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-muted relative z-10 shadow-2xl">
              <img 
                src="/artist.png" 
                alt="Artist in the studio" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Hi, I'm the creator behind Art Fusion. I started this journey because I believe that in our fast-paced, mass-produced world, we are losing touch with the deeply personal connection that comes from handcrafted objects.
            </p>
            <p>
              My passion spans across both traditional mediums like embroidery and watercolor, to the modern, limitless canvas of digital art. Whether I am carefully stitching a delicate floral pattern onto a handkerchief or painting a digital landscape, my process is driven by intense emotion and care.
            </p>
            <div className="bg-muted/30 p-8 border-l-4 border-primary rounded-r-sm my-4">
              <p className="italic text-foreground font-serif text-xl">
                "I believe that every artwork should carry emotions, memories, and personal meaning. It's not just decor; it's a piece of a story."
              </p>
            </div>
            <p>
              Commitment to quality, originality, and attention to detail is at the core of everything I do. When you order from Art Fusion, you're not just buying an item—you're commissioning a piece of heart and soul, made uniquely for you.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">The Creative Journey</h2>
          </div>
          
          <div className="relative border-l border-border ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
            {TIMELINE.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative pl-8 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${
                  index % 2 === 0 
                    ? "md:pr-12 md:text-right md:left-0" 
                    : "md:pl-12 md:left-1/2"
                }`}
              >
                {/* Timeline Node */}
                <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -left-[9px] md:-left-[9px] ${
                  index % 2 === 0 ? "md:left-auto md:-right-[9px]" : ""
                }`}></div>
                
                <span className="text-primary font-bold tracking-wider mb-2 block">{item.year}</span>
                <h3 className="text-xl font-serif text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
