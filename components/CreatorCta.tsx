import Image from "next/image";
import Link from "next/link";

type Ornament = {
  src: string;
  size: number;
  /** distance from the pinned edge (left or right) in the 1440 design */
  offset: number;
  /** top offset inside the section */
  y: number;
  flip?: boolean;
};

// Left group: offset = 720 + x   (x = position relative to the 1440 frame's center)
const leftOrnaments: Ornament[] = [
  { src: "/images/ornaments/spring-lime.png", size: 385, offset: -118, y: -162 },
  { src: "/images/ornaments/spring-white.png", size: 175, offset: 178, y: 5, flip: true },
  { src: "/images/ornaments/cone-white.png", size: 188, offset: -48, y: 225 },
  { src: "/images/ornaments/torus-lime.png", size: 342, offset: 20, y: 299 },
];

// Right group: offset = 720 - x - size
const rightOrnaments: Ornament[] = [
  { src: "/images/ornaments/pyramid-lime.png", size: 188, offset: 172, y: 0 },
  { src: "/images/ornaments/cylinder-white.png", size: 370, offset: -156, y: 6 },
  { src: "/images/ornaments/coil-lime.png", size: 330, offset: 0, y: 289 },
];

function OrnamentImage({ o, side }: { o: Ornament; side: "left" | "right" }) {
  return (
    <Image
      src={o.src}
      alt=""
      width={o.size}
      height={o.size}
      className={`absolute max-w-none ${o.flip ? "-scale-x-100" : ""}`}
      style={{ [side]: o.offset, top: o.y, width: o.size, height: o.size }}
    />
  );
}

export default function CreatorCta() {
  return (
    <section className="bg-grid relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 max-md:opacity-60">
        {/* Left group: pinned to the left edge */}
        <div className="absolute inset-y-0 left-0 origin-top-left max-sm:scale-[0.45] sm:max-lg:scale-[0.7]">
          {leftOrnaments.map((o) => (
            <OrnamentImage key={o.src} o={o} side="left" />
          ))}
        </div>

        {/* Right group: pinned to the right edge */}
        <div className="absolute inset-y-0 right-0 origin-top-right max-sm:scale-[0.45] sm:max-lg:scale-[0.7]">
          {rightOrnaments.map((o) => (
            <OrnamentImage key={o.src} o={o} side="right" />
          ))}
        </div>
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
