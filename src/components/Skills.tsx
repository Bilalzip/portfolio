import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "@/data/portfolio";

const Skills = () => (
  <SectionWrapper id="skills">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">
      Technical <span className="text-warm">Skills</span>
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {skillCategories.map((cat, ci) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.08 }}
          className="glass rounded-2xl p-5 hover:glow-warm transition-shadow duration-300"
        >
          <h3 className="text-sm font-semibold text-warm mb-3">{cat.name}</h3>
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map((skill, si) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.08 + si * 0.03 }}
                className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/60 text-foreground/70 hover:bg-warm/10 hover:text-warm transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;