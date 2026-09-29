import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { CourseCard } from "@/components/landing/course-card";
import { HappyStudentsCard } from "@/components/landing/stat-cards";
import { courses } from "@/data/courses";

// Shapes in the showcase, as Figma px relative to its top-left (122, 305).
const shapes = [
  {
    src: "/assets/white-coil.png",
    w: 459,
    h: 488,
    top: 350.3,
    left: 380.7,
    width: 114.6,
  },
  {
    src: "/assets/lime-torus.png",
    w: 952,
    h: 872,
    top: 40.3,
    left: 50.1,
    width: 101.6,
  },
  {
    src: "/assets/lime-cone.png",
    w: 499,
    h: 549,
    top: 418.7,
    left: 0.4,
    width: 124.7,
  },
];

// Shared by /login and /signup: the 1440×1024 Figma frame with the course
// showcase on the left and the form card on the right.
export function AuthShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="grid-backdrop min-h-screen px-5 md:px-8 xl:px-0">
      <div className="mx-auto max-w-[1200px] pt-[35px] pb-[120px] lg:flex lg:justify-between lg:gap-10">
        <div className="text-white lg:pl-0.5 xl:relative">
          <Link href="/" aria-label="ByteSpace home" className="inline-block">
            <Image
              src="/assets/bytespace-mark.png"
              alt="ByteSpace"
              width={29}
              height={31.5}
            />
          </Link>
          <p className="mt-[44px] font-heading text-xl font-medium leading-[1.5] tracking-[-0.01em]">
            {title}
          </p>
          <p className="mt-3.5 max-w-[480px] text-lg leading-[29px]">
            {description}
          </p>

          {/* ponytail: fixed-px composition, shrunk with zoom on lg; pinned to the
              Figma top on xl so description length does not move it. */}
          <div className="relative mt-[86px] hidden h-[558px] w-[484px] lg:block lg:[zoom:0.7] xl:absolute xl:top-[270px] xl:left-0.5 xl:mt-0 xl:[zoom:1]">
            <div className="absolute top-[89px] left-0 w-[373px]">
              <CourseCard course={courses[1]} />
            </div>
            <div className="absolute top-0 left-[111px] w-[373px]">
              <CourseCard course={courses[2]} />
            </div>
            <HappyStudentsCard
              lime
              className="top-[435px] left-[226px] h-[123px]"
            />
            {shapes.map(({ src, w, h, top, left, width }) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={w}
                height={h}
                sizes={`${width}px`}
                className="absolute h-auto max-w-none"
                style={{ top, left, width }}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col rounded-[24px] bg-white px-6 py-10 text-ink sm:px-[63px] lg:mt-[85px] lg:pt-[62px] lg:pb-[41px] lg:min-h-[784px] lg:w-[579px] lg:shrink-0">
          {children}
        </div>
      </div>
    </main>
  );
}

export function AuthSubmit({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="mt-1 h-[46px] self-end rounded-full bg-brand-lime px-[25px] text-lg transition-transform hover:scale-105"
    >
      {children}
    </button>
  );
}

export function AuthField({
  label,
  id,
  ...input
}: { label: string; id: string } & ComponentProps<"input">) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        required
        className="mt-[5px] h-[52px] w-full rounded-xl border border-[#e5e6e8] px-6 text-lg placeholder:text-muted"
        {...input}
      />
    </div>
  );
}
