import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, BedDouble, Bath, Maximize, Tag, CheckCircle2, MessageCircle, Phone, Mail, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const property = properties.find((p) => p.id === params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.property.title} — ${loaderData.property.area}, ${loaderData.property.city} | Paksoil.com` },
          { name: "description", content: loaderData.property.description },
          { property: "og:title", content: loaderData.property.title },
          { property: "og:description", content: loaderData.property.description },
          { property: "og:image", content: loaderData.property.image },
          { name: "twitter:image", content: loaderData.property.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Property not found</h1>
        <Link to="/properties" className="mt-4 inline-block text-primary underline">Back to properties</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </SiteLayout>
  ),
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property: p } = Route.useLoaderData();
  const similar = properties.filter((x) => x.id !== p.id && (x.city === p.city || x.type === p.type)).slice(0, 3);
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 pt-10">
        <Link to="/properties" className="text-xs font-semibold uppercase tracking-wider text-primary hover:underline">
          ← Back to properties
        </Link>

        {/* GALLERY */}
        <div className="mt-5 grid gap-3 md:grid-cols-[2fr_1fr]">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
            <img src={p.image} alt={p.title} width={1600} height={1024} className="h-full max-h-[520px] w-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <img src={p.image} alt="" loading="lazy" className="h-32 w-full object-cover md:h-40" />
              </div>
            ))}
          </div>
        </div>

        {/* HEADER */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <span className="rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">{p.type}</span>
            <h1 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">{p.title}</h1>
            <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin size={14} /> {p.area}, {p.city}
            </p>
            <p className="mt-4 font-display text-4xl font-bold text-primary">{p.price}</p>

            <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-4">
              {[
                { i: BedDouble, l: "Bedrooms", v: p.beds || "—" },
                { i: Bath, l: "Bathrooms", v: p.baths || "—" },
                { i: Maximize, l: "Area", v: p.size },
                { i: Tag, l: "Purpose", v: p.purpose === "Buy" ? "For Sale" : "Sell" },
              ].map((x) => (
                <div key={x.l} className="text-center">
                  <x.i size={20} className="mx-auto text-primary" />
                  <p className="mt-2 font-display text-base font-bold text-foreground">{x.v}</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{x.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-display text-2xl font-bold text-foreground">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Located in {p.area}, {p.city}, this {p.type.toLowerCase()} offers excellent access to schools,
                markets, hospitals and main commercial hubs. The neighborhood is well-developed with paved roads,
                landscaped greenbelts and round-the-clock security.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-2xl font-bold text-foreground">Features & Amenities</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT FORM */}
          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-24">
            <h3 className="font-display text-xl font-bold text-foreground">Inquire about this property</h3>
            <p className="mt-1 text-sm text-muted-foreground">Our advisor will contact you shortly.</p>

            {sent ? (
              <div className="mt-6 rounded-lg bg-primary/10 p-5 text-sm text-primary">
                Thank you. Our team will contact you soon regarding this property.
              </div>
            ) : (
              <form
                className="mt-5 space-y-3"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <input required maxLength={80} placeholder="Full Name" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
                <input required type="tel" maxLength={20} placeholder="Phone Number" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
                <input required type="email" maxLength={120} placeholder="Email" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
                <textarea required maxLength={500} rows={4} defaultValue={`I'm interested in ${p.title}.`} className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
                <button className="w-full rounded-md bg-[image:var(--gradient-brand)] py-3 text-sm font-semibold text-primary-foreground shadow-md">
                  <Send size={14} className="mr-2 inline" /> Send Inquiry
                </button>
              </form>
            )}

            <div className="mt-5 grid grid-cols-2 gap-2">
              <a href="tel:+920000000000" className="flex items-center justify-center gap-2 rounded-md border border-border py-2.5 text-xs font-semibold text-foreground hover:bg-muted">
                <Phone size={14} /> Call
              </a>
              <a
                href={`https://wa.me/92000000000?text=${encodeURIComponent(`Hello Paksoil, I'm interested in ${p.title} (${p.area}, ${p.city}).`)}`}
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-md bg-[oklch(0.65_0.16_150)] py-2.5 text-xs font-semibold text-white"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Mail size={12} /> info@paksoil.com
            </p>
          </aside>
        </div>
      </section>

      {/* SIMILAR */}
      {similar.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Similar properties</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((s) => <PropertyCard key={s.id} p={s} />)}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}