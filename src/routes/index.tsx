import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { PhotoCollage } from "@/components/PhotoCollage";
import { ReasonsSlider } from "@/components/ReasonsSlider";
import { ProposalGame } from "@/components/ProposalGame";

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
      <ProposalGame name="Elora" fromName="Omkar" />
    </main>
  );
}
