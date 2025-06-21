import RegisterMarquee from "./components/Marqueeeffect";
import Navbar from "./components/Navbar";



const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#88c1f0] via-[#c98df0] to-[#86f7c0] text-black min-h-screen overflow-hidden">

  {/* Navbar - always on top */}
  <Navbar />

  {/* Register strip */}
  <RegisterMarquee />

      {/* Hero Content */}
      <div className="relative z-10 px-10 pt-20 grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Text */}
        <div className="text-black max-w-xl">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Grab your<br />Tickets now<br />here.</h1>
          <button className="bg-lime-300 hover:bg-lime-400 px-6 py-3 rounded-md shadow-md text-xl font-bold transition">→</button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center mt-10 md:mt-0">
          <img src="/vr-duo.png" alt="VR Users" className="w-[80%]" />
        </div>
      </div>

      {/* Background Words */}
      <div className="absolute text-6xl font-extrabold text-white/20 top-[30%] right-[3%] leading-none tracking-wider">
        <p>EXPLORE</p>
        <p>EXPLORE</p>
        <p>EXPLORE</p>
      </div>

      {/* Bottom Banner */}
      <div className="bg-lime-200 py-6 mt-12 text-center text-6xl font-bold text-gray-700 tracking-wide">
        SOUTH ASIA’S
      </div>
    </div>
  );
};

export default HeroSection;
