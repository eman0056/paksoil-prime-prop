import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties, cities, propertyTypes } from "@/data/properties";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties for Sale — PAKSOILS PVT LTD" },
      { name: "description", content: "Browse Peace Valley residential plots in Islamabad with support from PAKSOILS PVT LTD." },
      { property: "og:title", content: "Browse Properties — PAKSOILS PVT LTD" },
      { property: "og:description", content: "Explore Peace Valley plots from 3.5 Marla to 1 Kanal with PAKSOILS PVT LTD." },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const [q, setQ] = useState("");
  const [city, setCity] = useState("All Cities");
  const [type, setType] = useState("All Types");
  const [beds, setBeds] = useState(0);
  const [purpose, setPurpose] = useState<"Any" | "Buy" | "Sell">("Any");
  const [maxPrice, setMaxPrice] = useState(200000000);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (q && !(`${p.title} ${p.area} ${p.city}`.toLowerCase().includes(q.toLowerCase()))) return false;
      if (city !== "All Cities" && p.city !== city) return false;
      if (type !== "All Types" && p.type !== type) return false;
      if (beds > 0 && p.beds < beds) return false;
      if (purpose !== "Any" && p.purpose !== purpose) return false;
      if (p.priceValue > maxPrice) return false;
      return true;
    });
  }, [q, city, type, beds, purpose, maxPrice]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Properties"
        title="Browse properties across Pakistan"
        subtitle="Browse available Peace Valley plots in Islamabad and filter by area, layout and budget."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-24">
            <h3 className="font-display text-lg font-semibold text-foreground">Filters</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Search</label>
                <div className="mt-1.5 flex items-center gap-2 rounded-md border border-input bg-background px-3">
                  <Search size={14} className="text-muted-foreground" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value.slice(0, 80))}
                    placeholder="Area, city, title…"
                    className="w-full bg-transparent py-2.5 text-sm outline-none"
                  />
                </div>
              </div>

              <Select label="City" value={city} onChange={setCity} options={cities} />
              <Select label="Property Type" value={type} onChange={setType} options={propertyTypes} />
              <Select label="Purpose" value={purpose} onChange={(v) => setPurpose(v as never)} options={["Any", "Buy", "Sell"]} />

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bedrooms (min)</label>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[0, 1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setBeds(n)}
                      className={
                        "rounded-md border px-3 py-1.5 text-xs font-semibold transition " +
                        (beds === n
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:border-primary/50")
                      }
                    >
                      {n === 0 ? "Any" : `${n}+`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span>Max Price</span>
                  <span className="text-primary">PKR {(maxPrice / 10000000).toFixed(1)} Cr</span>
                </label>
                <input
                  type="range"
                  min={5000000}
                  max={200000000}
                  step={5000000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="mt-2 w-full accent-[oklch(0.38_0.09_155)]"
                />
              </div>
            </div>
          </aside>

          {/* Results */}
          <div>
            <p className="mb-5 text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> properties
            </p>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
                <p className="font-display text-xl font-semibold text-foreground">No properties match your filters</p>
                <p className="mt-2 text-sm text-muted-foreground">Try widening your search criteria.</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => <PropertyCard key={p.id} p={p} />)}
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}