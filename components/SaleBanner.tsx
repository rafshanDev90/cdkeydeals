"use client";

export default function SaleBanner() {
  const saleText = "Sale up to 50%";
  const repeatCount = 20;

  return (
    <div className="bg-[#ff6b35] py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {Array(repeatCount)
          .fill(null)
          .map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-8 mx-8 text-white font-bold text-lg"
            >
              <span>{saleText}</span>
              <span className="text-black/30">*</span>
            </span>
          ))}
        {Array(repeatCount)
          .fill(null)
          .map((_, i) => (
            <span
              key={`dup-${i}`}
              className="inline-flex items-center gap-8 mx-8 text-white font-bold text-lg"
            >
              <span>{saleText}</span>
              <span className="text-black/30">*</span>
            </span>
          ))}
      </div>
    </div>
  );
}
