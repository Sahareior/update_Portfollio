import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Galaxy from './ParticleSystem';
import Component2 from '../TestCompo/Component2';
import Component1 from '../TestCompo/Component1';
import Component3 from '../TestCompo/Component3';
import Component4 from '../TestCompo/Component4';
import Component5 from '../TestCompo/Component5';


// Register ScrollTrigger plugin (only once)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Optimize GSAP defaults
  gsap.config({
    nullTargetWarn: false,
  });
}

const Testooo = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);
  const nextBlockRef = useRef(null);
  const animationRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Sample slide components
  const slideComponents = [
    { 
      id: 1, 
      component: <Component1 />,
      content: "Red", 
      bgColor: "#FF6B6B",
      textColor: "#FFF"
    },
    { 
      id: 2, 
      component: <Component2 />,
      content: "Blue", 
      bgColor: "#4ECDC4",
      textColor: "#FFF"
    },
    { 
      id: 3, 
      component: <Component3 />,
      content: "Green", 
      bgColor: "#98D8AA",
      textColor: "#FFF"
    },
    { 
      id: 4, 
      component: <Component4 />,
      content: "Yellow", 
      bgColor: "#FFD93D",
      textColor: "#333"
    },
    { 
      id: 5, 
      component: <Component5 />,
      content: "Brown", 
      bgColor: "#6B4F4F",
      textColor: "#FFF"
    }
  ];

  // Optimized ref assignment using useMemo pattern
  const addToRefs = useCallback((el, index) => {
    if (el && slidesRef.current[index] !== el) {
      slidesRef.current[index] = el;
      
      // Apply performance optimizations immediately
      if (el.style) {
        // Force GPU acceleration
        el.style.transform = 'translateZ(0)';
        el.style.backfaceVisibility = 'hidden';
        el.style.perspective = '1000px';
        el.style.willChange = 'transform';
      }
    }
  }, []);

  useEffect(() => {
    // Ensure DOM is ready
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 150); // Slightly longer delay for better DOM readiness
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    if (!containerRef.current || !sliderRef.current) return;

    // Cleanup existing animations
    if (animationRef.current && animationRef.current.scrollTrigger) {
      animationRef.current.scrollTrigger.kill();
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const slides = slidesRef.current.filter(Boolean);
    if (slides.length === 0) return;

    // CRITICAL: Set container dimensions BEFORE animation
    gsap.set(sliderRef.current, {
      width: `${slides.length * 100}%`,
      force3D: true // Enable 3D transforms for GPU acceleration
    });

    // Optimize GSAP settings for performance
    gsap.ticker.lagSmoothing(0); // Disable lag smoothing for immediate response
    gsap.ticker.fps(60); // Limit to 60fps

    // Configure ScrollTrigger for performance
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
      autoUpdateEvents: "visibilitychange,DOMContentLoaded,load",
    });

    // Use a simpler animation with better performance
    animationRef.current = gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: "none",
      immediateRender: true, // Render immediately to avoid jank
      force3D: true, // Force 3D transforms for GPU
      scrollTrigger: {
        trigger: sliderRef.current,
        pin: containerRef.current,
        pinSpacing: true,
        scrub: 0.3, // Reduced for smoother animation
        end: () => `+=${sliderRef.current.offsetWidth - window.innerWidth}`,
        anticipatePin: 0.5, // Reduced for less pre-calculation
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        preventOverlaps: true,
        onRefresh: () => {
          // Recalculate on refresh for better performance
          if (animationRef.current) {
            animationRef.current.invalidate();
          }
        },
        onUpdate: self => {
          // Throttle updates for better performance
          if (self.progress > 0.99) {
            // Reduce animations when near end
            gsap.set(slides, { 
              force3D: true,
              willChange: 'transform'
            });
          }
        }
      }
    });

    // Simpler next block animation
    if (nextBlockRef.current) {
      gsap.to(nextBlockRef.current, {
        backgroundColor: 'tomato',
        ease: "power1.out",
        scrollTrigger: {
          trigger: nextBlockRef.current,
          start: 'top 60%', // Slightly later start
          end: 'top 20%',
          scrub: 0.5,
          markers: false,
        }
      });
    }

    // Add passive scroll listener for better performance
    if (containerRef.current) {
      containerRef.current.addEventListener('touchmove', () => {}, { passive: true });
      containerRef.current.addEventListener('wheel', () => {}, { passive: true });
    }

    // Cleanup function
    return () => {
      // Kill all animations
      if (animationRef.current) {
        animationRef.current.kill();
      }
      
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === sliderRef.current) {
          trigger.kill();
        }
      });

      // Remove event listeners
      if (containerRef.current) {
        containerRef.current.removeEventListener('touchmove', () => {});
        containerRef.current.removeEventListener('wheel', () => {});
      }

      // Reset GSAP ticker
      gsap.ticker.lagSmoothing(1000);
    };
  }, [isReady]);
  

  return (
    <div 
      className="horizontal-slider-container " 
      ref={containerRef}
      style={{
        overflowX: 'hidden',
        width: '100%',
        position: 'relative',
        // Enable hardware acceleration on container
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
      }}
    >

         <div 
        className="next-block" 
        // ref={nextBlockRef}
        style={{
          height: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          // Performance
          willChange: 'background-color',
          transform: 'translateZ(0)',
        }}
      >
<Galaxy />

<div className='absolute top-1/4 space-y-5 left-[13%]'>
<div className="flex gap-3 items-stretch">
  <div className="bg-emerald-400 w-[5px]" />
  <div>
    <p className='   text-5xl z-20 mb-7'>Sahareior Sijan</p>
<p className=' z-20 mt-3 '>FullStack Developer</p>
</div>
</div>
</div>
      </div>


      <div 
        className="horizontal-sliders" 
        ref={sliderRef}
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          height: '100vh',
          // Performance optimizations
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {slideComponents.map((slide, index) => (
          <div
            key={slide.id}
            className="slide"
            ref={el => addToRefs(el, index)}
            style={{
              backgroundColor: slide.bgColor,
              color: slide.textColor,
              width: '100vw',
              height: '100vh',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              // Performance optimizations
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              perspective: '1000px',
              // Prevent layout thrashing
              contain: 'layout paint style',
            }}
          >
{
  slide.component
}
          </div>
        ))}
      </div>
      

    </div>
  );
};

export default Testooo;