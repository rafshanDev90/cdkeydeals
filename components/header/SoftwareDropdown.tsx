"use client";

import MegaDropdown, { MegaDropdownColumn } from "./MegaDropdown";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  name: string;
  href: string;
}

interface SoftwareDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  /** Live items from WooCommerce — injected by the parent Header */
  dynamicItems?: NavItem[];
}

// ─── Static fallback data ─────────────────────────────────────────────────────

const DEFAULT_SOFTWARE: NavItem[] = [
  { name: "Windows Keys",     href: "/collections/software" },
  { name: "Microsoft Office", href: "/collections/software" },
  { name: "Adobe Software",   href: "/collections/software" },
  { name: "Antivirus",        href: "/collections/software" },
  { name: "VPN Services",     href: "/collections/software" },
  { name: "Project & Visio",  href: "/collections/software" },
  { name: "Utilities",        href: "/collections/software" },
  { name: "SQL Server",       href: "/collections/software" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SoftwareDropdown({
  isOpen,
  onToggle,
  onClose,
  dynamicItems,
}: SoftwareDropdownProps) {
  const items = dynamicItems && dynamicItems.length > 0 ? dynamicItems : DEFAULT_SOFTWARE;

  const columns: MegaDropdownColumn[] = [
    {
      title: "Operating Systems",
      items: items.slice(0, 3),
    },
    {
      title: "Productivity",
      items: items.slice(3, 6),
    },
    {
      title: "More Software",
      items: items.slice(6),
    },
  ];

  return (
    <MegaDropdown
      triggerLabel="Software"
      triggerHref="/collections/software"
      triggerHoverColor="text-indigo-600"
      isOpen={isOpen}
      onToggle={onToggle}
      onClose={onClose}
      columns={columns}
      columnHoverColor="text-indigo-600"
    />
  );
}
