import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Paksoil.com — Real Estate Advisors in Pakistan" },
      { name: "description", content: "Get in touch with Paksoil.com — K Block, DHA, Main Ghazi Road, Pakistan. Call, email or message us on WhatsApp." },
      { property: "og:title", content: "Contact Paksoil.com" },
      { property: "og:description", content: "Talk to a Paksoil.com property advisor today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a property advisor today"
        subtitle="We're here to help with buying, selling, marketing, building and maintaining property across Pakistan."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-4">
            {[
              { i: MapPin, l: "Office Address", v: "K Block, DHA, Main Ghazi Road, Pakistan" },
              { i: Phone, l: "Phone", v: "+92 XXX XXXXXXX", href: "tel:+920000000000" },
              { i: Mail, l: "Email", v: "info@paksoil.com", href: "mailto:info@paksoil.com" },
            ].map((c) => (
              <div key={c.l} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <c.i size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.l}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block break-words text-base font-semibold text-foreground hover:text-primary">{c.v}</a>
                  ) : (
                    <p className="mt-1 break-words text-base font-semibold text-foreground">{c.v}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/92000000000?text=Hello%20Paksoil"
              target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[oklch(0.65_0.16_150)] py-3.5 text-sm font-semibold text-white shadow-md"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>

            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Paksoil Office Map"
                src="https://www.google.com/maps?q=DHA+Main+Ghazi+Road+Lahore&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">We typically respond within one business day.</p>

            {sent ? (
              <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-6">
                <CheckCircle2 size={28} className="text-primary" />
                <p className="mt-3 font-display text-lg font-bold text-foreground">Thank you</p>
                <p className="mt-1 text-sm text-muted-foreground">Our team will contact you soon regarding your request.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 grid gap-4">
                <input required maxLength={80} placeholder="Name" className={fInput} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required type="email" maxLength={120} placeholder="Email" className={fInput} />
                  <input required type="tel" maxLength={20} placeholder="Phone" className={fInput} />
                </div>
                <select required className={fInput} defaultValue="">
                  <option value="" disabled>Service required…</option>
                  {["Property Sales", "Property Purchase", "Property Marketing", "Builder Services", "Maintenance", "Home Services", "General Inquiry"].map(s => <option key={s}>{s}</option>)}
                </select>
                <textarea required rows={5} maxLength={1000} placeholder="Message" className={fInput + " resize-none"} />
                <button className="rounded-md bg-[image:var(--gradient-brand)] py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:shadow-lg">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const fInput =
  "w-full rounded-md border border-input bg-background px-3 py-3 text-sm text-foreground outline-none transition focus:border-primary";