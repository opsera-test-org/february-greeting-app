import { motion } from "framer-motion";
import heroImage from "@/assets/hero-feb.jpg";
import { CalendarDays, Snowflake, Sun, Heart } from "lucide-react";

const DAYS_IN_FEB = 28;
const FIRST_DAY_OFFSET = 6; // Feb 1, 2026 is Sunday (index 6 for Mon-start)
const TODAY = 12;

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const highlights = [
  { icon: Snowflake, label: "Winter Vibes", desc: "Embrace the quiet beauty of February's frost" },
  { icon: Heart, label: "Valentine's Day", desc: "Love is in the air on the 14th" },
  { icon: Sun, label: "Longer Days", desc: "Light slowly returns as spring approaches" },
  { icon: CalendarDays, label: "28 Days", desc: "Short, sweet, and full of possibility" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Misty February landscape" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-hero" style={{ opacity: 0.7 }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-6 font-body"
          >
            Welcome to
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl font-display font-bold tracking-tight mb-6"
          >
            <span className="text-gradient-amber">Feb</span>
            <span className="text-foreground"> '26</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-body font-light leading-relaxed"
          >
            The shortest month, the warmest hearts. A quiet pause between winter and spring.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Calendar */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-2 text-foreground">
              February 2026
            </h2>
            <p className="text-muted-foreground mb-10 font-body">Today is the 12th</p>

            <div className="grid grid-cols-7 gap-1 md:gap-2">
              {daysOfWeek.map((d) => (
                <div key={d} className="text-center text-xs text-muted-foreground uppercase tracking-wider py-2 font-body">
                  {d}
                </div>
              ))}
              {Array.from({ length: FIRST_DAY_OFFSET }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: DAYS_IN_FEB }, (_, i) => i + 1).map((day) => {
                const isToday = day === TODAY;
                const isPast = day < TODAY;
                const isValentine = day === 14;
                return (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: day * 0.02, duration: 0.3 }}
                    className={`
                      aspect-square flex items-center justify-center rounded-lg text-sm font-display font-medium transition-colors
                      ${isToday ? "bg-primary text-primary-foreground glow-amber" : ""}
                      ${isPast && !isToday ? "text-muted-foreground/40" : ""}
                      ${!isPast && !isToday ? "text-foreground hover:bg-secondary cursor-default" : ""}
                      ${isValentine && !isToday ? "text-primary" : ""}
                    `}
                  >
                    {isValentine ? (
                      <span className="flex flex-col items-center gap-0.5">
                        <Heart className="w-3 h-3 fill-current" />
                        <span className="text-xs">{day}</span>
                      </span>
                    ) : (
                      day
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:animate-float" />
                <h3 className="font-display font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <p className="text-muted-foreground text-sm font-body">
          Made with <Heart className="w-3 h-3 inline text-primary fill-current" /> in February 2026
        </p>
      </footer>
    </div>
  );
};

export default Index;
