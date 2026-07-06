import { Link } from "@tanstack/react-router";
import { Menu, X, Home } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[0_10px_30px_-15px_var(--primary)]">
            <Home size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-secondary sm:text-2xl">
            PAKSOILS <span className="text-primary">PVT LTD</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-muted hover:text-primary"
              activeProps={{ className: "bg-muted text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/list-property"
            className="hidden items-center rounded-full bg-[image:var(--gradient-brand)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-12px_var(--primary)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_-12px_var(--primary)] sm:inline-flex"
          >
            List Your Property
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition hover:bg-muted lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
                activeProps={{ className: "bg-muted text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/list-property"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[image:var(--gradient-brand)] px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm"
            >
              List Your Property
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}