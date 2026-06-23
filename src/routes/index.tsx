import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MapPin, ShieldCheck, Award, Headphones, TrendingUp, Building2, Hammer, Wrench, Megaphone, Home as HomeIcon, Sparkles, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PropertyCard } from "@/components/site/PropertyCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { properties, cities, propertyTypes } from "@/data/properties";
import heroImg from "@/assets/hero-villa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paksoil.com — Find, Sell & Manage Property Across Pakistan" },
      { name: "description", content: "Paksoil.com helps customers with property sales, purchases, marketing, builder services, maintenance and home services across Pakistan." },
      { property: "og:title", content: "Paksoil.com — Real Estate & Property Services" },
      { property: "og:description", content: "Trusted real estate solutions across Pakistan — buy, sell, build and maintain with Paksoil.com." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: TrendingUp, title: "Property Sales", desc: "Sell residential & commercial property with expert pricing and qualified buyer outreach." },
  { icon: HomeIcon, title: "Property Purchase", desc: "Find verified houses, plots, apartments and commercial spaces matched to your budget." },
  { icon: Megaphone, title: "Property Marketing", desc: "Online listings, digital campaigns and lead generation that move properties faster." },
  { icon: Building2, title: "Builder Services", desc: "Trusted construction partners for residential and commercial projects, end to end." },
  { icon: Wrench, title: "Maintenance", desc: "Repairs, renovations and property management — keep your asset in top condition." },
  { icon: Hammer, title: "Home Services", desc: "Cleaning, inspection, improvement and care services for your home." },
];

function Home() {
  const featured = properties.slice(0, 6);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" width={1600} height={1024} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-secondary/55" />
        </div>
        <div className="mx-auto max-w-7xl px-5 pt-20 pb-28 text-secondary-foreground md:pt-28 md:pb-36">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)] backdrop-blur">
            <Sparkles size={12} /> Pakistan's trusted property partner
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Find, Sell & Manage <span className="text-[var(--gold)]">Property</span> Across Pakistan
          </h1>
          <p className="mt-5 max-w-2xl text-base text-secondary-foreground/85 sm:text-lg">
            Paksoil.com helps customers with property sales, purchases, marketing,
            builder services, maintenance and home services through trusted real estate solutions.
          </p>

          {/* SEARCH */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-background/95 p-4 shadow-[var(--shadow-elegant)] backdrop-blur md:p-5">
            <div className="mb-3 flex gap-1">
              {(["Buy", "Sell"] as const).map((t, i) => (
                <button
                  key={t}
                  className={
                    "rounded-md px-4 py-1.5 text-xs font-semibold transition " +
                    (i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")
                  }
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="grid gap-2 md:grid-cols-[1.2fr_1fr_1fr_auto]">
              <div className="flex items-center gap-2 rounded-md border border-input bg-card px-3">
                <MapPin size={16} className="text-muted-foreground" />
                <select className="w-full bg-transparent py-3 text-sm text-foreground outline-none">
                  {cities.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <select className="rounded-md border border-input bg-card px-3 py-3 text-sm text-foreground outline-none">
                {propertyTypes.map((c) => <option key={c}>{c}</option>)}
              </select>
              <select className="rounded-md border border-input bg-card px-3 py-3 text-sm text-foreground outline-none">
                <option>Any Price</option>
                <option>Under 1 Cr</option>
                <option>1 – 3 Cr</option>
                <option>3 – 6 Cr</option>
                <option>Above 6 Cr</option>
              </select>
              <Link
                to="/properties"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:shadow-lg"
              >
                <Search size={16} /> Search
              </Link>
            </div>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6 text-secondary-foreground/85">
            {[
              ["12K+", "Listed Properties"],
              ["6K+", "Happy Customers"],
              ["25+", "Cities Covered"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl font-bold text-[var(--gold)]">{n}</p>
                <p className="text-xs uppercase tracking-wider">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Featured Listings"
            title="Premium properties handpicked for you"
            subtitle="Verified listings across Pakistan's most sought-after locations."
          />
          <Link
            to="/properties"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            center
            eyebrow="What We Do"
            title="Complete real estate & home services"
            subtitle="From listing your property to maintaining it for decades, Paksoil.com covers every step."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <s.icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Learn more <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Why Paksoil.com"
              title="Trusted by thousands of Pakistani property owners"
              subtitle="We combine local market expertise with transparent dealing and a customer-first approach — so you make every property decision with confidence."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { i: ShieldCheck, t: "Verified Listings", d: "Every property is screened before going live." },
                { i: Award, t: "Expert Advisors", d: "Local agents with deep neighborhood insight." },
                { i: Headphones, t: "End-to-End Support", d: "From paperwork to possession, we're there." },
                { i: TrendingUp, t: "Fair Market Pricing", d: "Data-driven valuations you can trust." },
              ].map((f) => (
                <div key={f.t} className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <f.i size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{f.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
              <img src={heroImg} alt="Premium villa" width={1600} height={1024} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-elegant)] sm:block">
              <p className="font-display text-3xl font-bold text-primary">98%</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / TESTIMONIALS */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            center
            eyebrow="Customer Trust"
            title="What our clients say about Paksoil.com"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "Adeel R.", c: "Lahore", q: "Sold my DHA house above asking price in under three weeks. The marketing was on another level." },
              { n: "Sana M.", c: "Islamabad", q: "Found the perfect F-11 apartment for my family. The advisor was honest and patient throughout." },
              { n: "Hamza K.", c: "Karachi", q: "Their builder team renovated our office plaza beautifully — on time and on budget." },
            ].map((t) => (
              <figure key={t.n} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground">"{t.q}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-foreground">{t.n}</span>
                  <span className="text-muted-foreground"> · {t.c}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-secondary p-10 text-secondary-foreground md:p-16">
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(circle at 80% 50%, oklch(0.55 0.13 155 / .7), transparent 55%)" }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to list, buy or build?</h2>
              <p className="mt-3 max-w-xl text-secondary-foreground/80">
                Talk to a Paksoil.com advisor today and get tailored recommendations for your property goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/list-property"
                className="rounded-lg bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:shadow-lg"
              >
                List Your Property
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-secondary-foreground hover:bg-white/5"
              >
                Contact Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
