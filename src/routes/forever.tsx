import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import { FloatingHearts } from "@/components/FloatingHearts";

export const Route = createFileRoute("/forever")({
  head: () => ({
    meta: [
      { title: "Forever 💍" },
      { name: "description", content: "She said yes." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ForeverPage,
});

function ForeverPage() {
  const name = "Elora";
  const fromName = "Omkar";
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <FloatingHearts count={36} />
      <Balloons count={24} />
      {showConfetti && <Confetti count={140} />}

      <motion.div
        initial={{ scale: 0, rotate: -25 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 11, delay: 0.2 }}
        className="relative z-10 text-8xl md:text-9xl"
      >
        💍
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-10 mt-8 font-script text-5xl text-burgundy md:text-7xl"
      >
        she said yes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
      >
        {name}, my softest, smartest, most extraordinary person — i promise to keep choosing you,
        on the loud days and the quiet ones. forever sounds about right.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 mt-12 font-script text-3xl text-mauve"
      >
        yours, always —
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 1 }}
        className="relative z-10 mt-2 font-display text-5xl text-burgundy md:text-6xl"
      >
        {fromName}
      </motion.p>
    </section>
  );
}

function Balloons({ count }: { count: number }) {
  const balloons = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const colors = ["#e8c1c5", "#c98a8a", "#f4cccc", "#b76e79", "#fde2e4", "#7a3b3b"];
        return {
          i,
          left: Math.random() * 100,
          delay: Math.random() * 8,
          duration: 9 + Math.random() * 8,
          size: 36 + Math.random() * 32,
          color: colors[i % colors.length],
          sway: 3 + Math.random() * 5,
        };
      }),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((b) => (
        <div
          key={b.i}
          className="balloon-float absolute bottom-[-15vh]"
          style={{
            left: `${b.left}%`,
            animationDuration: `${b.duration}s, ${b.sway}s`,
            animationDelay: `${-b.delay}s, ${-b.delay}s`,
          }}
        >
          <svg width={b.size} height={b.size * 1.6} viewBox="0 0 40 64">
            <ellipse
              cx="20"
              cy="22"
              rx="16"
              ry="20"
              fill={b.color}
              opacity="0.92"
            />
            <ellipse cx="15" cy="16" rx="3" ry="5" fill="white" opacity="0.5" />
            <polygon points="17,42 23,42 20,46" fill={b.color} />
            <path
              d="M20 46 Q22 52 18 56 Q22 60 20 64"
              stroke={b.color}
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

function Confetti({ count }: { count: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const colors = ["#c98a8a", "#e8c1c5", "#b76e79", "#7a3b3b", "#f4cccc", "#fff5f5"];
        return {
          i,
          left: Math.random() * 100,
          delay: Math.random() * 0.6,
          duration: 2.4 + Math.random() * 2.2,
          size: 6 + Math.random() * 8,
          color: colors[i % colors.length],
          rotate: Math.random() * 360,
          shape: i % 3,
        };
      }),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.i}
          className="confetti-fall absolute top-[-10vh]"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          {p.shape === 0 ? (
            <div style={{ width: p.size, height: p.size * 0.4, background: p.color }} />
          ) : p.shape === 1 ? (
            <div
              style={{
                width: p.size,
                height: p.size,
                background: p.color,
                borderRadius: "9999px",
              }}
            />
          ) : (
            <svg width={p.size + 4} height={p.size + 4} viewBox="0 0 16 16">
              <path
                fill={p.color}
                d="M8 14s-5.5-3.6-5.5-7.6C2.5 4 4.3 2.5 6 2.5c1.2 0 2.2.7 2 1.9.2-1.2 1.2-1.9 2.4-1.9 1.7 0 3.6 1.5 3.6 3.9 0 4-5.5 7.6-5.5 7.6z"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
