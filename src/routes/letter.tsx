import { createFileRoute } from "@tanstack/react-router";
import { PersonalLetter } from "@/components/PersonalLetter";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "A letter for you 💌" },
      { name: "description", content: "A personal letter, written with love." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <PersonalLetter name="Elora" fromName="Omkar" />,
});
