import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Heart, ShoppingBag } from 'lucide-react';
import { useWishlistStore } from '../../store/useWishlistStore';
import { useCartStore } from '../../store/useCartStore';

export default function WishlistSidebar() {
  const { isOpen, setIsOpen, items, toggleItem } = useWishlistStore();
  const { addItem, setIsOpen: setCartOpen } = useCartStore();

  const handleAddToCart = (item: any) => {
    addItem({
      id: `${item.id}-default`,
      productId: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1
    });
    setIsOpen(false);
    setCartOpen(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-serif text-foreground flex items-center gap-2">
                <Heart className="w-5 h-5" /> Your Wishlist
              </h2>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-4">
                  <Heart className="w-12 h-12 opacity-20" />
                  <p>Your wishlist is empty.</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="mt-4 px-6 py-2 border border-border text-foreground hover:border-primary hover:text-primary transition-colors rounded-sm"
                  >
                    Discover Artworks
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 p-4 border border-border/50 rounded-sm relative group">
                      <div className="w-20 h-20 bg-muted rounded-sm overflow-hidden shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col flex-1">
                        <h4 className="font-medium text-foreground line-clamp-1 pr-6">{item.title}</h4>
                        <span className="text-sm text-muted-foreground mb-2">{item.category}</span>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-medium text-foreground">${item.price}</span>
                          <button 
                            onClick={() => handleAddToCart(item)}
                            className="text-xs bg-foreground text-background px-3 py-1.5 rounded-sm hover:bg-primary transition-colors"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleItem(item)} 
                        className="absolute top-2 right-2 text-muted-foreground hover:text-red-500 transition-colors p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 shadow-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
