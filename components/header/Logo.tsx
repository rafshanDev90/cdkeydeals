import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 180, height = 33 }: LogoProps) {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <Image
        src="/images/CDkeyDeals Logo.svg"
        alt="CDKeyDeals Logo"
        width={width}
        height={height}
        className="h-7 w-auto object-contain"
        priority
        quality={100}
        unoptimized={false}
        
        sizes="(max-width: 768px) 84px, 84px"
      />
    </Link>
  );
}
