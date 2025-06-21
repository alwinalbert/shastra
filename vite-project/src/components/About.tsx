// ... imports (same)
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, scale: 0.9, y: 60 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    const letters = headingRef.current?.querySelectorAll("span");
    if (letters) {
      gsap.fromTo(
        letters,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        }
      );
    }

    if (floatingRef.current) {
      gsap.to(floatingRef.current.children, {
        y: "-8%",
        rotation: 5,
        opacity: 0.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 5,
        stagger: 0.6,
      });
    }

    if (starsRef.current) {
      const stars = starsRef.current.querySelectorAll("div");
      stars.forEach((star) => {
        gsap.to(star, {
          x: `+=${Math.random() * 30 - 15}`,
          y: `+=${Math.random() * 30 - 15}`,
          opacity: Math.random() * 0.8 + 0.2,
          duration: 3 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }
  }, []);

  // Larger, softer glowing stars (30 only)
  const stars = Array.from({ length: 30 }).map((_, i) => (
    <div
      key={i}
      className="absolute rounded-full bg-white/80 shadow-lg"
      style={{
        width: `${Math.random() * 3 + 2}px`,
        height: `${Math.random() * 3 + 2}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: 0.6,
        filter: "blur(1px)",
      }}
    />
  ));

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#88c1f0] via-[#c98df0] to-[#86f7c0] py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* ⭐ Stars */}
      <div ref={starsRef} className="absolute inset-0 z-0 pointer-events-none">
        {stars}
      </div>

      {/*  Floating EXPLORE */}
      <div
        ref={floatingRef}
        className="absolute inset-0 z-0 pointer-events-none flex flex-col gap-8 items-center justify-center"
      >
        <p className="text-[6rem] md:text-[8rem] font-black text-white/15 tracking-widest">SHASTRA</p>
        <p className="text-[6rem] md:text-[8rem] font-black text-white/15 tracking-widest">SHASTRA</p>
      </div>

      {/*  Heading */}
      <h2
        ref={headingRef}
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-gray-700 mb-12 tracking-widest text-center font-['Orbitron']"
      >
        {"ABOUT".split("").map((char, i) => (
          <span key={i} className="inline-block mx-1">
            {char}
          </span>
        ))}
      </h2>

      {/*  Content */}
      <div
        ref={contentRef}
        className="relative z-10 bg-gradient-to-br from-[#1e3a5f] via-[#3b185f] to-[#200029] text-white p-10 md:p-14 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-lg max-w-4xl mx-auto"
      >
        <p className="text-lg md:text-xl leading-relaxed text-center text-white/90 font-light">
          Excel, the premier techno-managerial festival of India, hosted by the students of Govt. Model Engineering College, Kochi is a beacon of innovation and a celebration of young minds.
          <br /><br />
          Since its inception in 2001, Excel has always pushed the limits of creativity as a dynamic platform for students to explore, innovate, and excel. Excel returns for a momentous 25<sup>th</sup> edition this Excel 2024 and promises to be an unforgettable journey.
          <br /><br />
          Join us for a constellation of events that includes workshops, competitions, talks, and all kinds of fun.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
