import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { achievements } from "@/data/portfolio";

const CountUp = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const [val, setVal] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          // Parse numeric part
          const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
          if (isNaN(numeric)) {
            setVal(target);
            return;
          }
          const isFloat = target.includes(".");
          const duration = 1500;
          const steps = 40;
          const increment = numeric / steps;
          let current = 0;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            current += increment;
            if (step >= steps) {
              clearInterval(timer);
              setVal(target);
            } else {
              setVal(isFloat ? current.toFixed(2) : Math.floor(current).toString());
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-2xl md:text-3xl font-bold font-mono text-success">
      {val}{suffix}
    </div>
  );
};

const Achievements = () => (
  <SectionWrapper id="achievements">
    <div className="flex items-center gap-3 mb-8">
      <Trophy className="w-5 h-5 text-success" />
      <h2 className="text-2xl md:text-3xl font-bold font-mono">
        <span className="text-success">sys</span>.metrics
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
      {achievements.map((a, i) => (
        <motion.div
          key={a.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass rounded-xl p-4 text-center glow-warm transition-shadow duration-300 hover:shadow-[0_0_30px_hsl(var(--success)/0.2)] sm:p-5 "
        >
          <CountUp target={a.value} />
          <div className="text-[10px] font-mono text-muted-foreground mt-2 break-all">{a.label}</div>
          <div className="text-xs text-foreground/60 mt-1">{a.description}</div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Achievements;
