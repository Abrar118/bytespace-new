import { Star } from "lucide-react";
import Image from "next/image";

const avatarPaths = Array.from(
  { length: 7 },
  (_, index) =>
    `/assets/avatars/hero-avatar-${String(index + 1).padStart(2, "0")}.png`,
);

// Floating cards reused by the hero and feature sections. Callers pass the
// absolute position and height; content is bottom-anchored so the 16px
// bottom padding holds across the slightly different card heights.

export function LearningProgressCard({ className }: { className: string }) {
  return (
    <div
      className={`absolute flex w-[232px] flex-col rounded-2xl bg-white p-4 text-ink shadow-xl ${className}`}
    >
      <p className="text-sm font-medium">Learning Progress</p>
      <p className="mt-2 font-heading text-[44px] font-semibold leading-none">
        55%
      </p>
      <div className="mt-auto h-2 overflow-hidden rounded-full bg-surface">
        <div className="h-full w-[56%] rounded-full bg-brand-lime" />
      </div>
    </div>
  );
}

export function HappyStudentsCard({ className }: { className: string }) {
  return (
    <div
      className={`absolute flex w-[258px] flex-col rounded-2xl bg-white p-4 text-ink shadow-xl ${className}`}
    >
      <p className="text-base font-medium">Happy Students</p>
      <div className="mt-1 flex items-center gap-1 text-xs text-muted">
        <span>4.5 (240)</span>
        <Star
          aria-hidden
          className="fill-brand-lime text-brand-lime"
          size={14}
        />
      </div>
      <div className="mt-auto flex items-center">
        {avatarPaths.map((path) => (
          <Image
            key={path}
            src={path}
            alt=""
            width={43}
            height={43}
            className="-mr-4 size-[43px] rounded-full border-2 border-white object-cover"
          />
        ))}
        <span className="grid size-[43px] place-items-center rounded-full bg-brand-lime text-xs font-bold">
          2K+
        </span>
      </div>
    </div>
  );
}
