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
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
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
