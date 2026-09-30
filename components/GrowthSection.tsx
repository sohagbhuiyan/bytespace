import Image from "next/image";
import CourseCard from "@/components/CourseCard";
import { HappyStudentsCard, LearningProgressCard } from "@/components/StatCards";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const perks = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

export default function GrowthSection() {
  return (
    <section id="creators" className="relative isolate scroll-mt-8 overflow-hidden bg-surface">
      {/* Soft gradient blobs */}
      <Image
        src="/images/blob-growth.svg"
        alt=""
        width={2536}
        height={2471}
        className="pointer-events-none absolute top-[-506px] left-[calc(50%-1268px)] -z-10 max-w-none"
      />
      <Image
        src="/images/blob-lime.svg"
        alt=""
        width={752}
        height={752}
        className="pointer-events-none absolute top-[906px] left-[calc(50%-1047px)] -z-10 max-w-none"
      />

      <div className="container-page flex flex-col gap-16 py-20 lg:gap-[72px] lg:py-[120px]">
        {/* ---------- Row 1 ---------- */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-[63px]">
          <div className="flex max-w-[577px] flex-col gap-8 lg:flex-1 lg:gap-10 xl:w-[574px] xl:flex-none">
            <h2 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-950 sm:text-[44px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] text-base leading-[1.6] text-shuttle-700 sm:text-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="flex gap-10 sm:gap-14">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="text-base leading-[1.6] text-shuttle-700 sm:text-lg">{s.label}</dt>
                  <dd className="font-heading text-[32px] leading-[44px] font-medium tracking-[-0.01em] text-brand sm:text-4xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 621×552 design canvas */}
          <div className="relative h-[287px] w-[323px] shrink-0 sm:h-[469px] sm:w-[528px] lg:h-[552px] lg:w-[621px]">
            <div className="absolute top-0 left-0 h-[552px] w-[621px] origin-top-left scale-[0.52] sm:scale-[0.85] lg:scale-100">
              <CourseCard
                variant="dark"
                course={{ title: "Learn Figma from Basic", image: "/images/courses/figma.png" }}
                className="absolute top-0 left-0 h-[384px] w-[373px]"
              />
              <Image
                src="/images/boy.png"
                alt="Student with headphones holding a laptop"
                width={577}
                height={540}
                className="shadow-cutout absolute top-3 left-0 h-[540px] w-[577px] object-cover"
              />
              <LearningProgressCard className="absolute top-[213px] left-[345px]" />
              <Image
                src="/images/ornaments/coil-lime.png"
                alt=""
                width={215}
                height={216}
                className="float absolute top-[67px] left-[406px] size-[215px]"
              />
            </div>
          </div>
        </div>

        {/* ---------- Row 2 ---------- */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-[79px]">
          {/* 541×596 design canvas */}
          <div className="relative order-2 h-[358px] w-[325px] shrink-0 sm:h-[596px] sm:w-[541px] lg:order-none">
            <div className="absolute top-0 left-0 h-[596px] w-[541px] origin-top-left scale-[0.6] sm:scale-100">
              <RevenueCard className="absolute top-11 left-0" />
              <YearToDateCard className="absolute top-[194px] left-0" />
              <div className="shadow-cutout absolute top-0 left-7 h-[596px] w-[435px] overflow-hidden">
                <Image
                  src="/images/girl.png"
                  alt="Smiling creator with headphones holding a tablet"
                  width={683}
                  height={683}
                  className="absolute top-0 left-[-28.51%] h-[114.6%] w-[157.01%] max-w-none"
                />
              </div>
              <HappyStudentsCard compact className="absolute top-[413px] left-[283px]" />
              <Image
                src="/images/ornaments/spring-lime.png"
                alt=""
                width={215}
                height={216}
                className="float-slow absolute top-[114px] left-[305px] size-[215px]"
              />
            </div>
          </div>

          <div className="flex max-w-[580px] flex-col gap-8 lg:gap-10">
            <h2 className="max-w-[391px] font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-950 sm:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="text-base leading-[1.6] text-shuttle-700 sm:text-lg">
              <strong className="font-bold text-shuttle-950">ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {perks.map((perk) => (
                <li key={perk} className="flex items-end gap-2 text-lg leading-[1.2] font-medium text-shuttle-950">
                  <Image src="/icons/check-circle.svg" alt="" width={24} height={24} />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bar() {
  return (
    <div className="h-2 w-[200px] rounded-3xl bg-white">
      <div className="h-full w-[112px] rounded-3xl bg-lime" />
    </div>
  );
}

function Delta() {
  return (
    <span className="rounded-3xl bg-lime-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-shuttle-950">
      +12$
    </span>
  );
}

function RevenueCard({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl bg-brand p-4 text-shuttle-50 backdrop-blur-[10px] ${className}`}>
      <div>
        <p className="leading-[1.2] font-medium">Total Revenue</p>
        <p className="text-[10px] leading-[1.2]">July 1-28</p>
      </div>
      <div className="flex w-[200px] items-center justify-between">
        <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.24px]">$120.29</p>
        <Delta />
      </div>
      <Bar />
    </div>
  );
}

function YearToDateCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-[134px] flex-col items-start gap-2 rounded-2xl bg-brand p-4 text-shuttle-50 backdrop-blur-[10px] ${className}`}
    >
      <div>
        <p className="leading-[1.2] font-medium">Year to Date</p>
        <p className="text-[10px] leading-[1.2]">2023</p>
      </div>
      <p className="font-heading text-2xl leading-8 font-semibold tracking-[-0.24px] whitespace-nowrap">$1,200.38</p>
      <Delta />
    </div>
  );
}
