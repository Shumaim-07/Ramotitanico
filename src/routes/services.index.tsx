import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Calendar, Compass, GraduationCap, Globe, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Ramotitanico" },
      { name: "description", content: "Educational consultancy, conferences, research support, training, exchange, and international collaboration services." },
      { property: "og:title", content: "Services — Ramotitanico" },
      { property: "og:description", content: "Six interconnected service areas serving universities, researchers, and institutions worldwide." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: GraduationCap,
    title: "Educational Consultancy",
    desc: "Strategic advisory engagements with universities, ministries, and educational foundations. Curriculum review, programme accreditation support, governance reform, and institutional development planning grounded in comparative international practice.",
  },
  {
    icon: Calendar,
    title: "Conference & Event Management",
    desc: "End-to-end orchestration of international academic conferences, symposia, executive seminars, and policy roundtables. We handle scientific programming, peer review, logistics, communications, and post-event proceedings.",
  },
  {
    icon: BookOpen,
    title: "Research Support & Publication Assistance",
    desc: "Methodological consultation, manuscript development, editorial review, and pathways to publication. We assist authors in placing work with reputable indexed journals and edited volumes within our network.",
  },
  {
    icon: Compass,
    title: "Professional Training Programs",
    desc: "Certified short courses and intensive academies for educators, researchers, administrators, and professionals. Topics span pedagogy, research methods, scholarly publishing, leadership, and digital scholarship.",
  },
  {
    icon: Globe,
    title: "Cultural & Academic Exchange Programs",
    desc: "Bilateral and multilateral mobility frameworks connecting students, faculty, and practitioners across institutions. Curated placements, cultural immersion, and structured academic outcomes.",
  },
  {
    icon: Handshake,
    title: "International Collaboration Services",
    desc: "Partnership facilitation between universities, research centres, NGOs, and policy bodies. MoU drafting, joint programme design, consortia formation, and coordination of multi-country research initiatives.",
  },
];

const sectors = [
  { to: "/services/education", label: "Education", desc: "Academic programmes & institutional development" },
  { to: "/services/construction", label: "Construction", desc: "Infrastructure & engineering advisory" },
  { to: "/services/agriculture", label: "Agriculture", desc: "Sustainable farming & rural development" },
  { to: "/services/transport", label: "Transport", desc: "Logistics, mobility & supply chain" },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Six practice areas. One institutional standard."
        description="Each service area is staffed by senior practitioners and supported by our global advisory network."
      />

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2">
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

      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
              Sector Expertise
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-primary sm:text-4xl">
              Deep expertise across four sectors.
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              Beyond our core practice areas, we bring specialized knowledge to key global sectors.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] hover:border-primary/30"
              >
                <h3 className="font-display text-lg font-semibold text-primary group-hover:text-accent-foreground transition-colors">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-block text-xs font-semibold text-accent-foreground uppercase tracking-[0.15em]">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
