# Side Cart Component Documentation

## Overview

A professional, high-fidelity Side Cart (Drawer) component built with React, TypeScript, and Tailwind CSS. The component provides a seamless shopping cart experience with slide-in animations, cart state management, and responsive design.

## Features

### 🛒 Core Functionality
- **Slide-in drawer** from the right side with smooth animations
- **Cart state management** with localStorage persistence
- **Dynamic item counting** and subtotal calculation
- **Quantity controls** (+ / - buttons) for each item
- **Remove items** functionality with trash icon
- **Empty cart state** with helpful messaging

### 🚀 Advanced Features
- **Free shipping progress bar** - Shows how much more to spend for free shipping
- **Responsive design** - Works perfectly on desktop and mobile
- **Backdrop click to close** - Click outside to close the cart
- **Body scroll lock** - Prevents background scrolling when cart is open
- **Cart badge** - Shows item count in header
- **Smooth transitions** - Professional animations throughout

### 🎨 Design Elements
- **Modern UI** - Clean, professional design following best practices
- **Purple theme** - Primary color (#6366F1) as specified
- **Typography** - Clean sans-serif fonts
- **Hover states** - Interactive feedback on all buttons
- **Loading states** - Smooth animations and transitions

## File Structure

```
components/cart/
├── SideCart.tsx          # Main cart component with context
├── CartDemo.tsx          # Demo component showing usage
└── README.md            # This documentation
```

## Usage

### 1. Basic Setup

Wrap your app with the `CartProvider` (already done in Header component):

```tsx
import { CartProvider } from "@/components/cart/SideCart";

function App() {
  return (
    <CartProvider>
      <YourAppContent />
    </CartProvider>
  );
}
```

### 2. Adding Items to Cart

```tsx
import { useCart } from "@/components/cart/SideCart";

function ProductComponent() {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: "product-1",
      title: "MS Office + Windows 11 Combo",
      price: 299.99,
      image: "/product-image.jpg"
    });
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
}
```

### 3. Using Cart State

```tsx
import { useCart } from "@/components/cart/SideCart";

function CartStatus() {
  const { items, itemCount, subtotal } = useCart();

  return (
    <div>
      <p>Items: {itemCount}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Products: {items.length}</p>
    </div>
  );
}
```

## Cart Context API

The cart provides the following methods and state:

### Methods
- `addItem(item)` - Add a new product to cart
- `removeItem(id)` - Remove an item from cart
- `updateQuantity(id, quantity)` - Update item quantity
- `clearCart()` - Remove all items from cart

### State
- `items` - Array of cart items
- `itemCount` - Total number of items
- `subtotal` - Total price calculation

## Cart Item Interface

```tsx
interface CartItem {
  id: string;        // Unique product identifier
  title: string;     // Product name
  price: number;     // Product price
  image: string;     // Product image URL
  quantity: number;  // Item quantity
}
```

## Configuration

### Free Shipping Threshold

Change the free shipping threshold by modifying the constant:

```tsx
const FREE_SHIPPING_THRESHOLD = 100; // $100 for free shipping
```

### Styling

The component uses Tailwind CSS classes. Key color variables:
- Primary: `indigo-600` (#6366F1)
- Background: `white`, `gray-50`
- Text: `gray-900`, `gray-600`
- Borders: `gray-200`

## Integration with Header

The cart is integrated with the Header component:
- Cart icon shows item count badge
- Clicking cart icon opens the drawer
- Cart automatically closes when clicking outside or X button

## Responsive Behavior

- **Desktop**: Full drawer with max-width of 448px (28rem)
- **Mobile**: Full-width drawer on small screens
- **Scroll**: Product list scrolls independently of header/footer
- **Touch**: Optimized for mobile touch interactions

## Performance Features

- **LocalStorage persistence** - Cart survives page refreshes
- **Optimistic updates** - Immediate UI feedback
- **Efficient re-renders** - Context-based state management
- **Image error handling** - Fallback for broken images

## Accessibility

- **ARIA labels** - Screen reader friendly
- **Keyboard navigation** - Tab order and focus management
- **Semantic HTML** - Proper heading hierarchy
- **Color contrast** - WCAG compliant colors

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Demo Usage

Include the `CartDemo` component to test cart functionality:

```tsx
import { CartDemo } from "@/components/cart/CartDemo";

function TestPage() {
  return (
    <div>
      <CartDemo />
      {/* Your other content */}
    </div>
  );
}
```

## Troubleshooting

### Common Issues

1. **Cart not opening**: Ensure `CartProvider` wraps your app
2. **Items not persisting**: Check localStorage is enabled
3. **Styles not applying**: Verify Tailwind CSS is configured
4. **TypeScript errors**: Check import paths are correct

### Debug Tips

- Cart state is logged to console on changes
- Check browser devtools for localStorage data
- Use React DevTools to inspect cart context

## Future Enhancements

Potential improvements for production:
- Coupon/discount code support
- Multiple shipping options
- Product variants (size, color)
- Wishlist integration
- Guest vs authenticated user carts
- Cart abandonment recovery
- Analytics integration
