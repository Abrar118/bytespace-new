import Image from "next/image";
import { testimonials } from "@/data/landing";
import { type Glow, Glows } from "./decorations";

// Relative to the section top (page y 5068).
const glows: Glow[] = [
  { x: 1410.5, y: 327.5, r: 568.5, rgb: "203 252 1", alpha: 0.4 },
  { x: 731, y: 198, r: 336, rgb: "203 252 1", alpha: 0.6 },
  { x: 126.5, y: 717.5, r: 568.5, rgb: "0 59 226", alpha: 0.24 },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-5 pt-[74px] pb-[58px] md:px-8">
      <Glows items={glows} />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-black md:text-[44px] lg:mt-10">
            Discover What Our
            <br className="hidden md:block" /> Community Is Saying
          </h2>
          <p className="text-base leading-[1.6] text-body md:text-lg lg:w-[582px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:-mx-0.5 lg:mt-[71px] lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map(({ name, role, avatar, quote }) => (
            <figure key={name} className="rounded-[24px] bg-white p-6">
              <Image
                src={avatar}
                alt=""
                width={80}
                height={80}
                className="size-20 rounded-full object-cover"
              />
              <figcaption className="mt-[23px]">
                <p className="font-heading text-xl font-semibold leading-[1.5] text-black">
                  {name}
                </p>
                <p className="text-lg leading-[1.6] text-brand-blue">{role}</p>
              </figcaption>
              <blockquote className="mt-6 text-lg leading-[1.6] text-body">
                "{quote}"
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
