import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, Home, Megaphone, Building2, Wrench, Hammer, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Real Estate & Property Services in Pakistan — Paksoil.com" },
      { name: "description", content: "Property sales, purchase, marketing, builder services, maintenance and home services — Paksoil.com is your full-service real estate partner." },
      { property: "og:title", content: "Our Services — Paksoil.com" },
      { property: "og:description", content: "Full-service real estate, builder and home services across Pakistan." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: TrendingUp, title: "Property Sales", desc: "Helping customers sell residential and commercial properties professionally with the right pricing strategy and buyer outreach.", points: ["Market-based valuation", "Professional photography", "Qualified buyer leads"] },
  { icon: Home, title: "Property Purchase", desc: "Helping buyers find suitable houses, plots, apartments and commercial properties matched to budget and lifestyle.", points: ["Verified listings", "Site visits arranged", "Negotiation support"] },
  { icon: Megaphone, title: "Property Marketing", desc: "Marketing properties through online listings, digital campaigns, and structured lead generation.", points: ["Premium portal listings", "Social media campaigns", "Lead qualification"] },
  { icon: Building2, title: "Builder Services", desc: "Connecting clients with trusted construction and builder partners for residential and commercial projects.", points: ["Turnkey construction", "Architectural design", "Project management"] },
  { icon: Wrench, title: "Maintenance Services", desc: "Property repair, maintenance, renovation, and management support for long-term asset value.", points: ["Routine maintenance", "Renovation projects", "Tenant management"] },
  { icon: Hammer, title: "Home Services", desc: "Home improvement, repair, cleaning, inspection, and general property care services across Pakistan.", points: ["Deep cleaning", "Repair & handyman", "Property inspection"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Full-service real estate, builder & home solutions"
        subtitle="Everything you need to buy, sell, build, market and maintain property — under one trusted roof."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                <s.icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 size={14} className="text-primary" /> {pt}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Request service <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Need help with a specific property?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Tell us what you're looking for and a Paksoil.com advisor will get back to you within one business day.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/list-property" className="rounded-lg bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md">List Your Property</Link>
            <Link to="/contact" className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted">Contact Us</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}