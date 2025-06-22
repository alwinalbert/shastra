import { Instagram, Facebook, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#88c1f0] via-[#c98df0] to-[#86f7c0] text-black px-6 py-16 text-center relative font-sans">
      <div className="flex justify-center mb-6">
        <img src="/img.png" alt="Excel Logo" className="h-12" />
      </div>

      <h2 className="text-3xl font-semibold mb-2 font-['Orbitron']">Ready To Explore?</h2>
      <p className="text-lg mb-8">A galaxy of innovations, excitement and wonder awaits.</p>

      <div className="flex justify-center gap-6 text-black text-xl mb-8">
        <a href="" className="hover:scale-110 transition-transform duration-300">
          <Instagram />
        </a>
        <a href="" className="hover:scale-110 transition-transform duration-300">
          <X />
        </a>
        <a href="" className="hover:scale-110 transition-transform duration-300">
          <Facebook />
        </a>
        <a href="" className="hover:scale-110 transition-transform duration-300">
          <Linkedin />
        </a>
      </div>

      {/* Bottom logos */}
      <div className="flex justify-between items-end text-sm mt-10 px-4 max-w-7xl mx-auto">
        <div className="text-left">
          <img src="/image.png" alt="Shastra 2025" className="h-10 mb-2" />
          <p className="text-xs font-semibold">INSPIRE | INNOVATE | ENGINEER</p>
        </div>

        <div className="text-right">
          <img src="/img.png" alt="Govt. Model Engineering College" className="h-12 mx-auto mb-2" />
          <p className="text-xs font-semibold">Govt. Model Engineering<br />College, Kochi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
