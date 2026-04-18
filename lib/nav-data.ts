/**
 * lib/nav-data.ts
 * Server-side helper to fetch and normalize WooCommerce categories
 * into data structures suitable for the Header navigation menus.
 *
 * Uses Next.js fetch caching (revalidate: 300) so the whole
 * app benefits from a single cached request.
 *
 * SERIALIZATION RULE: All exported functions return plain JSON-serializable
 * values (no functions, no class instances, no Symbols). This ensures they
 * are safe to pass from Server Components to Client Components as props.
 */

import { getWCCategories, WCCategory } from './wordpress';

// ─── Slug → icon key mapping ──────────────────────────────────────────────────
const SLUG_TO_ICON: Record<string, string> = {
  'steam-keys': 'steam',
  steam: 'steam',
  'xbox-keys': 'xbox',
  'xbox-live': 'xbox',
  xbox: 'xbox',
  'playstation-keys': 'playstation',
  'ps-keys': 'playstation',
  playstation: 'playstation',
  'nintendo-keys': 'nintendo',
  nintendo: 'nintendo',
  'epic-games': 'epic',
  epic: 'epic',
  'uplay-keys': 'uplay',
  uplay: 'uplay',
  ubisoft: 'uplay',
  'gift-cards': 'gift-card',
  'gaming-gift-cards': 'gift-card',
};

// ─── Slug → navigation path mapping ──────────────────────────────────────────
const SLUG_TO_PATH: Record<string, string> = {
  'steam-keys': '/collections/steam-keys',
  steam: '/collections/steam-keys',
  'xbox-keys': '/collections/xbox',
  'xbox-live': '/collections/xbox',
  xbox: '/collections/xbox',
  'playstation-keys': '/collections/playstation',
  playstation: '/collections/playstation',
  'nintendo-keys': '/collections/nintendo',
  nintendo: '/collections/nintendo',
  'epic-games': '/collections/epic-games',
  'uplay-keys': '/collections/game-keys',
  uplay: '/collections/game-keys',
  ubisoft: '/collections/game-keys',
  'gift-cards': '/collections/gift-cards',
  games: '/collections/games',
  software: '/collections/software',
};

// ─── Keyword buckets for menu classification ──────────────────────────────────
const GAME_SLUGS   = ['steam', 'xbox', 'playstation', 'nintendo', 'epic', 'uplay', 'ubisoft', 'battle', 'game', 'ea'];
const SOFTWARE_SLUGS = ['software', 'microsoft', 'office', 'adobe', 'antivirus', 'vpn', 'windows', 'sql'];
const GIFTCARD_SLUGS = ['gift', 'card', 'google', 'amazon', 'itunes', 'apple', 'netflix', 'spotify'];

// ─── Exported Types ───────────────────────────────────────────────────────────

/** Minimal serializable nav item: safe to cross the Server→Client boundary. */
export interface NavItem {
  name: string;
  href: string;
}

export interface NavCategory {
  id: number;
  name: string;
  slug: string;
  href: string;
  icon: string;
  count: number;
  image: string | null;
}

/**
 * The single, fully-serializable shape passed from DynamicHeader (Server)
 * to HeaderClient (Client). Contains NO functions – only plain data.
 */
export interface HeaderNavData {
  gameItems: NavItem[];
  softwareItems: NavItem[];
  giftCardItems: NavItem[];
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function slugMatchesAny(slug: string, keywords: string[]) {
  return keywords.some(k => slug.includes(k));
}

// ─── Primary exported function ────────────────────────────────────────────────

/**
 * Returns structured navigation categories suitable for:
 *  - CategoryTile "Shop by Category" section (homepage)
 *  - GamesDropdown / SoftwareDropdown header menu items
 *
 * Falls back gracefully if the API is unavailable.
 */
export async function getNavCategories(params?: {
  parentId?: number;
  limit?: number;
}): Promise<NavCategory[]> {
  try {
    const raw: WCCategory[] = await getWCCategories({
      per_page: 100,
      ...(params?.parentId !== undefined ? { parent: params.parentId } : {}),
    });

    const filtered = raw
      .filter(cat => cat.slug !== 'uncategorized')
      .filter(cat => (params?.parentId !== undefined ? cat.parentId === params.parentId : true));

    const mapped: NavCategory[] = filtered.map(cat => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      href: SLUG_TO_PATH[cat.slug] ?? `/collections/${cat.slug}`,
      icon: SLUG_TO_ICON[cat.slug] ?? 'gift-card',
      count: cat.count,
      image: cat.image,
    }));

