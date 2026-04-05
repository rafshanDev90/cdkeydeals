export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  currency?: string;
  badge?: string;
  badgeColor?: string;
  discount?: number;
  image?: string;
  category?: string;
  stock?: number;
  stockLabel?: string;
}

export interface TopProductsProps {
  title?: string;
  products: Product[];
  viewAllLink?: string;
  loading?: boolean;
}

export interface ProductCardProps extends Product {
  onAddToCart?: (id: number) => void;
  onQuickView?: (id: number) => void;
}

export type BadgeColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'teal' | 'cyan';

export type StockStatus = 'in-stock' | 'low-stock' | 'out-of-stock';
