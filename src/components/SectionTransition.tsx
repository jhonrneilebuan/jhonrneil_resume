import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

interface SectionTransitionProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const directionStyles: Record<Direction, { hidden: string; visible: string }> = {
  up: {
    hidden: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  left: {
    hidden: "opacity-0 -translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  right: {
    hidden: "opacity-0 translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
};

const SectionTransition = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: SectionTransitionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05, rootMargin: "0px 0px -80px 0px" });
  const styles = directionStyles[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out will-change-transform ${
        isVisible ? styles.visible : styles.hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SectionTransition;
