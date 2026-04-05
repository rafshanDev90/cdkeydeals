import React from 'react';

const InstantDelivery = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">

      {/* Header */}
      <div className="border-b pb-8 mb-8">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Instant Digital Delivery
        </h1>
        <p className="text-lg font-semibold text-blue-600">
          CDKeyDeals Digital Delivery Policy
        </p>
        <p className="text-sm text-gray-500 italic">
          Effective Date: January 10, 2026
        </p>
      </div>

      {/* Intro */}
      <section className="mb-10 space-y-4">
        <p>
          At <span className="font-bold">CDKeyDeals.com</span>, we specialize in instant
          digital delivery of software licenses, game keys, gift cards, and other digital
          products. Your purchases are delivered immediately after successful payment
          confirmation, ensuring you get access to your products without delay.
        </p>
        <p>
          This policy explains how our instant delivery system works, what to expect
          after purchase, and how to resolve any delivery issues you may encounter.
        </p>
      </section>

      {/* Section 1 - How It Works */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          How Instant Delivery Works
        </h2>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold mb-2 text-blue-900">
              📧 Email Delivery
            </h3>
            <p className="mb-2">
              Your digital product keys and download links are automatically sent to your
              registered email address immediately after payment confirmation.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Check your inbox (and spam folder)</li>
              <li>Subject: "Your CDKeyDeals Order #XXXXX"</li>
              <li>Contains product keys and activation instructions</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold mb-2 text-green-900">
              💻 Account Dashboard
            </h3>
            <p className="mb-2">
              All purchased digital products are also available in your CDKeyDeals
              account dashboard for easy access anytime.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Log into your account</li>
              <li>Navigate to "My Orders"</li>
              <li>View and download your digital products</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 - Delivery Timeframe */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Delivery Timeframe
        </h2>

        <div className="bg-gray-50 p-6 rounded-xl border">
          <h3 className="font-semibold mb-3 text-lg">
            ⚡ Immediate Delivery
          </h3>
          <p className="mb-4">
            <span className="font-bold text-green-600">99% of orders</span> are delivered
            within <span className="font-bold">1-5 minutes</span> after successful payment.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Standard Processing</h4>
              <ul className="text-sm space-y-1">
                <li>• Payment verification: 1-2 minutes</li>
                <li>• Email dispatch: Immediate</li>
                <li>• Dashboard update: Immediate</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Rare Delays</h4>
              <ul className="text-sm space-y-1">
                <li>• Payment gateway issues: Up to 30 minutes</li>
                <li>• High volume periods: Up to 1 hour</li>
                <li>• Manual verification: Up to 24 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Troubleshooting */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          What to Do If You Don't Receive Your Order
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-orange-400 pl-4">
            <h3 className="font-semibold mb-2">
              Step 1: Check Your Email
            </h3>
            <p className="text-sm mb-2">
              Verify the delivery email address and check all folders including:
            </p>
            <ul className="text-sm list-disc pl-6">
              <li>Inbox</li>
              <li>Spam/Junk folder</li>
              <li>Promotions tab (Gmail)</li>
              <li>Updates tab (Gmail)</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-400 pl-4">
            <h3 className="font-semibold mb-2">
              Step 2: Check Your Account Dashboard
            </h3>
            <p className="text-sm">
              Log into your CDKeyDeals account and navigate to "My Orders" to access
              all your digital products directly.
            </p>
          </div>

          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold mb-2">
              Step 3: Contact Support
            </h3>
            <p className="text-sm mb-2">
              If you haven't received your order within 30 minutes, contact our support
              team with:
            </p>
            <ul className="text-sm list-disc pl-6">
              <li>Order number</li>
              <li>Email used for purchase</li>
              <li>Payment confirmation screenshot</li>
            </ul>
            <p className="text-sm mt-2">
              Email: <span className="text-blue-600">support@cdkeydeals.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - No Physical Shipping */}
      <section className="mb-10 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
        <h2 className="text-2xl font-bold mb-4">
          No Physical Shipping
        </h2>

        <div className="space-y-3">
          <p>
            <span className="font-semibold text-lg">Important:</span> All products sold
            on CDKeyDeals.com are digital items only. We do not ship physical products.
          </p>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">What You Receive:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Digital product keys/codes via email</li>
              <li>Download links (if applicable)</li>
              <li>Activation instructions</li>
              <li>Access in your account dashboard</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">What You DON'T Receive:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Physical boxes or packaging</li>
              <li>USB drives or physical media</li>
              <li>Printed manuals</li>
              <li>Shipping tracking numbers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5 - Refund Policy for Digital Goods */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Refund Policy for Digital Goods
        </h2>

        <p className="mb-4">
          Due to the nature of digital products, our refund policy differs from physical
          goods. Please review our <a href="/refund-policy" className="text-blue-600 underline">
          complete refund policy</a> for detailed information.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Key Points:</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Digital products are generally non-refundable once delivered</li>
            <li>Refunds may be issued for defective or invalid keys</li>
            <li>Duplicate purchases may be eligible for refund</li>
            <li>All refund requests must be submitted within 7 days</li>
            <li>Proof of issue may be required for processing</li>
          </ul>
        </div>

        <p className="mt-4 text-sm">
          For refund inquiries, contact <span className="text-blue-600">support@cdkeydeals.com</span>
        </p>
      </section>

      {/* Section 6 - Customer Support */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Need Help? We're Here 24/7
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">📧 Email Support</h3>
            <p className="text-sm mb-1">
              <span className="font-medium">support@cdkeydeals.com</span>
            </p>
            <p className="text-xs text-gray-600">Response within 24 hours</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">💬 Live Chat</h3>
            <p className="text-sm mb-1">Available on our website</p>
            <p className="text-xs text-gray-600">Instant assistance during business hours</p>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm">
            <span className="font-semibold">Office Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM GMT
          </p>
          <p className="text-sm mt-1">
            <span className="font-semibold">Emergency Support:</span> Available 24/7 for critical issues
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t pt-8 text-center">
        <p className="text-sm text-gray-600">
          This policy is part of our Terms of Service and Privacy Policy.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Last updated: January 10, 2026
        </p>
      </section>

    </div>
  );
};

export default InstantDelivery;