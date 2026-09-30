import Image from "next/image";
import Link from "next/link";

const paths = [
  { label: "Design", icon: "/icons/cat-design.svg" },
  { label: "Development", icon: "/icons/cat-development.svg" },
  { label: "IT & Software", icon: "/icons/cat-it.svg" },
  { label: "Business", icon: "/icons/cat-business.svg" },
  { label: "Marketing", icon: "/icons/cat-marketing.svg" },
  { label: "Photography", icon: "/icons/cat-photography.svg" },
];

export default function LearningPaths() {
  return (
    <section className="container-page pt-14 pb-20 lg:pt-[72px] lg:pb-[120px]">
      <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
        <h2 className="font-heading text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-4xl">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="text-base leading-[1.6] text-shuttle-400 sm:text-lg">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
          various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully
          curated categories.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-[68px] lg:grid-cols-6 lg:gap-10">
        {paths.map((p) => (
          <li key={p.label}>
            <Link
              href="#courses"
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-200 transition hover:border-brand hover:shadow-lg lg:size-[167px]"
            >
              <span className="grid place-items-center rounded-[40px] bg-lime p-3">
                <Image src={p.icon} alt="" width={36} height={36} />
              </span>
              <span className="text-lg leading-[1.2] font-medium whitespace-nowrap text-shuttle-950 sm:text-xl">
                {p.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
