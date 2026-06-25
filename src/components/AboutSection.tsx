import React from "react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import { ContactButton } from "./Buttons";

export default function AboutSection() {
  const filterStyle = {
    filter: "hue-rotate(220deg) saturate(1.8) brightness(0.75)",
    opacity: 0.6,
  };

  const aboutBodyText =
    "IT Graduate with a Minor in Cyber Security from Somaiya Vidyavihar University, Mumbai — CGPA 9.10/10. I build and secure live production platforms, analyse threats, and ensure systems stay protected. Trackify and PassKey are platforms I built implementing AES-256 encryption, OAuth 2.0, RBAC, SIEM-style monitoring, and audit logging. TryHackMe Top 25% globally. Google Cybersecurity certified. GCP Silver League 2026. Open to Cybersecurity, SOC, GRC, and IT Audit roles.";

  return (
    <section
      id="about-section"
      className="relative w-full min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col justify-center items-center overflow-hidden select-none"
    >
      {/* 4 decorative corner images (absolute positioned, z-0) */}

      {/* Top-left — Shield icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png"
            alt="Decorative 3D Shield"
            style={filterStyle}
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom-left — Lock icon */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="Decorative 3D Lock"
            style={filterStyle}
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Top-right — Cybersecurity icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png"
            alt="Decorative 3D Cybersecurity Icon"
            style={{ 
              filter: 'hue-rotate(220deg) saturate(2) brightness(0.8) opacity(0.7)',
              width: 'clamp(120px, 16vw, 210px)',
              height: 'auto',
              position: 'absolute',
              top: '4%',
              right: '1%',
            }}
            className="object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom-right — Network/server icon */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
            alt="Decorative 3D Server Node"
            style={filterStyle}
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Center content (relative z-10, max-w-4xl, centered) */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center gap-16 sm:gap-20 md:gap-24">
        {/* Group 1 — Heading + Animated Text (gap 10 sm:14 md:16) */}
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          {/* Heading "About me" */}
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading uppercase font-black leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              About me
            </h2>
          </FadeIn>

          {/* Animated paragraph */}
          <AnimatedText
            text={aboutBodyText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        {/* Group 2 — Contact Button */}
        <FadeIn delay={0.3} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
