"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface RouteDebuggerProps {
  enabled?: boolean;
}

export default function RouteDebugger({ enabled = false }: RouteDebuggerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (enabled) {
      console.log("🔍 Current Route:", pathname);
      console.log("📋 Available Routes:", [
        "/",
        "/ai-updates",
        "/games", 
        "/software",
        "/gift-cards",
        "/best-seller",
        "/sale",
        "/signin"
      ]);
    }
  }, [pathname, enabled]);

  // Debug function to check if routing works
  const testRouting = () => {
    console.log("🧪 Testing Routing...");
    console.log("✅ AI Updates page exists:", document.querySelector('[href="/ai-updates"]') !== null);
    console.log("✅ Current pathname:", pathname);
  };

  if (enabled) {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs z-50">
        <div>Route: {pathname}</div>
        <button onClick={testRouting} className="mt-1 bg-white text-black px-2 py-1 rounded">
          Test
        </button>
      </div>
    );
  }

  return null;
}
