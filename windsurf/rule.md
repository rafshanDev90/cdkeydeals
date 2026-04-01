# Next.js Migration & Production Standards (rule.md)

## 1. Environment & Installation Rules
- Package Manager: Use npm exclusively. Do not mix with yarn or pnpm.
- Dependency Resolution: Always use --legacy-peer-deps if peer dependency conflicts occur during migration.
- Node Version: Must match the version defined in .nvmrc. Run node -v before any task.

## 2. Architecture Standards (App Router)
- Server-First Design: All components are Server Components by default. Only add "use client" at the "leaf" level (e.g., buttons, forms, animations).
- File Conventions:
  - page.tsx: Unique UI for a route.
  - layout.tsx: Shared UI across routes (ensure one Root Layout exists).
  - loading.tsx: Must be used for all data-heavy routes to enable Instant Loading States.

## 3. Professional Migration Procedures
- Metadata: Do not use <head> tags in components. Use the [Metadata API](https://nextjs.org) in layout.tsx or page.tsx.
- Routing: Replace react-router-dom hooks with next/navigation (useRouter, usePathname, useParams).
- Images: Replace <img> with next/image for automatic optimization and to prevent Layout Shift.
- Environment Variables: Rename all VITE_ prefixes to NEXT_PUBLIC_ for client-side access.

## 4. Production Readiness Audit
- Strict Linting: Run npm run lint before any commit. No any types allowed in TypeScript.
- Supabase SSR: Authentication must use @supabase/ssr to ensure session persistence across server and client.
- SEO Check: Verify each page has a canonical URL and Open Graph tags defined in its metadata object.