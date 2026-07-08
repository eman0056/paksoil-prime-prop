import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MapPin, ShieldCheck, Award, Headphones, TrendingUp, Building2, Hammer, Wrench, Megaphone, Home as HomeIcon, ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PropertyCard } from "@/components/site/PropertyCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { properties, cities, propertyTypes } from "@/data/properties";
import heroImg from "@/assets/hero-villa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PAKSOILS PVT LTD — Real estate development and property maintenance in Pakistan" },
      {
        name: "description",
        content: "PAKSOILS PVT LTD operates through Paksoils.com and Paksoils Developers with real estate development, property management and facility maintenance services.",
      },
      { property: "og:title", content: "PAKSOILS PVT LTD — Real estate development and property maintenance" },
      {
        property: "og:description",
        content: "Corporate umbrella offering Peace Valley residential plots, facility maintenance, electrical services, paint works, structural repairs and B2B advertising support.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: TrendingUp, title: "Broker Opinion of Valuation (BOV)", desc: "Comparative market analyses for property liquidation." },
  { icon: HomeIcon, title: "Vacant Asset Safeguarding", desc: "Custodial oversight, securing and managing structures while properties sit vacant." },
  { icon: Megaphone, title: "Tenancy Administration", desc: "Commercial collection of monthly rental yields and ongoing tenant relations." },
  { icon: Building2, title: "Infrastructural Electrical Division", desc: "Full-scale wiring services, load calculations and technical fault resolution across domestic, retail, commercial and industrial sectors." },
  { icon: Wrench, title: "Paint with Paksoils", desc: "Complete industrial and residential face-lifts, exterior weather-sheathing and interior paint finish management." },
  { icon: Hammer, title: "Civic & Structural Maintenance", desc: "General contracting covering structural repair recommendations and landscape or lawn preservation." },
];

function Home() {
  const featured = properties.slice(0, 6);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-secondary">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Peace Valley residential development" width={1600} height={1024} className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="mx-auto grid min-h-[640px] max-w-7xl grid-cols-1 gap-16 px-5 pt-16 pb-20 text-secondary-foreground sm:px-6 md:min-h-[720px] md:pt-24 md:pb-28 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              Established Real Estate · Pakistan
            </div>
            <h1 className="mt-8 max-w-4xl font-display text-[38px] font-medium leading-[1.05] sm:text-[52px] md:text-[64px] lg:text-[76px]">
              Building Pakistan's next generation of <em className="not-italic text-[var(--gold)]">residential</em> developments.
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-secondary-foreground/75 sm:text-base">
              PAKSOILS PVT LTD is a corporate real estate developer offering Peace Valley residential plots in Islamabad,
              paired with in-house property management and facility maintenance.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/properties"
                className="group inline-flex items-center gap-3 bg-[var(--gold)] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-secondary transition hover:bg-white"
              >
                Explore Properties
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                Speak to an Advisor
              </Link>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:justify-end lg:border-l lg:border-white/15 lg:pl-8">
            {[
              ["3.5 — 1 Kanal", "Peace Valley plot sizes, Islamabad"],
              ["Est. 2020", "Islamabad head office"],
              ["Full Lifecycle", "Development · Management · Maintenance"],
            ].map(([n, l]) => (
              <div key={l} className="border-t border-white/10 py-5 first:border-t-0">
                <p className="font-display text-xl font-medium text-[var(--gold)]">{n}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-secondary-foreground/60">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Anchored search bar */}
        <div className="relative mx-auto -mb-10 max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="translate-y-10 border border-border bg-background shadow-[var(--shadow-elegant)]">
            <div className="flex items-center gap-6 border-b border-border px-6 pt-4">
              {(["Buy", "Sell"] as const).map((t, i) => (
                <button
                  key={t}
                  className={
                    "relative pb-3 text-[12px] font-semibold uppercase tracking-[0.2em] transition " +
                    (i === 0
                      ? "text-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-primary"
                      : "text-muted-foreground hover:text-foreground")
                  }
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="grid gap-0 divide-y divide-border md:grid-cols-[1.2fr_1fr_1fr_auto] md:divide-x md:divide-y-0">
              <label className="flex items-center gap-3 px-6 py-4">
                <MapPin size={16} className="text-[var(--gold)]" />
                <div className="flex-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Location</span>
                  <select className="mt-1 w-full bg-transparent text-sm font-medium text-foreground outline-none">
                    {cities.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </label>
              <label className="flex items-center px-6 py-4">
                <div className="flex-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Property Type</span>
                  <select className="mt-1 w-full bg-transparent text-sm font-medium text-foreground outline-none">
                    {propertyTypes.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </label>
              <label className="flex items-center px-6 py-4">
                <div className="flex-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Price</span>
                  <select className="mt-1 w-full bg-transparent text-sm font-medium text-foreground outline-none">
                    <option>Any Price</option>
                    <option>Under 1 Cr</option>
                    <option>1 – 3 Cr</option>
                    <option>3 – 6 Cr</option>
                    <option>Above 6 Cr</option>
                  </select>
                </div>
              </label>
              <Link
                to="/properties"
                className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-secondary md:px-10"
              >
                <Search size={14} /> Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="mx-auto max-w-7xl px-5 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Featured Listings"
            title="Peace Valley plots, verified and ready."
            subtitle="A curated selection from our current inventory in Islamabad."
          />
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-[var(--gold)] hover:text-primary"
          >
            View all listings <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            center
            eyebrow="What We Do"
            title="An integrated real estate practice."
            subtitle="From residential development to ongoing facility management, we support the full asset lifecycle."
          />
          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group relative flex flex-col bg-card p-8 transition hover:bg-background">
                <s.icon size={22} className="text-[var(--gold)]" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-foreground">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70 transition group-hover:text-primary">
                  Learn more <ArrowRight size={12} className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Corporate Operations"
              title="A structured corporate umbrella."
              subtitle="PAKSOILS PVT LTD operates flagship Peace Valley plots alongside dedicated management and maintenance divisions."
            />
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {[
                { i: Award, t: "Peace Valley", d: "Residential subdivision plots from 3.5 Marla to 1 Kanal." },
                { i: ShieldCheck, t: "Paksoils.org", d: "Free advertising initiative for registered network members." },
                { i: Headphones, t: "Executive Leadership", d: "Nazar Muhammad Baloch, Chief Executive Officer." },
                { i: TrendingUp, t: "Headquarters", d: "M Dubai Tower, Lehtrar Road, Islamabad." },
              ].map((f) => (
                <div key={f.t} className="border-t border-border pt-5">
                  <f.i size={18} strokeWidth={1.5} className="text-[var(--gold)]" />
                  <p className="mt-4 font-display text-base font-semibold text-foreground">{f.t}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={heroImg} alt="Peace Valley residential development" width={1200} height={1500} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-secondary/95 p-6 text-secondary-foreground">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">Flagship Development</p>
              <p className="mt-2 font-display text-2xl font-medium">Peace Valley, Islamabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--gold)]">Begin the Conversation</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
              Ready to list, buy, or build? Speak with our team.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-secondary-foreground/70">
              Every enquiry is handled personally by a PAKSOILS advisor — no automated routing, no third-party call centres.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              to="/list-property"
              className="inline-flex items-center gap-3 bg-[var(--gold)] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-secondary transition hover:bg-white"
            >
              List Your Property <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Contact Advisor
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
