import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        {
          opacity: 0,
          scale: 0.6,
          rotateY: 15,
          rotateX: 10,
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          rotateX: 0,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={videoRef} className="flex justify-center mt-10 md:mt-0">
      <div className="w-full md:w-[80%] aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
        <video
          className="w-full h-full object-cover"
          src="/videoplayback.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};

export default VideoSection;
