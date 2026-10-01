import Image from "next/image";
import Link from "next/link";

type Props = {

  withText?: boolean;
  withTextwhite?: boolean;
  className?: string;
};

export default function BrandMark({ withText = true, withTextwhite = true, className = "" }: Props) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={`inline-flex items-start gap-2 ${className}`}>
      <Image src="/icons/logo-mark.svg" alt="" width={29} height={32} className="h-[31.5px] w-[28.875px]" />
      {withText && (
        <span className="mt-[7px] font-display text-2xl leading-none font-bold text-shuttle-950">ByteSpace</span>
      )}
            {withTextwhite && (
        <span className="mt-[7px] font-display text-2xl leading-none font-bold text-white">ByteSpace</span>
      )}
    </Link>
  );
}
