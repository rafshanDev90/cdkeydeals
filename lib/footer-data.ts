import { getWCCategories } from "./wordpress";
import { safeAsync } from "./error-handler";

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export async function getFooterData() {
  const categories = await safeAsync(() => getWCCategories({ per_page: 20 }), []);
  
  if (!categories || categories.length === 0) {
    return null;
  }
  
  // Group categories into platforms vs general
  const platforms = categories.filter(c => 
    ["Steam", "Xbox", "PlayStation", "Nintendo", "Epic Games", "EA App", "Ubisoft", "Battle.net"]
    .some(p => c.name.toLowerCase().includes(p.toLowerCase()))
  ).slice(0, 8);

  const generalCategories = categories.filter(c => 
    !platforms.some(p => p.id === c.id)
  ).slice(0, 8);

  return {
    byPlatform: platforms.map(c => ({ name: c.name, href: `/collections/${c.slug}` })),
    categories: generalCategories.map(c => ({ name: c.name, href: `/collections/${c.slug}` })),
    getToKnowUs: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Help & Support", href: "/support" },
      { name: "Terms and Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
    letUsHelpYou: [
      { name: "FAQs", href: "/faq" },
      { name: "Your Account", href: "/account" },
      { name: "Your Orders", href: "/account/orders" },
    ]
  };
}
