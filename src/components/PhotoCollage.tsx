import { motion } from "framer-motion";

// Bento-style collage. Each tile holds /photos/N.png (user will replace).
const tiles = [
  { i: 1, className: "col-span-2 row-span-2", rotate: -2 },
  { i: 2, className: "col-span-1 row-span-1", rotate: 3 },
  { i: 3, className: "col-span-1 row-span-2", rotate: -1 },
  { i: 4, className: "col-span-1 row-span-1", rotate: 2 },
  { i: 5, className: "col-span-2 row-span-1", rotate: -3 },
  { i: 6, className: "col-span-1 row-span-2", rotate: 1 },
  { i: 7, className: "col-span-1 row-span-1", rotate: -2 },
  { i: 8, className: "col-span-2 row-span-1", rotate: 2 },
  { i: 9, className: "col-span-1 row-span-1", rotate: -1 },
  { i: 10, className: "col-span-1 row-span-1", rotate: 3 },
  { i: 11, className: "col-span-2 row-span-2", rotate: -2 },
  { i: 12, className: "col-span-1 row-span-1", rotate: 2 },
  { i: 13, className: "col-span-1 row-span-1", rotate: -3 },
];

export function PhotoCollage() {
  return (
    <section className="relative px-4 py-32 md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-script text-3xl text-mauve">a wall of you</p>
        <h2 className="mt-3 text-5xl font-light text-burgundy md:text-6xl">
          every frame, a favourite
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
          a tiny gallery — pinned with love, slightly crooked, just like us.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl auto-rows-[140px] grid-cols-4 gap-4 md:auto-rows-[180px] md:grid-cols-6 md:gap-6">
        {tiles.map((t, idx) => (
          <motion.figure
            key={t.i}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: t.rotate }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: idx * 0.05 }}
            whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
            className={`group relative overflow-hidden rounded-2xl bg-card shadow-[0_10px_40px_-10px_oklch(0.42_0.09_20/0.25)] ring-1 ring-rose/40 ${t.className}`}
          >
            <img
              src={`/photos/${t.i}.png`}
              alt={`memory ${t.i}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
