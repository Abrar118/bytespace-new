import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";
import Image from "next/image";
import { type Course, courseAvatars } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  const meta = [
    `${course.lessons} Lessons`,
    course.duration,
    `${course.comments} Comments`,
  ];

  return (
    <article className="min-w-0 rounded-[24px] border border-border bg-white p-[15px]">
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <ul className="absolute inset-x-[13px] bottom-[19px] flex flex-wrap gap-x-3 gap-y-2">
          {meta.map((item) => (
            <li
              key={item}
              className="flex h-[26px] items-center whitespace-nowrap rounded-full bg-[#f6f6f6]/60 px-3 text-xs text-body backdrop-blur-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[19px] flex items-start justify-between gap-3">
        <h3 className="truncate font-heading text-xl font-semibold text-black">
          {course.title}
        </h3>
        <p className="flex shrink-0 items-center gap-1 text-lg text-body">
          {course.rating}
          <Star aria-hidden size={18} className="fill-border text-border" />
          <span className="sr-only">out of 5</span>
        </p>
      </div>
      <p className="text-xs text-body">
        by <span className="text-brand-blue">purepearl studio</span>
      </p>

      <div className="mt-[18px] flex items-center gap-3">
        <span className="flex h-8 items-center gap-2 rounded-full bg-surface px-4 text-sm text-body">
          <ChartNoAxesColumnIncreasing
            aria-hidden
            size={16}
            strokeWidth={2.5}
          />
          {course.level}
        </span>
        <div className="flex">
          {courseAvatars.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={32}
              height={32}
              className="-mr-2 size-8 rounded-full object-cover"
            />
          ))}
          <span className="grid size-8 place-items-center rounded-full bg-brand-lime text-xs font-medium text-ink">
            26+
          </span>
        </div>
      </div>

      <p className="mt-4 text-xs text-body">
        <span className="font-heading text-xl font-bold text-brand-blue">
          ${course.price}
        </span>
        /lifetime
      </p>
    </article>
  );
}
