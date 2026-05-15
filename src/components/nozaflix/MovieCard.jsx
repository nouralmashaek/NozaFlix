import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Plus } from 'lucide-react';

export default function MovieCard({ movie }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
    >
      {/* Poster */}
      <div className="relative rounded-xl overflow-hidden aspect-[2/3] bg-muted shadow-lg">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3"
        >
          <a
            href={movie.href}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-noza-gold hover:bg-yellow-400 transition-all"
          >
            <Play className="w-6 h-6 fill-black text-black ml-1" />
          </a>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1.5 rounded-full transition-all">
              <Clock className="w-3 h-3" /> Watch Later
            </button>
            <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1.5 rounded-full transition-all">
              <Plus className="w-3 h-3" /> Playlist
            </button>
          </div>
        </motion.div>

        {/* Tags top-left */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {movie.type && (
            <span className="text-[10px] bg-noza-gold text-black font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              {movie.type}
            </span>
          )}
        </div>
      </div>

      {/* Info below poster */}
      <div className="mt-2.5 px-1">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-[10px] border border-noza-grey-mid text-noza-grey-mid px-1.5 py-0.5 rounded uppercase">dub</span>
          <span className="text-[10px] border border-noza-grey-mid text-noza-grey-mid px-1.5 py-0.5 rounded uppercase">sub</span>
        </div>
        <a href={movie.href}>
          <p className="text-white font-medium text-sm leading-snug line-clamp-2 hover:text-noza-gold transition-colors">{movie.title}</p>
        </a>
      </div>
    </motion.div>
  );
}