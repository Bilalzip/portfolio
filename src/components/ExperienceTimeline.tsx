import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { experiences } from "@/data/portfolio";

const ExperienceTimeline = () => (
  <SectionWrapper id="experience">
    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Work <span className="text-cool">Experience</span>
    </h2>

    <div className="relative">
      <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-warm/40 via-cool/20 to-transparent md:left-8" />

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative pl-9 md:pl-20"
          >
            <div className="absolute left-[7px] top-1 h-3 w-3 rounded-full bg-warm shadow-[0_0_10px_hsl(var(--warm)/0.3)] md:left-6.5" />

            <div className="font-mono text-xs text-warm mb-2">{exp.dates}</div>

            <div className="glass rounded-2xl p-5 md:p-6 hover:glow-warm transition-shadow duration-300">
              <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-foreground">{exp.company}</h3>
                  <p className="text-sm text-cool">{exp.role}</p>
                </div>
                <span className="text-xs text-muted-foreground mt-1 md:mt-0">{exp.location}</span>
              </div>

              <ul className="space-y-1.5">
                {exp.achievements.map((a, j) => (
                  <li key={j} className="text-sm text-foreground/70 flex gap-2">
                    <span className="text-warm mt-0.5">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceTimeline;
