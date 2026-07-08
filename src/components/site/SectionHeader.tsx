export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={"flex items-center gap-3 " + (center ? "justify-center" : "")}>
          <span className="h-px w-8 bg-[var(--gold)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-foreground sm:text-4xl md:text-[42px]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}