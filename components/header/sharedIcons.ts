// Shared icon configuration for dropdown menus
// This ensures DRY principle - icons defined once, reused across multiple dropdowns

export interface MenuItemWithIcon {
  title: string;
  icon: string; // image path
  iconAlt?: string;
  items: { name: string; href: string }[];
}

// Software menu icons configuration
export const SOFTWARE_MENU_ICONS: MenuItemWithIcon[] = [
  {
    title: "Microsoft Software",
    icon: "/images/windows.png",
    iconAlt: "Microsoft Software",
    items: [
      { name: "Windows 10/11", href: "/collections/software" },
      { name: "Office 365", href: "/collections/software" },
      { name: "Project", href: "/collections/software" },
      { name: "Visio", href: "/collections/software" },
    ],
  },
  {
    title: "Creative & Productivity",
    icon: "/images/catagories.png",
    iconAlt: "Creative Software",
    items: [
      { name: "Adobe Photoshop", href: "/collections/software" },
      { name: "Adobe Illustrator", href: "/collections/software" },
      { name: "Video Editing Tools", href: "/collections/software" },
    ],
  },
  {
    title: "Security Software",
    icon: "/images/catagories.png",
    iconAlt: "Security Software",
    items: [
      { name: "VPN & Privacy Tools", href: "/collections/software" },
      { name: "Password Manager", href: "/collections/software" },
      { name: "Malware Removal Tools", href: "/collections/software" },
    ],
  },
  {
    title: "Utilities & Tools",
    icon: "/images/catagories.png",
    iconAlt: "Utilities",
    items: [
      { name: "File Compression", href: "/collections/software" },
      { name: "Backup Tools", href: "/collections/software" },
      { name: "Driver Updaters", href: "/collections/software" },
    ],
  },
];

// Games menu icons configuration - reusing same icon system
export const GAMES_MENU_ICONS: MenuItemWithIcon[] = [
  {
    title: "Popular Platforms",
    icon: "/images/windows.png", // Reusing same icon as Microsoft Software
    iconAlt: "Gaming Platforms",
    items: [
      { name: "Steam Keys", href: "/collections/steam-keys" },
      { name: "Xbox Keys", href: "/collections/xbox" },
      { name: "PlayStation Keys", href: "/collections/playstation" },
      { name: "Nintendo Keys", href: "/collections/nintendo" },
    ],
  },
  {
    title: "Game Categories",
    icon: "/images/catagories.png", // Reusing same icon as Creative & Productivity
    iconAlt: "Game Categories",
    items: [
      { name: "Action Games", href: "/collections/games" },
      { name: "Adventure Games", href: "/collections/games" },
      { name: "RPG Games", href: "/collections/games" },
      { name: "Strategy Games", href: "/collections/games" },
    ],
  },
];
