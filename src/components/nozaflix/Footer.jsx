import { Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto">
          {/* Logo */}
          <span className="font-display text-5xl text-noza-gold tracking-widest block mb-5">NOZAFLIX</span>

          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Welcome to Nozaflix — where entertainment comes to life! Dive into an extensive library of
            Movies, Series, and Kids' animation. Log in to unlock endless fun for the whole family.
          </p>

          {/* Newsletter */}
          <h6 className="text-white font-semibold text-xs uppercase tracking-widest mb-1">Get Notified</h6>
          <p className="text-white/30 text-xs mb-4">Get emails for the latest movies, series, and more.</p>

          <form className="flex gap-2 max-w-sm mx-auto mb-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-white/20 rounded-full px-4 py-2.5 text-white text-sm placeholder-white/30 outline-none focus:border-noza-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-noza-gold text-black font-bold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-all"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/20 text-xs">By subscribing you agree to our terms and conditions.</p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2024 All rights reserved by <span className="text-noza-gold">Nozaflix</span>.</p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {[
              { icon: MessageCircle, label: 'Discord' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Youtube, label: 'YouTube' },
            ].map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="text-white/30 hover:text-noza-gold transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-white/30 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white text-xs transition-colors">Comments Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}