import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "@/data/portfolio";

const Certifications = () => (
  <SectionWrapper id="certifications">
    <div className="flex items-center gap-3 mb-8">
      <ShieldCheck className="w-5 h-5 text-warm" />
      <h2 className="text-2xl md:text-3xl font-bold font-mono">
        <span className="text-warm">cert</span> verify
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      {certifications.map((cert, i) => (
        <motion.div
          key={cert.command}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="glass rounded-xl p-5 glow-warm transition-shadow duration-300 hover:shadow-[0_0_30px_hsl(var(--warm)/0.2)] md:p-6 "
        >
          <div className="mb-4 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-warm/10 md:h-12 md:w-12">
              <ShieldCheck className="w-6 h-6 text-warm" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm md:text-base font-bold text-foreground">{cert.name}</h3>
              <p className="text-xs font-mono text-muted-foreground">{cert.date}</p>
            </div>
          </div>

          <div className="glass rounded-lg p-3 font-mono text-xs">
            <div className="text-success">$ cert verify {cert.command}</div>
            <div className="text-warm mt-1">status: <span className="text-success">certified ✓</span></div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;
