import Link from "next/link";
import BrandMark from "@/components/BrandMark";

const columns = [
  { title: "Browse", links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"] },
  { title: "Categories", links: ["Development", "Marketing", "Photography", "Finance", "Sport"] },
  { title: "Platform", links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"] },
];

const legal = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
  return (
    <footer className="border-t border-shuttle-100 bg-white">
      <div className="container-page flex flex-col gap-16 pt-14 pb-10 lg:gap-[130px] lg:pt-[71px] lg:pb-[52px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[92px]">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-10 lg:w-[528px] lg:gap-[45px]">
            <div className="flex flex-col gap-4">
              <BrandMark />
              <p className="text-sm leading-[1.6] text-shuttle-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <form className="flex flex-col gap-6" action="#">
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                <label className="flex h-[52px] w-full items-center rounded-full border border-shuttle-200 bg-white px-6 sm:w-[376px]">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-base leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-950"
                  />
                </label>
                <button
                  type="submit"
                  className="h-[52px] rounded-3xl bg-lime px-6 py-3 text-lg leading-[1.2] font-medium text-shuttle-950 transition hover:brightness-95 sm:h-auto sm:self-start"
                >
                  Search
                </button>
              </div>
              <p className="max-w-[504px] text-xs leading-[1.6] text-shuttle-950">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Link columns (headings are invisible in the design, kept for screen readers) */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:flex lg:gap-10 lg:pt-12">
            {columns.map((col) => (
              <div key={col.title} className="lg:w-[167px]">
                <h3 className="sr-only">{col.title}</h3>
                <ul className="flex flex-col gap-4">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="text-sm leading-[1.6] text-shuttle-950 hover:text-brand">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-shuttle-200 pt-4 text-xs leading-[1.6] text-shuttle-950 sm:flex-row sm:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legal.map((l) => (
              <li key={l}>
                <Link href="#" className="hover:text-brand">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
