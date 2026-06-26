import { createFileRoute } from "@tanstack/react-router";
import { Award, Globe2, Leaf, Lightbulb, ShieldCheck, Users2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";
import lisbon from "@/assets/lisbon.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ramotitanico" },
      { name: "description", content: "Our mission, vision, and the values that drive Ramotitanico's global academic work from Lisbon." },
      { property: "og:title", content: "About — Ramotitanico" },
      { property: "og:description", content: "Mission, vision, and core values of Ramotitanico — a Portugal-based academic organization." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We champion original thinking and rigorous experimentation across disciplines." },
  { icon: ShieldCheck, title: "Integrity", desc: "Our editorial, financial, and academic practices are governed by transparent standards." },
  { icon: Leaf, title: "Sustainability", desc: "Programmes are designed for lasting institutional and environmental impact." },
  { icon: Award, title: "Excellence", desc: "We benchmark our work against the highest international academic conventions." },
  { icon: Users2, title: "Collaboration", desc: "We convene diverse voices — disciplines, geographies, generations — around shared questions." },
  { icon: Globe2, title: "Global Outlook", desc: "We treat knowledge as a planetary inheritance, not a regional commodity." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ramotitanico"
        title="Education, research, and global collaboration — built from Lisbon."
        description="We are a multidisciplinary organization connecting institutions, scholars, and policy communities through rigorous programmes that travel across borders."
      />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-5 text-foreground/85">
            <SectionTitle eyebrow="Who We Are" title="A Portugal-based global organization." />
            <p className="text-lg leading-relaxed">
              Ramotitanico operates from Lisbon as a multidisciplinary institution committed to
              the advancement of education, research, innovation, sustainability, and global
              collaboration. Our network spans universities, research centres, NGOs, and
              publishers across Europe, Asia, Africa, and the Americas.
            </p>
            <p className="leading-relaxed">
              We were established to address a structural gap in international academic life:
              the need for credible, professionally managed platforms that connect rigorous
              scholarship with the institutions, policymakers, and communities that need it.
              Today, we deliver conferences, publications, consultancy, training, and exchange
              programmes that reflect that founding ambition.
            </p>
          </div>
          <img
            src={lisbon}
            alt="Lisbon, Portugal at golden hour"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elevated)]"
          />
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/80">
              <span className="rounded-full bg-accent-soft px-3 py-1 text-accent-foreground">Our Vision</span>
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-primary">
              A connected scholarly world that serves society.
            </h3>
            <p className="mt-3 leading-relaxed text-foreground/80">
              We envision an international academic ecosystem in which knowledge moves freely
              across borders, disciplines, and sectors — and in which scholarship is held
              accountable to the societies that sustain it.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/80">
              <span className="rounded-full bg-accent-soft px-3 py-1 text-accent-foreground">Our Mission</span>
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-primary">
              Build platforms where rigorous knowledge meets practice.
            </h3>
            <p className="mt-3 leading-relaxed text-foreground/80">
              We design and operate conferences, publications, training programmes, and
              partnerships that elevate scholarship and turn it into institutional, policy, and
              cultural impact.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionTitle
          align="center"
          eyebrow="Core Values"
          title="The principles that guide every programme."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent-soft text-accent-foreground">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page max-w-4xl">
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Global Impact
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
            From a Lisbon office to a worldwide academic community.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Across more than forty countries, Ramotitanico has supported universities in
              redesigning curricula, organised international conferences with hundreds of
              delegates, edited proceedings indexed by leading academic databases, and
              facilitated mobility for early-career researchers historically excluded from
              international circuits.
            </p>
            <p>
              Our impact is measured not in headlines but in the quiet, compounding work of
              improved courses, sharper research, stronger institutions, and lasting
              partnerships. We are proud to be a small but determined contributor to the
              international academic commons.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
