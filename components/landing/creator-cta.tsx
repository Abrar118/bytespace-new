import {
  type Decoration,
  Decorations,
  fromEdge,
  fromFrame,
} from "./decorations";

// Figma px relative to the section top (page y 4580).
const decorations: Decoration[] = [
  {
    src: "/assets/lime-cone.png",
    w: 499,
    h: 549,
    left: fromFrame(1105.4),
    top: 21.7,
    width: 124.7,
  },
  {
    src: "/assets/lime-coil-tall.png",
    w: 495,
    h: 649,
    left: fromFrame(1179.5),
    top: 327.5,
    width: 190.2,
  },
  {
    src: "/assets/lime-coil.png",
    w: 563,
    h: 598,
    left: fromEdge(-57.2),
    top: -97.6,
    width: 252.2,
  },
  {
    src: "/assets/white-squiggle-small.png",
    w: 704,
    h: 704,
    left: fromFrame(178.8),
    top: 5,
    width: 176,
  },
  {
    src: "/assets/white-cone-upright.png",
    w: 512,
    h: 609,
    left: fromEdge(-13.5),
    top: 242,
    width: 128,
  },
  {
    src: "/assets/lime-torus.png",
    w: 952,
    h: 872,
    left: fromFrame(69.5),
    top: 358.3,
    width: 238.1,
  },
  {
    src: "/assets/white-capsule.png",
    w: 1093,
    h: 1198,
    right: fromEdge(-104.1),
    top: 40.9,
    width: 273.2,
  },
];

export function CreatorCta() {
  return (
    <section
      id="creators"
      className="grid-backdrop relative overflow-hidden px-5 py-20 text-center text-white md:px-8 lg:h-[488px] lg:pt-[86px] lg:pb-0"
    >
      <Decorations items={decorations} className="h-full" />
      <div className="relative mx-auto max-w-[980px]">
        <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] md:text-[44px]">
          Unlock Your Potential as a
          <br className="hidden md:block" /> Creator with ByteSpace
        </h2>
        <p className="mt-6 text-base leading-[1.6] md:text-lg lg:mt-[39px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a
          <br className="hidden lg:block" /> part of a community comprising over
          10,000 local and international creators. Utilize our Course Editor,
          and showcase your expertise by publishing your finest course on the
          ByteSpace Course Library.
        </p>
        {/* Non-interactive until a signup route exists, like the header actions. */}
        <span className="mt-8 inline-grid h-[46px] w-[172px] place-items-center rounded-full bg-brand-lime text-lg text-ink lg:mt-[41px]">
          Join as Creator
        </span>
      </div>
    </section>
  );
}
