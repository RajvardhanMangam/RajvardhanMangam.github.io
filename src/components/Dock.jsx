import { useEffect, useRef } from "react";
import gsap from "gsap";

// Generic GSAP dock-magnify component, ported from GreenSock's macOS dock
// demo (https://codepen.io/GreenSock/pen/PwNeKZy). Works on either axis so
// it can drive a vertical dock (projects) or a horizontal one (nav).
const ITEM = 56;
const MAX = 100;
const BOUND = ITEM * Math.PI;

export default function Dock({ items, active, orientation = "y", renderItem, className = "" }) {
  const dockRef = useRef(null);
  const itemRefs = useRef([]);
  const isY = orientation === "y";

  useEffect(() => {
    const dock = dockRef.current;
    const els = itemRefs.current;
    if (!dock || window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    gsap.set(els, { transformOrigin: isY ? "0% 50%" : "50% 100%" });

    const update = (pointerPos) => {
      const rect = dock.getBoundingClientRect();
      const base = isY
        ? rect.top + (els[0]?.offsetTop || 0)
        : rect.left + (els[0]?.offsetLeft || 0);
      const pointer = pointerPos - base;

      els.forEach((el, i) => {
        const distance = i * ITEM + ITEM / 2 - pointer;
        let offset = 0;
        let scale = 1;
        if (-BOUND < distance && distance < BOUND) {
          const rad = (distance / ITEM) * 0.5;
          scale = 1 + (MAX / ITEM - 1) * Math.cos(rad);
          offset = 2 * (MAX - ITEM) * Math.sin(rad);
        } else {
          offset = (-BOUND < distance ? 2 : -2) * (MAX - ITEM);
        }
        gsap.to(el, {
          duration: 0.3,
          [isY ? "y" : "x"]: offset,
          scale,
          ease: "power2.out",
        });
      });
    };

    const onMove = (e) => update(isY ? e.clientY : e.clientX);
    const onLeave = () => gsap.to(els, { duration: 0.3, x: 0, y: 0, scale: 1, ease: "power2.out" });

    dock.addEventListener("mousemove", onMove);
    dock.addEventListener("mouseleave", onLeave);
    return () => {
      dock.removeEventListener("mousemove", onMove);
      dock.removeEventListener("mouseleave", onLeave);
    };
  }, [items.length, isY]);

  return (
    <ul
      ref={dockRef}
      className={`relative z-20 flex ${isY ? "flex-col" : "flex-row"} items-center ${className}`}
    >
      {items.map((item, i) => (
        <li
          key={item.key}
          ref={(el) => (itemRefs.current[i] = el)}
          className="relative list-none"
          style={{ zIndex: i === active ? 30 : 10 }}
        >
          {renderItem(item, i === active, i)}
        </li>
      ))}
    </ul>
  );
}
