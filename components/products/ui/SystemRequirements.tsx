"use client";

interface RequirementRow {
  component: string;
  minimum: string;
  recommended: string;
}

interface SystemRequirementsProps {
  requirements?: RequirementRow[];
}

const DEFAULT_REQUIREMENTS: RequirementRow[] = [
  { component: "Processor", minimum: "1 GHz 32-bit (x86)", recommended: "1 GHz or faster 64-bit" },
  { component: "RAM", minimum: "1 GB", recommended: "4 GB or higher" },
  { component: "Hard Disk", minimum: "16 GB available space", recommended: "32 GB available space" },
  { component: "Graphics", minimum: "DirectX 9 with WDDM", recommended: "DirectX 11 or higher" },
  { component: "Display", minimum: "800 x 600 resolution", recommended: "1280 x 800 or higher" },
];

export default function SystemRequirements({ requirements }: SystemRequirementsProps) {
  const rows = requirements || DEFAULT_REQUIREMENTS;

  return (
    <section className="mb-16 overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 font-headline text-foreground">System Requirements</h2>
      <div className="overflow-x-auto rounded-3xl shadow-sm border border-border">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="p-5 font-bold uppercase text-xs tracking-widest">Component</th>
              <th className="p-5 font-bold uppercase text-xs tracking-widest">Minimum</th>
              <th className="p-5 font-bold uppercase text-xs tracking-widest">Recommended</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="p-5 font-bold bg-muted/50 text-foreground">{row.component}</td>
                <td className="p-5 text-muted-foreground">{row.minimum}</td>
                <td className="p-5 text-muted-foreground">{row.recommended}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
