"use client";

import { useState } from "react";
import { Truck, ShieldCheck, Zap, RotateCcw, Clock, Check, Headphones, ChevronDown } from "lucide-react";

export default function ProductAccordions() {
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const [returnOpen, setReturnOpen] = useState(false);

  return (
    <div className="mt-8 space-y-4">
      {/* Delivery Information */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <button
          onClick={() => setDeliveryOpen(!deliveryOpen)}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-muted transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-semibold text-foreground">Delivery Information</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
              deliveryOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {deliveryOpen && (
          <div className="px-5 pb-5 pt-0 border-t border-border">
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Instant Digital Delivery</p>
                  <p className="text-sm text-muted-foreground">Your product key will be delivered instantly via email after payment confirmation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">24/7 Automatic Delivery</p>
                  <p className="text-sm text-muted-foreground">Our system delivers keys automatically, even on weekends and holidays.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Secure Delivery</p>
                  <p className="text-sm text-muted-foreground">Keys are delivered securely through your account dashboard and email.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Return Policy */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <button
          onClick={() => setReturnOpen(!returnOpen)}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-muted transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <RotateCcw className="w-5 h-5 text-green-600" />
            </div>
            <span className="font-semibold text-foreground">Return & Refund Policy</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
              returnOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {returnOpen && (
          <div className="px-5 pb-5 pt-0 border-t border-border">
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Money-Back Guarantee</p>
                  <p className="text-sm text-muted-foreground">Full refund within 30 days if the product key doesn't work or is invalid.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Genuine Products Only</p>
                  <p className="text-sm text-muted-foreground">All our products are 100% genuine and sourced from authorized distributors.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Headphones className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">24/7 Customer Support</p>
                  <p className="text-sm text-muted-foreground">Our support team is available around the clock to assist with any issues.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
