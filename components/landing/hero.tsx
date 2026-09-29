import { Search } from "lucide-react";
import Image from "next/image";
import {
  type Decoration,
  Decorations,
  fromEdge,
  fromFrame,
} from "./decorations";
import { HappyStudentsCard, LearningProgressCard } from "./stat-cards";

// Figma px in the hero frame, minus the 104px header. Exports are 4x renders
// with rotation baked in, so only width is needed.
const decorations: Decoration[] = [
  {
    src: "/assets/lime-squiggle.png",
    w: 1061,
    h: 1548,
    left: fromEdge(0),
    top: 117,
    width: 265,
  },
  {
    src: "/assets/white-squiggle-small.png",
    w: 704,
    h: 704,
    left: fromFrame(184),
    top: 373,
    width: 176,
  },
  {
    src: "/assets/white-torus.png",
    w: 688,
    h: 688,
    left: fromFrame(14),
    top: 577,
    width: 344,
  },
  {
    src: "/assets/lime-capsule.png",
    w: 852,
    h: 1488,
    right: fromEdge(0),
    top: 116,
    width: 213,
  },
  {
    src: "/assets/white-cone.png",
    w: 760,
    h: 756,
    left: fromFrame(1104),
    top: 360,
    width: 190,
  },
  {
    src: "/assets/white-squiggle-large.png",
    w: 1265,
    h: 1327,
    left: fromFrame(1124),
    top: 568,
    width: 316,
  },
];

function TopicCard() {
  return (
    <div className="absolute top-[129px] left-[259px] flex h-[70px] w-[208px] flex-col justify-center rounded-2xl bg-white px-4 text-ink shadow-xl">
      <p className="text-base font-medium">UI/UX Design</p>
      <p className="mt-1 text-xs text-muted">200 Courses • 1000+ Students</p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative lg:h-[920px]">
      <div className="relative z-20 mx-auto flex max-w-[920px] flex-col items-center px-5 pt-9 text-center md:pt-[70px]">
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
              className="h-[52px] w-full rounded-full border-0 bg-white pl-12 pr-5 text-sm text-ink placeholder:text-muted focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-[46px] w-[104px] shrink-0 rounded-full bg-brand-lime font-semibold text-ink transition-transform hover:scale-105"
          >
            Search
          </button>
        </form>
      </div>

      {/* Stage = Figma x 145–1295, y 510–1024. Zoom shrinks it as a unit below lg. */}
      {/* ponytail: zoom makes card text small on phones; give mobile its own card layout if a mobile design arrives */}
      <div className="mt-10 flex justify-center lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0">
        <div className="relative h-[514px] w-[1150px] shrink-0 overflow-hidden [zoom:0.46] md:[zoom:0.8] lg:[zoom:1]">
          <div
            aria-hidden
            className="absolute top-[72px] left-0 size-[1149px] rounded-full border-[320px] border-brand-lime-bright"
          />
          <Image
            src="/assets/student-male.png"
            alt="Student learning online with a laptop and headphones"
            width={2888}
            height={2060}
            className="absolute top-0 left-[265px] h-auto w-[722px] max-w-none"
            priority
          />
          <TopicCard />
          <LearningProgressCard className="top-[141px] left-[697px] h-[131px]" />
          <HappyStudentsCard className="top-[327px] left-[183px] h-[121px]" />
        </div>
      </div>

      <Decorations items={decorations} className="h-[920px]" />
    </section>
  );
}
