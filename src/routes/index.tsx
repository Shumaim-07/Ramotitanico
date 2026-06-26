import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Compass,
  GraduationCap,
  Globe,
  Handshake,
  Microscope,
  Quote,
  Star,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-conference.jpg";
import collabImage from "@/assets/collaboration.jpg";
import { SectionTitle } from "@/components/ui/section-title";
import { StatCounter } from "@/components/ui/stat-counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramotitanico — Education, Research & Global Collaboration" },
      {
        name: "description",
        content:
          "Portugal-based multidisciplinary organization advancing education, research, innovation, and global academic collaboration.",
      },
      { property: "og:title", content: "Ramotitanico — Education, Research & Global Collaboration" },
      {
        property: "og:description",
        content:
          "Portugal-based multidisciplinary organization advancing education, research, innovation, and global academic collaboration.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: GraduationCap, title: "Educational Consultancy", desc: "Strategic advisory for universities, ministries, and institutions modernising curricula and academic governance." },
  { icon: Calendar, title: "Conference & Event Management", desc: "End-to-end orchestration of international academic conferences, symposia, and policy roundtables." },
  { icon: BookOpen, title: "Research & Publication Support", desc: "Methodological guidance, editorial review, indexing and dissemination across reputable academic channels." },
  { icon: Compass, title: "Professional Training", desc: "Certified programmes for educators, researchers, and administrators across emerging and established disciplines." },
  { icon: Globe, title: "Academic Exchange", desc: "Bilateral cultural and academic mobility frameworks connecting institutions across continents." },
  { icon: Handshake, title: "International Collaboration", desc: "Partnership facilitation between universities, NGOs, research centres, and policy bodies worldwide." },
];

const stats = [
  { value: "42+", label: "Countries Engaged" },
  { value: "120+", label: "Events Hosted" },
  { value: "300+", label: "Institutional Partners" },
  { value: "85+", label: "Publications" },
];

const testimonials = [
  {
    quote:
      "Ramotitanico's editorial rigour and global reach gave our research the platform it deserved. A genuinely international scholarly partner.",
    name: "Prof. Helena Vasques",
    role: "Faculty of Social Sciences, Coimbra",
  },
  {
    quote:
      "Their conference programme is exceptionally well-curated. Substantive panels, serious participants, real outcomes.",
    name: "Dr. Anand Mehta",
    role: "Centre for Policy Research, New Delhi",
  },
  {
    quote:
      "A rare organisation that combines academic seriousness with logistical excellence. We have collaborated three years running.",
    name: "Dr. Margarethe Kohl",
    role: "Institut für Bildungsforschung, Berlin",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.07 260 / 0.92), oklch(0.28 0.08 260 / 0.78))",
          }}
        />
        <div className="container-page relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Lisbon · Portugal · Worldwide
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Empowering Education, Innovation & Global Collaboration
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Ramotitanico is a Portugal-based multidisciplinary organization advancing
              education, research, sustainability, and international academic cooperation —
              building bridges between scholars, institutions, and societies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/partnerships"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="About Ramotitanico"
              title="A global institution rooted in Portuguese academic tradition."
              description="From our headquarters in Lisbon, we coordinate a worldwide network of scholars, practitioners, and institutions committed to advancing knowledge in service of society. Our work bridges disciplines, geographies, and generations."
            />
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={collabImage}
              alt="Researchers collaborating in a library"
              width={1600}
              height={1000}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elevated)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-accent p-5 text-accent-foreground shadow-lg sm:block">
              <div className="font-display text-3xl font-semibold">15+</div>
              <div className="text-xs font-medium uppercase tracking-wider">Years of Practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-page">
          <SectionTitle
            align="center"
            eyebrow="What We Do"
            title="Services that strengthen institutions and scholars."
            description="Six interconnected practice areas, delivered with academic rigour and operational discipline."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page py-20">
        <SectionTitle
          align="center"
          eyebrow="Our Reach"
          title="A measurable global footprint."
        />
        <div className="mt-12">
          <StatCounter stats={stats} />
        </div>
      </section>

      {/* Featured Conference */}
      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Featured Conference · 27–28 June 2026
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
              International Conference on Education, Research & Sustainable Innovation
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Lisbon hosts the 2026 edition of our flagship interdisciplinary conference. Scholars,
              policymakers, and practitioners convene for two days of plenaries, panels, and
              published proceedings.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:brightness-95"
              >
                View conference <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold hover:bg-primary-foreground/10"
              >
                Call for Papers
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              { icon: Users, label: "500+ Delegates" },
              { icon: Globe, label: "40+ Countries" },
              { icon: Microscope, label: "200+ Papers" },
              { icon: BookOpen, label: "Indexed Proceedings" },
            ].map((b) => (
              <div key={b.label} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5">
                <b.icon className="h-6 w-6 text-accent" />
                <div className="mt-3 font-semibold">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20 sm:py-28">
        <SectionTitle
          align="center"
          eyebrow="Voices from Our Network"
          title="Trusted by scholars across continents."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <Quote className="h-7 w-7 text-accent" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
                <div className="mt-2 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
