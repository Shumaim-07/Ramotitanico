import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Sun, Droplets, Globe2, ShieldCheck, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/services/agriculture")({
  head: () => ({
    meta: [
      { title: "Agriculture Services — Ramotitanico" },
      { name: "description", content: "Sustainable farming, crop management, water resources, agricultural technology, and rural development services for the agriculture sector." },
      { property: "og:title", content: "Agriculture Services — Ramotitanico" },
      { property: "og:description", content: "Expert consulting and training for sustainable agriculture and rural development." },
      { property: "og:url", content: "/services/agriculture" },
    ],
    links: [{ rel: "canonical", href: "/services/agriculture" }],
  }),
  component: AgriculturePage,
});

const services = [
  {
    icon: Leaf,
    title: "Sustainable Farming Practices",
    desc: "Advisory on transitioning to environmentally responsible farming methods that preserve soil health, reduce chemical inputs, and maintain long-term productivity. We support smallholders and large agribusinesses alike.",
  },
  {
    icon: Sun,
    title: "Crop Management & Yield Optimisation",
    desc: "Data-driven crop planning, rotation strategies, and yield optimisation programmes. We combine agronomy expertise with modern analytics to help farmers make informed decisions across every growing season.",
  },
  {
    icon: Droplets,
    title: "Water Resource Management",
    desc: "Design and implementation of irrigation systems, water harvesting techniques, and conservation strategies. Our specialists work in water-scarce and flood-prone environments to build climate-resilient water infrastructure.",
  },
  {
    icon: Lightbulb,
    title: "Agricultural Technology & Innovation",
    desc: "Introducing precision farming tools, remote sensing, drone technology, and smart sensors to agricultural operations. We guide the adoption of agri-tech solutions that are practical, cost-effective, and locally appropriate.",
  },
  {
    icon: Globe2,
    title: "Food Systems & Value Chain Development",
    desc: "Strengthening the links from farm to consumer through better market access, post-harvest handling, processing, and distribution infrastructure. We design value chain programmes that improve incomes and reduce food loss.",
  },
  {
    icon: ShieldCheck,
    title: "Rural Development & Community Programmes",
    desc: "Community-centred initiatives that combine agricultural productivity with broader rural development goals — education, health, financial inclusion, and governance. Designed to empower farmers and transform rural economies.",
  },
];

function AgriculturePage() {
  return (
    <>
      <PageHero
        eyebrow="Agriculture Sector"
        title="Cultivating growth, sustainability, and food security."
        description="Our agriculture practice combines agronomy, technology, and community development to support sustainable farming systems, productive value chains, and thriving rural economies."
      />

      <section className="container-page py-20">
        <SectionTitle
          align="center"
          eyebrow="What We Offer"
          title="Six agriculture services rooted in sustainable practice."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-7 w-7" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-primary">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page max-w-4xl">
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Impact
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
            From field to market — transforming agricultural communities.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico has engaged with agricultural development programmes across sub-Saharan
              Africa, South Asia, and Latin America, supporting smallholder farmers, agribusiness
              enterprises, and national food security programmes. Our work spans everything from
              soil health restoration in drought-affected regions to digital agriculture
              deployments in rapidly modernising farming communities.
            </p>
            <p>
              We believe that sustainable agriculture is inseparable from sustainable development.
              By linking productivity with environmental stewardship and social equity, we help
              create food systems that nourish communities today without compromising the land
              and water resources future generations will depend upon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
