import Image from "next/image";
import { CategoryStatCard, HappyStudentsCard, LearningProgressCard } from "@/components/StatCards";

export default function Hero() {
  return (
    <section className="relative isolate">
<div
  aria-hidden
  className="pointer-events-none absolute inset-0 -z-10 origin-top max-md:opacity-60 max-sm:scale-[0.45] sm:max-lg:scale-[0.7]"
>
  <Image
    src="/images/bgclip.png"
    alt=""
    width={1440}
    height={804}
    preload
    className="h-auto w-[760px] max-w-none sm:w-[1100px] lg:w-full lg:min-w-[1440px]"
  />
</div>

      {/* ---------- Text content ---------- */}
      <div className="container-page flex flex-col items-center gap-10 pt-8 text-center sm:pt-12 lg:gap-[60px] lg:pt-[49px]">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <h1 className="max-w-[935px] font-heading text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-6xl lg:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[820px] text-base leading-[1.6] text-shuttle-100 sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        {/* Search */}
        <form
          role="search"
          action="#courses"
          className="flex w-full max-w-[461px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
        >
          <label className="flex h-[52px] w-full items-center gap-2 rounded-3xl bg-white px-6 py-3 sm:w-[461px]">
            <Image src="/icons/search.svg" alt="" width={24} height={24} />
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-lg leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400"
            />
          </label>
          <button
            type="submit"
            className="h-[52px] rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-shuttle-950 transition hover:brightness-95 active:scale-[0.98] sm:h-auto sm:self-start"
          >
            Search
          </button>
        </form>
      </div>

      {/* ---------- Hero visual: 1440×512 design canvas, scaled down on small screens ---------- */}
      <div className="relative h-[246px] overflow-hidden sm:h-[307px] md:h-[384px] lg:h-[512px]">
        <div className="absolute top-0 left-1/2 h-[512px] w-[1440px] origin-top -translate-x-1/2 scale-[0.48] sm:scale-[0.6] md:scale-75 lg:scale-100">
          {/* Lime semicircle */}
          <Image
            src="/images/curve.png"
            alt=""
            width={1149}
            height={442}
            className="absolute top-[70px] left-[145px]"
          />

          {/* Student */}
          <Image
            src="/images/Image.png"
            alt="Smiling student with headphones holding a laptop"
            width={722}
            height={515}
            preload
            className="absolute top-0 left-[431px]"
          />

          <CategoryStatCard className="absolute top-[127px] left-[404px]" />
          <LearningProgressCard className="absolute top-[139px] left-[842px]" />
          <HappyStudentsCard className="absolute top-[325px] left-[328px]" />
        </div>
      </div>
    </section>
  );
}
