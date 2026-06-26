import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import FadeIn from "./FadeIn";
import { LiveProjectButton } from "./Buttons";
import { TRACKIFY_SVG, PASSKEY_SVG } from "./ImagesData";

interface ProjectData {
  num: string;
  category: string;
  name: string;
  btnLabel: string;
  url: string;
  imgSrc: string;
}

export default function ProjectsSection() {
  // Convert SVGs to base64
  const trackifyBase64 = `data:image/svg+xml;base64,${btoa(
    unescape(encodeURIComponent(TRACKIFY_SVG.trim()))
  )}`;
  const passkeyBase64 = `data:image/svg+xml;base64,${btoa(
    unescape(encodeURIComponent(PASSKEY_SVG.trim()))
  )}`;

  const projects: ProjectData[] = [
    {
      num: "01",
      category: "Security Platform",
      name: "Trackify",
      btnLabel: "Live Project",
      url: "https://trackify-beta.vercel.app",
      imgSrc: trackifyBase64,
    },
    {
      num: "02",
      category: "Password Manager",
      name: "PassKey",
      btnLabel: "Live Project",
      url: "https://passkey-ftx3.onrender.com",
      imgSrc: passkeyBase64,
    },
  ];

  const MobileProjectCarousel = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

    const project = projects[current];

    return (
      <div
        className="projects-carousel"
        style={{
          display: 'none', // controlled by CSS media query
          width: '100%',
          padding: '0 16px',
        }}
      >
        {/* Single card */}
        <div style={{
          borderRadius: '28px',
          border: '2px solid #D7E2EA',
          backgroundColor: '#0C0C0C',
          padding: '20px',
          width: '100%',
        }}>
          {/* Card header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
            flexWrap: 'wrap',
          }}>
            <span style={{
              fontSize: 'clamp(2.5rem, 12vw, 4rem)',
              fontWeight: 900,
              color: '#D7E2EA',
              lineHeight: 1,
            }}>
              {project.num}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontSize: '0.65rem',
                color: 'rgba(187,204,215,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}>
                {project.category}
              </span>
              <span style={{
                fontSize: 'clamp(1rem, 5vw, 1.4rem)',
                fontWeight: 700,
                color: '#D7E2EA',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {project.name}
              </span>
            </div>
            <button
              onClick={() => window.open(project.url, '_blank')}
              style={{
                marginLeft: 'auto',
                padding: '8px 18px',
                borderRadius: '9999px',
                border: '2px solid #D7E2EA',
                background: 'transparent',
                color: '#D7E2EA',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              LIVE PROJECT
            </button>
          </div>

          {/* Divider */}
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(187,204,215,0.15)',
            marginBottom: '16px',
          }} />

          {/* Project image */}
          <div className="mobile-project-image-container" style={{
            width: '100%',
            height: 'clamp(200px, 55vw, 300px)',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '20px',
          }}>
            <img
              src={project.imgSrc}
              alt={project.name}
              className="mobile-project-image"
              style={{
                width: '100%',
                height: '100%',
                ...(project.name === "PassKey" ? {
                  objectFit: 'contain',
                  objectPosition: 'top center',
                  backgroundColor: '#ffffff',
                  transform: 'none',
                } : {
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }),
              }}
            />
          </div>

          {/* Arrow navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            {/* Prev arrow */}
            <button
              onClick={prev}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '9999px',
                border: '1.5px solid rgba(187,204,215,0.3)',
                background: 'transparent',
                color: '#D7E2EA',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ←
            </button>

            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {projects.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    backgroundColor: i === current
                      ? '#D7E2EA'
                      : 'rgba(187,204,215,0.3)',
                    transition: 'all 300ms ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '9999px',
                border: '1.5px solid rgba(187,204,215,0.3)',
                background: 'transparent',
                color: '#D7E2EA',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects-section"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pb-28 pt-20 -mt-10 sm:-mt-12 md:-mt-14 z-10 select-none overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading uppercase font-black tracking-tight text-center text-[3rem] sm:text-[8vw] md:text-[10vw] lg:text-[160px] leading-none mb-16 sm:mb-20 md:mb-28">
            Projects
          </h2>
        </FadeIn>

        {/* Mobile Carousel */}
        <MobileProjectCarousel />

        {/* Cards Stack List */}
        <div className="w-full flex flex-col gap-16 md:gap-24 relative projects-stack">
          {projects.map((project, index) => (
            <StickyCard
              key={project.num}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StickyCardProps {
  key?: React.Key;
  project: ProjectData;
  index: number;
  totalCards: number;
}

function StickyCard({ project, index, totalCards }: StickyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking to calculate scaling down as next cards scroll past
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[85vh] sticky"
      style={{
        top: `calc(100px + ${index * 28}px)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Card Top Row: Number, category label, project name, and action button */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/10 project-header">
          <div className="flex items-center gap-4 sm:gap-6 text-left">
            {/* Huge Number */}
            <span className="font-black text-[#D7E2EA] leading-none text-[3rem] sm:text-[4vw] md:text-[5vw] lg:text-[100px] select-none shrink-0 project-number">
              {project.num}
            </span>

            {/* Labels Stack */}
            <div className="flex flex-col justify-center">
              <span className="text-[#D7E2EA]/60 font-light text-[0.65rem] sm:text-[0.8rem] md:text-sm uppercase tracking-widest mb-0.5 sm:mb-1">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-[1.8rem] uppercase tracking-tight leading-tight">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Button */}
          <div className="self-start sm:self-center">
            <LiveProjectButton url={project.url} label={project.btnLabel} className="project-button" />
          </div>
        </div>

        {/* Card Bottom: Single Full Width Image */}
        <div className="project-image-container" style={{
          width: '100%',
          height: project.name === 'PassKey' ? 'clamp(380px, 45vw, 620px)' : 'clamp(280px, 35vw, 500px)',
          borderRadius: 'clamp(20px, 3vw, 40px)',
          overflow: 'hidden',
          marginTop: '1.5rem'
        }}>
          <img
            src={project.imgSrc}
            className="w-full h-full"
            style={project.name === 'PassKey' ? { 
              objectFit: 'contain', 
              objectPosition: 'top center',
              backgroundColor: '#ffffff',
              transform: 'none'
            } : { 
              objectFit: 'cover', 
              objectPosition: 'top center'
            }}
            alt={project.name}
          />
        </div>
      </motion.div>
    </div>
  );
}
