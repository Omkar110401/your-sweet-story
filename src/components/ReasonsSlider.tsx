import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  {
    icon: "🎓",
    title: "you graduated today",
    body: "the gown, the tassel, the years of late nights — you did it. and i couldn't be more in awe.",
  },
  {
    icon: "🏆",
    title: "your thesis won best award",
    body: "of every single submission, yours stood at the top. brilliant, original, unmistakably you.",
  },
  {
    icon: "📚",
    title: "you are a topper, always",
    body: "discipline disguised as effortless. you make hard things look gentle.",
  },
  {
    icon: "🌷",
    title: "the kindness in your voice",
    body: "you speak like you actually mean it. that's rarer than people realise.",
  },
  {
    icon: "🌙",
    title: "how you carry your softness",
    body: "soft is not weak. soft is strong enough to stay soft in a world that isn't.",
  },
  {
    icon: "✨",
    title: "your curiosity",
    body: "the questions you ask, the things you notice — you make ordinary moments shimmer.",
  },
  {
    icon: "🤍",
    title: "the way you love",
    body: "patient, attentive, real. you love people in a way that quietly changes them.",
  },
];

export function ReasonsSlider() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reasons.length);
  const prev = () => setI((p) => (p - 1 + reasons.length) % reasons.length);

  const r = reasons[i];

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-script text-3xl text-mauve">why i am proud of you</p>
        <h2 className="mt-3 text-5xl font-light text-burgundy md:text-6xl">
          seven of a thousand reasons
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-2xl">
        <div className="relative h-[340px] overflow-hidden rounded-3xl bg-gradient-to-br from-cream via-rose/30 to-mauve/20 p-1 shadow-[0_20px_60px_-20px_oklch(0.42_0.09_20/0.35)] ring-1 ring-rose/40">
          <div className="relative h-full w-full rounded-[22px] bg-card/80 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center md:px-14"
              >
                <div className="text-6xl md:text-7xl">{r.icon}</div>
                <h3 className="mt-6 text-3xl font-medium text-burgundy md:text-4xl">{r.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  {r.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="previous reason"
            className="grid h-11 w-11 place-items-center rounded-full border border-rose bg-card text-burgundy transition hover:bg-rose/40"
          >
            ←
          </button>

          <div className="flex gap-2">
            {reasons.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`reason ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-burgundy" : "w-2 bg-rose"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="next reason"
            className="grid h-11 w-11 place-items-center rounded-full border border-rose bg-card text-burgundy transition hover:bg-rose/40"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
