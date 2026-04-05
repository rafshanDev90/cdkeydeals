import Link from 'next/link'
import { Metadata } from 'next'
import PageHeader from '@/components/shared/PageHeader'
import SectionContainer from '@/components/shared/SectionContainer'
import CTASection from '@/components/shared/CTASection'

export const metadata: Metadata = {
  title: 'Terms & Conditions - CDKeyDeals | Terms of Service',
  description: 'Read CDKeyDeals terms and conditions. Understand our service terms, user responsibilities, and legal agreements for using our digital marketplace.',
}

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Our Service Agreement"
        description="Read the terms and conditions that govern your use of CDKeyDeals services and digital marketplace."
        background="light"
      />

      {/* Breadcrumb */}
      <SectionContainer background="white" padding="sm">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#00d4aa] transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Terms & Conditions</span>
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

      {/* Agreement */}
      <SectionContainer background="white" maxWidth="2xl">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to <span className="font-bold text-[#00d4aa]">CDKeyDeals</span>. These Terms and Conditions ("Terms") govern your access to and use of our website, 
            services, and digital marketplace (collectively, the "Service"). By accessing or using our Service, 
            you agree to be bound by these Terms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you do not agree to these Terms, please do not use our Service. These Terms apply to all visitors, 
            users, and others who access or use the Service.
          </p>
        </div>
      </SectionContainer>

      {/* Description of Service */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Description of Service</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            <span className="font-bold text-[#00d4aa]">CDKeyDeals</span> is a digital marketplace that provides:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">🎮</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Digital Game Keys</h4>
                <p className="text-sm text-gray-600">Steam, PlayStation, Xbox, Nintendo, and other gaming platform keys</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">💻</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Software Licenses</h4>
                <p className="text-sm text-gray-600">Windows, Office, and professional software licenses</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">🎁</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Gift Cards</h4>
                <p className="text-sm text-gray-600">Digital gift cards for various platforms and services</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">🚀</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Instant Delivery</h4>
                <p className="text-sm text-gray-600">Immediate digital delivery upon purchase completion</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* User Accounts */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">User Accounts</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Registration</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">•</span>
                <span>You must provide accurate, current, and complete information during registration</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">•</span>
                <span>You are responsible for maintaining the confidentiality of your account credentials</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">•</span>
                <span>You must be at least 18 years old or have parental consent to create an account</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d4aa] mr-2 mt-1">•</span>
                <span>You are responsible for all activities under your account</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Termination</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We reserve the right to suspend or terminate your account for:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Violation of these Terms</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Fraudulent activities or unauthorized transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Abuse of our services or other users</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Providing false or misleading information</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Purchases and Payments */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Purchases and Payments</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Terms</h3>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>All prices are displayed in your selected currency and are inclusive of applicable taxes</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Payment must be completed at the time of purchase</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>We accept major credit cards, debit cards, and digital payment methods</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>All transactions are processed securely through third-party payment processors</span>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Digital Delivery</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Digital products are delivered instantly upon successful payment</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Product keys are sent to your registered email address</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>You are responsible for the safe storage of received digital products</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00d4aa] mr-2 mt-1">•</span>
              <span>Lost or deleted digital products may not be recoverable</span>
            </li>
          </ul>
        </div>
      </SectionContainer>

      {/* Intellectual Property */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Content</h3>
            <p className="text-gray-700 leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive 
              property of <span className="font-bold text-[#00d4aa]">CDKeyDeals</span> and its licensors. The Service is protected by copyright, 
              trademark, and other laws.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Third-Party Content</h3>
            <p className="text-gray-700 leading-relaxed">
              Digital products sold on our platform are subject to the intellectual property rights of their 
              respective owners. You acquire only the right to use these products as specified by the product 
              licensors and terms of service.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Prohibited Activities */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Prohibited Activities</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            You may not access or use the Service for any purpose other than that for which we make the Service available. 
            The Service may not be used in connection with any commercial endeavors except those that are specifically 
            endorsed or approved by us.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Strictly Prohibited</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Fraudulent transactions</li>
                <li>• Use of stolen payment methods</li>
                <li>• Reselling of digital products</li>
                <li>• Account sharing or trading</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Unauthorized Activities</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hacking or security breaches</li>
                <li>• Distribution of malware</li>
                <li>• Spam or unsolicited communications</li>
                <li>• Violation of applicable laws</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Refund Policy */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Policy</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Digital Products</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Due to the nature of digital products, we generally do not offer refunds except in the following circumstances:
          </p>
          
          <ul className="space-y-2 text-gray-700 mb-4">
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-1">✓</span>
              <span>Defective or non-working product keys</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-1">✓</span>
              <span>Incorrect product delivered</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-1">✓</span>
              <span>Duplicate order errors</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 mt-1">✓</span>
              <span>Technical issues preventing product use</span>
            </li>
          </ul>
          
          <p className="text-gray-700 text-sm">
            Refund requests must be made within 7 days of purchase. For detailed refund information, 
            please refer to our <Link href="/refund" className="text-[#00d4aa] hover:underline">Refund Policy</Link>.
          </p>
        </div>
      </SectionContainer>

      {/* Limitation of Liability */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            In no event shall <span className="font-bold text-[#00d4aa]">CDKeyDeals</span>, its directors, employees, partners, agents, suppliers, or affiliates be liable 
            for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
            loss of profits, data, use, goodwill, or other intangible losses.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
            <p className="text-sm text-gray-700">
              Our total liability to you for any cause of action whatsoever, and regardless of the form of the action, 
              will at all times be limited to the amount paid, if any, by you to us for the Service during the term 
              of the cause of action.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Governing Law */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms shall be interpreted and governed by the laws of the United Kingdom, without regard to 
            its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts 
            of London, United Kingdom.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            If any provision of these Terms is determined to be unlawful, void, or unenforceable, such provision 
            shall be deemed severable from these Terms and shall not affect the validity and enforceability of 
            any remaining provisions.
          </p>
        </div>
      </SectionContainer>

      {/* Changes to Terms */}
      <SectionContainer background="light">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
        
        <p className="text-gray-700 leading-relaxed">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
          If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. 
          What constitutes a material change will be determined at our sole discretion.
        </p>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          By continuing to access or use our Service after those revisions become effective, you agree to be bound 
          by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>
      </SectionContainer>

      {/* Contact Information */}
      <SectionContainer background="white">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        
        <div className="bg-gradient-to-r from-[#00d4aa]/10 to-[#6343D8]/10 p-6 rounded-lg border border-[#00d4aa]/20">
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> <span className="text-[#00d4aa]">legal@cdkeydeals.com</span></p>
            <p><strong>Support:</strong> <span className="text-[#00d4aa]">support@cdkeydeals.com</span></p>
            <p><strong>Website:</strong> <span className="text-[#00d4aa]">www.cdkeydeals.com</span></p>
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Questions About Our Terms?"
        subtitle="Our legal team is ready to help clarify any questions about our terms and conditions"
        buttonText="Contact Legal Support"
        buttonHref="/contact"
        background="primary"
      />
    </>
  )
}
