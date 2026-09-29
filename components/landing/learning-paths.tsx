import { learningPaths } from "@/data/landing";

export function LearningPaths() {
  return (
    <section className="px-5 pt-[72px] pb-[121px] md:px-8">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[36px]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-[15px] max-w-[910px] text-base leading-[1.6] text-muted md:text-lg">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>

        <ul className="mt-[69px] grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {learningPaths.map((path) => (
            <li
              key={path.label}
              className="flex aspect-square flex-col items-center rounded-[24px] border border-border pt-[35px]"
            >
              <svg
                aria-hidden
                viewBox={path.viewBox}
                className="size-[60px] rounded-full bg-brand-lime fill-ink"
              >
                <title>{path.label}</title>
                {path.paths.map((d) => (
                  <path key={d} d={d} />
                ))}
              </svg>
              <span className="mt-[11px] text-xl text-ink">{path.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
