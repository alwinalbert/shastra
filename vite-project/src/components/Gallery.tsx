import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
];

const GallerySection = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Infinite marquee animation
    const animateRow = (
      ref: React.RefObject<HTMLDivElement>,
      direction: "left" | "right"
    ) => {
      const distance = ref.current?.scrollWidth || 0;
      gsap.fromTo(
        ref.current,
        { x: direction === "left" ? 0 : -distance / 2 },
        {
          x: direction === "left" ? -distance / 2 : 0,
          duration: 30,
          ease: "none",
          repeat: -1,
        }
      );
    };

    animateRow(row1Ref, "left");
    animateRow(row2Ref, "right");

    // Animate the heading
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Animate images in both rows
    [row1Ref, row2Ref].forEach((rowRef) => {
      if (rowRef.current) {
        const images = rowRef.current.querySelectorAll("img");
        gsap.fromTo(
          images,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rowRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  const duplicatedImages = [...images, ...images];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#88c1f0] via-[#c98df0] to-[#86f7c0] overflow-hidden">
      <h2
        ref={headerRef}
        className="text-center text-5xl font-bold text-black mb-12 tracking-widest font-['Orbitron']"
      >
        GALLERY
      </h2>

      <div className="overflow-hidden space-y-10">
        {/* Row 1 */}
        <div ref={row1Ref} className="flex gap-6 w-max">
          {duplicatedImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i}`}
              className="w-64 h-44 object-cover rounded-xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-500"
            />
          ))}
        </div>

        {/* Row 2 */}
        <div ref={row2Ref} className="flex gap-6 w-max">
          {duplicatedImages
            .slice()
            .reverse()
            .map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i}`}
                className="w-64 h-44 object-cover rounded-xl shadow-xl border border-white/10 hover:scale-105 transition-transform duration-500"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
