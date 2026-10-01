import Image from "next/image";
import BrandMark from "@/components/BrandMark";
import CourseCard from "@/components/CourseCard";
import { HappyStudentsCard } from "@/components/StatCards";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function AuthLayout({ title, description, children }: Props) {
  return (
    <div className="bg-grid min-h-screen overflow-hidden">
      <header className="container-page flex h-20 items-center lg:h-[120px] lg:items-start lg:pt-[35px] text-shuttle-50">
      
        <BrandMark withText={false} withTextwhite={true} />
      </header>

      <main className="container-page flex flex-col gap-10 pb-16 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:pb-[120px]">
        <div className="flex flex-col lg:w-[475px]">
          <div className="flex flex-col gap-4 text-shuttle-50 lg:min-h-[127px]">
            <h1 className="font-heading text-xl leading-[1.2] font-semibold tracking-[-0.2px]">{title}</h1>
            <p className="text-base leading-[1.6] sm:text-lg">{description}</p>
          </div>

          <div aria-hidden className="relative mt-[58px] hidden h-[585px] w-[548px] -translate-x-[25px] lg:block">
            <CourseCard
              variant="dark"
              course={{ title: "Build Digital Asset", image: "/images/courses/digital-asset.png" }}
              className="absolute top-[89px] left-[25px] h-[384px] w-[373px]"
            />
            <CourseCard
              variant="dark"
              course={{ title: "the Power of Big Data", image: "/images/courses/big-data.png" }}
              className="absolute top-0 left-[136px] h-[384px] w-[373px]"
            />
            <HappyStudentsCard tone="lime" compact className="absolute top-[435px] left-[251px]" />
            <Image
              src="/images/ornaments/spring-white.png"
              alt=""
              width={175}
              height={175}
              className="float absolute top-[321px] left-[373px] -scale-x-100"
            />
            <Image
              src="/images/ornaments/torus-lime.png"
              alt=""
              width={146}
              height={146}
              className="float-slow absolute top-[15px] left-[54px]"
            />
            <Image
              src="/images/ornaments/pyramid-lime.png"
              alt=""
              width={188}
              height={188}
              className="float absolute top-[397px] left-0"
            />
          </div>
        </div>

        <section className="w-full rounded-3xl bg-white px-6 py-10 sm:px-[63px] sm:py-[61px] lg:min-h-[784px] lg:w-[579px] lg:shrink-0">
          {children}
        </section>
      </main>
    </div>
  );
}
