import { createFileRoute } from "@tanstack/react-router";
import { ProposalGame } from "@/components/ProposalGame";

export const Route = createFileRoute("/propose")({
  head: () => ({
    meta: [
      { title: "A little question 💌" },
      { name: "description", content: "One small game, with one right answer." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <ProposalGame name="Elora" fromName="Omkar" />,
});
