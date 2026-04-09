"use client";

import { useState } from "react";
import { Home, Calendar, User, Clock, TrendingUp, Filter } from "lucide-react";
import NewsCard from "@/components/ai-updates/NewsCard";
import FeaturedSection from "@/components/ai-updates/FeaturedSection";
import CategoryFilter from "@/components/ai-updates/CategoryFilter";

const categories = [
  "All",
  "AI Research", 
  "AI Tech News", 
  "Machine Learning", 
  "Chatbots", 
  "Latest in AI",
  "Deep Learning",
  "Neural Networks",
  "AI Ethics"
];

const mockNewsData = [
  {
    id: 1,
    category: "AI Research",
    title: "Breakthrough in Quantum Machine Learning Promises 1000x Speed Boost",
    author: "Dr. Sarah Chen",
    date: "2024-04-01",
    excerpt: "Researchers at MIT have developed a new quantum ML algorithm that could revolutionize how we process complex datasets...",
    imageUrl: "/api/placeholder/300/200",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    category: "AI Tech News",
    title: "OpenAI Announces GPT-5 with Enhanced Reasoning Capabilities",
    author: "Michael Roberts",
    date: "2024-03-31",
    excerpt: "The latest model shows unprecedented performance in complex problem-solving and multi-step reasoning tasks...",
    imageUrl: "/api/placeholder/300/200",
    readTime: "3 min read",
    featured: false
  },
  {
    id: 3,
    category: "Machine Learning",
    title: "New Transfer Learning Technique Reduces Training Data Needs by 90%",
    author: "Prof. James Liu",
    date: "2024-03-30",
    excerpt: "Stanford researchers introduce a novel approach to transfer learning that could democratize AI development...",
    imageUrl: "/api/placeholder/300/200",
    readTime: "7 min read",
    featured: true
  },
  {
    id: 4,
    category: "Chatbots",
    title: "Meta's AI Assistant Achieves Human-Level Conversation in New Study",
    author: "Emma Watson",
    date: "2024-03-29",
    excerpt: "In blind tests, participants couldn't distinguish between Meta's AI and human conversationalists...",
    imageUrl: "/api/placeholder/300/200",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 5,
    category: "Latest in AI",
    title: "Apple Unveils On-Device AI Processing for iPhone 16",
    author: "David Kim",
    date: "2024-03-28",
    excerpt: "Apple's new neural engine enables powerful AI capabilities without cloud dependency, addressing privacy concerns...",
    imageUrl: "/api/placeholder/300/200",
    readTime: "6 min read",
    featured: true
  },
  {
    id: 6,
    category: "Deep Learning",
    title: "Google's DeepMind Solves 50-Year-Old Protein Folding Problem",
    author: "Dr. Rachel Green",
    date: "2024-03-27",
    excerpt: "The breakthrough could accelerate drug discovery and transform medical research forever...",
    imageUrl: "/api/placeholder/300/200",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 7,
    category: "Neural Networks",
    title: "Efficient Neural Architecture Search Cuts Development Time by 75%",
    author: "Alex Thompson",
    date: "2024-03-26",
    excerpt: "New automated approach designs optimal neural networks for specific tasks in hours instead of weeks...",
    imageUrl: "/api/placeholder/300/200",
    readTime: "5 min read",
    featured: false
  },
  {
    id: 8,
    category: "AI Ethics",
    title: "EU Finalizes Comprehensive AI Regulation Framework",
    author: "Sophie Martin",
    date: "2024-03-25",
    excerpt: "The new legislation establishes clear guidelines for responsible AI development and deployment...",
    imageUrl: "/api/placeholder/300/200",
    readTime: "6 min read",
    featured: true
  }
];

export default function AIUpdatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = selectedCategory === "All" 
    ? mockNewsData 
    : mockNewsData.filter(article => article.category === selectedCategory);

  const featuredArticles = mockNewsData.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-muted-foreground mb-6">
          <Home className="w-4 h-4" />
          <span>/</span>
          <span className="text-gray-900 dark:text-foreground font-medium">AI Updates</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-foreground mb-4">
            AI Updates, Latest News & Releases
          </h1>
          <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-3xl">
            Stay informed with the latest developments in artificial intelligence, 
            machine learning breakthroughs, and cutting-edge AI technology news from 
            around the world.
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* News Feed */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar - Featured Section */}
          <div className="lg:col-span-1">
            <FeaturedSection articles={featuredArticles} />
          </div>
        </div>
      </div>
    </div>
  );
}
