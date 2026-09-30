import Image from "next/image";

const partners = [
  { src: "/images/Frame.png", width: 167, height: 41 },
  { src: "/images/Frame1.png", width: 168, height: 41 },
  { src: "/images/Frame2.png", width: 170, height: 41 },
  { src: "/images/Frame3.png", width: 170, height: 41 },
  { src: "/images/Frame4.png", width: 169, height: 42 },
];

export default function LogoStrip() {
  return (
    <section aria-label="Our partners" className="bg-shuttle-50 py-12 lg:py-20">
      <ul className="container-page flex flex-wrap items-end justify-center gap-x-10 gap-y-8 lg:gap-x-[72px]">
        {partners.map((p, i) => (
          <li key={p.src}>
            <Image
              src={p.src}
              alt={`Partner logo ${i + 1}`}
              width={p.width}
              height={p.height}
              className="h-8 w-auto sm:h-auto"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
