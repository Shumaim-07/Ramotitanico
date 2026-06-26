import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, GraduationCap, ChevronDown, Compass, BookOpen, Building2, Leaf, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

const serviceLinks = [
  { to: "/services", label: "Overview", desc: "All service areas", icon: Compass },
  { to: "/services/education", label: "Education", desc: "Academic & institutional", icon: BookOpen },
  { to: "/services/construction", label: "Construction", desc: "Infrastructure & engineering", icon: Building2 },
  { to: "/services/agriculture", label: "Agriculture", desc: "Farming & rural development", icon: Leaf },
  { to: "/services/transport", label: "Transport", desc: "Logistics & mobility", icon: Truck },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const routerState = useRouterState();
  const isServicesActive = routerState.location.pathname.startsWith("/services");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 shrink-0">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-lg font-semibold text-primary">
              Ramotitanico
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.slice(0, 2).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary",
                isServicesActive
                  ? "text-primary bg-secondary"
                  : "text-foreground/80",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1.5 w-64 rounded-xl border border-border bg-background py-1.5 shadow-[var(--shadow-elevated)]">
                {serviceLinks.slice(0, 1).map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setServicesOpen(false)}
                    activeProps={{ className: "bg-secondary text-primary" }}
                    activeOptions={{ exact: true }}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent-foreground">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-medium">{s.label}</span>
                      <span className="block text-xs text-muted-foreground">{s.desc}</span>
                    </span>
                  </Link>
                ))}
                <div className="my-1 h-px bg-border" />
                {serviceLinks.slice(1).map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setServicesOpen(false)}
                    activeProps={{ className: "bg-secondary text-primary" }}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent-foreground">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-medium">{s.label}</span>
                      <span className="block text-xs text-muted-foreground">{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.slice(2).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/become-a-consultant"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:brightness-95"
          >
            Become a Consultant
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.slice(0, 2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}

            {/* Mobile services accordion */}
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className={cn(
                "flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary",
                isServicesActive && "text-primary bg-secondary",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  mobileServicesOpen && "rotate-180",
                )}
              />
            </button>

            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col gap-0.5 border-l-2 border-border pl-3">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                    className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-primary"
                    activeProps={{ className: "text-primary bg-secondary" }}
                    activeOptions={{ exact: s.to === "/services" }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {links.slice(2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/become-a-consultant"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              Become a Consultant
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
