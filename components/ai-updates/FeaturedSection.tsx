import { TrendingUp, ArrowRight } from "lucide-react";

interface FeaturedSectionProps {
  articles: Array<{
    id: number;
    title: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
    featured?: boolean;
  }>;
}

export default function FeaturedSection({ articles }: FeaturedSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-bold text-gray-900">Featured Articles</h2>
      </div>

      <div className="space-y-4">
        {articles.map((article, index) => (
          <div key={article.id} className="group cursor-pointer">
            {/* Article Number */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              {/* Article Content */}
              <div className="flex-1 min-w-0">
                {/* Category */}
                <div className="mb-1">
                  <span className="inline-block text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{formatDate(article.date)}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index < articles.length - 1 && (
              <div className="ml-8 mt-4 border-b border-gray-100"></div>
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
        <span>View All Articles</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
