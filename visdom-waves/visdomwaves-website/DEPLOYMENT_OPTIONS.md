# Deployment Options

Your Next.js app is now configured for **server mode** (`output: 'standalone'`) to enable full performance optimizations including image optimization.

## ✅ Current Configuration (Server Mode)

**Benefits:**
- Automatic image optimization (AVIF, WebP conversion)
- 40-60% smaller image sizes
- API routes work (contact form, etc.)
- Best performance possible

**Hosting Requirements:**
- Node.js runtime environment
- Server or serverless platform

---

## Recommended Hosting Platforms

### 1. Vercel (Easiest - Made by Next.js creators) ⭐

**Deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Features:**
- Free tier available
- Automatic deployments from Git
- Built-in CDN
- Automatic image optimization
- Zero configuration needed

**Cost:** Free for personal projects, $20/month for teams

---

### 2. Netlify (Good Alternative)

**Deployment:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

**Features:**
- Free tier available
- Git integration
- Form handling
- CDN included

**Note:** Configure runtime in `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### 3. AWS (EC2, ECS, or Amplify)

**Option A: AWS Amplify (Serverless)**
```bash
npm i -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

**Option B: EC2 (Traditional Server)**
```bash
# On your EC2 instance
npm run build
npm run start
```

**Cost:** Varies, ~$5-20/month for small apps

---

### 4. DigitalOcean App Platform

**Deployment:**
- Connect your Git repository
- Select "Next.js" as framework
- Deploy automatically

**Features:**
- $5/month starter plan
- Automatic HTTPS
- Static + dynamic rendering

---

### 5. Railway

**Deployment:**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Deploy
railway login
railway init
railway up
```

**Features:**
- $5/month starter
- Simple deployment
- Auto-scaling

---

## Alternative: Static Export (Limited Performance)

If you **only** have access to static hosting (GitHub Pages, basic S3), you'll need to sacrifice image optimization.

### Switch to Static Export:

1. **Update next.config.mjs:**
```javascript
const nextConfig = {
  images: {
    unoptimized: true, // Required!
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  output: 'export',
  trailingSlash: true,
};
```

2. **Build:**
```bash
npm run build
# Output will be in the 'out' directory
```

3. **Deploy to static host:**
```bash
# GitHub Pages
npm run build
# Push the 'out' directory to gh-pages branch

# Netlify (drag & drop)
# Just drag the 'out' folder to Netlify

# AWS S3
aws s3 sync out/ s3://your-bucket-name --delete
```

### ⚠️ Limitations with Static Export:
- No image optimization (images will be larger)
- Contact form API won't work (need external service like Formspree)
- No server-side features
- Slower page loads

---

## Performance Comparison

| Feature | Server Mode | Static Export |
|---------|-------------|---------------|
| Image Optimization | ✅ Yes | ❌ No |
| API Routes | ✅ Yes | ❌ No |
| Image Size | Small (WebP/AVIF) | Large (Original) |
| Page Load Speed | Fast | Slower |
| Hosting Cost | $5-20/month | Free - $5/month |
| Setup Complexity | Easy | Very Easy |

---

## Recommendation

**For best performance:** Use **Vercel** or **Netlify** with server mode (current config)
- Takes 5 minutes to deploy
- Free for personal projects
- All optimizations enabled
- Best user experience

**For free/static hosting:** Switch to static export, but expect:
- Slower load times
- Larger images
- No contact form (use Formspree or similar)

---

## Quick Start: Deploy to Vercel Now

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Follow prompts
# Done! Your site is live with full optimizations
```

Your site will be live at `your-project.vercel.app` with:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Image optimization
- ✅ Automatic deployments on Git push

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com/
- **Next.js Deployment:** https://nextjs.org/docs/deployment

Choose the platform that fits your needs and budget. For maximum performance, stick with server mode on Vercel or Netlify!
