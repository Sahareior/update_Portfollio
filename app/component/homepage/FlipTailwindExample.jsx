import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const itemsData = ["React", "Vue", "Svelte", "Angular"];

export default function FlipTailwindExample() {
  const [items, setItems] = useState(itemsData);
  const flipState = useRef(null);

  const shuffle = () => {
    flipState.current = Flip.getState(".item");
    setItems(prev => [...prev].reverse());
  };

  useLayoutEffect(() => {
    if (!flipState.current) return;

    Flip.from(flipState.current, {
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.05,
      absolute: true,
    });

    flipState.current = null;
  }, [items]);

  return (
    <>
      <button
        onClick={shuffle}
        className="mb-4 px-4 py-2 bg-black text-white rounded"
      >
        Shuffle
      </button>

      <div className="space-y-2">
        {items.map(item => (
          <div
            className="item p-4 bg-gray-200 rounded"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
