import { motion } from "framer-motion";
import { FloatingHearts } from "./FloatingHearts";

export function Hero({ name }: { name: string }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <FloatingHearts count={32} />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="font-script text-2xl text-mauve md:text-3xl"
      >
        for the one with the soft heart
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 text-7xl font-light text-gradient-rose md:text-[10rem]"
        style={{ lineHeight: 0.95 }}
      >
        {name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-burgundy/60 to-transparent"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.8 }}
        className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        scroll, slowly — this is for you, and only you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.4, duration: 1 },
          y: { delay: 2.6, duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 text-burgundy/70"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
