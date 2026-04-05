import Link from 'next/link'
import { Metadata } from 'next'
import PageHeader from '@/components/shared/PageHeader'
import SectionContainer from '@/components/shared/SectionContainer'
import CTASection from '@/components/shared/CTASection'

export const metadata: Metadata = {
  title: 'Privacy Policy - CDKeyDeals | Data Protection & Privacy',
  description: 'Read CDKeyDeals privacy policy to understand how we collect, use, and protect your personal information. Your privacy is our priority.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your Privacy Matters"
        description="Learn how CDKeyDeals collects, uses, and protects your personal information."
        background="light"
      />

      {/* Breadcrumb */}
      <SectionContainer background="white" padding="sm">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#00d4aa] transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Privacy Policy</span>
        </nav>
      </SectionContainer>

      {/* Last Updated */}
      <SectionContainer background="white" maxWidth="2xl">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Last Updated:</strong> January 1, 2026
          </p>
        </div>
      </SectionContainer>

      {/* Introduction */}
      <SectionContainer background="white" maxWidth="2xl">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At <span className="font-bold text-[#00d4aa]">CDKeyDeals</span>, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
            <span className="font-medium"> cdkeydeals.com</span> and use our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our website and services, you agree to the collection and use of information in accordance with this policy. 
            If you disagree with any part of this privacy policy, please do not use our website or services.
          </p>
        </div>
      </SectionContainer>

      {/* Information We Collect */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Name, email address, phone number, and billing information</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Shipping and delivery addresses</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Payment method details (processed securely by third-party payment processors)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Account credentials and preferences</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Information</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>IP address and browser type</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Device information and operating system</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Cookies and similar tracking technologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Pages visited, time spent, and click patterns</span>
            </li>
          </ul>
        </div>
      </SectionContainer>

      {/* How We Use Your Information */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Process orders and deliver digital products</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Send order confirmations and delivery notifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Provide customer support and assistance</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Send promotional offers and newsletters</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Respond to inquiries and support requests</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Provide important account updates</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Website Improvement</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Analyze user behavior and preferences</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Improve website functionality and user experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Develop new features and services</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal & Security</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Comply with legal obligations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Prevent fraud and protect against security threats</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">✓</span>
                <span>Enforce our terms and conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Data Protection */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Protection & Security</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
            alteration, disclosure, or destruction. These measures include:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">🔒</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">SSL Encryption</h4>
                <p className="text-sm text-gray-600">Secure data transmission between your browser and our servers</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">🛡️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Secure Servers</h4>
                <p className="text-sm text-gray-600">Protected hosting infrastructure with regular security updates</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">🔐</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Access Controls</h4>
                <p className="text-sm text-gray-600">Restricted access to personal information on a need-to-know basis</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">📊</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Regular Audits</h4>
                <p className="text-sm text-gray-600">Periodic security assessments and vulnerability testing</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Third-Party Services */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Processors</h3>
            <p className="text-gray-700 mb-3">
              We use trusted third-party payment processors to handle financial transactions securely:
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Stripe, PayPal, and other major payment providers</li>
              <li>• Payment information is encrypted and processed according to PCI DSS standards</li>
              <li>• We do not store complete credit card numbers on our servers</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics & Marketing</h3>
            <p className="text-gray-700 mb-3">
              We may use third-party services to analyze website usage and improve our marketing:
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Google Analytics for website traffic analysis</li>
              <li>• Email marketing services for newsletters and promotions</li>
              <li>• Social media platforms for advertising and engagement</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Your Rights */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-[#00d4aa] pl-4">
              <h4 className="font-semibold text-gray-900 mb-1">Access & Correction</h4>
              <p className="text-gray-600 text-sm">Request access to or correction of your personal information</p>
            </div>
            
            <div className="border-l-4 border-[#00d4aa] pl-4">
              <h4 className="font-semibold text-gray-900 mb-1">Deletion</h4>
              <p className="text-gray-600 text-sm">Request deletion of your personal information (subject to legal requirements)</p>
            </div>
            
            <div className="border-l-4 border-[#00d4aa] pl-4">
              <h4 className="font-semibold text-gray-900 mb-1">Portability</h4>
              <p className="text-gray-600 text-sm">Request transfer of your data to another service provider</p>
            </div>
            
            <div className="border-l-4 border-[#00d4aa] pl-4">
              <h4 className="font-semibold text-gray-900 mb-1">Opt-out</h4>
              <p className="text-gray-600 text-sm">Unsubscribe from marketing communications at any time</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Cookies Policy */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies Policy</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website. 
            Cookies are small files stored on your device that help us remember your preferences and analyze website traffic.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Types of Cookies We Use</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">•</span>
                <div>
                  <strong>Essential Cookies:</strong> Required for basic website functionality
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">•</span>
                <div>
                  <strong>Performance Cookies:</strong> Help us understand how visitors interact with our website
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">•</span>
                <div>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and promotions
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Policy Updates */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
        
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time to reflect changes in our practices, 
          legal requirements, or business operations. We will notify you of any material changes by:
        </p>
        
        <ul className="mt-4 space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-[#00d4aa] mr-2 mt-1">•</span>
            <span>Posting the updated policy on our website</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#00d4aa] mr-2 mt-1">•</span>
            <span>Sending email notifications to registered users</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#00d4aa] mr-2 mt-1">•</span>
            <span>Displaying prominent notices on our website</span>
          </li>
        </ul>
      </SectionContainer>

      {/* Contact Information */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
        
        <div className="bg-gradient-to-r from-[#00d4aa]/10 to-[#6343D8]/10 p-6 rounded-lg border border-[#00d4aa]/20">
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or how we handle your personal information, 
            please contact us:
          </p>
          
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> <span className="text-[#00d4aa]">privacy@cdkeydeals.com</span></p>
            <p><strong>General Support:</strong> <span className="text-[#00d4aa]">support@cdkeydeals.com</span></p>
            <p><strong>Website:</strong> <span className="text-[#00d4aa]">www.cdkeydeals.com</span></p>
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Questions About Your Privacy?"
        subtitle="Our team is ready to help with any privacy concerns or data protection inquiries"
        buttonText="Contact Support"
        buttonHref="/contact"
        background="primary"
      />
    </>
  )
}
