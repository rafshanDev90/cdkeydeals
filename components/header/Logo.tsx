import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <Image
        src="/images/CDkeyDeals.com.png"
        alt="CDKeyDeals Logo"
        width={80}
        height={24}
        className="h-7 w-auto object-contain"
        priority
        quality={95}
        unoptimized={false}
        
        sizes="(max-width: 768px) 84px, 84px"
      />
    </Link>
  );
}
