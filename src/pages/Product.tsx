import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, Check, PenTool } from 'lucide-react';
import { cn } from '../utils/cn';
import { useCartStore } from '../store/useCartStore';
import { useWishlistStore } from '../store/useWishlistStore';

const PRODUCT = {
  id: 1,
  title: 'Floral Elegance Handkerchief',
  category: 'Embroidered Handkerchief',
  price: 45,
  description: 'A delicate, handcrafted handkerchief featuring a custom floral embroidery pattern. Perfect as a meaningful gift or a wedding keepsake. Every piece is made with meticulous care using premium cotton and silk threads.',
  materials: '100% Premium Cotton, Silk Threads',
  sizes: ['Standard (12" x 12")', 'Large (14" x 14")'],
  frames: ['None', 'Wooden Display Box (+$15)'],
  images: ['/art_1.png', '/art_2.png', '/hero_bg.png'],
  badge: 'Made to Order',
  reviews: [
    { id: 1, name: 'Sarah M.', text: 'Absolutely breathtaking! The detail on the embroidery is flawless.', rating: 5 },
    { id: 2, name: 'Elena R.', text: 'Bought this for my mother. She was in tears. Thank you!', rating: 5 }
  ]
};

export default function Product() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(PRODUCT.sizes[0]);
  const [selectedFrame, setSelectedFrame] = useState(PRODUCT.frames[0]);
  const [activeTab, setActiveTab] = useState('details');

  const { addItem, setIsOpen: setCartOpen } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(PRODUCT.id);

  const handleAddToCart = () => {
    let finalPrice = PRODUCT.price;
    if (selectedFrame.includes('+$15')) finalPrice += 15;

    addItem({
      id: `${PRODUCT.id}-${selectedSize}-${selectedFrame}`,
      productId: PRODUCT.id,
      title: PRODUCT.title,
      price: finalPrice,
      image: PRODUCT.images[0],
      size: selectedSize,
      frame: selectedFrame,
      quantity: 1
    });
    setCartOpen(true);
  };

  return (
    <div className="flex flex-col w-full pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Product Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24">
          
          {/* Images Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-muted rounded-sm overflow-hidden relative group cursor-zoom-in"
            >
              {/* Simple Zoom on Hover Effect */}
              <img 
                src={PRODUCT.images[activeImage]} 
                alt={PRODUCT.title} 
                className="w-full h-full object-cover transition-transform duration-500 origin-center group-hover:scale-150"
              />
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-sm uppercase tracking-wider text-charcoal shadow-sm">
                  {PRODUCT.badge}
                </span>
              </div>
            </motion.div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {PRODUCT.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "aspect-square rounded-sm overflow-hidden border-2 transition-all",
                    activeImage === index ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <span className="text-primary text-sm font-medium tracking-widest uppercase">{PRODUCT.category}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">{PRODUCT.title}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-muted-foreground underline cursor-pointer">{PRODUCT.reviews.length} reviews</span>
                </div>
              </div>

              <div className="text-3xl text-foreground font-medium border-y border-border py-6">
                ${PRODUCT.price}.00
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {PRODUCT.description}
              </p>

              {/* Options */}
              <div className="flex flex-col gap-6 pt-4">
                {/* Size Options */}
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium uppercase tracking-wider text-foreground flex justify-between">
                    Size
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {PRODUCT.sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "py-3 px-4 border rounded-sm text-sm font-medium transition-all text-center",
                          selectedSize === size 
                            ? "border-primary bg-primary/5 text-primary" 
                            : "border-border text-muted-foreground hover:border-foreground"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frame Options */}
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium uppercase tracking-wider text-foreground">
                    Presentation
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {PRODUCT.frames.map(frame => (
                      <button 
                        key={frame}
                        onClick={() => setSelectedFrame(frame)}
                        className={cn(
                          "py-3 px-4 border rounded-sm text-sm font-medium transition-all text-center",
                          selectedFrame === frame 
                            ? "border-primary bg-primary/5 text-primary" 
                            : "border-border text-muted-foreground hover:border-foreground"
                        )}
                      >
                        {frame}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 pt-6 mt-auto">
                <div className="flex gap-3">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="flex-1 bg-primary text-white font-medium py-4 px-6 rounded-sm hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-5 h-5" /> Add to Cart
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleItem({ id: PRODUCT.id, title: PRODUCT.title, price: PRODUCT.price, image: PRODUCT.images[0], category: PRODUCT.category })}
                    className={cn(
                      "p-4 border rounded-sm transition-colors flex items-center justify-center",
                      isWishlisted ? "border-primary text-primary" : "border-border text-foreground hover:border-primary hover:text-primary"
                    )}
                  >
                    <Heart className={cn("w-5 h-5", isWishlisted && "fill-current")} />
                  </motion.button>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-foreground text-background font-medium py-4 px-6 rounded-sm hover:bg-foreground/90 transition-colors"
                >
                  Buy Now
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-transparent border border-foreground text-foreground font-medium py-4 px-6 rounded-sm hover:bg-foreground hover:text-background transition-colors mt-2 flex items-center justify-center gap-2"
                >
                  <PenTool className="w-4 h-4" /> Request Custom Version
                </motion.button>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="flex border-b border-border mb-8 overflow-x-auto hide-scrollbar">
            {['details', 'delivery', 'care', 'reviews'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-4 font-medium text-sm tracking-wider uppercase whitespace-nowrap border-b-2 transition-colors",
                  activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="min-h-[200px]">
            {activeTab === 'details' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4 text-muted-foreground">
                <h3 className="text-xl font-serif text-foreground">Materials & Process</h3>
                <p>Every piece is handcrafted over the course of 3-5 days. I use only {PRODUCT.materials}. The process involves initial sketching, color palette selection, and hours of focused stitching.</p>
              </motion.div>
            )}
            {activeTab === 'delivery' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4 text-muted-foreground">
                <h3 className="text-xl font-serif text-foreground">Shipping Information</h3>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary shrink-0" /> Free standard shipping on orders over $150.</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary shrink-0" /> Made to Order items ship within 2-3 weeks.</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary shrink-0" /> Ready to Ship items are dispatched within 2 business days.</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary shrink-0" /> International shipping available.</li>
                </ul>
              </motion.div>
            )}
            {activeTab === 'care' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4 text-muted-foreground">
                <h3 className="text-xl font-serif text-foreground">Care Instructions</h3>
                <p>To preserve the beauty of your embroidered piece, keep it out of direct prolonged sunlight to prevent fading. If framing, ensure acid-free materials are used. Do not machine wash; spot clean gently if absolutely necessary.</p>
              </motion.div>
            )}
            {activeTab === 'reviews' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                <h3 className="text-xl font-serif text-foreground mb-4">Customer Reviews</h3>
                {PRODUCT.reviews.map(review => (
                  <div key={review.id} className="border-b border-border pb-6 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-accent">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <span className="font-medium text-foreground ml-2">{review.name}</span>
                    </div>
                    <p className="text-muted-foreground italic">"{review.text}"</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
