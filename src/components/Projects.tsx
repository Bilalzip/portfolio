import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Play } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/data/portfolio";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden hover:glow-warm transition-shadow duration-300 group"
    >
      <div className="p-5 md:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-warm transition-colors">
              {project.name}
            </h3>
            <p className="text-xs text-cool mt-1">{project.type}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-secondary/60 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <p className="text-sm text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

        {Object.keys(project.metrics).length > 0 && (
          <div className="mb-4 flex flex-wrap gap-3 sm:gap-4">
            {Object.entries(project.metrics).map(([k, v]) => (
              <div key={k} className="min-w-[84px] text-center">
                <div className="text-lg font-bold text-warm font-mono">{v}</div>
                <div className="text-[10px] text-muted-foreground">{k}</div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-xs text-cool hover:text-warm transition-colors"
        >
          {open ? "Hide details" : "View details"}
          <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2 border-t border-border/30 pt-4">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-foreground/70 flex gap-2">
                    <span className="text-warm">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <SectionWrapper id="projects">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">
      Featured <span className="text-warm">Projects</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-5">
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
