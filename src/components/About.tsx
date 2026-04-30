import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/portfolio";

const About = () => (
  <SectionWrapper id="about">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">
      About <span className="text-warm">Me</span>
    </h2>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6 md:p-8 max-w-3xl"
    >
      <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{personalInfo.about}</p>
    </motion.div>
  </SectionWrapper>
);

export default About;