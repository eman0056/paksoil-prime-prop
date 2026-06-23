import { Link } from "@tanstack/react-router";
import { Home, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-brand)]">
              <Home size={18} strokeWidth={2.5} />
            </span>
            <span className="font-display text-2xl font-bold">
              Paksoil<span className="text-[var(--gold)]">.com</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/70">
            Reliable real estate, builder and home services across Pakistan — helping you
            buy, sell, market and maintain property with confidence.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/15 transition hover:bg-white/10"
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
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> K Block, DHA, Main Ghazi Road, Pakistan</li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> +92 XXX XXXXXXX</li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> info@paksoil.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-secondary-foreground/60 sm:flex-row">
          <p>© 2026 Paksoil.com. All rights reserved.</p>
          <p>Real estate, builder and home services across Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}