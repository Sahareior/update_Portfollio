import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import Galaxy from './ParticleSystem';

const ScrollPractise = () => {
  const containerRef = useRef(null);
  const pannelRef = useRef(null);
  const pannelArray = useRef([]);

  // Register ScrollTrigger ONCE (not inside component render)
  // Move this outside or use useEffect
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const data = [
    { id: 1, name: <Galaxy /> },
    { id: 2, name: 'mijan' },
    { id: 3, name: 'kijan' },
    { id: 4, name: 'lijan' },
    { id: 5, name: 'fijan' },
  ];

  useEffect(() => {
    // Clean up any existing triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const slides = pannelArray.current.filter(Boolean);
    if (slides.length === 0) return;

    // IMPORTANT: Set the width of the panels container
    // Each panel should be 100% of viewport width
    gsap.set(pannelRef.current, {
      width: `${slides.length * 100}%`
    });

    gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: pannelRef.current,
        pin: containerRef.current,
        pinSpacing: true,
        scrub: 1,
        end: '+=3000',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: true // Add this for debugging
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addElementsToRef = (index, element) => {
    pannelArray.current[index] = element;
  };

  return (
    <div
      ref={containerRef}
      className="overflow-x-hidden h-screen"
      style={{ height: '100vh' }}
    >
      <div
        ref={pannelRef}
        className="flex flex-nowrap h-full"
        style={{ display: 'flex', flexWrap: 'nowrap', height: '100%' }}
      >
        {data.map((items, index) => (
          <div
            ref={(ref) => addElementsToRef(index, ref)}
            key={items.id}
            className="flex-shrink-0 w-screen h-full flex items-center justify-center border"
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ccc',
              flexShrink: 0
            }}
          >
            <p className="text-2xl font-medium">{items.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollPractise;