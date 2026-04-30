import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ExternalLink, Github, Play, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/data/portfolio";

const folderColors: Record<string, string> = {
  Projects: "text-cool",
  Documents: "text-warm",
  Certificates: "text-success",
};

const FileDirectory = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <SectionWrapper id="directory">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Project <span className="text-lavender">Explorer</span>
        </h2>

        {/* Finder Window */}
        <div className="finder-window shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(220_16%_9%)] border-b border-border/40">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center text-xs text-muted-foreground">
              ~/mohd-bilal/projects
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[hsl(220_16%_8%)] border-b border-border/30 text-xs text-muted-foreground">
            <span>{projects.length} items</span>
          </div>

          {/* Grid of project items like Finder icons */}
          <div className="grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-5 md:grid-cols-4 md:gap-6 md:p-6">
            {projects.map((project) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-colors hover:bg-secondary/40 sm:gap-3 sm:p-4"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/30 bg-gradient-to-br from-warm/20 to-cool/10 transition-all group-hover:from-warm/30 group-hover:to-cool/20 sm:h-16 sm:w-16 md:h-20 md:w-20">
                  <Folder className="w-8 h-8 md:w-10 md:h-10 text-warm/80 group-hover:text-warm transition-colors" />
                </div>
                <div className="text-center">
                  <div className="text-xs md:text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                    {project.name}
                  </div>
                  <div className="mt-0.5 line-clamp-2 text-[10px] text-muted-foreground">{project.type.split(' ').slice(0, 3).join(' ')}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-background/80 p-2 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="finder-window max-h-[92vh] w-full max-w-2xl overflow-hidden shadow-2xl sm:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(220_16%_9%)] border-b border-border/40">
                <button onClick={() => setSelectedProject(null)} className="flex gap-1.5 group">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] group-hover:bg-[#ff3b30] flex items-center justify-center">
                    <X className="w-2 h-2 text-[#ff5f57] group-hover:text-[#4a0000]" />
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </button>
                <div className="flex-1 text-center text-xs text-muted-foreground">
                  {selectedProject.name}
                </div>
              </div>

              {/* Content */}
              <div className="terminal-scrollbar max-h-[calc(92vh-48px)] overflow-y-auto p-4 sm:max-h-[calc(85vh-48px)] sm:p-6">
                {/* Project preview */}
                {selectedProject.videoUrl ? (
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-secondary/30">
                    <video
                      key={selectedProject.videoUrl}
                      src={selectedProject.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      disablePictureInPicture
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : selectedProject.imageUrl ? (
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-secondary/30 border border-border/30">
                    <img
                      src={selectedProject.imageUrl}
                      alt={`${selectedProject.name} preview`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="aspect-video rounded-xl mb-6 bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border/30 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-12 h-12 text-muted-foreground/30 mx-auto mb-2" />
                      <span className="text-xs text-muted-foreground">Demo video coming soon</span>
                    </div>
                  </div>
                )}

                <h3 className="mb-1 text-lg font-bold text-foreground sm:text-xl">{selectedProject.name}</h3>
                <p className="text-sm text-cool mb-4">{selectedProject.type}</p>

                <p className="text-sm text-foreground/70 leading-relaxed mb-4">{selectedProject.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs font-mono bg-secondary/60 text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                {Object.keys(selectedProject.metrics).length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-3 sm:gap-4">
                    {Object.entries(selectedProject.metrics).map(([k, v]) => (
                      <div key={k} className="min-w-[88px] rounded-xl bg-warm/10 px-4 py-2 text-center">
                        <div className="text-lg font-bold text-warm font-mono">{v}</div>
                        <div className="text-[10px] text-muted-foreground">{k}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-foreground/70 flex gap-2">
                      <span className="text-warm mt-0.5">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-secondary/60 px-4 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-warm px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-warm/90"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FileDirectory;
