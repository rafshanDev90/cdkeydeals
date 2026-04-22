"use client";

import MegaDropdown, { MegaDropdownColumn } from "./MegaDropdown";
import { GAMES_MENU_ICONS } from "./sharedIcons";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  name: string;
  href: string;
}

interface GamesDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  /** Live items from WooCommerce — injected by the parent Header */
  dynamicItems?: NavItem[];
}

// ─── Static fallback data (used if API is unavailable) ────────────────────────

const DEFAULT_PLATFORMS: NavItem[] = [
  { name: "Steam Keys", href: "/collections/steam-keys" },
  { name: "Xbox Keys", href: "/collections/xbox" },
  { name: "PlayStation Keys", href: "/collections/playstation" },
  { name: "Nintendo Keys", href: "/collections/nintendo" },
  { name: "Epic Games", href: "/collections/epic-games" },
  { name: "Uplay Keys", href: "/collections/game-keys" },
  { name: "Origin Keys", href: "/collections/game-keys" },
  { name: "Battle.net", href: "/collections/game-keys" },
];

const GAME_CATEGORIES: NavItem[] = [
  { name: "Action Games", href: "/collections/games" },
  { name: "Adventure Games", href: "/collections/games" },
  { name: "RPG Games", href: "/collections/games" },
  { name: "Strategy Games", href: "/collections/games" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GamesDropdown({
  isOpen,
  onToggle,
  onClose,
  dynamicItems,
}: GamesDropdownProps) {
  // Use shared icon configuration for consistent icons with Software menu
  const columns: MegaDropdownColumn[] = GAMES_MENU_ICONS.map((menu) => ({
    title: menu.title,
    icon: menu.icon,
    iconAlt: menu.iconAlt || menu.title,
    items: menu.items,
  }));

  return (
    <MegaDropdown
      triggerLabel="Games"
      triggerHref="/collections/games"
      triggerHoverColor="text-purple-600"
      isOpen={isOpen}
      onToggle={onToggle}
      onClose={onClose}
      columns={columns}
      columnHoverColor="text-purple-600"
    />
  );
}