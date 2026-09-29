"use client";

import type { ReactNode } from "react";

// Presentational: native validation runs, but nothing is submitted because
// there is no auth backend in scope.
export function AuthForm({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <form className={className} onSubmit={(event) => event.preventDefault()}>
      {children}
    </form>
  );
}
