import { Search, Star } from "lucide-react";
import Image from "next/image";

const avatarPaths = Array.from(
  { length: 7 },
  (_, index) =>
    `/assets/avatars/hero-avatar-${String(index + 1).padStart(2, "0")}.png`,
);

function LearningProgressCard() {
  return (
    <div className="absolute right-[calc(50%_-_354px)] bottom-[242px] z-30 h-[131px] w-[232px] rounded-2xl bg-white p-4 text-ink shadow-xl max-md:right-[-18px] max-md:bottom-[205px] max-md:scale-[0.72]">
      <p className="text-sm font-medium">Learning Progress</p>
      <p className="mt-2 font-heading text-[44px] font-semibold leading-none">
        55%
      </p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface">
        <div className="h-full w-[56%] rounded-full bg-brand-lime" />
      </div>
    </div>
  );
}

function CourseCard() {
  return (
    <div className="absolute bottom-[315px] left-[calc(50%_-_316px)] z-30 flex h-[70px] w-[208px] items-center gap-3 rounded-2xl bg-white px-4 text-ink shadow-xl max-md:bottom-[230px] max-md:left-[-28px] max-md:scale-[0.72]">
      <div className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-lime">
        <span className="font-heading text-sm font-bold">UX</span>
      </div>
      <div>
        <p className="text-sm font-semibold">UI/UX Design</p>
        <p className="mt-1 text-[10px] text-muted">
          200 Courses · 1000+ Students
        </p>
      </div>
    </div>
  );
}

function HappyStudentsCard() {
  return (
    <div className="absolute bottom-[66px] left-[calc(50%_-_392px)] z-30 h-[121px] w-[258px] rounded-2xl bg-white px-4 py-4 text-ink shadow-xl max-md:bottom-[38px] max-md:left-[-28px] max-md:scale-[0.7]">
      <p className="text-base font-medium">Happy Students</p>
      <div className="mt-1 flex items-center gap-2 text-xs text-muted">
        <span>4.5 (240)</span>
        <Star
          aria-hidden
          className="fill-brand-lime text-brand-lime"
          size={14}
        />
      </div>
      <div className="mt-3 flex items-center">
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

export function Hero() {
  return (
    <section id="home" className="relative mx-auto h-[920px] max-w-[1440px]">
      <div className="relative z-20 mx-auto flex max-w-[920px] flex-col items-center px-5 pt-[70px] text-center max-md:pt-9">
        <h1 className="font-heading text-[44px] font-semibold leading-[1.15] tracking-[-0.01em] md:text-[72px] md:leading-[1.2]">
          Get Access to Hundreds
          <br className="hidden md:block" /> Courses Available
        </h1>
        <p className="mt-5 max-w-[900px] text-base leading-[1.6] text-white/85 md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        {/* biome-ignore lint/a11y/useSemanticElements: the approved markup requires a search form */}
        <form
          role="search"
          action="/"
          method="get"
          className="mt-10 flex w-full max-w-[581px] items-center gap-4 md:mt-[66px]"
        >
          <label className="sr-only" htmlFor="course-search">
            Search courses
          </label>
          <div className="relative min-w-0 flex-1">
            <Search
              aria-hidden
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              id="course-search"
              name="q"
              type="search"
              placeholder="Course, topic, creator"
              className="h-[46px] w-full rounded-full border-0 bg-white pl-12 pr-5 text-sm text-ink placeholder:text-muted focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-[46px] shrink-0 rounded-full bg-brand-lime px-7 font-semibold text-ink transition-transform hover:scale-105"
          >
            Search
          </button>
        </form>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/lime-squiggle.png"
          alt=""
          width={170}
          height={248}
          className="absolute -left-5 top-[145px] h-auto w-[170px] -rotate-[20deg] max-md:hidden"
        />
        <Image
          src="/assets/white-squiggle-small.png"
          alt=""
          width={104}
          height={104}
          className="absolute left-[220px] top-[390px] h-auto w-[104px] max-md:left-[-24px] max-md:top-[520px] max-md:w-20"
        />
        <Image
          src="/assets/lime-capsule.png"
          alt=""
          width={852}
          height={1488}
          className="absolute -right-7 top-[135px] h-auto w-[180px] rotate-[30deg] max-md:right-[-46px] max-md:top-[335px] max-md:w-24"
        />
        <Image
          src="/assets/white-cone.png"
          alt=""
          width={760}
          height={756}
          className="absolute right-[175px] top-[365px] h-auto w-[104px] -rotate-12 max-md:hidden"
        />
        <Image
          src="/assets/white-squiggle-large.png"
          alt=""
          width={175}
          height={184}
          className="absolute -right-1 bottom-[28px] h-auto w-[175px] rotate-12 max-md:hidden"
        />
        <div className="absolute bottom-[32px] left-[55px] size-[170px] -rotate-12 rounded-full border-[44px] border-white max-md:hidden" />
      </div>

      <Image
        src="/assets/hero-lime-arch.png"
        alt=""
        width={4596}
        height={1768}
        className="absolute bottom-[-14px] left-1/2 z-0 h-auto w-[1080px] -translate-x-1/2 max-md:bottom-0 max-md:w-[700px]"
        aria-hidden
        loading="eager"
      />
      <Image
        src="/assets/student-male.png"
        alt="Student learning online with a laptop and headphones"
        width={578}
        height={541}
        className="absolute bottom-[-29px] left-1/2 z-20 h-[541px] w-[578px] -translate-x-1/2 max-md:bottom-[-4px] max-md:h-[330px] max-md:w-[430px]"
        priority
      />

      <CourseCard />
      <LearningProgressCard />
      <HappyStudentsCard />
    </section>
  );
}
