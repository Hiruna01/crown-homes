"use client";

import { useEffect, useRef } from "react";

/**
 * Sunlight from an arched window, cast across the wall.
 * Purely decorative. It drifts on its own and leans slightly toward the
 * pointer; both are switched off when the visitor prefers reduced motion.
 */
export function WindowLight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.style.setProperty("--px", `${(x * 36).toFixed(1)}px`);
      el.style.setProperty("--py", `${(y * 22).toFixed(1)}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={ref} className="light" aria-hidden="true">
      <div className="light-drift">
        <div className="light-window">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
