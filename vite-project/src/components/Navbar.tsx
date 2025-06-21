import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="z-50 bg-white text-black flex items-center justify-between px-10 py-4 font-bold text-lg shadow-md"
    >
      <div className="font-mono tracking-widest">SHASTRA | 2025</div>
      <div className="flex gap-8">
        <a href="#" className="text-lime-400">Home</a>
        <a href="#">Events</a>
        <a href="#">Sponsors</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>
      <button className="border border-black px-4 py-1 rounded-md hover:bg-black hover:text-white transition">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
