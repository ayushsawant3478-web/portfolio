import React, { useRef } from "react";
import FadeIn from "./FadeIn";

interface Certification {
  id: number;
  issuer: string;
  year: string;
  title: string;
  tags: string[];
  verifyUrl?: string;
}

export default function CertificationsSection() {
  const hoveredCardRef = useRef<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const certifications: Certification[] = [
    {
      id: 1,
      issuer: "Google / Coursera",
      year: "2026",
      title: "Sound the Alarm: Detection & Response",
      tags: ["SIEM", "Wireshark", "IDS/IPS", "SOC", "Incident Response"],
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/XZ8JYWNFPD6H"
    },
    {
      id: 2,
      issuer: "Google / Coursera",
      year: "2026",
      title: "Play It Safe: Manage Security Risks",
      tags: ["NIST", "Risk Frameworks", "Compliance", "Audits"],
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/D3MOX4R9G5H5"
    },
    {
      id: 3,
      issuer: "Google / Coursera",
      year: "Jul 2024",
      title: "Foundations of Cybersecurity",
      tags: ["Security Fundamentals", "Threat Landscapes", "Core Concepts"],
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/TVG2NRWXN5MZ"
    },
    {
      id: 4,
      issuer: "University of Michigan / Coursera",
      year: "Mar 2025",
      title: "Python Data Structures",
      tags: ["Python", "Data Structures", "Programming"],
      verifyUrl: "https://coursera.org/verify/OI3U5NPFP9PY"
    },
    {
      id: 5,
      issuer: "Google / Coursera",
      year: "Mar 2025",
      title: "Introduction to Git & GitHub",
      tags: ["Git", "GitHub", "Version Control"],
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/IFJ5UAIGKYL3"
    },
    {
      id: 6,
      issuer: "Google Cloud",
      year: "2026",
      title: "Google Cloud Skills Boost — Silver League",
      tags: ["Cloud SQL", "App Engine", "Cloud Run", "IAM", "Serverless"]
    },
    {
      id: 7,
      issuer: "TryHackMe",
      year: "Ongoing",
      title: "TryHackMe — 16 Rooms · Gold Badge · Top 25% Globally",
      tags: ["Ethical Hacking", "VAPT", "SOC", "Linux", "Network Analysis", "Log Analysis"],
      verifyUrl: "https://tryhackme.com/p/fl1thyy"
    },
    {
      id: 8,
      issuer: "Self-Study",
      year: "2026",
      title: "OWASP LLM Top 10 + ISO 27701",
      tags: ["Prompt Injection", "AI Security", "Privacy Management"]
    }
  ];

  const handleMouseEnter = (index: number) => {
    hoveredCardRef.current = index;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      if (i === index) {
        card.style.transform = 'translateY(-12px) scale(1.03) rotateX(2deg)';
        card.style.opacity = '1';
        card.style.filter = 'blur(0px) brightness(1)';
        card.style.zIndex = '10';
        card.style.border = '1px solid rgba(99, 102, 241, 0.5)';
        card.style.background = 'rgba(99, 102, 241, 0.08)';
        card.style.boxShadow = '0 20px 60px rgba(99, 102, 241, 0.2)';
      } else {
        card.style.transform = 'translateY(4px) scale(0.97)';
        card.style.opacity = '0.4';
        card.style.filter = 'blur(1.5px) brightness(0.6)';
        card.style.zIndex = '1';
        card.style.border = '1px solid rgba(187, 204, 215, 0.1)';
        card.style.background = 'rgba(255, 255, 255, 0.03)';
        card.style.boxShadow = 'none';
      }
    });
  };

  const handleMouseLeave = () => {
    hoveredCardRef.current = null;
    cardRefs.current.forEach((card) => {
      if (!card) return;
      card.style.transform = 'translateY(0px) scale(1)';
      card.style.opacity = '1';
      card.style.filter = 'blur(0px) brightness(1)';
      card.style.zIndex = '1';
      card.style.border = '1px solid rgba(187, 204, 215, 0.1)';
      card.style.background = 'rgba(255, 255, 255, 0.03)';
      card.style.boxShadow = 'none';
    });
  };

  return (
    <section
      id="certifications-section"
      className="relative w-full min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20">
          <h2
            className="hero-heading uppercase font-black leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}
          >
            Certifications
          </h2>
        </FadeIn>

        {/* Certifications Grid */}
        <div
          style={{ perspective: '1200px' }}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full max-w-4xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <CertCard
              key={cert.id}
              certification={cert}
              delay={index * 0.08}
              index={index}
              ref={(el) => cardRefs.current[index] = el}
              onMouseEnter={() => handleMouseEnter(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CertCardProps {
  key?: React.Key;
  certification: Certification;
  delay: number;
  index: number;
  onMouseEnter: () => void;
}

const CertCard = React.forwardRef<HTMLDivElement, CertCardProps>(({ certification, delay, onMouseEnter }, ref) => {
  return (
    <FadeIn delay={delay} y={30} duration={0.6}>
      <div
        ref={ref}
        onMouseEnter={onMouseEnter}
        style={{
          borderRadius: '20px',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          transition: 'transform 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 350ms ease, filter 350ms ease, border-color 350ms ease, background 350ms ease, box-shadow 350ms ease',
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity, filter',
          perspective: '800px',
          cursor: 'default',
          transform: 'translateY(0px) scale(1)',
          opacity: '1',
          filter: 'blur(0px) brightness(1)',
          zIndex: '1',
          border: '1px solid rgba(187, 204, 215, 0.1)',
          background: 'rgba(255, 255, 255, 0.03)',
          boxShadow: 'none',
        }}
      >
        {/* Top Row: Issuer + Year */}
        <div className="flex justify-between items-center">
          <span style={{
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '9999px',
            padding: '2px 10px',
            fontSize: '0.7rem',
            color: '#818cf8',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {certification.issuer}
          </span>
          <span style={{
            color: 'rgba(187, 204, 215, 0.4)',
            fontSize: '0.75rem'
          }}>
            {certification.year}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          color: '#D7E2EA',
          fontWeight: 600,
          fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
          lineHeight: 1.3
        }}>
          {certification.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {certification.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '9999px',
                padding: '2px 8px',
                fontSize: '0.65rem',
                color: 'rgba(187, 204, 215, 0.6)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Verify Link (if exists) */}
        {certification.verifyUrl && (
          <div className="flex justify-end mt-auto">
            <a
              href={certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => { e.currentTarget.style.color = '#818cf8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(99, 102, 241, 0.7)'; }}
              style={{
                color: 'rgba(99, 102, 241, 0.7)',
                fontSize: '0.75rem',
                textDecoration: 'none'
              }}
            >
              Verify ↗
            </a>
          </div>
        )}
      </div>
    </FadeIn>
  );
});
CertCard.displayName = "CertCard";
