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
      className="relative w-full h-screen flex flex-col justify-start overflow-hidden bg-[#0C0C0C] px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 hero-section"
      style={{
        paddingTop: 'clamp(60px, 8vh, 80px)'
      }}
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
              className="w-[240px] sm:w-[300px] md:w-[370px] lg:w-[440px] h-auto lego-figure"
            />
          </motion.div>
        </FadeIn>
      </div>

      {/* 1. Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
      >
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(12px, 2vw, 24px) clamp(20px, 4vw, 40px)',
          backgroundColor: 'rgba(12, 12, 12, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          transition: 'background-color 200ms ease',
        }}>
          {/* AYUSH Logo */}
          <span className="ayush-logo" style={{
            fontFamily: "'Bungee', cursive",
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: '#D7E2EA',
            letterSpacing: '0.05em',
            background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            userSelect: 'none',
          }}>
            AYUSH
          </span>

          {/* Nav Links */}
          <div className="nav-links" style={{ display: 'flex', gap: 'clamp(12px, 3vw, 32px)', marginLeft: 'auto' }}>
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
          </div>
        </div>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full flex-grow flex items-start justify-center relative z-0 pointer-events-none select-none">
        <div className="overflow-hidden w-full text-center hero-heading-wrapper">
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
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[0.7rem] sm:text-[0.85rem] md:text-[0.95rem] lg:text-[1.1rem] hero-tagline">
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
