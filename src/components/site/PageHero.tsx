export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, oklch(0.55 0.13 155 / .6), transparent 60%), radial-gradient(circle at 80% 70%, oklch(0.78 0.13 85 / .35), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-24">
        {eyebrow && (
          <span className="inline-block rounded-full border border-[var(--gold)]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-secondary-foreground/75 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}