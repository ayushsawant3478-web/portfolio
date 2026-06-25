import FadeIn from "./FadeIn";
import { ContactButton } from "./Buttons";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", target: "about-section" },
    { label: "Skills", target: "skills-section" },
    { label: "Projects", target: "projects-section" },
    { label: "Contact", target: "footer-section" },
  ];

  return (
    <section
      id="hero-section"
      className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] px-6 md:px-10 pb-7 sm:pb-8 md:pb-10"
    >
      {/* 0. Lego Image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none">
        <FadeIn delay={0.2} y={200} duration={1}>
          <motion.div
            animate={{
              rotate: [0, -4, 0, -4, 0],
              y: [0, -8, 0, -8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.7, 1],
            }}
            style={{ transformOrigin: "bottom center" }}
          >
            <img
              src="/lego.png"
              alt="Lego"
              className="w-[240px] sm:w-[300px] md:w-[370px] lg:w-[440px] h-auto"
            />
          </motion.div>
        </FadeIn>
      </div>

      {/* 1. Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="w-full flex justify-between items-center pt-6 md:pt-8 z-30"
      >
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollToSection(link.target)}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            id={`nav-link-${link.label.toLowerCase()}`}
          >
            {link.label}
          </button>
        ))}
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full flex-grow flex items-start justify-center pt-[8vh] relative z-0 pointer-events-none select-none">
        <div className="overflow-hidden w-full text-center mb-[18vh]">
          <FadeIn delay={0.15} y={40} duration={0.8}>
            <h1 className="hero-heading uppercase font-black tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
              hi, i'm ayush
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* 3. Bottom bar */}
      <div className="w-full flex justify-between items-end relative z-20">
        <FadeIn delay={0.35} y={20} duration={0.8} className="max-w-[160px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[340px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[0.7rem] sm:text-[0.85rem] md:text-[0.95rem] lg:text-[1.1rem]">
            a security analyst driven by analysis, protection, and zero tolerance for risk
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} duration={0.8}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
