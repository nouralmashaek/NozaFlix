import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="font-display text-4xl text-noza-gold tracking-widest">NOZAFLIX</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Movies', 'Series', 'Kids', 'Anime'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/80 hover:text-noza-gold transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search + Auth */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 gap-2">
              <Search className="w-4 h-4 text-white/50" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder-white/40 text-sm outline-none w-40"
              />
            </div>
            <a href="/signup" className="px-4 py-2 border border-noza-gold text-noza-gold rounded-full text-sm font-medium hover:bg-noza-gold hover:text-black transition-all">
              Sign Up
            </a>
            <a href="/login" className="px-4 py-2 border border-noza-purple text-white rounded-full text-sm font-medium hover:bg-noza-purple transition-all">
              Log In
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-t border-white/10 px-6 py-4"
          >
            <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 gap-2 mb-4">
              <Search className="w-4 h-4 text-white/50" />
              <input type="text" placeholder="Search..." className="bg-transparent text-white placeholder-white/40 text-sm outline-none w-full" />
            </div>
            <nav className="flex flex-col gap-4 mb-4">
              {['Movies', 'Series', 'Kids', 'Anime'].map((item) => (
                <a key={item} href="#" className="text-white/80 hover:text-noza-gold text-lg font-medium">{item}</a>
              ))}
            </nav>
            <div className="flex gap-3">
              <a href="/signup" className="flex-1 text-center py-2 border border-noza-gold text-noza-gold rounded-full text-sm font-medium">Sign Up</a>
              <a href="/login" className="flex-1 text-center py-2 border border-noza-purple text-white rounded-full text-sm font-medium">Log In</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}