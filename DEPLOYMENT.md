# Deployment Guide - Centurion Diamond

## Quick Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pv-webservices/centurion-diamond-redesign)

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (staging)
vercel

# Deploy to production
vercel --prod
```

## Alternative Hosting Options

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### Render

1. Create new Web Service on Render
2. Connect your GitHub repository
3. Build Command: `npm run build`
4. Start Command: `npm start`
5. Environment: Node

### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

## Environment Variables

No environment variables required for this project.

## Post-Deployment Checklist

- [ ] Verify all images load correctly
- [ ] Test animations on mobile devices
- [ ] Check SEO metadata in browser dev tools
- [ ] Verify smooth scroll navigation
- [ ] Test all hover states and interactions
- [ ] Run Lighthouse audit (target: 90+ performance)

## Performance Optimization

### Image Optimization

Images are already optimized via Next.js Image component with remote patterns configured for Magnific CDN.

### Font Optimization

Fonts are loaded via `geist` and `@studio-freight/inter` packages with automatic optimization.

### Bundle Size

Current bundle is optimized with tree-shaking enabled. Target: <200KB JS.

## Monitoring

### Vercel Analytics

Enable Vercel Analytics in your project dashboard for real-time performance monitoring.

### Lighthouse CI

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun
```

## Custom Domain

1. Go to Vercel Project Settings
2. Navigate to Domains
3. Add your custom domain
4. Update DNS records as instructed

## SSL Certificate

Automatic SSL is provided by Vercel. No additional configuration needed.

## Rollback

```bash
# List deployments
vercel ls

# Rollback to previous deployment
vercel rollback [deployment-url]
```

## Support

For issues or questions:
- GitHub Issues: https://github.com/pv-webservices/centurion-diamond-redesign/issues
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

---

**Deployed with precision. Hosted for brilliance.** 💎
