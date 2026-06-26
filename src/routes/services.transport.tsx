import { createFileRoute } from "@tanstack/react-router";
import { Truck, MapPin, Navigation, Zap, Package, Globe2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/services/transport")({
  head: () => ({
    meta: [
      { title: "Transport Services — Ramotitanico" },
      { name: "description", content: "Transportation planning, logistics, smart mobility, supply chain optimisation, and transport safety consulting." },
      { property: "og:title", content: "Transport Services — Ramotitanico" },
      { property: "og:description", content: "Strategic transport and logistics advisory for governments, operators, and development agencies." },
      { property: "og:url", content: "/services/transport" },
    ],
    links: [{ rel: "canonical", href: "/services/transport" }],
  }),
  component: TransportPage,
});

const services = [
  {
    icon: MapPin,
    title: "Transportation Planning & Strategy",
    desc: "Strategic planning for road, rail, air, and maritime transport networks. We support governments and agencies in developing integrated mobility masterplans that connect communities, reduce congestion, and enable economic growth.",
  },
  {
    icon: Truck,
    title: "Logistics & Freight Management",
    desc: "Optimising freight operations, warehousing, and last-mile delivery networks for efficiency and cost-effectiveness. We advise on hub-and-spoke models, multi-modal logistics, and cross-border freight facilitation.",
  },
  {
    icon: Zap,
    title: "Smart Mobility & Intelligent Transport",
    desc: "Deploying intelligent transport systems, real-time data platforms, and connected infrastructure to modernise urban and intercity mobility. From traffic management to passenger information, we make transport smarter.",
  },
  {
    icon: Navigation,
    title: "Infrastructure Development Advisory",
    desc: "Expert advisory on the planning, financing, procurement, and delivery of transport infrastructure — ports, airports, rail corridors, and road networks. We guide clients from concept through construction to operation.",
  },
  {
    icon: Package,
    title: "Supply Chain Optimisation",
    desc: "End-to-end analysis and redesign of supply chains to eliminate inefficiencies, reduce costs, and improve resilience. We help organisations build supply chains that respond swiftly to demand shifts and disruptions.",
  },
  {
    icon: Globe2,
    title: "Safety, Regulation & Compliance",
    desc: "Supporting transport operators and governments in meeting national and international safety standards, environmental regulations, and sector-specific compliance requirements. We conduct audits, training, and regulatory impact assessments.",
  },
];

function TransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Transport Sector"
        title="Connecting communities. Enabling economic growth."
        description="Our transport practice provides strategic planning, logistics advisory, smart mobility consulting, and infrastructure expertise to governments, operators, and development agencies worldwide."
      />

      <section className="container-page py-20">
        <SectionTitle
          align="center"
          eyebrow="What We Offer"
          title="Six transport services built on global connectivity."
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
            Moving people, goods, and economies forward.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico has contributed to transport and logistics projects spanning major
              urban mobility reforms, regional freight corridor development, and national port
              masterplanning exercises. Our advisors have worked with ministries of transport,
              international financial institutions, and private operators to design and deliver
              transport systems that serve the needs of both economies and communities.
            </p>
            <p>
              We understand that transport infrastructure is more than roads and timetables — it
              is the circulatory system of a functioning society. By combining technical rigour
              with a deep understanding of social and economic context, we help create transport
              systems that are efficient, inclusive, and built to last.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