    return params?.limit ? mapped.slice(0, params.limit) : mapped;
  } catch {
    return [];
  }
}

/**
 * Returns the top-N category tiles for the homepage "Shop by Category" strip.
 */
export async function getHomepageCategoryTiles(limit = 8): Promise<NavCategory[]> {
  return getNavCategories({ limit });
}

/**
 * Returns a single serializable HeaderNavData object for the Header.
 * Safe to pass directly from a Server Component to `HeaderClient`.
 *
 * Falls back to static defaults if the API is unavailable.
 */
export async function getMenuData(): Promise<HeaderNavData> {
  // ── Static fallbacks (used when API returns nothing) ──────────────────────
  const FALLBACK_GAMES: NavItem[] = [
    { name: 'Steam Keys',        href: '/collections/games' },
    { name: 'Xbox Keys',         href: '/collections/games' },
    { name: 'PlayStation Keys',  href: '/collections/games' },
    { name: 'Nintendo Keys',     href: '/collections/games' },
    { name: 'Epic Games',        href: '/collections/games' },
    { name: 'Uplay Keys',        href: '/collections/games' },
    { name: 'Origin Keys',       href: '/collections/games' },
    { name: 'Battle.net',        href: '/collections/games' },
  ];
  const FALLBACK_SOFTWARE: NavItem[] = [
    { name: 'Windows Keys',    href: '/collections/software' },
    { name: 'Microsoft Office',href: '/collections/software' },
    { name: 'Adobe Software',  href: '/collections/software' },
    { name: 'Antivirus',       href: '/collections/software' },
    { name: 'VPN Services',    href: '/collections/software' },
    { name: 'Project & Visio', href: '/collections/software' },
    { name: 'Utilities',       href: '/collections/software' },
    { name: 'SQL Server',      href: '/collections/software' },
  ];
  const FALLBACK_GIFTCARDS: NavItem[] = [
    { name: 'Google Play',    href: '/collections/gift-cards' },
    { name: 'iTunes / Apple', href: '/collections/gift-cards' },
    { name: 'Amazon',         href: '/collections/gift-cards' },
    { name: 'Netflix',        href: '/collections/gift-cards' },
    { name: 'Spotify',        href: '/collections/gift-cards' },
    { name: 'PlayStation',    href: '/collections/gift-cards' },
    { name: 'Xbox',           href: '/collections/gift-cards' },
    { name: 'Steam Wallet',   href: '/collections/gift-cards' },
  ];

  try {
    const allCategories = await getNavCategories();

    // Classify by slug keyword matching
    const gameItems: NavItem[] = allCategories
      .filter(c => slugMatchesAny(c.slug, GAME_SLUGS))
      .map(c => ({ name: c.name, href: c.href }));

    const softwareItems: NavItem[] = allCategories
      .filter(c => slugMatchesAny(c.slug, SOFTWARE_SLUGS))
      .map(c => ({ name: c.name, href: c.href }));

    const giftCardItems: NavItem[] = allCategories
      .filter(c => slugMatchesAny(c.slug, GIFTCARD_SLUGS))
      .map(c => ({ name: c.name, href: c.href }));

    return {
      gameItems:    gameItems.length    > 0 ? gameItems    : FALLBACK_GAMES,
      softwareItems: softwareItems.length > 0 ? softwareItems : FALLBACK_SOFTWARE,
      giftCardItems: giftCardItems.length > 0 ? giftCardItems : FALLBACK_GIFTCARDS,
    };
  } catch {
    // If anything fails, return static fallbacks. The header will still work.
    return {
      gameItems:    FALLBACK_GAMES,
      softwareItems: FALLBACK_SOFTWARE,
      giftCardItems: FALLBACK_GIFTCARDS,
    };
  }
}

