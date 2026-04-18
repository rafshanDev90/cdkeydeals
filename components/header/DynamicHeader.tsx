/**
 * DynamicHeader — Server Component wrapper
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  SERIALIZATION RULE (how we avoid the "Event handlers cannot be passed  │
 * │  to Client Component props" error):                                     │
 * │                                                                         │
 * │  This component runs ONLY on the server. It calls the WooCommerce API   │
 * │  and produces plain serializable data (NavItem[]).                      │
 * │  It passes that data as a `navData` prop to <HeaderClient>.             │
 * │                                                                         │
 * │  <HeaderClient> is marked "use client" and is where ALL onClick /       │
 * │  onToggle / onHover handlers live. No functions ever cross the          │
 * │  server→client boundary.                                                │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

import { getMenuData } from "@/lib/nav-data";
import HeaderClient from "./HeaderClient";

export default async function DynamicHeader() {
  // Single server-side call – result is cached by Next.js fetch for 5 min
  const navData = await getMenuData();

  // navData is plain JSON: { gameItems, softwareItems, giftCardItems }
  // No functions are included → safe to pass directly to a Client Component.
  return <HeaderClient navData={navData} />;
}
