import { useRef, useEffect, } from "react";
import { gsap } from "gsap";
import React from "react";
interface NavBarProps{
  isOpen:boolean,
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
}


const Navbar = ({isOpen,setIsOpen}:NavBarProps) => {
  const navRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Animate menu items when `isOpen` becomes true
  useEffect(() => {
    if (isOpen && menuRef.current) {
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
  }, [isOpen]);

  useEffect(() => {
    // Initial navbar animation
    gsap.fromTo(
      navRef.current,
      {
        y: -80,
        opacity: 0,
        scale: 0.95,
        delay: 0.5,
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
      className={`fixed top-0 left-0 z-50 bg-background backdrop-blur-md text-black px-10 py-4 font-bold text-lg shadow-md w-full ${!isOpen?"h-16":"h-[22re]"}`}
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

      {/* Menu - always rendered but conditionally shown */}
      <div
        ref={menuRef}
        className={`flex flex-col items-start gap-4 mt-4 transition-all duration-500 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#" className="text">Home</a>
        <a href="#">Events</a>
        <a href="#">Competitions</a>
        <a href="#">Schedules</a>
        <a href="#">Contacts</a>
        <button className="border border-black px-4 py-1 rounded-md hover:bg-black hover:text-white transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
