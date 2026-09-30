import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      {/* Soft gradient blobs */}
      <Image
        src="/images/blob-testimonial-right.svg"
        alt=""
        width={1217}
        height={1217}
        className="pointer-events-none absolute top-[-281px] left-[calc(50%+82px)] -z-10 max-w-none"
      />
      <Image
        src="/images/blob-lime.svg"
        alt=""
        width={752}
        height={752}
        className="pointer-events-none absolute top-[-178px] left-[calc(50%-365px)] -z-10 max-w-none"
      />
      <Image
        src="/images/blob-testimonial-left.svg"
        alt=""
        width={1217}
        height={1217}
        className="pointer-events-none absolute top-[109px] left-[calc(50%-1202px)] -z-10 max-w-none"
      />

      <div className="container-page flex flex-col gap-12 pt-16 pb-20 lg:gap-[72px] lg:pt-[74px] lg:pb-[112px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-[43px]">
          <h2 className="max-w-[577px] font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-black sm:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-base leading-[1.6] text-black-700 sm:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <ul className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
                <Image src={t.avatar} alt={t.name} width={80} height={80} className="size-20 rounded-full" />
                <figcaption>
                  <p className="font-heading text-xl leading-7 font-semibold tracking-[-0.2px] text-black">{t.name}</p>
                  <p className="text-lg leading-[1.6] text-brand">{t.role}</p>
                </figcaption>
                <blockquote className="text-base leading-[1.6] text-black-700 sm:text-lg">&quot;{t.quote}&quot;</blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
