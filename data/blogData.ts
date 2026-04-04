export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  categories: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "ms-office-2024-guide",
    title: "Microsoft Office 2024 Complete Installation Guide: Step-by-Step Tutorial",
    excerpt: "Learn how to install and activate Microsoft Office 2024 with our comprehensive guide. Includes troubleshooting tips and best practices for both Windows and Mac users.",
    image: "https://images.unsplash.com/photo-1554224154-260325c0594c?w=800&h=400&fit=crop",
    categories: ["MS Office", "Software"],
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    featured: true
  },
  {
    id: "steam-summer-sale-2024",
    title: "Steam Summer Sale 2024: Best Deals and Hidden Gems You Shouldn't Miss",
    excerpt: "Discover the hottest deals and underrated games in this year's Steam Summer Sale. Our curated list includes must-play titles at unbeatable prices.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=400&fit=crop",
    categories: ["Gaming", "Deals"],
    author: "Mike Chen",
    date: "March 14, 2024",
    readTime: "8 min read",
    featured: true
  },
  {
    id: "windows-11-pro-upgrade",
    title: "Windows 11 Pro vs Home: Which Version Should You Buy in 2024?",
    excerpt: "Compare Windows 11 Pro and Home editions to make the right choice. We break down the key differences, features, and pricing to help you decide.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a9?w=800&h=400&fit=crop",
    categories: ["Windows", "Software"],
    author: "David Park",
    date: "March 13, 2024",
    readTime: "6 min read",
    featured: true
  },
  {
    id: "nvidia-rtx-4070-review",
    title: "NVIDIA RTX 4070 Review: The Sweet Spot for 1440p Gaming in 2024",
    excerpt: "Our in-depth review of the NVIDIA RTX 4070 graphics card. Find out if this GPU offers the best performance-to-price ratio for your gaming setup.",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=400&fit=crop",
    categories: ["Hardware", "Gaming"],
    author: "Alex Rivera",
    date: "March 12, 2024",
    readTime: "10 min read",
    featured: false
  },
  {
    id: "playstation-plus-subscription",
    title: "PlayStation Plus Tiers Explained: Which Subscription Plan is Right for You?",
    excerpt: "Understanding PlayStation Plus Essential, Extra, and Premium tiers. We help you choose the best plan based on your gaming habits and budget.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=400&fit=crop",
    categories: ["Gaming", "Consoles"],
    author: "Emma Wilson",
    date: "March 11, 2024",
    readTime: "7 min read",
    featured: true
  },
  {
    id: "adobe-creative-cloud-alternatives",
    title: "Best Adobe Creative Cloud Alternatives for Budget-Conscious Creatives in 2024",
    excerpt: "Explore powerful and affordable alternatives to Adobe Creative Cloud. From free options to one-time purchases, find the right tools for your creative work.",
    image: "https://images.unsplash.com/photo-1561996337648-9d5405c9ad96?w=800&h=400&fit=crop",
    categories: ["Software", "Design"],
    author: "Lisa Thompson",
    date: "March 10, 2024",
    readTime: "9 min read",
    featured: false
  },
  {
    id: "xbox-game-pass-ultimate",
    title: "Xbox Game Pass Ultimate: Is It Worth the Price in 2024? Complete Analysis",
    excerpt: "We analyze Xbox Game Pass Ultimate's value proposition. With hundreds of games and EA Play included, find out if this subscription service is worth your money.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=400&fit=crop",
    categories: ["Gaming", "Subscription"],
    author: "James Miller",
    date: "March 9, 2024",
    readTime: "8 min read",
    featured: false
  },
  {
    id: "antivirus-software-comparison",
    title: "Best Antivirus Software 2024: Bitdefender vs Norton vs Kasperspy Comparison",
    excerpt: "Compare the top antivirus solutions for 2024. We test performance, detection rates, and system impact to help you choose the best protection for your devices.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
    categories: ["Software", "Security"],
    author: "Robert Garcia",
    date: "March 8, 2024",
    readTime: "6 min read",
    featured: false
  },
  {
    id: "vpn-gaming-guide",
    title: "Gaming with VPN: How to Reduce Lag and Access Region-Locked Games",
    excerpt: "Learn how VPNs can improve your gaming experience. We cover the best VPNs for gaming, setup guides, and tips for reducing ping and accessing geo-restricted content.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    categories: ["Gaming", "Security"],
    author: "Tom Anderson",
    date: "March 7, 2024",
    readTime: "7 min read",
    featured: false
  },
  {
    id: "cloud-storage-comparison",
    title: "Cloud Storage Comparison 2024: Google Drive vs OneDrive vs Dropbox",
    excerpt: "Compare the leading cloud storage services on pricing, features, and performance. Find the best cloud storage solution for your personal or business needs.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a9?w=800&h=400&fit=crop",
    categories: ["Software", "Cloud"],
    author: "Jennifer Lee",
    date: "March 6, 2024",
    readTime: "5 min read",
    featured: false
  },
  {
    id: "gaming-laptop-guide",
    title: "Best Gaming Laptops Under $1000: Budget Gaming in 2024",
    excerpt: "Discover the best gaming laptops that won't break the bank. We've tested and reviewed the top budget gaming notebooks with excellent performance-to-price ratios.",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=400&fit=crop",
    categories: ["Hardware", "Gaming"],
    author: "Chris Martinez",
    date: "March 5, 2024",
    readTime: "8 min read",
    featured: false
  },
  {
    id: "gift-card-deals-2024",
    title: "Best Gift Card Deals and Discounts: Where to Buy Cheap Gift Cards",
    excerpt: "Find the best deals on gift cards for gaming, shopping, and entertainment. We reveal the top platforms for discounted gift cards and how to avoid scams.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    categories: ["Gift Cards", "Deals"],
    author: "Amanda White",
    date: "March 4, 2024",
    readTime: "6 min read",
    featured: false
  }
];
