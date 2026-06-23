import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, MapPin, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Paksoil.com — Trusted Real Estate Services in Pakistan" },
      { name: "description", content: "Paksoil.com provides reliable real estate and property services across Pakistan with a customer-first approach to buying, selling, building and maintaining property." },
      { property: "og:title", content: "About Paksoil.com" },
      { property: "og:description", content: "Trusted real estate, builder and home services across Pakistan." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Property dealing made simple, transparent and trusted"
        subtitle="Paksoil.com is focused on providing reliable real estate and property services across Pakistan."
      />

      <section className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-lg leading-relaxed text-foreground">
          Paksoil.com helps clients <span className="font-semibold text-primary">buy, sell, market, build and maintain</span> properties
          with a customer-first approach. Our goal is to make property dealing easier, more transparent, and more accessible
          for customers across Pakistan — from individual homeowners and first-time buyers to investors and developers.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { i: Target, t: "Our Mission", d: "To make every property transaction in Pakistan simple, fair and stress-free through honest advice, verified listings and dependable service." },
            { i: Eye, t: "Our Vision", d: "To become Pakistan's most trusted name for end-to-end property and home services — from buying and building to maintaining and marketing." },
            { i: Heart, t: "Our Values", d: "Transparency, accountability, professionalism, and a deep respect for our customers' time, money and trust." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <b.i size={20} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{b.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="font-display text-3xl font-bold text-foreground">Areas We Serve</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            With property advisors active in every major Pakistani city, we cover the country's most in-demand neighborhoods.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Lahore — DHA, Bahria, Gulberg",
              "Karachi — DHA, Clifton, Bahria",
              "Islamabad — F-7 to F-11, E-11, B-17",
              "Rawalpindi — Bahria Town, DHA",
              "Multan — DHA, Wapda Town",
              "Faisalabad — Citi Housing, Wapda City",
              "Peshawar — Hayatabad, DHA",
              "Sialkot, Gujranwala, Gujrat",
            ].map((a) => (
              <div key={a} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground">
                <MapPin size={16} className="shrink-0 text-primary" /> {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="font-display text-3xl font-bold text-foreground">Why Customers Trust Us</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Verified Inventory", d: "Properties are physically screened before they go live." },
            { t: "Local Expertise", d: "Advisors who live and work in the neighborhoods they serve." },
            { t: "Transparent Dealing", d: "Clear pricing, clear paperwork, no hidden charges." },
            { t: "End-to-End Support", d: "From first viewing to possession and beyond, we stay with you." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <ShieldCheck size={22} className="text-primary" />
              <p className="mt-4 font-display text-lg font-bold text-foreground">{f.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/properties" className="rounded-lg bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md">Browse Properties</Link>
          <Link to="/contact" className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted">Talk to an Advisor</Link>
        </div>
      </section>
    </SiteLayout>
  );
}