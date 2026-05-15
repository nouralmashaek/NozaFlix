import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px] text-center">
        <span className="font-display text-5xl text-white leading-none">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-noza-grey-mid text-xs uppercase tracking-widest mt-2">{label}</span>
    </div>
  );
}

export default function ComingSoon() {
  const target = new Date();
  target.setDate(target.getDate() + 29);
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)',
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-noza-purple/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-noza-gold text-sm font-medium uppercase tracking-widest mb-4 block">Coming Soon</span>
            <h2 className="font-display text-7xl text-white leading-none mb-2 tracking-wide">TRAPPED IN<br />REALITY</h2>
            <p className="text-noza-grey-mid text-base uppercase tracking-widest mb-6">Sci-Fi · Psychological Thriller</p>

            <div className="flex gap-2 mb-8">
              <span className="px-3 py-1 bg-noza-gold text-black text-xs font-bold rounded uppercase tracking-widest">PG-13</span>
              <span className="px-3 py-1 border border-white/30 text-white/70 text-xs rounded uppercase tracking-widest">DUB</span>
              <span className="px-3 py-1 border border-white/30 text-white/70 text-xs rounded uppercase tracking-widest">SUB</span>
            </div>

            <p className="text-white/50 text-sm uppercase tracking-widest mb-6">Releasing in</p>

            <div className="flex gap-4 flex-wrap">
              <TimeBlock value={days} label="Days" />
              <TimeBlock value={hours} label="Hours" />
              <TimeBlock value={minutes} label="Mins" />
              <TimeBlock value={seconds} label="Secs" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}