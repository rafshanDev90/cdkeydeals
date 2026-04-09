import Link from 'next/link'
import { Metadata } from 'next'
import PageHeader from '@/components/shared/PageHeader'
import SectionContainer from '@/components/shared/SectionContainer'
import CTASection from '@/components/shared/CTASection'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - CDKeyDeals | Customer Support & Help Center',
  description: 'Get in touch with CDKeyDeals customer support. Find our contact information, business details, support hours, and send us a message through our contact form.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're Here to Help"
        description="Get in touch with our customer support team for any questions about your orders, products, or services."
        background="light"
      />

      {/* Breadcrumb */}
      <SectionContainer background="white" padding="sm">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-muted-foreground">
          <Link href="/" className="hover:text-[#00d4aa] transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 dark:text-foreground font-medium">Contact Us</span>
        </nav>
      </SectionContainer>

      {/* Contact Content */}
      <SectionContainer background="white" maxWidth="full">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Business Details */}
          <div className="space-y-8">
            {/* Business Details Section */}
            <div className="bg-gray-50 dark:bg-muted rounded-lg p-6 border border-gray-200 dark:border-border">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-4">Business Details</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700 dark:text-muted-foreground">Trade Name:</span>
                  <span className="ml-2 text-gray-600 dark:text-muted-foreground">cdkeydeals.com</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-muted-foreground">Email:</span>
                  <span className="ml-2 text-gray-600 dark:text-muted-foreground">support@cdkeydeals.com</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-muted-foreground">Address:</span>
                  <p className="mt-1 text-gray-600 dark:text-muted-foreground">
                    123 Business Street<br />
                    London, United Kingdom<br />
                    EC1A 1BB
                  </p>
                </div>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-4">Get in Touch</h2>
              <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">
                We're here to help! For the fastest response, please use our contact form or email us directly at 
                <span className="font-medium text-[#00d4aa]"> support@cdkeydeals.com</span>. Our support team is dedicated to resolving 
                your inquiries as quickly as possible.
              </p>
            </div>

            {/* Support Hours */}
            <div className="bg-[#00d4aa]/10 rounded-lg p-6 border border-[#00d4aa]/20">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-4">Support Hours</h2>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#00d4aa] rounded-full mr-3 animate-pulse"></div>
                <span className="text-lg font-medium text-gray-800">24/7 Availability</span>
              </div>
              <p className="text-gray-600 dark:text-muted-foreground mt-2">
                Our support team is available round the clock to assist you with any questions or concerns.
              </p>
            </div>

            {/* Order & Support Requests */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-4">Order & Support Requests</h2>
              <p className="text-gray-600 dark:text-muted-foreground mb-4">To help us assist you better, please include:</p>
              <ul className="space-y-2 text-gray-600 dark:text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Order number (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Email address associated with your account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Product name or service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Detailed description of the issue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Screenshots (if applicable)</span>
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-foreground mb-4">Typical Response Time</h2>
              <p className="text-gray-600 dark:text-muted-foreground">
                We strive to respond to all inquiries within <span className="font-semibold text-green-700">24 hours</span>. 
                During peak periods, response times may be slightly longer, but we appreciate your patience and 
                will get back to you as soon as possible.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Need Quick Help?"
        subtitle="Check out our FAQ section for instant answers to common questions"
        buttonText="View FAQ"
        buttonHref="/faq"
        secondaryButtonText="Browse Products"
        secondaryButtonHref="/"
        background="primary"
      />
    </>
  )
}
