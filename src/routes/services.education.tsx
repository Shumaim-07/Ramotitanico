import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Users2, Award, Lightbulb, Globe2 } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/services/education")({
  head: () => ({
    meta: [
      { title: "Education Services — Ramotitanico" },
      { name: "description", content: "Academic programme design, faculty development, accreditation support, and international partnerships for educational institutions." },
      { property: "og:title", content: "Education Services — Ramotitanico" },
      { property: "og:description", content: "Comprehensive education sector services from curriculum design to international academic partnerships." },
      { property: "og:url", content: "/services/education" },
    ],
    links: [{ rel: "canonical", href: "/services/education" }],
  }),
  component: EducationPage,
});

const services = [
  {
    icon: GraduationCap,
    title: "Academic Programme Design",
    desc: "Designing curricula and degree programmes aligned with international quality standards and labour market needs. We work with universities and ministries to create structured, outcomes-based academic pathways.",
  },
  {
    icon: BookOpen,
    title: "Curriculum Development",
    desc: "Evidence-based curriculum frameworks for primary, secondary, and higher education. We integrate contemporary pedagogical research with practical institutional constraints to produce workable, effective syllabi.",
  },
  {
    icon: Users2,
    title: "Faculty & Staff Development",
    desc: "Capacity-building programmes for academic staff covering modern teaching methodologies, research skills, scholarly publishing, and institutional leadership. Delivered as workshops, mentoring, or structured academies.",
  },
  {
    icon: Award,
    title: "Institutional Accreditation Support",
    desc: "End-to-end guidance through national and international accreditation processes. We assist institutions in meeting the documentation, self-evaluation, and quality assurance requirements of leading accreditation bodies.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation Ecosystems",
    desc: "Establishing and strengthening research centres, innovation hubs, and knowledge-transfer offices within universities. We connect institutions with funding sources, industry partners, and international research networks.",
  },
  {
    icon: Globe2,
    title: "International Academic Partnerships",
    desc: "Facilitating bilateral and multilateral agreements between educational institutions across borders. From student exchange frameworks to joint degree programmes, we design and coordinate lasting academic alliances.",
  },
];

function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education Sector"
        title="Empowering institutions to deliver world-class education."
        description="From curriculum design to international partnerships, our education practice supports universities, schools, and governments in building rigorous, inclusive learning systems."
      />

      <section className="container-page py-20">
        <SectionTitle
          align="center"
          eyebrow="What We Offer"
          title="Six education services built on academic excellence."
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
            Shaping the future of education across four continents.
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/80 leading-relaxed">
            <p>
              Ramotitanico has partnered with universities, ministries of education, and
              international agencies across Europe, Africa, Asia, and the Americas. Our
              education engagements have redefined curricula for tens of thousands of students,
              trained hundreds of educators, and guided institutions through accreditation
              processes that opened doors to international recognition.
            </p>
            <p>
              We believe that quality education is the most enduring investment any society can
              make. Every programme we design, every faculty member we train, and every
              partnership we forge is a small step toward a more connected and equitable
              global academic community.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
