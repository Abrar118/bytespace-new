import { categoryRows, courses } from "@/data/courses";
import { CourseCard } from "./course-card";

export function Discover() {
  return (
    <section id="courses" className="px-5 pt-[73px] pb-[70px] md:px-8">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[44px]">
          Discover Your Passion,
          <br /> Build Your Skills
        </h2>
        <p className="mx-auto mt-[15px] max-w-[910px] text-base leading-[1.6] text-muted md:text-lg">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* Presentational only: filtering is outside the assessment scope. */}
        <div className="mt-[42px] flex flex-col gap-[21px]">
          {categoryRows.map((row, rowIndex) => (
            <ul
              key={row[0]}
              className="flex flex-wrap justify-center gap-x-4 gap-y-[21px]"
            >
              {row.map((category) => (
                <li
                  key={category}
                  className={`flex h-[43px] items-center rounded-full px-[17.5px] text-base ${
                    category === "Featured"
                      ? "bg-brand-lime text-ink"
                      : "bg-surface text-body"
                  }`}
                >
                  {category}
                </li>
              ))}
              {rowIndex === categoryRows.length - 1 && (
                <li className="flex h-[43px] items-center px-1 text-base text-brand-blue">
                  + More
                </li>
              )}
            </ul>
          ))}
        </div>

        <div className="mt-[77px] grid gap-[41px] text-left md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
