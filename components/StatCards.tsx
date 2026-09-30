import Image from "next/image";

const studentAvatars = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/n${n}.png`);

type CardProps = { className?: string };

export function LearningProgressCard({ className = "" }: CardProps) {
  return (
    <div className={`flex flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px] ${className}`}>
      <p className="text-sm leading-[1.2] font-medium text-shuttle-950">Learning Progress</p>
      <p className="w-[200px] font-heading text-5xl leading-[1.2] font-semibold tracking-[-0.48px] text-shuttle-950">
        55%
      </p>
      <div
        role="progressbar"
        aria-valuenow={55}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Learning progress"
        className="h-2 w-[200px] rounded-3xl bg-[#f6f6f6]"
      >
        <div className="h-full w-[112px] rounded-3xl bg-lime" />
      </div>
    </div>
  );
}

export function CategoryStatCard({ className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl bg-white p-4 backdrop-blur-[10px] ${className}`}>
      <p className="leading-[1.2] font-medium text-shuttle-950">UI/UX Design</p>
      <p className="flex items-center gap-2 text-xs leading-[1.6] whitespace-nowrap text-shuttle-400">
        200 Courses <span className="text-[10px] leading-[1.5]">•</span> 1000+ Students
      </p>
    </div>
  );
}

type HappyStudentsProps = CardProps & {
  /** "white" card (landing page) or "lime" card (auth pages) */
  tone?: "white" | "lime";
  /** Rating line is 12px in the hero and 10px bold elsewhere */
  compact?: boolean;
};

export function HappyStudentsCard({ className = "", tone = "white", compact = false }: HappyStudentsProps) {
  const lime = tone === "lime";
  return (
    <div
      className={`flex w-[258px] flex-col justify-center gap-2 rounded-2xl p-4 backdrop-blur-[10px] ${
        lime ? "bg-lime" : "bg-white"
      } ${className}`}
    >
      <div>
        <p className="leading-[1.2] font-medium text-shuttle-950">Happy Students</p>
        <p className="flex items-center">
          <span
            className={
              compact
                ? `text-[10px] leading-[1.5] ${lime ? "text-shuttle-800" : "text-shuttle-400"}`
                : "text-xs leading-[1.6] text-shuttle-400"
            }
          >
            <span className={`text-shuttle-950 ${compact ? "font-bold" : ""}`}>4.5 </span>
            (240)
          </span>
          <Image
            src={lime ? "/icons/star-blue.svg" : "/icons/star.svg"}
            alt=""
            width={13}
            height={13}
            className="mx-[1.5px] size-[13px]"
          />
        </p>
      </div>
      <div className="flex items-center">
        {studentAvatars.map((src) => (
          <Image key={src} src={src} alt="" width={43} height={43} className="-mr-4 size-[43px] rounded-full" />
        ))}
        <span
          className={`grid size-[43px] place-items-center rounded-full text-xs leading-[1.5] font-bold ${
            lime ? "bg-black text-shuttle-50" : "bg-lime text-shuttle-950"
          }`}
        >
          2K+
        </span>
      </div>
    </div>
  );
}
