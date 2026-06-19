import { motion } from "framer-motion";

const events = [
  {
    date: "the beginning",
    title: "we matched on OkCupid",
    body: "a small swipe, a quiet hello, and the universe nudged me towards you.",
  },
  {
    date: "2 June 2026",
    title: "our first whatsapp",
    body: "you replied, and somehow my whole day got a little warmer.",
  },
  {
    date: "14 June 2026",
    title: "a movie, together",
    body: "different rooms, same screen on instagram — and it still felt like we were sitting side by side.",
  },
  {
    date: "15 June 2026",
    title: "the first reel you sent me",
    body: "tiny moment, but i saved it. that's when i knew you were thinking of me too.",
  },
  {
    date: "today",
    title: "this little website",
    body: "made entirely for you, on the day you graduated.",
  },
  {
    date: "∞",
    title: "everything after this",
    body: "endless mornings, countless silly fights, slow dances in the kitchen, and a forever i'd like to spend with you.",
  },
];

export function Timeline() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-script text-3xl text-mauve">our little story</p>
        <h2 className="mt-3 text-5xl font-light text-burgundy md:text-6xl">a timeline of us</h2>
      </div>

      <div className="relative mx-auto mt-20 max-w-2xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-rose to-transparent md:left-1/2" />

        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 * i }}
            className={`relative mb-16 flex items-start gap-6 md:mb-20 md:gap-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
              <div className="relative">
                <div className="h-3 w-3 rounded-full bg-burgundy" />
                <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-burgundy/40" />
              </div>
            </div>

            <div
              className={`ml-12 md:ml-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              }`}
            >
              <p className="font-script text-xl text-mauve">{e.date}</p>
              <h3 className="mt-1 text-2xl font-medium text-burgundy md:text-3xl">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {e.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
