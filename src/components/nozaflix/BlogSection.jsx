import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    date: '14 NOV 2023',
    title: 'Movies Coming Out This Week',
    author: 'Rotten B Sherman',
    excerpt: 'Discover the hottest new releases hitting the big screen this week. From action-packed blockbusters to indie gems, there is something for everyone.',
    gradient: 'from-blue-900/80 to-purple-900/80',
    accent: 'bg-blue-500',
  },
  {
    date: '14 NOV 2023',
    title: 'Sci-Fi Genre is Booming — Geared Up',
    author: 'Rotten B Sherman',
    excerpt: 'The sci-fi genre is having a renaissance moment. Studios are investing more in futuristic stories that push the boundaries of imagination.',
    gradient: 'from-purple-900/80 to-pink-900/80',
    accent: 'bg-purple-500',
  },
  {
    date: '14 NOV 2023',
    title: 'Horror Movies Are Scarier Now',
    author: 'Rotten B Sherman',
    excerpt: 'Modern horror films have evolved far beyond jump scares. Directors are crafting deeply psychological experiences that linger long after the credits roll.',
    gradient: 'from-red-900/80 to-black/80',
    accent: 'bg-red-500',
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-4xl text-white tracking-wider uppercase">Latest Blogs</h2>
            <p className="text-noza-grey-mid text-sm mt-1">News, reviews & more</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative block rounded-2xl overflow-hidden h-72 group bg-gradient-to-br ${blog.gradient} border border-white/10 hover:border-noza-gold/40 transition-all`}
            >
              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <span className={`inline-block w-2 h-2 rounded-full ${blog.accent} mb-3`} />
                <span className="text-white/40 text-xs uppercase tracking-widest mb-2">{blog.date}</span>
                <h4 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-noza-gold transition-colors">{blog.title}</h4>
                <p className="text-white/50 text-xs mb-1">By: {blog.author}</p>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{blog.excerpt}</p>
                <div className="flex items-center gap-1 text-noza-gold text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}