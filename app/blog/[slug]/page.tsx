import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import BlogFooter from '@/components/blog/BlogFooter';

/**
 * Dynamic blog post page
 * Renders individual blog posts based on slug parameter
 */
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find blog post by slug (id field)
  const post = blogPosts.find(post => post.id === slug);
  
  // If no post found, return 404
  if (!post) {
    notFound();
  }

  // Generate full content for demonstration (in real app, this would come from CMS/API)
  const fullContent = generateFullContent(post);

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a]">
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/blog" className="text-gray-500 hover:text-red-600 transition-colors">
            Blog
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700 dark:text-gray-300">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wide rounded">
              {post.categories[0] || "Blog"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">
                  {post.author.charAt(0)}
                </span>
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {post.author}
              </span>
            </div>
            <span>·</span>
            <time dateTime={post.date}>{post.date}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
          {/* Excerpt */}
          <div className="text-xl text-gray-600 dark:text-gray-300 font-medium mb-8 leading-relaxed">
            {post.excerpt}
          </div>

          {/* Full Content */}
          <div 
            className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: fullContent }}
          />
        </div>

        {/* Tags/Categories */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category, index) => (
              <Link
                key={index}
                href={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-red-100 dark:hover:bg-red-900 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
            Share this article
          </h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors">
              Facebook
            </button>
            <button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded transition-colors">
              Twitter
            </button>
            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded transition-colors">
              LinkedIn
            </button>
            <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded transition-colors">
              Copy Link
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Related Posts
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(relatedPost => 
                relatedPost.id !== post.id && 
                relatedPost.categories.some(cat => post.categories.includes(cat))
              )
              .slice(0, 4)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0 relative overflow-hidden rounded">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {relatedPost.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Back to Blog */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>

      {/* Blog Footer */}
      <BlogFooter />
    </div>
  );
}

/**
 * Generate full blog content based on post data
 * In a real application, this would come from a CMS or API
 */
function generateFullContent(post: any): string {
  const contentTemplates: Record<string, string> = {
    "ms-office-2024-guide": `
      <h2>Introduction</h2>
      <p>Microsoft Office 2024 brings significant improvements and new features to the world's most popular productivity suite. Whether you're upgrading from an older version or installing fresh, this comprehensive guide will walk you through every step of the process.</p>
      
      <h2>System Requirements</h2>
      <p>Before installing Office 2024, ensure your system meets the minimum requirements:</p>
      <ul>
        <li>Windows 10 or later (64-bit)</li>
        <li>4GB RAM (8GB recommended)</li>
        <li>4GB available disk space</li>
        <li>1280x768 screen resolution</li>
      </ul>
      
      <h2>Installation Process</h2>
      <p>The installation process has been streamlined in Office 2024. Follow these steps carefully:</p>
      <ol>
        <li>Download the installation file from your Microsoft account</li>
        <li>Run the installer as Administrator</li>
        <li>Choose your installation type (Click-to-Run or MSI)</li>
        <li>Wait for the installation to complete</li>
        <li>Activate your product using your license key</li>
      </ol>
      
      <h2>Troubleshooting Common Issues</h2>
      <p>If you encounter problems during installation, try these solutions:</p>
      <ul>
        <li>Disable antivirus temporarily</li>
        <li>Clear temporary files and registry entries</li>
        <li>Run the Office Repair tool</li>
        <li>Contact Microsoft Support if issues persist</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Microsoft Office 2024 offers enhanced productivity and collaboration features. With this guide, you should be able to install and activate your software without any issues.</p>
    `,
    
    "windows-11-pro-upgrade": `
      <h2>Introduction</h2>
      <p>Windows 11 comes in two main editions: Home and Pro. While both offer the core Windows experience, they target different user needs. This comprehensive comparison will help you make an informed decision.</p>
      
      <h2>Key Differences at a Glance</h2>
      <p>The most significant differences between Windows 11 Home and Pro revolve around security, management, and business-oriented features.</p>
      
      <h2>Security Features</h2>
      <p><strong>Windows 11 Pro includes:</strong></p>
      <ul>
        <li>BitLocker device encryption</li>
        <li>Windows Information Protection</li>
        <li>Device Guard</li>
        <li>Credential Guard</li>
      </ul>
      <p><strong>Windows 11 Home includes:</strong></p>
      <ul>
        <li>Windows Defender Antivirus</li>
        <li>Windows Firewall</li>
        <li>Basic security features</li>
      </ul>
      
      <h2>Management Capabilities</h2>
      <p>Pro edition offers advanced management features including Group Policy Editor, Mobile Device Management, and Remote Desktop capabilities. Home edition is designed for personal use with simplified management.</p>
      
      <h2>Virtualization Support</h2>
      <p>Only Windows 11 Pro includes Hyper-V virtualization technology, essential for developers and IT professionals who need to run virtual machines.</p>
      
      <h2>Pricing Considerations</h2>
      <p>Windows 11 Pro typically costs $100-150 more than Home edition. The investment is worthwhile if you need the advanced features mentioned above.</p>
      
      <h2>Who Should Choose Pro?</h2>
      <p>Windows 11 Pro is ideal for:</p>
      <ul>
        <li>Business users and professionals</li>
        <li>Developers and IT administrators</li>
        <li>Users needing advanced security</li>
        <li>Those requiring virtualization</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>For most home users, Windows 11 Home is sufficient. However, if you need advanced security, management features, or virtualization, the Pro edition is worth the extra cost.</p>
    `,
    
    "default": `
      <h2>Introduction</h2>
      <p>Welcome to this comprehensive guide on ${post.title.toLowerCase()}. This article will provide you with detailed insights, practical tips, and expert recommendations to help you make informed decisions.</p>
      
      <h2>Key Features and Benefits</h2>
      <p>Understanding the core features is essential for maximizing the value of your investment. Here are the key aspects you should consider:</p>
      <ul>
        <li>Performance and reliability improvements</li>
        <li>Enhanced user experience and interface</li>
        <li>Advanced security features and protections</li>
        <li>Compatibility with existing systems and software</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>To get the most out of this solution, follow these best practices:</p>
      <ol>
        <li>Regular updates and maintenance</li>
        <li>Proper configuration and setup</li>
        <li>Security best implementation</li>
        <li>Performance optimization techniques</li>
      </ol>
      
      <h2>Common Challenges and Solutions</h2>
      <p>Every solution comes with its challenges. Here are common issues and their solutions:</p>
      <ul>
        <li>Installation problems - Check system requirements</li>
        <li>Performance issues - Optimize settings</li>
        <li>Compatibility concerns - Verify software versions</li>
        <li>Security vulnerabilities - Apply latest patches</li>
      </ul>
      
      <h2>Expert Recommendations</h2>
      <p>Based on our extensive testing and user feedback, we recommend:</p>
      <ul>
        <li>Start with the basic configuration</li>
        <li>Gradually implement advanced features</li>
        <li>Regular backup and maintenance</li>
        <li>Continuous monitoring and optimization</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>${post.excerpt} This comprehensive guide should help you understand all aspects of ${post.title.toLowerCase()}. Remember to stay updated with the latest developments and best practices in this field.</p>
    `
  };

  return contentTemplates[post.id] || contentTemplates["default"];
}

/**
 * Generate static params for all blog posts
 * This enables static generation of all blog post pages
 */
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(post => post.id === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}
