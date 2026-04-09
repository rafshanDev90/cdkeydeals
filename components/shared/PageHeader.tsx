"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  background?: "light" | "primary" | "gradient";
}

export default function PageHeader({
  title,
  subtitle,
  description,
  className,
  background = "light"
}: PageHeaderProps) {
  const backgroundStyles = {
    light: "bg-white dark:bg-card text-gray-900 dark:text-foreground",
    primary: "bg-[#00d4aa] text-white",
    gradient: "bg-gradient-to-r from-[#00d4aa] to-[#6343D8] text-white"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "w-full py-16 px-4 sm:px-6 lg:px-8",
        backgroundStyles[background],
        className
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-4 opacity-90"
          >
            {subtitle}
          </motion.p>
        )}
        
        {description && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg opacity-80 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
