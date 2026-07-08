import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary text-primary-foreground">
            <span className="font-display text-sm font-bold tracking-tighter">P</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-[0.14em] text-foreground sm:text-base">
              PAKSOILS
            </span>
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
              Pvt · Ltd
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-[13px] font-medium uppercase tracking-[0.14em] text-foreground/60 transition hover:text-foreground"
              activeProps={{ className: "text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-[var(--gold)]" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+923227864673"
            className="hidden items-center gap-2 text-[13px] font-medium text-foreground/70 hover:text-foreground md:inline-flex"
          >
            <Phone size={14} /> +92 322 7864673
          </a>
          <Link
            to="/list-property"
            className="hidden items-center border-b-2 border-[var(--gold)] px-1 pb-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground transition hover:text-primary sm:inline-flex"
          >
            List Property
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-sm border border-border text-foreground transition hover:bg-muted lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-0 px-5 py-2 sm:px-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] text-foreground/75 transition hover:text-primary"
                activeProps={{ className: "bg-muted text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/list-property"
              onClick={() => setOpen(false)}
              className="mt-3 bg-primary px-4 py-3.5 text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-primary-foreground"
            >
              List Your Property
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}