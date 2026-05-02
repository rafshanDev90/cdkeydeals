"use client";

import React from "react";
import { CheckCircle, Cpu, HardDrive, Monitor, Wifi } from "lucide-react";
import { Product } from "@/types/product";

interface ProductDescriptionProps {
  product: Product;
}

interface SystemRequirement {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export default function ProductDescription({ product }: ProductDescriptionProps) {
  // Extract system requirements from specifications or create defaults based on category
  const getSystemRequirements = (): SystemRequirement[] => {
    const requirements: SystemRequirement[] = [];
    
    // Extract from specifications if available
    if (product.specifications) {
      Object.entries(product.specifications).forEach(([key, value]) => {
        let icon = null;
        const label = key;
        
        // Assign icons based on common specification keys
        if (key.toLowerCase().includes('platform') || key.toLowerCase().includes('os')) {
          icon = <Monitor className="w-4 h-4" />;
        } else if (key.toLowerCase().includes('processor') || key.toLowerCase().includes('cpu')) {
          icon = <Cpu className="w-4 h-4" />;
        } else if (key.toLowerCase().includes('memory') || key.toLowerCase().includes('ram')) {
          icon = <HardDrive className="w-4 h-4" />;
        } else if (key.toLowerCase().includes('network') || key.toLowerCase().includes('internet')) {
          icon = <Wifi className="w-4 h-4" />;
        }
        
        requirements.push({ label, value, icon });
      });
    }
    
    // Add common requirements based on category if not present
    const categoryRequirements: Record<string, SystemRequirement[]> = {
      "Game Keys": [
        { label: "OS", value: "Windows 10/11 64-bit", icon: <Monitor className="w-4 h-4" /> },
        { label: "Processor", value: "Intel Core i3 or AMD equivalent", icon: <Cpu className="w-4 h-4" /> },
        { label: "Memory", value: "4 GB RAM", icon: <HardDrive className="w-4 h-4" /> },
        { label: "Graphics", value: "DirectX 11 compatible", icon: <Monitor className="w-4 h-4" /> },
        { label: "Network", value: "Broadband Internet connection", icon: <Wifi className="w-4 h-4" /> }
      ],
      "Software Keys": [
        { label: "OS", value: "Windows 10/11", icon: <Monitor className="w-4 h-4" /> },
        { label: "Processor", value: "1 GHz or faster", icon: <Cpu className="w-4 h-4" /> },
        { label: "Memory", value: "2 GB RAM", icon: <HardDrive className="w-4 h-4" /> },
        { label: "Storage", value: "10 GB available space", icon: <HardDrive className="w-4 h-4" /> }
      ]
    };
    
    if (requirements.length === 0 && product.category && categoryRequirements[product.category]) {
      requirements.push(...categoryRequirements[product.category]);
    }
    
    return requirements;
  };

  const systemRequirements = getSystemRequirements();

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-zinc-50 font-inter tracking-tight">
          Product Description
        </h2>
      </div>

      {/* Main Description Content */}
      <div className="space-y-8">
        {/* Description Text with Premium Typography */}
        {product.description ? (
          <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-zinc-800/50 rounded-2xl p-8 lg:p-10">
            <div 
              className="text-gray-700 dark:text-zinc-300 text-lg leading-relaxed font-inter text-justify space-y-6"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-zinc-800/50 rounded-2xl p-8 lg:p-10">
            <p className="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed font-inter text-justify italic">
              No description available for this product.
            </p>
          </div>
        )}

        {/* Key Features Section */}
        {product.features && product.features.length > 0 && (
          <div className="bg-gray-100 dark:bg-gradient-to-br dark:from-zinc-900/50 dark:to-zinc-800/30 backdrop-blur-md border border-gray-300 dark:border-zinc-700/50 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            {/* Subtle accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50 rounded-r-full" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-zinc-50 font-inter flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                Key Features
              </h3>
              
              <div className="grid gap-4">
                {product.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-zinc-700/30 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-gray-700 dark:text-zinc-200 text-base font-inter leading-relaxed flex-1">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* System Requirements Table */}
        {systemRequirements.length > 0 && (
          <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-zinc-800/50 rounded-2xl overflow-hidden">
            <div className="bg-gray-100 dark:bg-gradient-to-r dark:from-zinc-800/50 dark:to-zinc-700/30 px-8 py-6 border-b border-gray-300 dark:border-zinc-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-50 font-inter flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 dark:bg-zinc-700/50 rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-gray-600 dark:text-zinc-300" />
                </div>
                System Requirements
              </h3>
            </div>
            
            <div className="p-8">
              {/* Desktop Table */}
              <div className="hidden lg:block">
                <table className="w-full">
                  <tbody>
                    {systemRequirements.map((req, index) => (
                      <tr 
                        key={index}
                        className="border-b border-gray-200 dark:border-zinc-700/30 last:border-b-0 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 pr-8 w-1/3">
                          <div className="flex items-center gap-3">
                            {req.icon && (
                              <div className="w-8 h-8 bg-gray-100 dark:bg-zinc-700/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                {req.icon}
                              </div>
                            )}
                            <span className="font-semibold text-gray-700 dark:text-zinc-200 font-inter">
                              {req.label}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 pl-8 w-2/3">
                          <span className="text-gray-600 dark:text-zinc-400 font-inter">
                            {req.value}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {systemRequirements.map((req, index) => (
                  <div 
                    key={index}
                    className="bg-gray-100 dark:bg-zinc-800/30 border border-gray-300 dark:border-zinc-700/30 rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      {req.icon && (
                        <div className="w-8 h-8 bg-gray-100 dark:bg-zinc-700/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          {req.icon}
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-700 dark:text-zinc-200 font-inter mb-1">
                          {req.label}
                        </p>
                        <p className="text-gray-600 dark:text-zinc-400 font-inter text-sm">
                          {req.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
