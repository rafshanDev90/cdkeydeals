"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Shield, Zap, Clock } from "lucide-react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1 text-white text-sm">
      <div className="bg-black/40 rounded px-2 py-1">
        <span className="font-bold">{String(timeLeft.days).padStart(2, "0")}</span>
        <span className="text-gray-300 text-xs ml-1">days</span>
      </div>
      <div className="bg-black/40 rounded px-2 py-1">
        <span className="font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
        <span className="text-gray-300 text-xs ml-1">hrs</span>
      </div>
      <div className="bg-black/40 rounded px-2 py-1">
        <span className="font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
        <span className="text-gray-300 text-xs ml-1">min</span>
      </div>
      <div className="bg-black/40 rounded px-2 py-1">
        <span className="font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>
        <span className="text-gray-300 text-xs ml-1">sec</span>
      </div>
    </div>
  );
}

export default function PromoBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Windows 11 Pro Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a3a4a] to-[#0f2030] p-6 lg:p-8">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#00d4aa] text-white text-xs font-bold rounded-full mb-4">
                Lifetime Warranty
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Windows 11 Pro - Genuine & Instant Delivery
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Everything you need for secure, fast performance - activate your
                PC with a trusted license.
              </p>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-400 line-through text-lg">$29.00</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-300">$</span>
                  <span className="text-4xl font-bold text-[#00d4aa]">25.50</span>
                </div>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -5%
                </span>
              </div>

              <Link
                href="/windows"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4aa] hover:bg-[#00b894] text-white font-semibold rounded-lg transition-colors"
              >
                Shop Now
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4aa]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </div>

          {/* Windows 10/11 Pro License Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3a2a3a] to-[#201020] p-6 lg:p-8">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#ff6b35] text-white text-xs font-bold rounded-full mb-4">
                Best Seller
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Windows 10/11 Pro License - Ready to Activate
              </h3>
              <p className="text-gray-300 mb-4">
                Fast. Secure. Affordable. The perfect upgrade for any PC.
              </p>

              <div className="mb-6">
                <CountdownTimer />
              </div>

              <Link
                href="/windows"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold rounded-lg transition-colors"
              >
                Shop Now
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-[#00d4aa]/10 rounded-full flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-[#00d4aa]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1a1a1a]">Instant Delivery</h4>
              <p className="text-sm text-gray-500">Get your keys in seconds</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-[#00d4aa]/10 rounded-full flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-[#00d4aa]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1a1a1a]">Secure Payments</h4>
              <p className="text-sm text-gray-500">100% safe transactions</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-[#00d4aa]/10 rounded-full flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-[#00d4aa]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#1a1a1a]">24/7 Support</h4>
              <p className="text-sm text-gray-500">Always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
