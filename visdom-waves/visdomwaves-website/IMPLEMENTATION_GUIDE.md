# Security & Performance Fixes - Implementation Guide

This document contains all the fixes needed to address the weaknesses identified in your website.

## ✅ Completed Fixes

### 1. Created `.env.example` File
Location: `/.env.example`
- Template for all required environment variables
- Includes comments for each variable

### 2. Added Error Boundaries and Custom Pages
- `/app/error.tsx` - Client-side error boundary
- `/app/not-found.tsx` - Custom 404 page
- `/app/loading.tsx` - Loading state

### 3. Created SEO Files
- `/app/sitemap.ts` - Dynamic sitemap generation
- `/app/robots.ts` - Robots.txt configuration

### 4. Added Security Middleware
- `/middleware.ts` - Security headers (CSP, X-Frame-Options, etc.)

### 5. Created Rate Limiting Utility
- `/lib/rate-limit.ts` - In-memory rate limiter with IP tracking

### 6. Created Validation Schemas
- `/lib/validations.ts` - Zod schemas for form validation and XSS prevention

---

## 🔧 Manual Fixes Required

### Fix 1: Email Typo in Header (CRITICAL)

**File**: `components/layout/Header.tsx`
**Line**: 166

**Change**:
```typescript
// BEFORE
<p>Email: info@visdomwavess.com</p>

// AFTER
<p>Email: info@visdomwaves.com</p>
```

---

### Fix 2: Update Contact API Route with Rate Limiting & Validation

**File**: `app/api/contact/route.ts`

**Add imports at the top**:
```typescript
import { createRateLimiter } from '@/lib/rate-limit';
import { validateContactForm } from '@/lib/validations';
```

**Add rate limiter before the POST function**:
```typescript
// Rate limiter: 5 requests per 15 minutes
const rateLimiter = createRateLimiter(5, 15 * 60 * 1000);
```

**Replace the beginning of POST function** (lines 12-33):
```typescript
export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitResult = await rateLimiter(request);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateLimitResult.reset).toISOString(),
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = validateContactForm(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, company, service, message } = validation.data;

    // Check if Resend is configured
    const resend = getResendClient();
    // ... rest of the code continues
```

**Update the success response** (line 235-238):
```typescript
return NextResponse.json(
  { message: 'Email sent successfully', data },
  {
    status: 200,
    headers: {
      'X-RateLimit-Limit': rateLimitResult.limit.toString(),
      'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
      'X-RateLimit-Reset': new Date(rateLimitResult.reset).toISOString(),
    },
  }
);
```

**Update the error handler** (line 239-245):
```typescript
} catch (error) {
  console.error('Contact form error:', error);

  // Handle JSON parsing errors
  if (error instanceof SyntaxError) {
    return NextResponse.json(
      { error: 'Invalid request format' },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  );
}
```

---

### Fix 3: Update Newsletter API Route

**File**: `app/api/newsletter/route.ts`

**Add imports**:
```typescript
import { createRateLimiter } from '@/lib/rate-limit';
import { validateNewsletter } from '@/lib/validations';
```

**Add rate limiter**:
```typescript
// Rate limiter: 3 requests per 15 minutes
const rateLimiter = createRateLimiter(3, 15 * 60 * 1000);
```

**Update POST function start** (after line 12):
```typescript
export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitResult = await rateLimiter(request);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.reset - Date.now()) / 1000),
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = validateNewsletter(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const { email } = validation.data;
    // ... rest continues
```

---

### Fix 4: Fix TypeScript Types in Contentful

**File**: `lib/contentful.ts`

**Add proper type definition** (after line 56):
```typescript
// Contentful Entry Fields Type
interface ContentfulBlogPostFields {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  publishedDate: string;
  readingTime: string;
  tags: string[];
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}
```

**Create a mapping helper function** (before getAllBlogPosts):
```typescript
function mapContentfulBlogPost(item: any): BlogPost {
  const fields = item.fields as ContentfulBlogPostFields;
  return {
    slug: fields.slug,
    title: fields.title,
    excerpt: fields.excerpt,
    content: fields.content,
    category: fields.category,
    author: {
      name: fields.authorName,
      role: fields.authorRole,
      avatar: fields.authorAvatar?.fields?.file?.url,
    },
    publishedDate: fields.publishedDate,
    readingTime: fields.readingTime,
    tags: fields.tags || [],
    featuredImage: fields.featuredImage
      ? {
          url: fields.featuredImage.fields.file.url,
          alt: fields.featuredImage.fields.title,
        }
      : undefined,
    seo: fields.seo,
  };
}
```

