import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { courses } from "@/data/courses";
import { CourseCard } from "./course-card";
import { HappyStudentsCard, LearningProgressCard } from "./stat-cards";

// Radial glows from Home.svg: centre (x, y) in the 1440px frame, relative to
// the section top (page y 3120), radius, colour and layer opacity.
const glows = [
  { x: 1290.5, y: 1356.5, r: 568.5, rgb: "0 59 226", alpha: 0.24 },
  { x: 416.5, y: 102.5, r: 568.5, rgb: "203 252 1", alpha: 0.4 },
  { x: 60.5, y: 751.5, r: 568.5, rgb: "0 59 226", alpha: 0.16 },
  { x: 1379.5, y: 110.5, r: 568.5, rgb: "0 59 226", alpha: 0.08 },
  { x: 49, y: 1282, r: 336, rgb: "203 252 1", alpha: 0.6 },
];

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function RevenueCard({
  title,
  period,
  amount,
  className,
  children,
}: {
  title: string;
  period: string;
  amount: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute flex flex-col rounded-2xl bg-brand-blue p-4 text-white ${className}`}
    >
      <p className="text-base font-medium leading-tight">{title}</p>
      <p className="text-[10px] leading-tight">{period}</p>
      <p className="mt-2 font-heading text-2xl font-semibold">{amount}</p>
      {children}
    </div>
  );
}

export function FeatureHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-5 md:px-8">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {glows.map(({ x, y, r, rgb, alpha }) => (
          <div
            key={`${x}-${y}`}
            className="absolute rounded-full"
            style={{
              left: `calc(50% - 720px + ${x - r}px)`,
              top: y - r,
              width: r * 2,
              height: r * 2,
              background: `radial-gradient(closest-side, rgb(${rgb} / ${alpha}), rgb(${rgb} / ${alpha * 0.23}) 53%, rgb(${rgb} / ${alpha * 0.06}) 75%, transparent)`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        {/* Stage coordinates are Figma px relative to each stage's origin. */}
        <div className="relative pt-20 lg:h-[744px] lg:pt-[194px]">
          <div className="max-w-[600px]">
            <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[44px] md:leading-[56px]">
              Your Path to Professional
              <br className="hidden md:block" /> Growth Starts Here!
            </h2>
            <p className="mt-[35px] max-w-[480px] text-base leading-[1.6] text-body md:text-lg">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="mt-[44px] flex gap-14">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col-reverse gap-0.5">
                  <dt className="text-lg text-body">{label}</dt>
                  <dd className="text-4xl font-medium text-brand-blue">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 flex justify-center lg:absolute lg:top-[120px] lg:left-[617px] lg:mt-0 lg:block">
            <div className="relative h-[560px] w-[600px] shrink-0 [zoom:0.55] sm:[zoom:0.8] md:[zoom:1]">
              <div className="absolute top-0 left-[21.5px] w-[373px]">
                <CourseCard course={courses[0]} />
              </div>
              <Image
                src="/assets/boy-long.png"
                alt=""
                width={2812}
                height={2752}
                className="absolute top-[9.5px] left-[-0.5px] h-auto w-[703px] max-w-none"
              />
              <LearningProgressCard className="top-[213px] left-[366px] h-[138px]" />
              <Image
                src="/assets/lime-coil-tall.png"
                alt=""
                width={496}
                height={650}
                className="absolute top-[92px] left-[472px] h-auto w-[124px] max-w-none"
              />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col pt-20 pb-20 lg:h-[716px] lg:pt-[107px] lg:pb-0">
          <div className="max-w-[560px] lg:ml-[621px]">
            <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink md:text-[44px] md:leading-[1.2]">
              Create &amp; Manage
              <br className="hidden md:block" /> Courses Easily.
            </h2>
            <p className="mt-[38px] text-base leading-[1.6] text-body md:text-lg">
              <strong className="font-bold text-ink">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-[37px] flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2.5 text-lg text-ink"
                >
                  <CircleCheck
                    aria-hidden
                    size={22}
                    className="fill-brand-blue text-white"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex justify-center lg:absolute lg:top-[-4px] lg:left-[1px] lg:mt-0 lg:block">
            <div className="relative h-[600px] w-[586px] shrink-0 [zoom:0.55] sm:[zoom:0.8] md:[zoom:1]">
              <RevenueCard
                title="Total Revenue"
                period="July 1-28"
                amount="$120.29"
                className="top-[48px] left-0 h-[119px] w-[232px]"
              >
                <div className="mt-auto h-2 w-[200px] overflow-hidden rounded-full bg-white">
                  <div className="h-full w-[56%] rounded-full bg-brand-lime" />
                </div>
              </RevenueCard>
              <RevenueCard
                title="Year to Date"
                period="2023"
                amount="$1,200.38"
                className="top-[198px] left-0 h-[135px] w-[134px]"
              >
                <span className="mt-auto grid h-6 w-[38px] place-items-center rounded-full bg-brand-lime-bright text-[10px] font-medium text-ink">
                  +12$
                </span>
              </RevenueCard>
              <Image
                src="/assets/student-female.png"
                alt=""
                width={2316}
                height={2876}
                className="absolute top-0 left-[7px] h-auto w-[579px] max-w-none"
              />
              <HappyStudentsCard className="top-[417px] left-[283px] h-[123px]" />
              <Image
                src="/assets/lime-coil.png"
                alt=""
                width={563}
                height={598}
                className="absolute top-[154px] left-[339px] h-auto w-[141px] max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
