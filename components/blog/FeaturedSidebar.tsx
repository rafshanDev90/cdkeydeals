import Image from "next/image";
import Link from "next/link";

interface FeaturedSidebarProps {
  posts: Array<{
    id: string;
    title: string;
    image: string;
    categories: string[];
    date: string;
  }>;
}

export default function FeaturedSidebar({ posts }: FeaturedSidebarProps) {
  return (
    <div className="sticky top-4 space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
          Featured Articles
        </h3>
        
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="group">
              <Link href={`/blog/${post.id}`}>
                <div className="flex gap-3">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-md group-hover:opacity-90 transition-opacity"
                      sizes="80px"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Category */}
                    <div className="mb-1">
                      {post.categories[0] && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                          {post.categories[0]}
                        </span>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h4>
                    
                    {/* Date */}
                    <time className="text-xs text-gray-500 mt-1 block">
                      {post.date}
                    </time>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Stay Updated
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest gaming news and deals delivered to your inbox.
        </p>
        <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
