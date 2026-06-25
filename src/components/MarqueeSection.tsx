import { useState, useEffect, useRef } from "react";

const marqueeImages = [
  // Set 1
  "https://media0.giphy.com/media/077i6AULCXc0FKTj9s/200.gif",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  // Set 2
  "https://media2.giphy.com/media/xT9IgzoKnwFNmISR8I/200.gif",
  "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&q=80",
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
  // Set 3
  "https://media3.giphy.com/media/3oFzm0o0QgIgCMRipO/200.gif",
  "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  // Set 4
  "https://media1.giphy.com/media/26tn33aiTi1jkl6H6/200.gif",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  // Set 5
  "https://media0.giphy.com/media/yoJC2K6rCzwNY2EngA/200.gif",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
  // Set 6
  "https://media2.giphy.com/media/jTNG3RF6EwbkpD4LZx/200.gif",
  "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600&q=80",
  "https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=600&q=80",
  // Set 7
  "https://media1.giphy.com/media/3oEdva9BUHPIs2ggGY/200.gif",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  // Set 8
  "https://media3.giphy.com/media/xUA7bdpLxQhsSQdyog/200.gif",
  "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?w=600&q=80",
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
  // Set 9
  "https://media0.giphy.com/media/ZvLUtG6BZkBi0/200.gif",
  "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?w=600&q=80",
  "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=600&q=80",
  // Set 10
  "https://media1.giphy.com/media/f6hnhHkks8bk4jwjh3/200.gif",
  "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80",
  "https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?w=600&q=80",
  // Set 11
  "https://media2.giphy.com/media/LmNwrBhejkK9EFP504/200.gif",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
  // Set 12
  "https://media3.giphy.com/media/Qo2dupDib32rkTY4hX/200.gif",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  // Set 13
  "https://media0.giphy.com/media/fwbZnTftCXVocKzfxR/200.gif",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  // Set 14
  "https://media1.giphy.com/media/1oGT95WukVdPqMBEsN/200.gif",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
];

const ROW_1_URLS = marqueeImages.slice(0, 21);
const ROW_2_URLS = marqueeImages.slice(21);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Triple the items to ensure seamless wrapping on wider screens
  const tripledRow1 = [...ROW_1_URLS, ...ROW_1_URLS, ...ROW_1_URLS];
  const tripledRow2 = [...ROW_2_URLS, ...ROW_2_URLS, ...ROW_2_URLS];

  const handleScroll = () => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
    // Clamp offset so tiles don't fly off screen on initial load
    const clampedOffset = Math.max(-300, Math.min(300, offset));
    setScrollOffset(clampedOffset);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="marquee-section"
      className="relative w-full overflow-hidden bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
    >
      {/* Row 1 — Moves RIGHT on scroll (translateX(scrollOffset - 200)) */}
      <div className="w-full overflow-hidden flex">
        <div
          style={{
            transform: `translateX(${scrollOffset - 200}px)`,
            willChange: "transform",
          }}
          className="flex gap-3 transition-transform duration-75 ease-out"
        >
          {tripledRow1.map((url, index) => (
            <div
              key={`r1-${index}`}
              style={{
                width: '420px',
                height: '270px',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0,
                backgroundColor: '#1a1a1a',
                position: 'relative',
              }}
            >
              <img
                src={url}
                alt=""
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  e.currentTarget.parentElement!.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Moves LEFT on scroll (translateX(-(scrollOffset - 200))) */}
      <div className="w-full overflow-hidden flex">
        <div
          style={{
            transform: `translateX(-${scrollOffset - 200}px)`,
            willChange: "transform",
          }}
          className="flex gap-3 transition-transform duration-75 ease-out"
        >
          {tripledRow2.map((url, index) => (
            <div
              key={`r2-${index}`}
              style={{
                width: '420px',
                height: '270px',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0,
                backgroundColor: '#1a1a1a',
                position: 'relative',
              }}
            >
              <img
                src={url}
                alt=""
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  e.currentTarget.parentElement!.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
