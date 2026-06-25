import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll position targeting the paragraph element with defined scroll offsets
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={containerRef} className={`${className} relative flex flex-wrap justify-center`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const wordStart = charIndex;
        charIndex += word.length + 1; // +1 for space

        return (
          <span
            key={wordIdx}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              marginRight: '0.25em',
            }}
          >
            {wordChars.map((char, charIdx) => {
              const globalIndex = wordStart + charIdx;
              const charProgress = globalIndex / totalChars;
              const start = Math.max(0, charProgress - 0.1);
              const end = Math.min(1, charProgress + 0.05);

              return (
                <Character
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
}

interface CharacterProps {
  key?: React.Key;
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Character({ char, progress, range }: CharacterProps) {
  // Map scroll progress range to opacity between 0.2 and 1
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span
        style={{ opacity, position: 'absolute', left: 0, top: 0 }}
      >
        {char}
      </motion.span>
    </span>
  );
}
