# Deployment Guide - Digital Wellbeing Tracker Landing Page

This guide covers deploying the landing page to various platforms.

## Prerequisites

- Node.js 18+ installed
- `npm` or `pnpm` package manager
- A GitHub account (for source code)
- Accounts for your chosen hosting platform (Vercel, Netlify, etc.)

## Quick Deploy to Vercel (Recommended)

Vercel is optimized for Next.js and offers free tier with excellent performance.

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel --prod

# Follow the prompts to link your GitHub account
```

### Option 2: Using GitHub Integration

1. Push your project to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Vercel will auto-detect Next.js and configure it
5. Click "Deploy"

### Option 3: Using Git Auto-Deploy

Each push to your default branch will trigger automatic deployment on Vercel.

## Deploy to Netlify

### Option 1: GitHub Integration

1. Push to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy"

### Option 2: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## Build & Deploy Manually

For custom hosting (AWS, GCP, your own server):

### Build the project

```bash
# Install dependencies
npm install

# Create production build
npm run build

# Test production build locally
npm start
```

### Deploy the `.next` directory

The built project is in the `.next` directory. You can:
- Copy to your web server
- Upload to CDN
- Use with Docker

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./
COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t dwt-landing .
docker run -p 3000:3000 dwt-landing
```

## Environment Variables

This project doesn't require environment variables for basic functionality.

### Optional Variables

For contact form integration:

```env
# .env.local
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
```

Or create a `.env.local` file with:

```
NEXT_PUBLIC_FORMSPREE_ID=f/xyzabc123
```

## Performance Optimization

### Vercel Deployment

Vercel automatically:
- Optimizes images
- Enables caching
- Minifies code
- Enables gzip compression
- Provides analytics

No additional configuration needed!

### Manual Deployments

Enable in `next.config.mjs`:

```javascript
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}
```

## Custom Domain

### On Vercel

1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### On Netlify

1. Go to Domain settings
2. Click "Add custom domain"
3. Update DNS records at your registrar

### On Other Platforms

Point your domain's DNS CNAME record to your hosting provider's assigned domain.

## SSL/HTTPS

- **Vercel**: Automatic free SSL via Let's Encrypt
- **Netlify**: Automatic free SSL via Let's Encrypt
- **Other platforms**: Configure SSL through your provider or use Cloudflare

## Monitoring & Analytics

### Built-in Analytics

This project includes Vercel Analytics. View metrics:

1. Log in to Vercel dashboard
2. Select your project
3. View analytics in "Analytics" tab

### SEO & Performance Monitoring

Monitor these metrics:

- **Core Web Vitals**:
  - Largest Contentful Paint (LCP): Target < 2.5s
  - First Input Delay (FID): Target < 100ms
  - Cumulative Layout Shift (CLS): Target < 0.1

Use tools:
- [PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://webpagetest.org)
- [GTmetrix](https://gtmetrix.com)

## Troubleshooting

### Build fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Slow deployment

- Check file sizes: `du -sh *`
- Remove unused dependencies
- Optimize images manually if needed

### Contact form not working

1. Verify Formspree form ID is correct
2. Check form endpoint in `components/contact-form.tsx`
3. Test locally: `npm run dev`
4. Verify network requests in browser DevTools

### Images not loading

- Verify image paths start with `/`
- Check images exist in `/public/` directory
- Verify file extensions are correct

## Rollback

### On Vercel

1. Go to "Deployments" tab
2. Click on previous deployment
3. Click "Redeploy"

### On Netlify

1. Go to "Deploys" tab
2. Select a previous deploy
3. Click "Publish deploy"

## Continuous Deployment

All platforms with GitHub integration support auto-deploy:

- Push to your main branch
- Automated tests run (if configured)
- Automatic deployment on success
- Automatic rollback on failure

## Security Checklist

- ✅ HTTPS enabled
- ✅ Security headers configured
- ✅ No sensitive data in code
- ✅ Dependencies keep up-to-date
- ✅ Regular security audits: `npm audit`

Run audit:

```bash
npm audit
npm audit fix  # Auto-fix vulnerabilities
```

## Performance Checklist

- ✅ Images optimized (< 200KB each)
- ✅ No unused dependencies
- ✅ Code splitting enabled
- ✅ Caching configured
- ✅ Lighthouse score > 85

Test performance:

```bash
npm run build
npm start
# Visit http://localhost:3000
# Run Lighthouse audit in Chrome DevTools
```

## Maintenance

### Regular Updates

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Test thoroughly
npm run dev
npm run build
npm start
```

### Monitoring

Set up alerts for:
- Deployment failures
- High error rates
- Performance degradation
- Downtime

## Support

For deployment help:
- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com
- Next.js docs: https://nextjs.org/docs
- GitHub issues: https://github.com/DivyanshM30/digital-wellbeing-tracker/issues

---

**Last updated**: November 2025
