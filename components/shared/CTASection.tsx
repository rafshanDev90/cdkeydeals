"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  background?: "primary" | "gradient" | "dark";
  className?: string;
}

export default function CTASection({
  title = "Ready to Find Amazing Deals?",
  subtitle = "Join thousands of gamers who save big on digital games and software",
  buttonText = "Shop Now",
  buttonHref = "/",
  secondaryButtonText,
  secondaryButtonHref,
  background = "primary",
  className
}: CTASectionProps) {
  const backgroundStyles = {
    primary: "bg-[#00d4aa] text-white",
    gradient: "bg-gradient-to-r from-[#00d4aa] to-[#6343D8] text-white",
    dark: "bg-gray-900 text-white"
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "w-full py-16 px-4 sm:px-6 lg:px-8",
        backgroundStyles[background],
        className
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 bg-white text-[#00d4aa] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors group"
          >
            <ShoppingBag className="w-5 h-5" />
            {buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#00d4aa] transition-colors"
            >
              {secondaryButtonText}
            </Link>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
