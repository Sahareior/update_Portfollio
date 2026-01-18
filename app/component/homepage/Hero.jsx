import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef();
  const videoref = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [videoLoaded, setVideoLoaded] = useState(false);

  useGSAP(() => {
    const video = videoref.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=600%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    const handleLoaded = () => {
      setVideoLoaded(true);
      tl.to(video, {
        currentTime: video.duration,
        ease: 'none',
      });

      // Simple text animation



    };

    if (video.readyState >= 1) {
      handleLoaded();
    } else {
      video.addEventListener('loadedmetadata', handleLoaded);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full z-10 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoref}
          src="/images/d.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        {/* Subtle dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Minimal hero content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-4">
        <div 
        
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            I love building
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
              dream-like websites
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto mb-10">
            Where creativity meets code, and visions become digital experiences
          </p>
          
          <div className="flex justify-center gap-4">
            <a 
              href="#work" 
              className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-hint">
          <div className="text-white/70 text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;