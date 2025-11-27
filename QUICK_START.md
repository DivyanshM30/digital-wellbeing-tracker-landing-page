# Quick Start Guide - Digital Wellbeing Tracker Landing Page

Get up and running in 5 minutes!

## Installation (2 minutes)

```bash
# Navigate to project directory
cd /path/to/digital-wellbeing-tracker-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:3000** in your browser.

## What You Get

✅ Production-ready landing page
✅ Dark/light theme toggle
✅ Responsive design (mobile-first)
✅ Full accessibility support
✅ Contact form with Formspree integration
✅ SEO optimized with structured data
✅ Screenshot carousel
✅ FAQ accordion
✅ Testimonials & social proof
✅ Tech stack showcase
✅ Complete documentation

## Key Features

### 🎨 Beautiful Design
- Modern, clean interface
- Gradient text effects
- Smooth animations
- Dark mode support

### 📱 Responsive
- Works on all devices (320px+)
- Touch-friendly buttons
- Mobile menu with hamburger

### ♿ Accessible
- WCAG 2.1 Level AA compliant
- Full keyboard navigation
- Screen reader support
- High contrast

### ⚡ Fast
- Lighthouse 90+ scores
- Optimized images
- Code splitting enabled
- SEO optimized

### 🔒 Privacy-First
- No tracking pixels
- No analytics by default
- Clean source code
- Vercel Analytics optional

## Common Tasks

### Run Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Update Content

#### Change Hero Headline
Edit `components/hero.tsx`:
```tsx
<h1>
  <span className="gradient-text">Your Headline</span>
  <br />
  Line 2
  <br />
  Line 3
</h1>
```

#### Change Hero Image
1. Place new image in `/public/my-image.jpg`
2. Update `components/hero.tsx`:
```tsx
<img src="/my-image.jpg" alt="Description" />
```

#### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary: oklch(0.42 0.15 265);  /* Change primary color */
  --accent: oklch(0.68 0.18 135);   /* Change accent color */
}
```

#### Enable Contact Form
1. Create account at https://formspree.io/
2. Create new form, get Form ID
3. Create `.env.local`:
```env
NEXT_PUBLIC_FORMSPREE_ID=f/your_form_id
```

#### Update Features
Edit `components/features.tsx`:
```tsx
const features = [
  {
    icon: ActivityIcon,
    title: "Feature Title",
    description: "Feature description...",
  },
  // Add more...
]
```

## File Structure

```
📁 project/
├── 📁 app/                    # Next.js app directory
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Main page
│   └── globals.css            # Global styles & theme
├── 📁 components/             # React components
│   ├── header.tsx             # Navigation header
│   ├── hero.tsx               # Hero section
│   ├── features.tsx           # Features grid
│   ├── how-it-works.tsx       # Process flow
│   ├── demo-carousel.tsx      # Screenshot carousel
│   ├── analytics.tsx          # Charts section
│   ├── download.tsx           # Download section
│   ├── tech-stack.tsx         # Technology overview
│   ├── testimonials.tsx       # User testimonials
│   ├── faq.tsx                # FAQ accordion
│   ├── contact-form.tsx       # Contact form
│   └── footer.tsx             # Footer
├── 📁 hooks/                  # React hooks
│   └── use-theme.ts           # Dark mode hook
├── 📁 lib/                    # Utilities
│   └── utils.ts               # Helper functions
├── 📁 public/                 # Static assets
│   ├── icon.svg               # Logo
│   ├── *.jpg                  # Screenshots
│   └── site.webmanifest       # PWA manifest
├── 📄 package.json            # Dependencies
├── 📄 next.config.mjs         # Next.js config
├── 📄 tsconfig.json           # TypeScript config
├── 📄 README.md               # Full documentation
├── 📄 DEPLOYMENT.md           # Deployment guide
├── 📄 ACCESSIBILITY.md        # Accessibility guide
└── 📄 IMPLEMENTATION_SUMMARY.md # What was done
```

## Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## Customization Examples

### Add New Section
1. Create `components/my-section.tsx`:
```tsx
export default function MySection() {
  return (
    <section id="my-section" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Section</h2>
        {/* Content */}
      </div>
    </section>
  )
}
```

2. Add to `app/page.tsx`:
```tsx
import MySection from "@/components/my-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* ... other sections ... */}
        <MySection />
      </main>
      <Footer />
    </div>
  )
}
```

### Add New Feature Card
Edit `components/features.tsx`:
```tsx
const features = [
  // Existing...
  {
    icon: NewIcon,
    title: "New Feature",
    description: "Feature description goes here.",
  },
]
```

### Change Theme Colors
Edit `:root` in `app/globals.css`:
```css
:root {
  --primary: oklch(0.50 0.20 280);      /* Purple */
  --accent: oklch(0.70 0.20 140);       /* Teal */
  --background: oklch(0.98 0 0);        /* White */
  --foreground: oklch(0.15 0 0);        /* Dark */
  /* ... other colors ... */
}
```

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS 12+, Android 5+)

## Performance Tips

✅ Already optimized:
- Images preloaded for hero
- CSS purging enabled
- Code splitting active
- Gzip compression enabled

Additional optimizations:
- Use WebP images with fallbacks
- Implement incremental static regeneration
- Use image CDN like Cloudinary
- Add service worker for offline support

## Accessibility Features

- ♿ WCAG 2.1 Level AA compliant
- 🎹 Full keyboard navigation
- 🔊 Screen reader compatible
- 🎨 High contrast mode support
- 📱 Touch-friendly interface
- ♿ Reduced motion respected

## Testing

### Test Accessibility
```bash
# Run in Chrome DevTools > Lighthouse > Accessibility
# Target score: 95+
```

### Test Mobile Responsiveness
1. Open DevTools (F12)
2. Click device toolbar
3. Test at 320px, 768px, 1024px

### Test Dark Mode
1. Click theme toggle (top right)
2. Or use system preference (Settings > Display > Dark Mode)

### Test Forms
1. Fill contact form
2. If Formspree configured, check email
3. Else, check browser console

## Troubleshooting

### Port 3000 in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Node modules issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for linting issues
npm run lint
```

### Styles not applying
```bash
# Rebuild Tailwind
npm run build
npm start
```

## Getting Help

📖 **Documentation**
- Full README: See `README.md`
- Deployment guide: See `DEPLOYMENT.md`
- Accessibility guide: See `ACCESSIBILITY.md`

🐙 **GitHub**
- Issues: Report bugs at GitHub issues
- Discussions: Ask questions

📧 **Email**
- Contact: contact@dwt.dev

## Next Steps

1. ✅ Customize content (hero, features, testimonials)
2. ✅ Replace images with your screenshots
3. ✅ Set up Formspree for contact form
4. ✅ Test on mobile devices
5. ✅ Deploy to Vercel or Netlify
6. ✅ Set up custom domain
7. ✅ Monitor with Lighthouse

## Deployment Checklist

Before deploying:
- [ ] Customized all content
- [ ] Updated images
- [ ] Tested on mobile
- [ ] Tested contact form
- [ ] Checked Lighthouse score
- [ ] Set up custom domain (optional)
- [ ] Enabled analytics (optional)
- [ ] Added to GitHub/Git

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [WCAG Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Performance](https://web.dev/performance/)

---

**Ready to deploy?** Follow the [Deployment Guide](./DEPLOYMENT.md)

**Questions about accessibility?** Check [Accessibility Guide](./ACCESSIBILITY.md)

**Want all the details?** See [Implementation Summary](./IMPLEMENTATION_SUMMARY.md)

Good luck! 🚀
