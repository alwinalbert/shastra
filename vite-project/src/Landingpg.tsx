import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import RegisterMarquee from "./components/Marqueeeffect";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/Loader";
import AboutSection from "./components/About";
import GallerySection from "./components/Gallery";
import SponsorSection from "./components/Sponser";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSetion";


const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
  const letters = document.querySelectorAll(".letter");
  console.log(letters)

  gsap.fromTo(
    letters,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power4.out",
      delay:0.3,
    }
  );
}, [isLoading]);



  return (
    <>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="relative bg-gradient-to-br from-[#88c1f0] via-[#c98df0] to-[#86f7c0] text-black min-h-screen overflow-hidden">
          {/* Navbar */}
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Register strip */}
          <div className="pt-16">
            <RegisterMarquee />

            {/* Hero Content */}
            <div className="relative z-10 px-10 pt-20 grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Left Text */}
              <div className="text-black max-w-xl" ref={headingRef}>
                <h1 className="text-5xl font-extrabold mb-6 leading-tight" ref={headingRef}>
                  {"GOVT".split("").map((char, i) => (
                    <span key={`govt-${i}`} className="letter inline-block">{char}</span>
                  ))}
                  <br />
                  {"MODEL ENGINEERING".split("").map((char, i) => (
                    <span key={`model-${i}`} className="letter inline-block">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                  <br />
                  {"COLLEGE, KOCHI".split("").map((char, i) => (
                    <span key={`college-${i}`} className="letter inline-block">{char}</span>
                  ))}
                </h1>

                <button className="bg-lime-300 hover:bg-lime-400 px-6 py-3 rounded-md shadow-md text-xl font-bold transition">
                  →
                </button>
              </div>

              {/* Video */}
              <VideoSection />
            </div>

            {/* Bottom Banner */}
            <div className="bg-lime-200 py-6 mt-12 text-center text-6xl font-bold text-gray-700 tracking-wide">
              SOUTH ASIA’S
            </div>

            {/* Sections */}
            <AboutSection />

            <GallerySection />

            <SponsorSection />

            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
