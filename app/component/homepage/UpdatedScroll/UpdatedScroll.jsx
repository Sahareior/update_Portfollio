import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./UpdatedScroll.css";

gsap.registerPlugin(ScrollTrigger);

const UpdatedScroll = () => {
  const racesWrapperRef = useRef(null);
  const racesRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const races = racesRef.current;

      const getScrollAmount = () => {
        return -(races.scrollWidth - window.innerWidth);
      };

      const tween = gsap.to(races, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: racesWrapperRef.current,
        start: "top 20%",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: false, // 🔥 Turn off in production
        id: 'horizontal-scroll-trigger', // 🔥 Add unique ID
        anticipatePin: 1, // 🔥 Helps with pinning performance
      });
    }, racesWrapperRef);

    return () => ctx.revert(); // 🔥 Cleans up everything properly
  }, []);

  return (
    <div>
      <div className="racesWrapper" ref={racesWrapperRef}>
        <div className="races" ref={racesRef}>
          <h2>Monaco</h2>
          <h2>Austria</h2>
          <h2>Hungary</h2>
          <h2>Netherlands</h2>
          <h2>Japan</h2>
        </div>
      </div>
    </div>
  );
};

export default UpdatedScroll;