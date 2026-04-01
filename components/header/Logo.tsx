import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0 group">
      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
        <span className="text-white font-bold text-sm">CD</span>
      </div>
      <span className="hidden sm:block text-lg font-bold text-gray-900">
        cdkey<span className="text-indigo-600">Deals</span>
      </span>
    </Link>
  );
}
