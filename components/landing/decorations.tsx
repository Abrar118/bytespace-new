import Image from "next/image";
import type { CSSProperties } from "react";

// Decorations are placed in Figma px of the centred 1440px frame. Shapes that
// Figma crops at the frame edge are pinned to the viewport edge instead, so
// wide screens don't show a gap beside a cut-off shape.
const frameLeft = "calc(50% - 720px)";
const edge = `min(0px, ${frameLeft})`;

/** x px from the frame's left edge. */
export const fromFrame = (x: number) => `calc(${frameLeft} + ${x}px)`;
/** x px from the viewport edge once the viewport is wider than the frame. */
export const fromEdge = (x: number) => `calc(${edge} + ${x}px)`;

export type Decoration = {
  src: string;
  w: number;
  h: number;
  left?: string;
  right?: string;
  top: number;
  width: number;
};

export function Decorations({
  items,
  className,
}: {
  items: readonly Decoration[];
  className: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 hidden overflow-hidden lg:block ${className}`}
    >
      {items.map(({ src, w, h, ...position }) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={w}
          height={h}
          sizes={`${position.width}px`}
          className="absolute h-auto max-w-none"
          style={position as CSSProperties}
        />
      ))}
    </div>
  );
}

export type Glow = {
  x: number;
  y: number;
  r: number;
  rgb: string;
  alpha: number;
};

/** Soft radial glows from Home.svg: centre (x, y) in frame px, radius, colour and layer opacity. */
export function Glows({ items }: { items: readonly Glow[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {items.map(({ x, y, r, rgb, alpha }) => (
        <div
          key={`${x}-${y}`}
          className="absolute rounded-full"
          style={{
            left: fromFrame(x - r),
            top: y - r,
            width: r * 2,
            height: r * 2,
            background: `radial-gradient(closest-side, rgb(${rgb} / ${alpha}), rgb(${rgb} / ${alpha * 0.23}) 53%, rgb(${rgb} / ${alpha * 0.06}) 75%, transparent)`,
          }}
        />
      ))}
    </div>
  );
}
