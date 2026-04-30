import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { education } from "@/data/portfolio";

const Education = () => (
  <SectionWrapper id="education">
    <div className="flex items-center gap-3 mb-8">
      <GraduationCap className="w-5 h-5 text-lavender" />
      <h2 className="text-2xl md:text-3xl font-bold font-mono">
        <span className="text-lavender">~/</span>education
      </h2>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass max-w-2xl rounded-xl p-5 glow-cool md:p-8"
    >
      <h3 className="text-lg font-bold text-foreground mb-1">{education.institution}</h3>
      <p className="text-sm text-muted-foreground font-mono mb-1">{education.location}</p>
      <p className="text-sm text-cool font-mono mb-1">{education.degree}</p>
      <p className="text-xs text-muted-foreground font-mono mb-4">{education.dates}</p>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <div className="glass rounded-lg px-4 py-2 text-center sm:min-w-[126px]">
          <div className="text-xl font-bold text-success font-mono">{education.gpa}</div>
          <div className="text-[10px] text-muted-foreground font-mono">GPA</div>
        </div>
        <div className="glass rounded-lg px-4 py-2 text-center sm:min-w-[126px]">
          <div className="text-sm font-bold text-warm font-mono">✦</div>
          <div className="text-[10px] text-muted-foreground font-mono">{education.honours}</div>
        </div>
      </div>

      <div className="font-mono text-xs text-muted-foreground mb-2">// Relevant Coursework</div>
      <div className="flex flex-wrap gap-1.5">
        {education.coursework.map((c) => (
          <span key={c} className="px-2 py-0.5 rounded text-xs font-mono bg-secondary/80 text-foreground/70">
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default Education;
