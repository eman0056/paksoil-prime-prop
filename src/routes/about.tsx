import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PAKSOILS PVT LTD" },
      {
        name: "description",
        content: "PAKSOILS PVT LTD is a corporate umbrella operating through Paksoils.com and Paksoils Developers for real estate development and property maintenance.",
      },
      { property: "og:title", content: "About PAKSOILS PVT LTD" },
      {
        property: "og:description",
        content: "PAKSOILS PVT LTD offers residential plot development, technical trades, asset safeguarding and member advertising services.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="PAKSOILS PVT LTD"
        subtitle="A structured corporate umbrella for real estate development and facility maintenance in Pakistan."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-foreground">
          PAKSOILS PVT LTD operates through Paksoils.com and Paksoils Developers. Our work includes residential plot development in Peace Valley, technical trade services, asset safeguarding and member advertising on paksoils.org.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              i: Target,
              t: "Corporate Entity",
              d: "PAKSOILS PVT LTD is the parent company for Paksoils.com and Paksoils Developers.",
            },
            {
              i: Eye,
              t: "Executive Leadership",
              d: "Chief Executive Officer: Nazar Muhammad Baloch.",
            },
            {
              i: Heart,
              t: "Headquarters",
              d: "Office No. #223, 3rd Floor, M Dubai Tower, Khanna Bridge, Lehtrar Road, Islamabad.",
            },
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

      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-secondary p-10 text-secondary-foreground shadow-[var(--shadow-elegant)] md:p-16">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Peace Valley Residential Portfolio</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary-foreground/85">
              Peace Valley is the flagship residential subdivision in the Islamabad region. Plots are available in 3.5 Marla, 5 Marla, 7 Marla, 10 Marla and 1 Kanal dimensions.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}