import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sponsors = [
  {
    logo: "/redbull.jpg",
    name: "rb",
    tier: "Pro Show Partner",
  },
  {
    logo: "/r.png",
    name: "rock",
    tier: "Platinum Partner",
  },
  {
    logo: "/redfm.png",
    name: "red fm",
    tier: "Media Partner",
  },
  {
    logo: "/levis.png",
    name: "Levis",
    tier: "Cultural Partner",
  },
];

const SponsorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: -60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }

    const cards = sectionRef.current?.querySelectorAll(".sponsor-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#88c1f0] via-[#c98df0] to-[#86f7c0] text-black text-center font-['Orbitron']"
    >
      <h2
        ref={headingRef}
        className="text-5xl font-bold mb-12 tracking-widest"
      >
        SPONSORS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 max-w-6xl mx-auto">
        {sponsors.map((sponsor, idx) => (
          <div
            key={idx}
            className="sponsor-card bg-white rounded-xl px-6 py-6 text-black shadow-xl flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_25px_#c98df0]"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-24 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-sm font-semibold text-center transition-colors duration-300 group-hover:text-[#c98df0]">
              {sponsor.tier}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorSection;
