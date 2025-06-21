import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RegisterMarquee = () => {
  const marqueeContainer = useRef<HTMLDivElement>(null);
  const marqueeTrack = useRef<HTMLDivElement>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = marqueeContainer.current;
    const track = marqueeTrack.current;

    if (container && track) {
      const totalWidth = track.scrollWidth / 2; // only half since it's duplicated

      // Left → Right scroll
      marqueeTween.current = gsap.fromTo(
        track,
        { x: -totalWidth },
        {
          x: 0,
          duration: 30,
          ease: "linear",
          repeat: -1,
        }
      );

      // Pause on hover
      container.addEventListener("mouseenter", () => {
        marqueeTween.current?.pause();
      });

      container.addEventListener("mouseleave", () => {
        marqueeTween.current?.play();
      });
    }

    return () => {
      marqueeTween.current?.kill();
    };
  }, []);

  const repeatedItems = Array(30).fill("Register →");

  return (
    <div
      ref={marqueeContainer}
      className="relative z-30 overflow-hidden bg-lime-200 py-1 whitespace-nowrap cursor-pointer"
    >
      <div
        ref={marqueeTrack}
        className="flex gap-10 text-black text-sm font-semibold uppercase tracking-widest"
      >
        {repeatedItems.concat(repeatedItems).map((text, i) => (
          <span key={i} className="mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RegisterMarquee;
