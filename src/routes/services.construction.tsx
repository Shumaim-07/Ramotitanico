import { createFileRoute } from "@tanstack/react-router";
import { Building2, Hammer, Wrench, Layers, ShieldCheck, Ruler } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/services/construction")({
  head: () => ({
    meta: [
      { title: "Construction Services — Ramotitanico" },
      { name: "description", content: "Project management, engineering consultancy, sustainable construction, and infrastructure advisory for the built environment sector." },
      { property: "og:title", content: "Construction Services — Ramotitanico" },
      { property: "og:description", content: "Expert advisory and training services for the construction and infrastructure sector." },
      { property: "og:url", content: "/services/construction" },
    ],
    links: [{ rel: "canonical", href: "/services/construction" }],
  }),
  component: ConstructionPage,
});

const services = [
  {
    icon: Building2,
    title: "Project Management & Planning",
    desc: "End-to-end management of construction projects from feasibility to handover. We deploy internationally certified project managers who align scope, schedule, and budget with client objectives and local regulations.",
  },
  {
    icon: Layers,
    title: "Infrastructure Design Advisory",
    desc: "Strategic advisory for the design and planning of civil, transport, and utility infrastructure. We bring comparative international experience to bear on local challenges — from urban master plans to rural connectivity projects.",
  },
  {
    icon: Wrench,
    title: "Engineering Consultancy",
    desc: "Technical advisory spanning structural, civil, mechanical, and electrical engineering disciplines. Our consultants support both new-build projects and the rehabilitation and upgrading of existing built assets.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Standards & Compliance",
    desc: "Ensuring construction operations meet national and international safety codes, environmental regulations, and quality standards. We conduct audits, develop compliance frameworks, and train site management teams.",
  },
  {
    icon: Hammer,
    title: "Workforce Skills & Training",
    desc: "Vocational and professional development programmes for construction trades, site supervisors, and project managers. Designed to close skills gaps, improve productivity, and align the workforce with modern construction methods.",
  },
  {
    icon: Ruler,
    title: "Sustainable Construction Practices",
    desc: "Integration of green building principles, circular economy approaches, and low-carbon materials into construction programmes. We guide clients toward sustainable certifications and climate-resilient design standards.",
  },
];

function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Construction Sector"
        title="Building resilient infrastructure for a changing world."
        description="Our construction practice delivers project management, engineering advisory, workforce training, and sustainability consulting to governments, developers, and contractors worldwide."
      />

      <section className="container-page py-20">
        <SectionTitle
          align="center"
          eyebrow="What We Offer"
          title="Six construction services built on technical rigour."
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
            Delivering infrastructure that stands the test of time.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico has supported construction and infrastructure projects across
              multiple continents, working with government agencies, development banks, and
              private developers. Our advisory has guided major public infrastructure
              programmes, urban regeneration schemes, and large-scale commercial developments
              with total project values exceeding hundreds of millions of euros.
            </p>
            <p>
              We bring international standards of quality and safety to every engagement,
              while remaining sensitive to local context, community needs, and environmental
              responsibilities. Our goal is infrastructure that serves people well — today
              and for generations to come.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
