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
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground shadow-md">
            <Home size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-secondary">
            Paksoil<span className="text-primary">.com</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/75 transition hover:bg-muted hover:text-primary"
              activeProps={{ className: "text-primary bg-muted" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/list-property"
            className="hidden sm:inline-flex items-center rounded-lg bg-[image:var(--gradient-brand)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:shadow-lg hover:-translate-y-0.5"
          >
            List Your Property
          </Link>
          <button
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
                activeProps={{ className: "text-primary bg-muted" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/list-property"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              List Your Property
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}