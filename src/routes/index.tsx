import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { PhotoCollage } from "@/components/PhotoCollage";
import { ReasonsSlider } from "@/components/ReasonsSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Elora 💌" },
      { name: "description", content: "A little something, made just for you." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Hero name="Elora" />
      <Timeline />
      <PhotoCollage />
      <ReasonsSlider />

      <section className="relative px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-script text-3xl text-mauve">one last thing…</p>
          <h2 className="mx-auto mt-4 max-w-xl text-4xl font-light text-burgundy md:text-5xl">
            there's a little question waiting for you
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground md:text-base">
            take a breath. when you're ready, open it.
          </p>

          <Link
            to="/letter"
            className="mt-10 inline-block rounded-full bg-gradient-to-br from-burgundy via-primary to-mauve px-10 py-5 text-lg font-medium text-primary-foreground shadow-[0_15px_40px_-10px_oklch(0.42_0.09_20/0.55)] transition hover:brightness-110"
          >
            open my letter 💌
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
