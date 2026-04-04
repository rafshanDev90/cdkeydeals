import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    categories: string[];
    author: string;
    date: string;
    readTime: string;
    featured: boolean;
  };
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row">
        {/* Image - Left side on desktop, top on mobile */}
        <div className="lg:w-1/3 relative h-48 lg:h-auto">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        
        {/* Content - Right side on desktop, bottom on mobile */}
        <div className="lg:w-2/3 p-6">
          {/* Category Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <Link href={`/blog/${post.id}`}>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors line-clamp-2">
              {post.title}
            </h2>
          </Link>
          
          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-2 lg:line-clamp-3">
            {post.excerpt}
          </p>
          
          {/* Meta Information */}
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