**Replace all the mapping logic in functions** with:
```typescript
return response.items.map(mapContentfulBlogPost);
```

---

### Fix 5: Enable Image Optimization

**File**: `next.config.mjs`

**Option A** - If deploying to Vercel/Netlify:
```javascript
images: {
  domains: ['images.unsplash.com', 'source.unsplash.com'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'source.unsplash.com',
    },
  ],
  // REMOVE THIS LINE:
  // unoptimized: true,
},
```

**Option B** - If using static export (current setup):
Keep `unoptimized: true` but optimize images before deployment:
1. Install: `npm install sharp`
2. Convert images to WebP format
3. Use responsive images with srcset

---

### Fix 6: Add Cookie Consent for GDPR Compliance

**Install package**:
```bash
npm install react-cookie-consent
```

**Update `app/layout.tsx`** - Add after line 3:
```typescript
import CookieConsent from "react-cookie-consent";
```

**Update the body content** (after line 64):
```typescript
<body className="antialiased font-sans">
  {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
    <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
  )}
  {children}

  <CookieConsent
    location="bottom"
    buttonText="Accept"
    declineButtonText="Decline"
    enableDeclineButton
    cookieName="visdomwaves-gdpr-cookie"
    style={{ background: "#154360" }}
    buttonStyle={{
      background: "#0073CF",
      color: "#fff",
      fontSize: "14px",
      borderRadius: "6px",
      padding: "10px 20px",
    }}
    declineButtonStyle={{
      background: "transparent",
      border: "1px solid #fff",
      color: "#fff",
      fontSize: "14px",
      borderRadius: "6px",
      padding: "10px 20px",
    }}
    expires={150}
  >
    We use cookies to enhance your experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies.{" "}
    <a href="/privacy-policy" style={{ color: "#0FBFE4", textDecoration: "underline" }}>
      Learn more
    </a>
  </CookieConsent>
</body>
```

---

## 📦 Additional Improvements

### Add Testing Infrastructure

**Install dependencies**:
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom
```

**Create `jest.config.js`**:
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

**Create `jest.setup.js`**:
```javascript
import '@testing-library/jest-dom'
```

**Add test script to `package.json`**:
```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

---

### Add CI/CD with GitHub Actions

**Create `.github/workflows/ci.yml`**:
```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Build project
        run: npm run build
        env:
          NEXT_PUBLIC_GA_MEASUREMENT_ID: ${{ secrets.NEXT_PUBLIC_GA_MEASUREMENT_ID }}

      - name: Run tests
        run: npm test
        if: always()
```

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Fix email typo in Header.tsx
- [ ] Update API routes with rate limiting and validation
- [ ] Set all environment variables in hosting platform
- [ ] Enable image optimization or optimize images manually
- [ ] Add cookie consent banner
- [ ] Test contact form and newsletter subscription
- [ ] Verify rate limiting works
- [ ] Check all error pages (404, 500)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Set up error monitoring (Sentry recommended)
- [ ] Configure domain and SSL
- [ ] Test email delivery

---

## 📊 Performance Monitoring

After deployment, monitor:

1. **Core Web Vitals** (Lighthouse/PageSpeed Insights)
2. **Error rates** (set up Sentry or similar)
3. **API response times**
4. **Rate limit hits**
5. **Email delivery success rate**

---

## 🔒 Security Best Practices

For production:

1. **Use Upstash or Redis for rate limiting** instead of in-memory store
2. **Add CAPTCHA** (hCaptcha/reCAPTCHA) to forms
3. **Set up WAF** (Web Application Firewall) via Cloudflare
4. **Enable DDoS protection**
5. **Regular security audits**
6. **Keep dependencies updated**: `npm audit` and `npm update`

---

## 📝 Next Steps

1. Apply all manual fixes listed above
2. Test locally: `npm run dev`
3. Build and verify: `npm run build`
4. Deploy to staging environment first
5. Run full QA tests
6. Deploy to production

Need help with any of these steps? Let me know!
