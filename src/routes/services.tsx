import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, Home, Megaphone, Building2, Wrench, Hammer, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PAKSOILS PVT LTD" },
      {
        name: "description",
        content: "PAKSOILS PVT LTD offers brokerage, asset management, electrical and technical trades, surface finishes, structural maintenance, and B2B advertising support.",
      },
      { property: "og:title", content: "Services — PAKSOILS PVT LTD" },
      {
        property: "og:description",
        content: "Real estate asset management, facility maintenance and member advertising services from PAKSOILS PVT LTD.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: TrendingUp,
    title: "Broker Opinion of Valuation (BOV)",
    desc: "Comparative market analyses for property liquidation.",
    points: ["Property valuation reports", "Market comparison data", "Asset liquidation guidance"],
  },
  {
    icon: Home,
    title: "Vacant Asset Safeguarding",
    desc: "Custodial oversight, securing and managing structures while properties sit vacant.",
    points: ["Site inspections", "Interim security", "Routine condition checks"],
  },
  {
    icon: Megaphone,
    title: "Tenancy Administration",
    desc: "Commercial collection of monthly rental yields and ongoing tenant relations.",
    points: ["Rent collection", "Tenant communication", "Lease tracking"],
  },
  {
    icon: Building2,
    title: "Infrastructural Electrical Division",
    desc: "Full-scale wiring services, load calculations and technical fault resolution across domestic, retail, commercial and industrial sectors.",
    points: ["Full electrical fit-outs", "Safety testing", "Load planning"],
  },
  {
    icon: Wrench,
    title: "Paint with Paksoils",
    desc: "Complete industrial and residential face-lifts, exterior weather-sheathing and interior paint finish management.",
    points: ["Surface preparation", "Exterior coatings", "Interior finishing"],
  },
  {
    icon: Hammer,
    title: "Civic & Structural Maintenance",
    desc: "General contracting coverage for structural repair recommendations and routine landscape or lawn preservation.",
    points: ["Routine maintenance", "Structural patching", "Grounds upkeep"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Brokerage, facility maintenance and technical trades"
        subtitle="PAKSOILS PVT LTD delivers real estate asset management, maintenance and B2B media support through its corporate divisions."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
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
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Need help with a specific property?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Tell us what you're looking for and a PAKSOILS PVT LTD advisor will get back to you within one business day.
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