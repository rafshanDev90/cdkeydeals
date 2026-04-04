"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add toast notification or redirect logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Contact Us</span>
        </nav>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Contact Us | Customer Support, Email & Help Center
        </h1>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left Column - Business Details */}
          <div className="space-y-8">
            {/* Business Details Section */}
            <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Business Details</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Trade Name:</span>
                  <span className="ml-2 text-gray-600">cdkeydeals.com</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="ml-2 text-gray-600">support@cdkeydeals.com</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Address:</span>
                  <p className="mt-1 text-gray-600">
                    123 Business Street<br />
                    London, United Kingdom<br />
                    EC1A 1BB
                  </p>
                </div>
              </div>
            </section>

            {/* Get in Touch Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed">
                We're here to help! For the fastest response, please use our contact form or email us directly at 
                <span className="font-medium"> support@cdkeydeals.com</span>. Our support team is dedicated to resolving 
                your inquiries as quickly as possible.
              </p>
            </section>

            {/* Support Hours */}
            <section className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Support Hours</h2>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-lg font-medium text-gray-800">24/7 Availability</span>
              </div>
              <p className="text-gray-600 mt-2">
                Our support team is available round the clock to assist you with any questions or concerns.
              </p>
            </section>

            {/* Order & Support Requests */}
            <section className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order & Support Requests</h2>
              <p className="text-gray-600 mb-4">To help us assist you better, please include:</p>
              <ul className="space-y-2 text-gray-600">
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
            </section>

            {/* Response Time */}
            <section className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Typical Response Time</h2>
              <p className="text-gray-600">
                We strive to respond to all inquiries within <span className="font-semibold text-green-700">24 hours</span>. 
                During peak periods, response times may be slightly longer, but we appreciate your patience and 
                will get back to you as soon as possible.
              </p>
            </section>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field (Required) */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    placeholder="+44 20 1234 5678"
                  />
                </div>

                {/* Message Field (Required) */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
