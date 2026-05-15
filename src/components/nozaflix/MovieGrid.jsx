import { motion } from 'framer-motion';
import MovieCard from './MovieCard';

export default function MovieGrid({ title, subtitle, movies }) {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-4xl text-white tracking-wider uppercase">{title}</h2>
            {subtitle && <p className="text-noza-grey-mid text-sm mt-1">{subtitle}</p>}
          </div>
          <div className="hidden sm:block w-24 h-px bg-noza-gold/40" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie, i) => (
            <motion.div
              key={movie.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}