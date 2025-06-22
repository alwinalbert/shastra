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
          start: "top 65%",
          
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
            start: "top 65%",
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

    
  }, []);

  // Larger, softer glowing stars (30 only)
  

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 md:px-20 overflow-hidden"
    >

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
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-black mb-12 tracking-widest text-center font-['Orbitron']"
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
          Shastra, the premier techno-managerial festival of India, hosted by the students of Govt. Model Engineering College, Kochi is a beacon of innovation and a celebration of young minds.
          <br /><br />
          Since its inception in 2001, Excel has always pushed the limits of creativity as a dynamic platform for students to explore, innovate, and excel. Shastra returns for a momentous 25<sup>th</sup> edition this Shastra 2025 and promises to be an unforgettable journey.
          <br /><br />
          Join us for a constellation of events that includes workshops, competitions, talks, and all kinds of fun.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
