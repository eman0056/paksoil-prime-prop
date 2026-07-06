import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { cities, propertyTypes } from "@/data/properties";

export const Route = createFileRoute("/list-property")({
  head: () => ({
    meta: [
      { title: "List Your Property — PAKSOILS PVT LTD" },
      { name: "description", content: "Submit your property details and our team will contact you to help sell, market or maintain your asset." },
      { property: "og:title", content: "List Your Property — PAKSOILS PVT LTD" },
      { property: "og:description", content: "Submit your property details for brokerage, marketing or maintenance support from PAKSOILS PVT LTD." },
    ],
  }),
  component: ListProperty,
});

function ListProperty() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="List Your Property"
        title="Sell, market or maintain your property with confidence"
        subtitle="Submit your property details and our team will contact you to support your listing, marketing or maintenance needs."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
        {sent ? (
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center shadow-[var(--shadow-card)]">
            <CheckCircle2 size={48} className="mx-auto text-primary" />
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Thank you</h2>
            <p className="mt-2 text-muted-foreground">Our team will contact you soon regarding your property request.</p>
            <button onClick={() => setSent(false)} className="mt-6 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
              Submit another property
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" required><input required maxLength={80} className={input} /></Field>
              <Field label="Phone Number" required><input required type="tel" maxLength={20} className={input} /></Field>
              <Field label="Email" required><input required type="email" maxLength={120} className={input} /></Field>
              <Field label="Property Type" required>
                <select required className={input}>
                  {propertyTypes.filter(t => t !== "All Types").map(t => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="City" required>
                <select required className={input}>
                  {cities.filter(c => c !== "All Cities").map(c => <option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Area / Location" required><input required maxLength={120} className={input} /></Field>
              <Field label="Price (PKR)"><input type="text" maxLength={20} placeholder="e.g. 2.5 Crore" className={input} /></Field>
              <Field label="Property Size"><input maxLength={40} placeholder="e.g. 10 Marla / 2400 sq ft" className={input} /></Field>
              <Field label="Purpose" required>
                <select required className={input}>
                  {["Sell", "Marketing", "Maintenance", "Builder Service"].map(p => <option key={p}>{p}</option>)}
                </select>
              </Field>
              <Field label="Upload Image">
                <label className="flex h-[42px] cursor-pointer items-center gap-2 rounded-md border border-dashed border-input bg-background px-3 text-sm text-muted-foreground hover:border-primary">
                  <Upload size={14} /> Choose image…
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message">
                <textarea rows={5} maxLength={1000} className={input + " resize-none"} placeholder="Tell us anything else we should know about your property…" />
              </Field>
            </div>

            <button className="mt-7 w-full rounded-md bg-[image:var(--gradient-brand)] py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:shadow-lg sm:w-auto sm:px-10">
              Submit Property
            </button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}

const input =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}