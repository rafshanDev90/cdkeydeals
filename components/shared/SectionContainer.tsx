"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "light";
  padding?: "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export default function SectionContainer({
  children,
  className,
  background = "white",
  padding = "lg",
  maxWidth = "2xl"
}: SectionContainerProps) {
  const backgroundStyles = {
    white: "bg-white dark:bg-card",
    gray: "bg-gray-50 dark:bg-muted",
    light: "bg-[#f8fafc] dark:bg-muted"
  };

  const paddingStyles = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-20"
  };

  const maxWidthStyles = {
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-4xl",
    xl: "max-w-5xl",
    "2xl": "max-w-7xl",
    full: "max-w-full"
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "w-full px-4 sm:px-6 lg:px-8",
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
    >
      <div className={cn("mx-auto", maxWidthStyles[maxWidth])}>
        {children}
      </div>
    </motion.section>
  );
}
