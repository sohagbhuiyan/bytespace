import Image from "next/image";

export type Course = {
  title: string;
  image: string;
  creator?: string;
  lessons?: number;
  duration?: string;
  comments?: number;
  level?: string;
  rating?: number;
  learners?: string;
  price?: number;
};

const learnerAvatars = [
  "/images/Ellipse.png",
  "/images/Ellipse1.png",
  "/images/Ellipse2.png",
  "/images/Ellipse3.png",
];

type Props = {
  course: Course;
  /** "light" = lime badge + gray star (course grid), "dark" = black badge + lime star (floating showcase cards) */
  variant?: "light" | "dark";
  className?: string;
};

export default function CourseCard({ course, variant = "light", className = "" }: Props) {
  const {
    title,
    image,
    creator = "purepearl studio",
    lessons = 17,
    duration = "2 hours 16 mins",
    comments = 59,
    level = "Beginner",
    rating = 4.5,
    learners = "26+",
    price = 25,
  } = course;

  return (
    <article
      className={`flex flex-col gap-5 overflow-hidden rounded-3xl border border-shuttle-200 bg-white p-[15px] ${className}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[341/195] w-full overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
        <ul className="absolute bottom-3 left-3 flex gap-2 sm:gap-3">
          {[`${lessons} Lessons`, duration, `${comments} Comments`].map((chip) => (
            <li
              key={chip}
              className="rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 text-xs leading-[1.2] font-medium whitespace-nowrap text-black-700 backdrop-blur-[4px]"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-heading text-xl leading-7 font-semibold tracking-[-0.2px] text-black">
              {title}
            </h3>
            <p className="text-xs leading-5 text-black-700">
              by <span className="text-brand">{creator}</span>
            </p>
          </div>
          <p className="flex shrink-0 items-center text-lg leading-7 text-black-700">
            {rating}
            <Image
              src={variant === "dark" ? "/icons/star-outline-alt.svg" : "/icons/star-outline.svg"}
              alt=""
              width={24}
              height={24}
            />
            <span className="sr-only"> out of 5 stars</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-3xl bg-shuttle-50 px-3 py-1.5 text-xs leading-5 font-medium text-shuttle-700">
            <Image src="/icons/signal.svg" alt="" width={20} height={20} />
            {level}
          </span>
          <div className="flex items-center">
            {learnerAvatars.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={32}
                height={32}
                className="-mr-2 size-8 rounded-full"
              />
            ))}
            <span
              className={`grid size-8 place-items-center rounded-full text-xs leading-5 font-medium ${
                variant === "dark" ? "bg-black text-white" : "bg-lime text-shuttle-950"
              }`}
            >
              {learners}
            </span>
          </div>
        </div>

        <p className="flex items-end">
          <span className="font-heading text-xl leading-6 font-semibold tracking-[-0.2px] text-brand">
            ${price}
          </span>
          <span className="text-xs leading-[1.6] text-black-700">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
