import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const RADIUS = 100;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [percent, setPercent] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const tl = gsap.timeline({
    onUpdate: function () {
      const value = Math.round(this.progress() * 100);
      setPercent(value);

      const offset = CIRCUMFERENCE * (1 - value / 100);
      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = `${offset}`;
      }
    },
    onComplete: () => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        onComplete: onFinish,
      });
    },
  });

  tl.to({}, { duration: 2.5 });

 
  return () => {
    tl.kill();
  };
}, [onFinish]);


  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
    >
      <svg width="160" height="160" className="mb-6">
        <circle
          cx="80"
          cy="80"
          r={RADIUS}
          stroke="#444"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          ref={circleRef}
          cx="80"
          cy="80"
          r={RADIUS}
          stroke="#a3e635" // lime-400
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          strokeLinecap="round"
          transform="rotate(-90 80 80)"
        />
      </svg>
      <div className="absolute text-lime-400 text-3xl font-mono">{percent}%</div>
    </div>
  );
};

export default LoadingScreen;
