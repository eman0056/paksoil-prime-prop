export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, oklch(0.55 0.13 155 / .7), transparent 60%), radial-gradient(circle at 80% 70%, oklch(0.78 0.13 85 / .4), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-[var(--gold)]/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)] backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/80 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}