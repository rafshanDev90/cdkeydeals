"use client";

interface SpecItem {
  label: string;
  value: string;
  colSpan?: number;
}

interface TechnicalSpecsProps {
  specs: SpecItem[];
}

export default function TechnicalSpecs({ specs }: TechnicalSpecsProps) {
  if (!specs || specs.length === 0) return null;

  const getCornerClass = (index: number, total: number, colSpan?: number) => {
    const isFirst = index === 0;
    const lastIndex = total - 1;
    const isLast = index === lastIndex;

    let classes = "";
    if (isFirst) classes += " rounded-tl-3xl";
    if (index === 2) classes += " rounded-tr-3xl";
    return classes;
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 font-headline text-foreground">Technical Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] overflow-hidden rounded-3xl">
        {specs.map((spec, index) => {
          const isFirstRow = index < 3;
          const isLastRow = index >= specs.length - (specs.length % 3 || 3);
          const isFirstCol = index % 3 === 0;
          const isLastCol = index % 3 === 2;
          const isAlternate = Math.floor(index / 3) % 2 === 0;

          const bgClass = isAlternate
            ? "bg-muted/40 dark:bg-muted/30"
            : "bg-muted/70 dark:bg-muted/50";

          return (
            <div
              key={index}
              className={`${bgClass} p-6 ${spec.colSpan === 2 ? "md:col-span-2" : ""}`}
              style={{ gridColumn: spec.colSpan === 2 ? "span 2" : undefined }}
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">
                {spec.label}
              </p>
              <p className="font-semibold text-foreground">{spec.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
