import { Link } from "@tanstack/react-router";
import { MapPin, BedDouble, Bath, Maximize, MessageCircle, ArrowUpRight } from "lucide-react";
import type { Property } from "@/data/properties";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group flex flex-col">
      <Link to="/properties/$id" params={{ id: p.id }} className="relative block aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary/70 to-transparent" />
        <span className="absolute left-4 top-4 border border-white/40 bg-secondary/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          For Sale
        </span>
        <span className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
          {p.type}
        </span>
      </Link>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          <MapPin size={11} strokeWidth={1.75} /> {p.area} · {p.city}
        </p>

        <Link to="/properties/$id" params={{ id: p.id }}>
          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground transition group-hover:text-primary">
            {p.title}
          </h3>
        </Link>

        <p className="mt-3 font-display text-xl font-semibold tracking-tight text-primary">{p.price}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/60">
          {p.beds > 0 && <span className="flex items-center gap-1.5"><BedDouble size={13} strokeWidth={1.5} /> {p.beds} Beds</span>}
          {p.baths > 0 && <span className="flex items-center gap-1.5"><Bath size={13} strokeWidth={1.5} /> {p.baths} Baths</span>}
          <span className="flex items-center gap-1.5"><Maximize size={13} strokeWidth={1.5} /> {p.size}</span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <Link
            to="/properties/$id"
            params={{ id: p.id }}
            className="inline-flex items-center gap-2 border-b border-foreground/25 pb-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-[var(--gold)] hover:text-primary"
          >
            View Details <ArrowUpRight size={12} />
          </Link>
          <a
            href="https://wa.me/447570108883"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition hover:text-primary"
          >
            <MessageCircle size={13} /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}