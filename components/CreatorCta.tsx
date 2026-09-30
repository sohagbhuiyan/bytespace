import Image from "next/image";
import Link from "next/link";

// Positions are from the 1440×488 CTA frame, expressed relative to its horizontal center (x − 720).
const ornaments = [
  { src: "/images/ornaments/spring-lime.png", size: 385, x: -838, y: -162 },
  { src: "/images/ornaments/spring-white.png", size: 175, x: -542, y: 5, flip: true },
  { src: "/images/ornaments/cone-white.png", size: 188, x: -768, y: 225 },
  { src: "/images/ornaments/torus-lime.png", size: 342, x: -700, y: 299 },
  { src: "/images/ornaments/pyramid-lime.png", size: 188, x: 360, y: 0 },
  { src: "/images/ornaments/cylinder-white.png", size: 370, x: 506, y: 6 },
  { src: "/images/ornaments/coil-lime.png", size: 330, x: 390, y: 289 },
];

export default function CreatorCta() {
  return (
    <section className="bg-grid relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 max-md:opacity-60">
        {ornaments.map((o) => (
          <Image
            key={o.src}
            src={o.src}
            alt=""
            width={o.size}
            height={o.size}
            className={`absolute max-w-none ${o.flip ? "-scale-x-100" : ""}`}
            style={{ left: `calc(50% + ${o.x}px)`, top: o.y, width: o.size, height: o.size }}
          />
        ))}
      </div>

      <div className="container-page flex min-h-[488px] flex-col items-center justify-center gap-8 py-20 text-center lg:gap-10">
        <h2 className="max-w-[710px] font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-50 sm:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[964px] text-base leading-[1.6] text-shuttle-50 sm:text-lg">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          href="/signup"
          className="rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-shuttle-950 transition hover:brightness-95 active:scale-[0.98]"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
