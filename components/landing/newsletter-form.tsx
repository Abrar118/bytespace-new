"use client";

// Presentational: native validation runs, but the address is never stored or
// sent because there is no newsletter backend in scope.
export function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="h-[52px] w-full rounded-full border border-border bg-white px-6 text-base text-ink placeholder:text-body sm:w-[376px]"
      />
      <button
        type="submit"
        className="h-[46px] w-[104px] shrink-0 rounded-full bg-brand-lime text-lg text-ink transition-transform hover:scale-105"
      >
        Search
      </button>
    </form>
  );
}
