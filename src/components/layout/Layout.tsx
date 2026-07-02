import { Outlet, useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import CartSidebar from '../cart/CartSidebar';
import WishlistSidebar from '../wishlist/WishlistSidebar';

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 overflow-x-hidden">
      <Header />
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-grow flex flex-col w-full"
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <CartSidebar />
      <WishlistSidebar />
    </div>
  );
}
