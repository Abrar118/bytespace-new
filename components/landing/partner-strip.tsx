const partners = ["Orbit", "Sunburst", "Bolt", "Compass", "Sphere"];

function PartnerMark({ index }: { index: number }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 40"
      className={`size-9 fill-current ${index % 2 ? "rotate-45" : ""}`}
    >
      <title>Partner logo</title>
      <circle cx="20" cy="20" r="17" opacity="0.25" />
      <path d="M20 4 24 16 36 20 24 24 20 36 16 24 4 20 16 16Z" />
    </svg>
  );
}

export function PartnerStrip() {
  return (
    <section aria-label="Trusted partners" className="bg-surface">
      <div className="mx-auto flex min-h-[176px] max-w-[1200px] flex-wrap items-center justify-center gap-x-14 gap-y-7 px-5 py-10 md:justify-between">
        {partners.map((partner, index) => (
          <div key={partner} className="flex items-center gap-2 text-muted">
            <PartnerMark index={index} />
            <span className="text-lg font-bold">Logoipsum</span>
          </div>
        ))}
      </div>
    </section>
  );
}
