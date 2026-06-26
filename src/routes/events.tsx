import { createFileRoute } from "@tanstack/react-router";
import { Award, CalendarCheck, FileCheck2, FileText, Globe, Mic2, Network, Send } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Conferences — Ramotitanico" },
      { name: "description", content: "Featured international conference, call for papers, and a worldwide programme of scholarly events." },
      { property: "og:title", content: "Events & Conferences — Ramotitanico" },
      { property: "og:description", content: "International Conference on Education, Research & Sustainable Innovation — 27–28 June 2026." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "International Conference on Education, Research & Sustainable Innovation 2026",
          startDate: "2026-06-27",
          endDate: "2026-06-28",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Lisbon, Portugal",
            address: { "@type": "PostalAddress", addressLocality: "Lisbon", addressCountry: "PT" },
          },
          organizer: { "@type": "Organization", name: "Ramotitanico" },
        }),
      },
    ],
  }),
  component: EventsPage,
});

const timeline = [
  { date: "15 February 2026", title: "Abstract Submission Opens", desc: "Authors submit 300-word abstracts via the conference portal.", icon: Send },
  { date: "30 March 2026", title: "Acceptance Notifications", desc: "Programme committee returns peer-reviewed decisions with feedback.", icon: FileCheck2 },
  { date: "15 May 2026", title: "Full Paper Submission", desc: "Accepted contributors submit camera-ready full papers for proceedings.", icon: FileText },
  { date: "27–28 June 2026", title: "Conference in Lisbon", desc: "Two days of plenaries, parallel panels, and networking sessions.", icon: CalendarCheck },
];

const benefits = [
  { icon: Award, title: "Official Certificates", desc: "Participation and presentation certificates issued by Ramotitanico." },
  { icon: FileText, title: "Publication Opportunity", desc: "Selected papers published in indexed proceedings and edited volumes." },
  { icon: Network, title: "International Networking", desc: "Curated sessions with scholars and practitioners from 40+ countries." },
  { icon: Globe, title: "Global Exposure", desc: "Profile, abstract, and affiliation listed in the official conference programme." },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & Conferences"
        title="A worldwide programme of scholarly gatherings."
        description="From flagship international conferences in Lisbon to regional symposia and executive seminars across our partner network."
      />

      {/* Featured Conference */}
      <section className="container-page py-20">
        <div className="overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground shadow-[var(--shadow-elevated)]">
          <div className="grid gap-0 lg:grid-cols-[1.3fr_1fr]">
            <div className="p-10 sm:p-14">
              <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Flagship · 27–28 June 2026 · Lisbon
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                International Conference on Education, Research & Sustainable Innovation
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Two days of plenary lectures, parallel panels, doctoral colloquia, and policy
                roundtables — convening scholars, educators, and decision-makers from across
                continents to interrogate the most pressing questions in contemporary education
                and research.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#call-for-papers"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:brightness-95"
                >
                  Call for Papers
                </a>
                <a
                  href="#timeline"
                  className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold hover:bg-primary-foreground/10"
                >
                  View Timeline
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-primary-foreground/15">
              {[
                { k: "500+", v: "Delegates" },
                { k: "40+", v: "Countries" },
                { k: "200+", v: "Papers" },
                { k: "8", v: "Plenaries" },
              ].map((s) => (
                <div key={s.v} className="flex flex-col items-center justify-center bg-primary p-8">
                  <span className="font-display text-3xl font-semibold text-accent">{s.k}</span>
                  <span className="mt-2 text-xs uppercase tracking-wider text-primary-foreground/70">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call for papers */}
      <section id="call-for-papers" className="bg-surface py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionTitle
            eyebrow="Call for Papers"
            title="Submit your contribution."
            description="We welcome original research, case studies, policy analyses, and theoretical contributions across education, research methodology, innovation studies, and sustainable development."
          />
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-xl font-semibold text-primary">Suggested Themes</h3>
            <ul className="mt-4 grid gap-3 text-sm text-foreground/85 sm:grid-cols-2">
              {[
                "Future of Higher Education",
                "Research Methodology & Ethics",
                "Sustainability in Curricula",
                "Digital Pedagogy & AI",
                "Comparative Education Policy",
                "Equity, Access & Inclusion",
                "Innovation in Doctoral Training",
                "Cross-cultural Collaboration",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Mic2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="container-page py-20">
        <SectionTitle align="center" eyebrow="Conference Timeline" title="Key dates for 2026." />
        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative border-l-2 border-accent/40 pl-6">
            {timeline.map((t) => (
              <li key={t.title} className="mb-10 last:mb-0">
                <span className="absolute -left-[15px] grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground shadow">
                  <t.icon className="h-3.5 w-3.5" />
                </span>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">
                  {t.date}
                </div>
                <h3 className="mt-1 font-display text-lg font-semibold text-primary">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionTitle align="center" eyebrow="Why Attend" title="What participants gain." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-accent-soft text-accent-foreground">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
