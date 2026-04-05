import { Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: React.ReactNode;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  icon = <Package className="w-16 h-16 text-gray-300" />,
}: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Inter',system-ui,sans-serif]">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-8 max-w-md mx-auto font-['Inter',system-ui,sans-serif]">
        {description}
      </p>
      
      {actionLabel && actionHref && (
        <a href={actionHref}>
          <Button variant="default" size="lg">
            {actionLabel}
          </Button>
        </a>
      )}
    </div>
  );
}
