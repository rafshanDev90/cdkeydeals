import Link from 'next/link'
import { Metadata } from 'next'
import PageHeader from '@/components/shared/PageHeader'
import SectionContainer from '@/components/shared/SectionContainer'
import CTASection from '@/components/shared/CTASection'

export const metadata: Metadata = {
  title: 'Refund Policy - CDKeyDeals | Returns & Refunds',
  description: 'Read CDKeyDeals refund policy for digital products. Learn about our return policy, refund eligibility, and how to request a refund.',
}

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader
        title="Refund Policy"
        subtitle="Our Return & Refund Policy"
        description="Learn about our refund policy for digital products and how to request a refund if needed."
        background="light"
      />

      {/* Breadcrumb */}
      <SectionContainer background="white" padding="sm">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-muted-foreground">
          <Link href="/" className="hover:text-[#00d4aa] transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 dark:text-foreground font-medium">Refund Policy</span>
        </nav>
      </SectionContainer>

      {/* Last Updated */}
      <SectionContainer background="white" maxWidth="2xl">
        <div className="bg-gray-50 dark:bg-muted p-4 rounded-lg border border-gray-200 dark:border-border">
          <p className="text-sm text-gray-600 dark:text-muted-foreground">
            <strong>Last Updated:</strong> January 1, 2026
          </p>
        </div>
      </SectionContainer>

      {/* Policy Overview */}
      <SectionContainer background="white" maxWidth="2xl">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-4">Refund Policy Overview</h2>
          <p className="text-gray-700 dark:text-muted-foreground leading-relaxed mb-6">
            At <span className="font-bold text-[#00d4aa]">CDKeyDeals</span>, we strive to provide high-quality digital products and excellent customer service. 
            Due to the nature of digital products, our refund policy is more restrictive than for physical goods. 
            However, we understand that issues can arise, and we're committed to fair resolution.
          </p>
          <p className="text-gray-700 dark:text-muted-foreground leading-relaxed">
            This policy outlines the circumstances under which refunds are available and the process for requesting them. 
            By making a purchase from CDKeyDeals, you agree to these terms.
          </p>
        </div>
      </SectionContainer>

      {/* Digital Product Nature */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">Understanding Digital Products</h2>
        
        <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm border border-gray-100 dark:border-border">
          <p className="text-gray-700 dark:text-muted-foreground leading-relaxed mb-4">
            Digital products have unique characteristics that affect our refund policy:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-muted p-4 rounded-lg border border-gray-200 dark:border-border">
              <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">Instant Delivery</h3>
              <p className="text-sm text-gray-600 dark:text-muted-foreground">
                Digital products are delivered instantly upon purchase, making them immediately usable
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-muted p-4 rounded-lg border border-gray-200 dark:border-border">
              <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">Non-Returnable</h3>
              <p className="text-sm text-gray-600 dark:text-muted-foreground">
                Unlike physical goods, digital products cannot be physically returned
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-muted p-4 rounded-lg border border-gray-200 dark:border-border">
              <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">Single Use</h3>
              <p className="text-sm text-gray-600 dark:text-muted-foreground">
                Many digital products can only be redeemed once, making returns complex
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-muted p-4 rounded-lg border border-gray-200 dark:border-border">
              <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">Copy Protection</h3>
              <p className="text-sm text-gray-600 dark:text-muted-foreground">
                Digital rights management prevents unauthorized copying and redistribution
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Refund Eligibility */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">Refund Eligibility</h2>
        
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-4">✓ Eligible for Refund</h3>
            <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong>Defective Product Keys:</strong> Keys that are invalid, already used, or don't work as intended
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong>Wrong Product Delivered:</strong> You received a different product than what you purchased
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong>Duplicate Orders:</strong> Accidental duplicate purchases of the same product
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong>Technical Issues:</strong> Platform-specific problems preventing product activation
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <div>
                  <strong>Service Disruption:</strong> If our platform fails to deliver the product as promised
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-4">✗ Not Eligible for Refund</h3>
            <ul className="space-y-3 text-gray-700 dark:text-muted-foreground">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">✗</span>
                <div>
                  <strong>Change of Mind:</strong> Deciding you don't want the product after purchase
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">✗</span>
                <div>
                  <strong>System Incompatibility:</strong> Your device doesn't meet minimum requirements
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">✗</span>
                <div>
                  <strong>Already Redeemed:</strong> Product was successfully redeemed or activated
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">✗</span>
                <div>
                  <strong>Regional Restrictions:</strong> Product not available in your region
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 mt-1">✗</span>
                <div>
                  <strong>Late Requests:</strong> Refund requests made after 7 days of purchase
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Refund Process */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">Refund Request Process</h2>
        
        <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm border border-gray-100 dark:border-border">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">Contact Support</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm">
                  Send a refund request to <span className="text-[#00d4aa]">support@cdkeydeals.com</span> with your order number and reason for refund
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">Provide Evidence</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm">
                  Include screenshots or error messages if applicable. For defective keys, show the activation attempt
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">Review Process</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm">
                  Our support team will review your request within 24 hours and may ask for additional information
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-foreground mb-2">Decision & Resolution</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm">
                  You'll receive notification of approval or denial. Approved refunds are processed within 5-7 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Timeframes */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">Important Timeframes</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-muted p-6 rounded-lg border border-gray-200 dark:border-border">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-4">Request Deadlines</h3>
            <ul className="space-y-2 text-gray-700 dark:text-muted-foreground">
              <li className="flex justify-between">
                <span>Standard Refund Requests</span>
                <span className="font-semibold text-[#00d4aa]">7 days</span>
              </li>
              <li className="flex justify-between">
                <span>Defective Product Reports</span>
                <span className="font-semibold text-[#00d4aa]">7 days</span>
              </li>
              <li className="flex justify-between">
                <span>Wrong Product Issues</span>
                <span className="font-semibold text-[#00d4aa]">3 days</span>
              </li>
              <li className="flex justify-between">
                <span>Duplicate Order Claims</span>
                <span className="font-semibold text-[#00d4aa]">24 hours</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-muted p-6 rounded-lg border border-gray-200 dark:border-border">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-4">Processing Times</h3>
            <ul className="space-y-2 text-gray-700 dark:text-muted-foreground">
              <li className="flex justify-between">
                <span>Initial Response</span>
                <span className="font-semibold text-[#00d4aa]">24 hours</span>
              </li>
              <li className="flex justify-between">
                <span>Investigation Period</span>
                <span className="font-semibold text-[#00d4aa]">2-3 days</span>
              </li>
              <li className="flex justify-between">
                <span>Refund Processing</span>
                <span className="font-semibold text-[#00d4aa]">5-7 days</span>
              </li>
              <li className="flex justify-between">
                <span>Bank Processing</span>
                <span className="font-semibold text-[#00d4aa]">3-5 days</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Refund Methods */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">Refund Methods</h2>
        
        <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm border border-gray-100 dark:border-border">
          <p className="text-gray-700 dark:text-muted-foreground leading-relaxed mb-4">
            Refunds are typically processed back to your original payment method:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-[#00d4aa] pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-foreground">Credit/Debit Cards</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">
                Refunded to the original card used for purchase. May take 5-10 business days to appear.
              </p>
            </div>
            
            <div className="border-l-4 border-[#00d4aa] pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-foreground">PayPal</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">
                Refunded to your PayPal account. Usually appears within 3-5 business days.
              </p>
            </div>
            
            <div className="border-l-4 border-[#00d4aa] pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-foreground">Digital Wallets</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">
                Refunded to the original payment method. Processing times vary by provider.
              </p>
            </div>
            
            <div className="border-l-4 border-[#00d4aa] pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-foreground">Store Credit</h4>
              <p className="text-gray-600 dark:text-muted-foreground text-sm">
                Available as an alternative to payment method refunds, processed instantly.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Special Cases */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">Special Cases & Exceptions</h2>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠ Pre-Orders & Early Access</h3>
            <p className="text-gray-700 dark:text-muted-foreground text-sm">
              Pre-orders and early access products have different refund terms. Refunds are only available 
              before the product is released or made accessible. Once available, standard refund policy applies.
            </p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠ Bundle Deals</h3>
            <p className="text-gray-700 dark:text-muted-foreground text-sm">
              For bundle purchases, individual items cannot be refunded separately. The entire bundle 
              must meet refund criteria. Partial refunds are not available for used bundle items.
            </p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠ Promotional Items</h3>
            <p className="text-gray-700 dark:text-muted-foreground text-sm">
              Products purchased during special promotions or with discount codes may have modified 
              refund terms. Check the specific promotion terms for details.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Customer Responsibilities */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">Customer Responsibilities</h2>
        
        <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm border border-gray-100 dark:border-border">
          <p className="text-gray-700 dark:text-muted-foreground leading-relaxed mb-4">
            To ensure smooth refund processing, customers must:
          </p>
          
          <ul className="space-y-2 text-gray-700 dark:text-muted-foreground">
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Verify system requirements before purchasing</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Read product descriptions and regional restrictions carefully</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Keep proof of purchase and order confirmation emails</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Report issues promptly within the specified timeframe</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Provide accurate information and evidence when requesting refunds</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Follow the proper refund request process</span>
            </li>
          </ul>
        </div>
      </SectionContainer>

      {/* Contact Information */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground mb-6">Contact Us for Refunds</h2>
        
        <div className="bg-gradient-to-r from-[#00d4aa]/10 to-[#6343D8]/10 p-6 rounded-lg border border-[#00d4aa]/20">
          <p className="text-gray-700 dark:text-muted-foreground leading-relaxed mb-4">
            For refund inquiries and requests, please contact our dedicated support team:
          </p>
          
          <div className="space-y-3 text-gray-700 dark:text-muted-foreground">
            <div className="flex items-center justify-between">
              <strong>Email:</strong>
              <span className="text-[#00d4aa]">refunds@cdkeydeals.com</span>
            </div>
            <div className="flex items-center justify-between">
              <strong>General Support:</strong>
              <span className="text-[#00d4aa]">support@cdkeydeals.com</span>
            </div>
            <div className="flex items-center justify-between">
              <strong>Response Time:</strong>
              <span className="text-[#00d4aa]">Within 24 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <strong>Available:</strong>
              <span className="text-[#00d4aa]">24/7</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white dark:bg-card/50 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-muted-foreground text-center">
              When contacting us, please include your order number and a detailed description of your issue.
            </p>
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Need to Request a Refund?"
        subtitle="Our support team is ready to help you with your refund request and answer any questions"
        buttonText="Contact Support"
        buttonHref="/contact"
        background="primary"
      />
    </>
  )
}
