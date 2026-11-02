import { createFileRoute } from "@tanstack/react-router";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export const Route = createFileRoute("/las-mer")({
  head: () => ({
    meta: [
      { title: "Läs mer – Uppdragsbanken Helsingborg" },
      { name: "description", content: "Information om tjänsterna i Uppdragsbanken Helsingborg." },
      { property: "og:title", content: "Läs mer – Uppdragsbanken Helsingborg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Information om tjänsterna i Uppdragsbanken Helsingborg." },
    ],
  }),
  component: ReadMorePage,
});

function ReadMorePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:pt-10">
      <PageBreadcrumbs current="Läs mer" />
      <h1 className="text-4xl md:text-5xl">Läs mer</h1>
      {/* Innehåll om tjänsterna läggs till här senare. */}
    </section>
  );
}
