import { useEffect, useMemo, useState } from "react";

export function FloatingHearts({ count = 28 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 12 + Math.random() * 32;
        const left = Math.random() * 100;
        const duration = 12 + Math.random() * 18;
        const delay = -Math.random() * 30;
        const driftDur = 4 + Math.random() * 6;
        const opacity = 0.35 + Math.random() * 0.5;
        const hue = ["#c98a8a", "#e8c1c5", "#b76e79", "#f4cccc", "#7a3b3b"][i % 5];
        return { size, left, duration, delay, driftDur, opacity, hue, i };
      }),
    [count],
  );

  if (!mounted) return <div className="pointer-events-none absolute inset-0" />;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <svg
          key={h.i}
          className="heart-float"
          viewBox="0 0 32 32"
          width={h.size}
          height={h.size}
          style={{
            left: `${h.left}%`,
            color: h.hue,
            opacity: h.opacity,
            animationDuration: `${h.duration}s, ${h.driftDur}s`,
            animationDelay: `${h.delay}s, ${h.delay}s`,
          }}
        >
          <path
            fill="currentColor"
            d="M16 28s-11-7.2-11-15.2C5 8 8.5 5 12.2 5c2.3 0 4.3 1.3 3.8 3.7C16.5 6.3 18.5 5 20.8 5 24.5 5 28 8 28 12.8 28 20.8 16 28 16 28z"
          />
        </svg>
      ))}
    </div>
  );
}
