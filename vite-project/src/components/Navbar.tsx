import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen && menuRef.current) {
      // Animate items with elastic effect
      gsap.fromTo(
        menuRef.current.children,
        {
          y: -40,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.1,
        }
      );
    }
  };

  useEffect(() => {
    // Initial navbar animation
    gsap.fromTo(
      navRef.current,
      {
        y: -80,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="z-50 bg-background text-black px-10 py-4 font-bold text-lg shadow-md w-full"
    >
      <div className="flex items-center justify-between">
        <div className="font-mono tracking-widest">SHASTRA | 2025</div>

        {/* Hamburger Icon */}
        <div
          className="flex flex-col gap-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </div>
      </div>

      {/* GSAP-animated menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="flex flex-col items-start gap-4 mt-4"
        >
          <a href="#" className="text-lime-400">Home</a>
          <a href="#">Events</a>
          <a href="#">Sponsors</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <button className="border border-black px-4 py-1 rounded-md hover:bg-black hover:text-white transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
