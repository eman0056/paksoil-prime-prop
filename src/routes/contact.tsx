import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PAKSOILS PVT LTD" },
      {
        name: "description",
        content: "Contact PAKSOILS PVT LTD at Office No. #223, 3rd Floor, M Dubai Tower, Khanna Bridge, Lehtrar Road, Islamabad. Call +92 322 7864673 or +92 321 7864673.",
      },
      { property: "og:title", content: "Contact PAKSOILS PVT LTD" },
      { property: "og:description", content: "Get in touch with PAKSOILS PVT LTD for Peace Valley plots, property maintenance or B2B advertising support." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Unable to send your message right now.");
      }

      setSent(true);
      form.reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send your message right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a property advisor today"
        subtitle="We're here to help with buying, selling, marketing, building and maintaining property across Pakistan."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-4">
            {[
              { i: MapPin, l: "Office Address", v: "Office No. #223, 3rd Floor, M Dubai Tower, Khanna Bridge, Lehtrar Road, Islamabad, Pakistan" },
              { i: Phone, l: "Phone", v: "+92 322 7864673", href: "tel:+923227864673" },
              { i: Phone, l: "Phone", v: "+92 321 7864673", href: "tel:+923217864673" },
            ].map((c) => (
              <div key={c.v} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
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

            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="PAKSOILS PVT LTD Office Map"
                src="https://www.google.com/maps?q=M+Dubai+Tower+Khanna+Bridge+Lehtrar+Road+Islamabad&output=embed"
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
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                <input required name="name" maxLength={80} placeholder="Name" className={fInput} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required name="email" type="email" maxLength={120} placeholder="Email" className={fInput} />
                  <input required name="phone" type="tel" maxLength={20} placeholder="Phone" className={fInput} />
                </div>
                <select required name="service" className={fInput} defaultValue="">
                  <option value="" disabled>Service required…</option>
                  {["Property Sales", "Property Purchase", "Property Marketing", "Builder Services", "Maintenance", "Home Services", "General Inquiry"].map(s => <option key={s}>{s}</option>)}
                </select>
                <textarea required name="message" rows={5} maxLength={1000} placeholder="Message" className={fInput + " resize-none"} />
                {submitError ? <p className="text-sm text-destructive">{submitError}</p> : null}
                <button disabled={isSubmitting} className="rounded-md bg-[image:var(--gradient-brand)] py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70">
                  {isSubmitting ? "Sending..." : "Send Message"}
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