import { Link } from "@tanstack/react-router";
import { MapPin, BedDouble, Bath, Maximize, MessageCircle, Phone } from "lucide-react";
import type { Property } from "@/data/properties";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
          For Sale
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-secondary/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary-foreground">
          {p.type}
        </span>
      </div>
      <div className="p-5">
        <p className="font-display text-xl font-bold text-primary">{p.price}</p>
        <h3 className="mt-1 truncate text-base font-semibold text-foreground">{p.title}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin size={14} /> {p.area}, {p.city}
        </p>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs text-foreground/80">
          {p.beds > 0 && <span className="flex items-center gap-1"><BedDouble size={14} /> {p.beds} Beds</span>}
          {p.baths > 0 && <span className="flex items-center gap-1"><Bath size={14} /> {p.baths} Baths</span>}
          <span className="flex items-center gap-1"><Maximize size={14} /> {p.size}</span>
        </div>

        <div className="mt-5 flex gap-2">
          <Link
            to="/properties/$id"
            params={{ id: p.id }}
            className="flex-1 rounded-md bg-secondary px-3 py-2.5 text-center text-xs font-semibold text-secondary-foreground transition hover:bg-secondary/90"
          >
            View Details
          </Link>
          <a
            href="tel:+923227864673"
            className="grid h-10 w-11 place-items-center rounded-md bg-[oklch(0.65_0.16_150)] text-white transition hover:opacity-90"
            aria-label="Call"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}