import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-2xl font-serif font-bold text-white flex items-center gap-2">
              <span className="text-primary text-3xl leading-none">A</span>
              Art Fusion
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              Every Thread, Every Stroke, Every Pixel Tells a Story. We craft meaningful artwork that brings beauty and emotion into your daily life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-serif font-semibold tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {['Home', 'About Me', 'Collections', 'Behind the Scenes', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-serif font-semibold tracking-wide">Customer Care</h3>
            <ul className="flex flex-col gap-2">
              {['Custom Orders', 'Shipping & Returns', 'Artwork Care', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-serif font-semibold tracking-wide">Stay Inspired</h3>
            <p className="text-gray-400 text-sm">
              Join my newsletter to get updates on new artwork, behind-the-scenes, and exclusive offers.
            </p>
            <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-l-sm px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-white w-full placeholder:text-gray-500"
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-primary/90 transition-colors px-4 py-3 rounded-r-sm flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Art Fusion. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
