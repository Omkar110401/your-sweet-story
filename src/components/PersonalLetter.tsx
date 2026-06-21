import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { FloatingHearts } from "./FloatingHearts";

export function PersonalLetter({ name, fromName }: { name: string; fromName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const letterContent = `Dear ${name},

I've been sitting here for hours trying to write this, and honestly, it's harder than I thought it would be. How do you put into words what someone means to you when there just aren't words big enough?

We met on a screen. Thousands of miles apart, just voices and texts and late night conversations that kept me awake. You became the first person I wanted to talk to when I woke up. The last person I wanted to say goodnight to. You understood me in ways I didn't even understand myself. You made the distance feel smaller, even when it was everything between us.

Every message from you matters. Every call with you is the best part of my day. I fell in love with your heart first, without knowing what it would be like to stand next to you. That kind of love is real in a way that nothing else could be.

This distance is hard. Some days it feels impossible. But then you text me, or we talk, and somehow it all makes sense again. You're worth the wait. You're worth the time zones. You're worth every second of missing you.

Distance taught me something important — it taught me that what we have is unbreakable. Real in a way that doesn't need physical proximity to survive. Real in the way we chose each other every single day, across borders and miles. That kind of love is rare. That kind of love is everything.

I know we're not there yet. I know you're far away right now. But I want you to know that I'm completely, entirely, all-in with you. This is real. You're real. And my feelings for you are as real as anything I've ever known.

All my love,
${fromName}

P.S. - Thank you for being the best part of my days, even from so far away.`;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
      <FloatingHearts count={18} />

      <div className="relative z-10 w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center"
            >
              {/* Envelope */}
              <div className="relative h-64 w-96 max-w-full">
                {/* Envelope body */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-rose/40 to-mauve/20 border-2 border-rose/50 rounded-lg shadow-2xl"
                  initial={{ y: 0 }}
                  animate={{ y: -8 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Envelope flap (closes) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-rose/50 to-rose/40 border-2 border-rose/60 rounded-t-lg origin-top"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)",
                  }}
                  animate={{
                    rotateX: [0, -5, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />

                {/* Text on envelope */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="font-script text-2xl text-burgundy">for you</p>
                  <p className="text-sm text-muted-foreground mt-2">with all my love</p>
                </div>
              </div>

              {/* Open button */}
              <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 rounded-full bg-gradient-to-br from-burgundy via-primary to-mauve px-8 py-3 text-base font-medium text-primary-foreground shadow-lg hover:brightness-110 transition"
              >
                open letter
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              {/* Letter paper */}
              <div className="relative w-full max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-gradient-to-br from-amber-50 via-white to-amber-50 rounded-lg shadow-2xl p-12 border border-amber-200"
                  style={{
                    perspective: "1000px",
                    minHeight: "600px",
                  }}
                >
                  {/* Letter content */}
                  <div className="space-y-6 text-left">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="font-script text-2xl text-burgundy"
                    >
                      {letterContent.split("\n").slice(0, 1)[0]}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="space-y-4"
                    >
                      {letterContent
                        .split("\n")
                        .slice(1)
                        .map((paragraph, idx) => (
                          <p
                            key={idx}
                            className="text-gray-700 leading-relaxed font-serif text-base"
                            style={{
                              fontFamily: "'Georgia', 'Garamond', serif",
                              fontWeight: 400,
                            }}
                          >
                            {paragraph}
                          </p>
                        ))}
                    </motion.div>
                  </div>

                  {/* Signature mark */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mt-8 text-right"
                  >
                    <div className="text-3xl">✨</div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Navigation buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="flex gap-4 mt-10"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-rose bg-card px-6 py-3 text-sm text-muted-foreground hover:bg-rose/30 transition"
                >
                  close
                </button>
                <button
                  onClick={() => navigate({ to: "/propose" })}
                  className="rounded-full bg-gradient-to-br from-burgundy via-primary to-mauve px-8 py-3 text-base font-medium text-primary-foreground shadow-lg hover:brightness-110 transition"
                >
                  continue
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
