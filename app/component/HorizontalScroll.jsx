import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSlider() {
  const mainRef = useRef(null);
  const sliderRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: mainRef.current,
          scrub: 1,
          end: () => `+=${sections.length * 1000}`,
        },
      });
    }, mainRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="main" ref={mainRef}>
      <div className="horizontal-sliders" ref={sliderRef}>
        {["Red", "Blue", "Green", "Yellow", "Brown"].map((color, i) => (
          <div
            key={i}
            className="slide"
            ref={(el) => (sectionsRef.current[i] = el)}
          >
            {color}
          </div>
        ))}
      </div>

      <div className="next-block">
        this is next block
      </div>
    </div>
  );
}
