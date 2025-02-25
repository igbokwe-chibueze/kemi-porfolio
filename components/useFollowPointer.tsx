"use client"
import { useState, useRef, useEffect } from "react";

type Point = {
  x: number;
  y: number;
};

export function useFollowPointer() {
  const [point, setPoint] = useState<Point>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      if (ref.current) {
        const element = ref.current;
        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        setPoint({ x, y });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { point, ref };
}
