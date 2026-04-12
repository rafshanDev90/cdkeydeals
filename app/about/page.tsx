import Link from 'next/link'
import { Metadata } from 'next'
import PageHeader from '@/components/shared/PageHeader'
import SectionContainer from '@/components/shared/SectionContainer'
import CTASection from '@/components/shared/CTASection'

export const metadata: Metadata = {
  title: 'About Us - CDKeyDeals | Your Trusted Partner for Digital Keys',
  description: 'Learn about CDKeyDeals - your trusted partner for game keys, software licenses, and digital products. Discover our commitment to quality, security, and customer satisfaction.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About CDKeyDeals"
        subtitle="Your Trusted Partner for Digital Keys & More"
        description="Learn about our mission to provide the best digital products at competitive prices with instant delivery and exceptional customer service."
        background="light"
      />

      {/* Breadcrumb */}
      <SectionContainer background="white" padding="sm">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-muted-foreground">
          <Link 
            href="/" 
            className="hover:text-[#00d4aa] dark:hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-gray-400 dark:text-muted-foreground">/</span>
          <span className="text-gray-900 dark:text-foreground font-medium">About Us</span>
        </nav>
      </SectionContainer>

      {/* Introduction */}
      <SectionContainer background="white" maxWidth="2xl">
        <div className="text-center space-y-6">
          <p className="text-lg text-gray-700 dark:text-muted-foreground leading-relaxed">
            Welcome to <span className="font-bold text-[#00d4aa]">CDKeyDeals</span>, your premier destination for 
            <span className="font-bold"> digital game keys</span>, 
            <span className="font-bold"> software licenses</span>, and 
            <span className="font-bold"> gift cards</span>. 
            We are dedicated to providing you with the best digital products at competitive prices, 
            ensuring instant delivery and exceptional customer service.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-muted-foreground leading-relaxed">
            Founded with a passion for gaming and technology, <span className="font-bold text-[#00d4aa]">CDKeyDeals</span> 
            has become a trusted name in the digital marketplace. Our mission is to make digital 
            entertainment and software accessible to everyone, anywhere in the world.
          </p>
        </div>
      </SectionContainer>

      {/* What We Offer */}
      <SectionContainer background="light">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8 text-center">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm border border-gray-100 dark:border-border">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
              Game Keys
            </h3>
            <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
              Access the latest <span className="font-bold">Steam keys</span>, 
              <span className="font-bold"> Xbox keys</span>, 
              <span className="font-bold"> PlayStation keys</span>, and more. 
              Instant delivery guaranteed.
            </p>
          </div>
          
          <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm border border-gray-100 dark:border-border">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
              Software Licenses
            </h3>
            <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
              Genuine <span className="font-bold">Windows keys</span>, 
              <span className="font-bold"> Office keys</span>, and 
              professional software at unbeatable prices.
            </p>
          </div>
          
          <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm border border-gray-100 dark:border-border">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
              Gift Cards
            </h3>
            <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
              Digital gift cards for gaming platforms, streaming services, 
              and online stores with instant delivery.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Why Choose CDKeyDeals */}
      <SectionContainer background="white">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8 text-center">
          Why Choose CDKeyDeals
        </h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                Instant Delivery
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                Secure Payments
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                24/7 Customer Support
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-2">
                Best Prices Guaranteed
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
                We work directly with suppliers to bring you the most competitive 
                prices on all digital products.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Who We Serve */}
      <SectionContainer background="light">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8 text-center">
          Who We Serve
        </h2>
        <div className="bg-white dark:bg-card p-8 rounded-lg shadow-sm border border-gray-100 dark:border-border">
          <p className="text-lg text-gray-700 dark:text-muted-foreground leading-relaxed mb-6">
            <span className="font-bold text-[#00d4aa]">CDKeyDeals</span> serves a diverse community of digital enthusiasts worldwide:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Gamers
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
                From casual players to hardcore gamers, we provide access to the 
                latest titles and classic favorites across all platforms.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Professionals
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
                Businesses and individuals seeking reliable software solutions for 
                work, creativity, and productivity.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Students
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
                Affordable access to essential software and educational tools to 
                support learning and academic success.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-3">
                Gift Givers
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
                Perfect solution for last-minute gifts with instant delivery and 
                a wide selection of digital products.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Our Promise */}
      <SectionContainer background="white">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground mb-8 text-center">
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
      </SectionContainer>

    </>
  )
}
