import { Link } from "@tanstack/react-router";
import { Home, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] shadow-[0_10px_25px_-12px_var(--primary)]">
              <Home size={18} strokeWidth={2.5} />
            </span>
            <span className="font-display text-2xl font-bold">
              PAKSOILS <span className="text-[var(--gold)]">PVT LTD</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/75">
            Real estate development, property maintenance and member advertising support from Islamabad, Pakistan.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <I size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-[var(--gold)]">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/75">
            {[
              { to: "/", label: "Home" },
              { to: "/properties", label: "Properties" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
              { to: "/list-property", label: "List Your Property" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-[var(--gold)]">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-[var(--gold)]">Our Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/75">
            {[
              "Property Sales",
              "Property Purchase",
              "Property Marketing",
              "Builder Services",
              "Maintenance",
              "Home Services",
            ].map((s) => (
              <li key={s}>
                <Link to="/services" className="transition hover:text-[var(--gold)]">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-[var(--gold)]">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/75">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> Office No. #223, 3rd Floor, M Dubai Tower, Khanna Bridge, Lehtrar Road, Islamabad, Pakistan</li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> +92 322 7864673</li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> +92 321 7864673</li>
            <li className="flex gap-3"><MessageCircle size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> <a href="https://wa.me/447570108883" target="_blank" rel="noopener" className="hover:text-[var(--gold)]">WhatsApp: +44 7570 108883</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-secondary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} PAKSOILS PVT LTD. All rights reserved.</p>
          <p>Corporate umbrella for real estate development and facility maintenance in Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}