import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - CDKeyDeals | Your Trusted Partner for Digital Keys',
  description: 'Learn about CDKeyDeals - your trusted partner for game keys, software licenses, and digital products. Discover our commitment to quality, security, and customer satisfaction.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link 
            href="/" 
            className="hover:text-[#00d4aa] transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">CDKeyDeals About Us</span>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            CDKeyDeals About Us: Who We Are
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
            Your Trusted Partner for Digital Keys & More
          </h2>
          
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to <span className="font-bold">CDKeyDeals</span>, your premier destination for 
              <span className="font-bold"> digital game keys</span>, 
              <span className="font-bold"> software licenses</span>, and 
              <span className="font-bold"> gift cards</span>. 
              We are dedicated to providing you with the best digital products at competitive prices, 
              ensuring instant delivery and exceptional customer service.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded with a passion for gaming and technology, <span className="font-bold">CDKeyDeals</span> 
              has become a trusted name in the digital marketplace. Our mission is to make digital 
              entertainment and software accessible to everyone, anywhere in the world.
            </p>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Game Keys
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Access the latest <span className="font-bold">Steam keys</span>, 
                <span className="font-bold"> Xbox keys</span>, 
                <span className="font-bold"> PlayStation keys</span>, and more. 
                Instant delivery guaranteed.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Software Licenses
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Genuine <span className="font-bold">Windows keys</span>, 
                <span className="font-bold"> Office keys</span>, and 
                professional software at unbeatable prices.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Gift Cards
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Digital gift cards for gaming platforms, streaming services, 
                and online stores with instant delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose CDKeyDeals Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose CDKeyDeals
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Instant Delivery
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Receive your digital keys immediately after purchase. No waiting, 
                  no hassle - just instant access to your products.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Secure Payments
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your security is our priority. We use industry-standard encryption 
                  and trusted payment gateways to protect your transactions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  24/7 Customer Support
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our dedicated support team is available around the clock to help 
                  you with any questions or concerns.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Best Prices Guaranteed
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We work directly with suppliers to bring you the most competitive 
                  prices on all digital products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Who We Serve
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-bold">CDKeyDeals</span> serves a diverse community of digital enthusiasts worldwide:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Gamers
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  From casual players to hardcore gamers, we provide access to the 
                  latest titles and classic favorites across all platforms.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Professionals
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Businesses and individuals seeking reliable software solutions for 
                  work, creativity, and productivity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Students
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Affordable access to essential software and educational tools to 
                  support learning and academic success.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Gift Givers
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Perfect solution for last-minute gifts with instant delivery and 
                  a wide selection of digital products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise to You Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Promise to You
          </h2>
          <div className="bg-gradient-to-r from-[#00d4aa] to-[#00b894] p-8 rounded-lg text-white">
            <p className="text-lg leading-relaxed mb-6">
              At <span className="font-bold">CDKeyDeals</span>, we are committed to:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg">
                  <span className="font-semibold">Quality Products:</span> Only genuine, 
                  authentic digital keys and licenses
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg">
                  <span className="font-semibold">Customer Satisfaction:</span> Your happiness 
                  is our success metric
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg">
                  <span className="font-semibold">Continuous Improvement:</span> Always 
                  enhancing our services and product offerings
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg">
                  <span className="font-semibold">Global Reach:</span> Serving customers 
                  worldwide with localized support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of satisfied customers who trust <span className="font-bold">CDKeyDeals</span> 
            for their digital needs.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[#00d4aa] hover:bg-[#00b894] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Shop Now
          </Link>
        </section>
      </div>
    </div>
  )
}
