import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg')`,
        }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-noza-gold text-black text-xs font-bold rounded uppercase tracking-widest">PG-13</span>
              <span className="px-3 py-1 border border-white/40 text-white/80 text-xs rounded uppercase tracking-widest">DUB</span>
              <span className="px-3 py-1 border border-white/40 text-white/80 text-xs rounded uppercase tracking-widest">SUB</span>
            </div>

            <h1 className="font-display text-7xl sm:text-8xl text-white leading-none mb-3 tracking-wide">THE<br />Joker</h1>
            <p className="text-noza-gold text-lg font-medium mb-4 uppercase tracking-widest">Thriller · Crime · Survival</p>

            <div className="w-16 h-px bg-noza-gold mb-5" />

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
              Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of chaos in Gotham City.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://nozaflix.com/Movies/adults/squidgames.html"
                className="flex items-center gap-3 bg-noza-gold text-black px-8 py-3 rounded-full font-bold text-base hover:bg-yellow-400 transition-all hover:scale-105"
              >
                <Play className="w-5 h-5 fill-black" />
                Play Now
              </a>
              <button className="flex items-center gap-3 bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full font-medium text-base hover:bg-white/20 transition-all backdrop-blur-sm">
                <Info className="w-5 h-5" />
                More Info
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
