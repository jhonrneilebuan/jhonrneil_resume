import { useEffect, useState, useRef, RefObject } from "react";

interface ParallaxOptions {
  speed?: number; // 0.1 = slow, 0.5 = medium, 1 = fast
  direction?: "up" | "down";
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.3, direction = "up" } = options;
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      // Calculate parallax only when element is in or near viewport
      if (scrolled + windowHeight > elementTop - 200 && scrolled < elementTop + rect.height + 200) {
        const relativeScroll = scrolled - elementTop + windowHeight;
        const parallaxValue = relativeScroll * speed * (direction === "up" ? -1 : 1);
        setOffset(parallaxValue);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return { ref, offset };
};

export const useMouseParallax = (sensitivity: number = 0.02) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const x = (e.clientX - centerX) * sensitivity;
      const y = (e.clientY - centerY) * sensitivity;
      
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [sensitivity]);

  return position;
};
