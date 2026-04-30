import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { MapPin, Award, ArrowDown, Download, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const ThreeHeroScene = lazy(() => import("./ThreeHeroScene"));

const techStack = ["TypeScript", "React", "Node.js", "AWS", "Docker", "PostgreSQL"];

const NameBadge = () => {
  return (
    <div className="pointer-events-none absolute left-[-276px] top-[-104px] z-20 hidden lg:flex xl:left-[-224px]">
      <a
        href="https://www.linkedin.com/in/mohd-bilal-b9a0b71a8/"
        target="_blank"
        rel="noopener noreferrer"
        className="badge-swing pointer-events-auto flex flex-col items-center"
      >
        <div className="relative h-[228px] w-[26px] bg-stone-800 shadow-sm">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 3px)",
            }}
          />
          <span className="absolute bottom-[40%] left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap font-mono text-[6px] font-bold uppercase tracking-[0.2em] text-white/60 select-none">
            mdbilal.me
          </span>
        </div>

        <div className="relative -mt-8 w-[210px] rounded-xl" style={{ perspective: "800px" }}>
          <div
            className="relative rounded-xl p-[6px]"
            style={{
              background: "linear-gradient(170deg, #57534e 0%, #44403c 15%, #292524 60%, #1c1917 100%)",
              borderTop: "1.5px solid rgba(255,255,255,0.15)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              borderRight: "1px solid rgba(0,0,0,0.3)",
              borderBottom: "2px solid rgba(0,0,0,0.4)",
              transform: "rotateX(1deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 z-20 rounded-xl"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 15%, transparent 40%, transparent 85%, rgba(255,255,255,0.03) 100%)",
              }}
            />
            <div className="absolute left-1/2 top-0 z-0 h-[22px] w-[26px] -translate-x-1/2 rounded-b-sm bg-stone-800" />
            <div className="relative z-10 flex justify-center pb-0 pt-1">
              <div
                className="h-[6px] w-8 rounded-full border border-stone-500/50"
                style={{
                  background: "linear-gradient(180deg, #1c1917, #292524)",
                  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)",
                }}
              />
            </div>

            <div
              className="relative z-10 overflow-hidden rounded-lg"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                borderBottom: "1px solid rgba(0,0,0,0.3)",
              }}
            >
              <div
                className="relative px-4 pb-4 pt-4"
                style={{
                  background: "linear-gradient(175deg, #6b6560 0%, #57534e 20%, #44403c 100%)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-[28px] font-extrabold leading-[1.05] tracking-[0.15em] text-white">BILAL</h3>
                  <p className="mt-2 text-[11px] leading-relaxed tracking-[0.05em] text-white/50">
                    Full stack developer,
                    <br />
                    cloud architecture,
                    <br />
                    AI-powered product
                    <br />
                    engineering
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col items-center px-4 pb-5 pt-5"
                style={{
                  background: "linear-gradient(180deg, #1c1917, #0c0a09)",
                }}
              >
                <div
                  className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-stone-700"
                  style={{
                    border: "3px solid #57534e",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
                  }}
                >
                  <img
                    src="/profile/mohd-bilal.jpeg"
                    alt="Mohd Bilal"
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const FloatingTech = () => {
  return (
    <div className="flex flex-wrap gap-2 max-w-md">
      {techStack.map((tech, i) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
          className="px-3 py-1.5 rounded-full text-xs font-mono bg-secondary/60 border border-border/40 text-foreground/70"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
};

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}>
        <ThreeHeroScene />
      </Suspense>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-28 md:px-8 md:py-32">
        <NameBadge />
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1">
            <MapPin className="w-4 h-4 text-cool" />
            <span className="text-base text-muted-foreground">{personalInfo.location}</span>
            <span className="mx-1 hidden text-border sm:inline">|</span>
            <Award className="w-4 h-4 text-warm" />
            <span className="text-sm text-muted-foreground">2× AWS Certified</span>
          </div>

          <h1 className="mb-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="text-gradient-warm">{personalInfo.name}</span>
          </h1>

          <p className="mb-6 text-xl font-medium text-foreground/80 sm:text-2xl md:mb-7 md:text-3xl">{personalInfo.role}</p>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white sm:text-lg md:mb-10 md:text-xl">
            {personalInfo.tagline}
          </p>

          <div className="mb-8 md:mb-10">
            <FloatingTech />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => scrollTo("projects")}
              className="w-full rounded-lg bg-warm px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-warm/90 sm:w-auto sm:px-6"
            >
              <ArrowDown className="w-4 h-4 inline mr-2" />
              View Projects
            </button>
            <a
              href="/assets/resume/resume.pdf"
              download="Mohd-Bilal-Resume.pdf"
              className="glass w-full rounded-lg px-5 py-3 text-center text-sm text-muted-foreground transition-all hover:text-foreground sm:w-auto sm:px-6"
            >
              <Download className="w-4 h-4 inline mr-2" />
              Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="glass w-full rounded-lg px-5 py-3 text-sm text-muted-foreground transition-all hover:text-foreground sm:w-auto sm:px-6"
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
