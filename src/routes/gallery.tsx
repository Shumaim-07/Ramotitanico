import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ramotitanico" },
      { name: "description", content: "Photographs from Ramotitanico conferences, workshops, cultural events, and certificate ceremonies." },
      { property: "og:title", content: "Gallery — Ramotitanico" },
      { property: "og:description", content: "A visual record of our international academic programmes." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

interface Item {
  category: string;
  caption: string;
  // Unsplash source URL — public CDN, no key needed
  src: string;
}

const items: Item[] = [
  { category: "Conferences", caption: "Plenary session, Lisbon 2025", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80" },
  { category: "Conferences", caption: "Keynote address", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80" },
  { category: "Workshops", caption: "Research methods workshop", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" },
  { category: "Workshops", caption: "Doctoral training session", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80" },
  { category: "Cultural", caption: "Cultural exchange evening", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80" },
  { category: "Cultural", caption: "Networking reception", src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80" },
  { category: "Certificates", caption: "Award ceremony, 2024", src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80" },
  { category: "Certificates", caption: "Closing certificates", src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1200&q=80" },
];

const categories = ["All", "Conferences", "Workshops", "Cultural", "Certificates"] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from our programmes."
        description="A visual record of conferences, workshops, cultural exchanges, and certificate ceremonies."
      />

      <section className="container-page py-20">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-foreground/70 hover:bg-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it, i) => (
            <button
              key={it.src}
              onClick={() => setLightbox(it)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elevated)]"
              style={{ aspectRatio: i % 5 === 0 ? "4/5" : "4/3" }}
            >
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-4">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-accent">{it.category}</div>
                <div className="mt-0.5 text-sm font-medium text-primary-foreground">{it.caption}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-primary/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-primary"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} className="max-h-[80vh] w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-primary-foreground/80">{lightbox.caption}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
