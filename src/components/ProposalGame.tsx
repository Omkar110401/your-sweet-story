import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingHearts } from "./FloatingHearts";

const questions = [
  { q: "can i steal a tiny bit of your time?", yes: "always 🤍", emoji: "🌸" },
  { q: "do you feel it too — this little something between us?", yes: "yes, every day 💞", emoji: "💌" },
  { q: "will you let me be the reason you smile, often?", yes: "yes please 🥺", emoji: "🌷" },
  { q: "can i hold your hand through every messy, beautiful day?", yes: "yes, forever 💗", emoji: "🤝" },
  { q: "will you be mine — today, tomorrow, and every forever after?", yes: "YES — a thousand times yes 💍✨", emoji: "💍", final: true },
];

export function ProposalGame({ name, fromName }: { name: string; fromName: string }) {
  const [step, setStep] = useState(0);
  const [noClicks, setNoClicks] = useState(0);
  const [done, setDone] = useState(false);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  if (done) return <FinalScreen name={name} fromName={fromName} />;

  const current = questions[step];
  const yesScale = 1 + Math.min(noClicks, 8) * 0.35 + step * 0.15;
  const noScale = Math.max(0.4, 1 - noClicks * 0.12);

  const onYes = () => {
    if (step === questions.length - 1) {
      setDone(true);
    } else {
      setStep((s) => s + 1);
      setNoClicks(0);
    }
  };

  const onNo = () => {
    setNoClicks((n) => n + 1);
    // dodge: move slightly to a random spot
    const btn = noBtnRef.current;
    if (btn) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 80;
      btn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts count={18} />

      <div className="relative z-10 w-full max-w-2xl text-center">
        <p className="font-script text-2xl text-mauve">a small game, with one right answer</p>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="text-7xl md:text-8xl">{current.emoji}</div>
            <h2
              className={`mx-auto mt-8 max-w-xl font-light text-burgundy ${
                current.final ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"
              }`}
            >
              {current.q}
            </h2>
          </motion.div>
        </AnimatePresence>

        <div className="relative mt-14 flex flex-wrap items-center justify-center gap-6">
          <motion.button
            onClick={onYes}
            animate={{ scale: yesScale }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="rounded-full bg-gradient-to-br from-burgundy via-primary to-mauve px-10 py-5 text-lg font-medium text-primary-foreground shadow-[0_15px_40px_-10px_oklch(0.42_0.09_20/0.55)] transition hover:brightness-110"
          >
            {current.yes}
          </motion.button>

          {!current.final && (
            <button
              ref={noBtnRef}
              onClick={onNo}
              style={{ transform: `scale(${noScale})`, transition: "transform 0.3s ease" }}
              className="rounded-full border border-rose bg-card px-6 py-3 text-sm text-muted-foreground hover:bg-rose/30"
            >
              no
            </button>
          )}
        </div>

        {noClicks > 0 && !current.final && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 font-script text-xl text-mauve"
          >
            {noClicks === 1 && "are you sure? 🥺"}
            {noClicks === 2 && "the no button is getting shy…"}
            {noClicks === 3 && "the yes button is just… better."}
            {noClicks >= 4 && "you know what your heart wants 💞"}
          </motion.p>
        )}
      </div>
    </section>
  );
}

function FinalScreen({ name, fromName }: { name: string; fromName: string }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <FloatingHearts count={50} />

      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.2 }}
        className="relative z-10 text-8xl md:text-9xl"
      >
        💍
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-10 mt-8 font-script text-5xl text-burgundy md:text-7xl"
      >
        she said yes
      </motion.h2>

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
