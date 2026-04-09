"use client";

import Link from "next/link";
import { ChevronRight, Calendar, User, Star } from "lucide-react";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Best PDF Editor: How to Pick to Read the Epstein Files PDF",
    excerpt: "Discover the top PDF editors available in 2026 and learn how to choose the right one for your document management needs.",
    category: ["Adobe Creative Cloud", "Software"],
    author: "Sarah Johnson",
    date: "March 15, 2026",
    image: "/api/placeholder/300/200",
    featured: true
  },
  {
    id: 2,
    title: "Windows 12 Release Date: Ultimate Guide to Next-Gen OS",
    excerpt: "Everything you need to know about Windows 12, including release dates, features, and system requirements.",
    category: ["Software", "Tech News"],
    author: "Michael Chen",
    date: "March 12, 2026",
    image: "/api/placeholder/300/200",
    featured: true
  },
  {
    id: 3,
    title: "Tech and Tech: Latest Trends and Innovations Shaping the Future",
    excerpt: "Explore the cutting-edge technologies that are revolutionizing industries and changing how we live and work.",
    category: ["Tech", "Windows 11"],
    author: "Emily Rodriguez",
    date: "March 10, 2026",
    image: "/api/placeholder/300/200",
    featured: false
  },
  {
    id: 4,
    title: "Why PC Gaming is Better: 10 Reasons PC Wins in 2026",
    excerpt: "A comprehensive look at why PC gaming continues to dominate the gaming landscape with superior performance and flexibility.",
    category: ["PC Gaming", "Tech News"],
    author: "David Kim",
    date: "March 8, 2026",
    image: "/api/placeholder/300/200",
    featured: true
  },
  {
    id: 5,
    title: "AI Revolution: How Machine Learning is Transforming Software Development",
    excerpt: "Discover how artificial intelligence is reshaping the way developers write, test, and deploy code.",
    category: ["AI", "Software"],
    author: "Alex Thompson",
    date: "March 5, 2026",
    image: "/api/placeholder/300/200",
    featured: false
  },
  {
    id: 6,
    title: "Cybersecurity Trends 2026: Protecting Your Digital Life",
    excerpt: "Essential security practices and tools every user needs to stay safe in an increasingly connected world.",
    category: ["Security", "Tech News"],
    author: "Lisa Wang",
    date: "March 3, 2026",
    image: "/api/placeholder/300/200",
    featured: false
  }
];

export default function TechNewsUpdates() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-muted-foreground mb-8">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-foreground font-medium">Tech News & Updates</span>
        </nav>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-foreground mb-4">
            Tech News & Updates, Latest Trends
          </h1>
          <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-3xl">
            Stay ahead of the curve with the latest technology news, software updates, and industry insights. 
            Our expert team brings you comprehensive coverage of everything shaping the digital landscape.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Blog Posts (75%) */}
          <div className="lg:w-3/4">
            <div className="space-y-6">
              {/* Featured Posts */}
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Thumbnail */}
                    <div className="md:w-1/3 lg:w-2/5">
                      <div className="aspect-video md:aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-gray-400 text-sm">Image Placeholder</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      {/* Category Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.category.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 dark:text-muted-foreground text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${post.id}`} className="block group">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-foreground mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Metadata */}
                      <div className="flex items-center text-sm text-gray-500 dark:text-muted-foreground space-x-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {/* Regular Posts */}
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Thumbnail */}
                    <div className="md:w-1/3 lg:w-2/5">
                      <div className="aspect-video md:aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-gray-400 text-sm">Image Placeholder</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      {/* Category Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.category.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 dark:text-muted-foreground text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${post.id}`} className="block group">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-foreground mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Metadata */}
                      <div className="flex items-center text-sm text-gray-500 dark:text-muted-foreground space-x-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Right Column - Featured Sidebar (25%) */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              {/* Featured Section */}
              <div className="bg-white dark:bg-card rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-foreground">Featured</h3>
                </div>
                
                <div className="space-y-4">
                  {featuredPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="pb-4 border-b border-gray-100 dark:border-border last:border-0">
                      <Link href={`/blog/${post.id}`} className="block group">
                        <h4 className="font-semibold text-gray-900 dark:text-foreground mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 dark:text-muted-foreground gap-3">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.author}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-card rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {["Tech News", "Software", "PC Gaming", "AI", "Security", "Windows 11"].map((category) => (
                    <Link 
                      key={category}
                      href={`/category/${category.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:bg-muted transition-colors group"
                    >
                      <span className="text-gray-700 dark:text-muted-foreground group-hover:text-indigo-600 transition-colors">
                        {category}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-600 dark:text-muted-foreground mb-4">
                  Get the latest tech news delivered to your inbox weekly.
                </p>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
