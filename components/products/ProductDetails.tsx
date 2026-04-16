"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingCart,
  Heart,
  Star,
  Check,
  Minus,
  Plus,
  Package,
  Clock,
  ShieldCheck,
  Truck,
  Zap,
  Award,
  ChevronRight,
  Share2,
  ArrowLeft,
  ChevronDown,
  RotateCcw,
  Headphones,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Product, BadgeColor, Review } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { useWishlist, productToWishlistItem } from '@/context/WishlistContext';
import { useCurrency } from '@/context/CurrencyContext';
import { useTheme } from '@/hooks/use-theme';
import PriceDisplay from '@/components/ui/PriceDisplay';

const badgeColors: Record<BadgeColor, string> = {
  red: 'bg-red-500',
  orange: 'bg-orange-500',
  yellow: 'bg-yellow-500 text-gray-900',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  teal: 'bg-teal-500',
  cyan: 'bg-[#00d4aa] text-white',
};

interface ProductDetailsProps {
  product: Product;
  relatedProducts?: Product[];
}

export default function ProductDetails({ product, relatedProducts = [] }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const [returnOpen, setReturnOpen] = useState(false);
  const { addToCart, getItemQuantity } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPriceWithOriginal, convertPrice, selectedCurrency } = useCurrency();

  const {
    id,
    slug,
    title,
    price,
    originalPrice,
    currency = 'USD',
    badge,
    badgeColor = 'cyan',
    discount,
    image,
    images = [],
    category,
    stock,
    stockLabel,
    rating,
    reviewCount,
    soldCount,
    platform,
    description,
    features = [],
    deliveryTime = 'Instant',
    isNew,
    reviews = [],
    specifications = {},
  } = product;

  // Convert to USD base price (assuming current price is in USD for consistency)
  // If your prices are in different currencies, convert them to USD first
  const basePriceUSD = price;
  const baseOriginalPriceUSD = originalPrice;

  // Get formatted prices with discount info
  const { current: currentPrice, original: originalPriceFormatted, hasDiscount, discountPercentage } = 
    formatPriceWithOriginal(basePriceUSD, baseOriginalPriceUSD);

  const isOutOfStock = stock === 0;
  const isLowStock = stock !== undefined && stock <= 5 && stock > 0;
  const inWishlist = isInWishlist(id);
  const itemQuantity = getItemQuantity(id);

  const discountPercent = discount || (originalPrice && originalPrice > price
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0);

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id,
          title,
          price,
          originalPrice,
          currency,
          badge,
          badgeColor,
          discount: discountPercent,
          image,
          category,
        });
      }
    }
  };

  const handleWishlistToggle = () => {
    toggleWishlist(productToWishlistItem(product));
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Render star rating
  const renderRating = (ratingValue: number) => {
    const stars = [];
    const fullStars = Math.floor(ratingValue);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4 text-muted-foreground/30" />
        );
      }
    }
    return stars;
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link href="/collections" className="hover:text-foreground transition-colors">
          Products
        </Link>
        {category && (
          <>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href={`/collections?category=${encodeURIComponent(category)}`} className="hover:text-foreground transition-colors">
              {category}
            </Link>
          </>
        )}
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-foreground font-medium truncate max-w-[200px]">{title}</span>
      </nav>

      {/* Back Button (Mobile) */}
      <Link 
        href="/collections" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 lg:hidden"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="relative bg-gradient-to-br from-muted to-muted/80 rounded-2xl p-8 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              {badge && (
                <span
                  className={`inline-block px-3 py-1 text-white text-sm font-bold rounded-full shadow-sm ${
                    badgeColors[badgeColor as BadgeColor] || badgeColors.cyan
                  }`}
                >
                  {badge}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full shadow-sm">
                  -{discountPercent}% OFF
                </span>
              )}
              {isNew && (
                <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm font-bold rounded-full shadow-sm">
                  New
                </span>
              )}
            </div>

            {/* Wishlist & Share Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <button
                onClick={handleWishlistToggle}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                  inWishlist
                    ? 'bg-red-500 text-white'
                    : 'bg-background hover:bg-muted text-foreground'
                }`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-background hover:bg-muted text-foreground flex items-center justify-center transition-all duration-300 shadow-md"
                onClick={() => navigator.share?.({ title, url: window.location.href })}
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Product Image */}
            {image && !imageError ? (
              <img
                src={image}
                alt={title}
                className="max-w-full max-h-[400px] lg:max-h-[450px] object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-48 h-60 bg-gradient-to-br from-muted to-muted/60 rounded-lg shadow-xl flex items-center justify-center">
                <Package className="w-20 h-24 text-muted-foreground" />
              </div>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {images.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {[image, ...images].filter(Boolean).slice(0, 4).map((img, index) => (
                <button
                  key={index}
                  className="flex-shrink-0 w-20 h-20 bg-muted rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
                >
                  <img src={img} alt={`${title} - ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Platform & Category */}
          <div className="flex items-center gap-3 flex-wrap">
            {platform && (
              <Badge variant="secondary" className="text-blue-600 bg-blue-50">
                {platform}
              </Badge>
            )}
            {category && (
              <Badge variant="outline" className="text-gray-600">
                {category}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            {title}
          </h1>

          {/* Rating & Sold */}
          <div className="flex items-center gap-4 flex-wrap">
            {rating && (
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {renderRating(rating)}
                </div>
                <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
                {reviewCount && (
                  <span className="text-sm text-muted-foreground">
                    ({reviewCount.toLocaleString()} reviews)
                  </span>
                )}
              </div>
            )}
            {soldCount && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-orange-500" />
                <span>{soldCount.toLocaleString()} sold</span>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-3xl lg:text-4xl font-bold text-foreground">
              {currentPrice}
            </span>
            {hasDiscount && originalPriceFormatted && (
              <>
                <span className="text-xl text-muted-foreground line-through">
                  {originalPriceFormatted}
                </span>
                <span className="text-sm font-bold text-red-500 bg-red-50 dark:bg-red-950 px-2 py-1 rounded">
                  Save {discountPercentage}%
                </span>
              </>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                isOutOfStock
                  ? 'bg-red-500'
                  : isLowStock
                  ? 'bg-orange-500'
                  : 'bg-green-500'
              }`}
            />
            <span
              className={`font-medium ${
                isOutOfStock
                  ? 'text-red-600 dark:text-red-400'
                  : isLowStock
                  ? 'text-orange-600 dark:text-orange-400'
                  : 'text-green-600 dark:text-green-400'
              }`}
            >
              {stockLabel || (isOutOfStock ? 'Out of Stock' : 'In Stock')}
            </span>
            {!isOutOfStock && stock && stock > 0 && (
              <span className="text-sm text-muted-foreground">
                ({stock} available)
              </span>
            )}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-3 p-4 bg-muted rounded-xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>{deliveryTime} Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="w-5 h-5 text-blue-500" />
              <span>Genuine License</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Truck className="w-5 h-5 text-purple-500" />
              <span>Digital Download</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="font-medium text-foreground">Quantity:</span>
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={decrementQuantity}
                className="p-3 hover:bg-muted transition-colors disabled:opacity-50"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-6 py-3 font-medium min-w-[4rem] text-center">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="p-3 hover:bg-muted transition-colors disabled:opacity-50"
                disabled={isOutOfStock}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex items-center justify-between p-4 bg-primary/10 rounded-xl">
            <span className="font-medium text-foreground">Total Price:</span>
            <span className="text-2xl font-bold text-foreground">
              {new Intl.NumberFormat(selectedCurrency.locale, {
                style: 'currency',
                currency: selectedCurrency.code,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(convertPrice(basePriceUSD * quantity))}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant={isOutOfStock ? 'secondary' : 'default'}
              size="lg"
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white h-14 text-lg"
              disabled={isOutOfStock}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {isOutOfStock 
                ? 'Out of Stock' 
                : itemQuantity > 0 
                  ? `Add More (${itemQuantity} in cart)` 
                  : 'Add to Cart'
              }
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`flex-1 h-14 text-lg ${inWishlist ? 'border-red-500 text-red-500' : ''}`}
              onClick={handleWishlistToggle}
            >
              <Heart className={`w-5 h-5 mr-2 ${inWishlist ? 'fill-current' : ''}`} />
              {inWishlist ? 'In Wishlist' : 'Add to Wishlist'}
            </Button>
          </div>

          {/* Safe Checkout Badge */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4" />
            <span>256-bit SSL Encrypted Secure Checkout</span>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger 
              value="description" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-6 py-3"
            >
              Description
            </TabsTrigger>
            <TabsTrigger 
              value="features"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-6 py-3"
            >
              Features
            </TabsTrigger>
            <TabsTrigger 
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-6 py-3"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger 
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-6 py-3"
            >
              Reviews {reviews.length > 0 && `(${reviews.length})`}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none prose-gray dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {description || 'No description available for this product.'}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            {features.length > 0 ? (
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No features listed for this product.</p>
            )}
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            {Object.keys(specifications).length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium text-foreground">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No specifications available for this product.</p>
            )}
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map((review: Review) => (
                  <div key={review.id} className="p-4 bg-card border rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center font-medium text-muted-foreground">
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{review.author}</p>
                          <div className="flex items-center gap-1">
                            {renderRating(review.rating)}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground" suppressHydrationWarning>{formatDate(review.date)}</p>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400">
                            <Check className="w-3 h-3 mr-1" />
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2">{review.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-2">No reviews yet</p>
                <p className="text-sm text-muted-foreground/70">Be the first to review this product!</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Accordion Sections - Delivery & Return Policy */}
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
                deliveryOpen ? 'rotate-180' : ''
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
                returnOpen ? 'rotate-180' : ''
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
                    <p className="text-sm text-muted-foreground">Full refund within 30 days if the product key doesn&apos;t work or is invalid.</p>
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

      {/* Trust Badges Section */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-xl p-5 text-center border border-yellow-200 dark:border-yellow-800">
          <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <h4 className="font-semibold text-foreground text-sm">Instant Delivery</h4>
          <p className="text-xs text-muted-foreground mt-1">Digital keys in minutes</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-5 text-center border border-green-200 dark:border-green-800">
          <ShieldCheck className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <h4 className="font-semibold text-foreground text-sm">Secure Payment</h4>
          <p className="text-xs text-muted-foreground mt-1">256-bit SSL encryption</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-5 text-center border border-blue-200 dark:border-blue-800">
          <Headphones className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <h4 className="font-semibold text-foreground text-sm">24/7 Support</h4>
          <p className="text-xs text-muted-foreground mt-1">Always here to help</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-5 text-center border border-purple-200 dark:border-purple-800">
          <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <h4 className="font-semibold text-foreground text-sm">Best Price</h4>
          <p className="text-xs text-muted-foreground mt-1">Guaranteed lowest</p>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">You May Also Like</h2>
            <Link 
              href="/collections" 
              className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {relatedProducts.slice(0, 6).map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/product/${relatedProduct.slug || relatedProduct.id}`}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-border/80 transition-all duration-200 cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-32 bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center p-3 overflow-hidden">
                  {relatedProduct.image ? (
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <Package className="w-10 h-12 text-muted-foreground" />
                  )}
                  {relatedProduct.badge && (
                    <span
                      className={`absolute top-2 left-2 inline-block px-2 py-0.5 text-white text-xs font-bold rounded-full shadow-sm ${
                        relatedProduct.badgeColor === 'red'
                          ? 'bg-red-500'
                          : relatedProduct.badgeColor === 'orange'
                          ? 'bg-orange-500'
                          : relatedProduct.badgeColor === 'green'
                          ? 'bg-green-500'
                          : relatedProduct.badgeColor === 'blue'
                          ? 'bg-blue-500'
                          : relatedProduct.badgeColor === 'purple'
                          ? 'bg-purple-500'
                          : 'bg-[#00d4aa]'
                      }`}
                    >
                      {relatedProduct.badge}
                    </span>
                  )}
                </div>
                {/* Content */}
                <div className="p-3">
                  <h4 className="text-xs font-bold text-foreground line-clamp-2 min-h-[2rem] group-hover:text-primary transition-colors">
                    {relatedProduct.title}
                  </h4>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-sm font-bold text-foreground">
                      ${relatedProduct.price.toFixed(2)}
                    </span>
                    {relatedProduct.originalPrice && relatedProduct.originalPrice > relatedProduct.price && (
                      <span className="text-xs text-muted-foreground line-through">
                        ${relatedProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
