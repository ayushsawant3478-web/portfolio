import React, { useState } from "react";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export function ContactButton({ onClick, className = "" }: ContactButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open("mailto:ayushsawant5478@gmail.com", "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'transparent',
        border: isHovered ? '1.5px solid rgba(99, 102, 241, 0.6)' : '1.5px solid rgba(187, 204, 215, 0.25)',
        color: isHovered ? '#ffffff' : '#D7E2EA',
        backdropFilter: 'blur(8px)',
        borderRadius: '9999px',
        padding: 'clamp(10px, 1.2vw, 16px) clamp(24px, 3vw, 48px)',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontSize: 'clamp(0.7rem, 1vw, 0.9rem)',
        transition: 'all 200ms ease',
        cursor: 'pointer',
        boxShadow: isHovered ? '0 0 20px rgba(99, 102, 241, 0.15)' : 'none'
      }}
      className={`${className}`}
      id="contact-me-btn"
    >
      Contact Me
    </button>
  );
}

interface LiveProjectButtonProps {
  url: string;
  label: string;
  className?: string;
}

export function LiveProjectButton({ url, label, className = "" }: LiveProjectButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] uppercase font-medium tracking-widest cursor-pointer transition-colors hover:bg-[#D7E2EA]/10 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base ${className}`}
      id={`live-project-btn-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {label}
    </button>
  );
}
