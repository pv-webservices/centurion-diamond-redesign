# Development Guide - Centurion Diamond

## Architecture Overview

### Tech Stack

```
┌─────────────────────────────────────────┐
│           Next.js 14 (App Router)       │
├─────────────────────────────────────────┤
│  React 18 + TypeScript + Framer Motion  │
├─────────────────────────────────────────┤
│         Tailwind CSS + Geist Fonts      │
└─────────────────────────────────────────┘
```

### File Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Home page composition
└── components/            # Reusable UI components
    ├── Navbar.tsx         # Fixed navigation bar
    ├── Hero.tsx           # Hero section with animations
    ├── Journey.tsx        # 3-step process section
    ├── Brilliance.tsx     # Features + image section
    ├── Cuts.tsx           # Diamond cuts grid
    ├── Collection.tsx     # Product collection grid
    └── Footer.tsx         # Site footer
```

## Component Documentation

### Navbar

**Purpose:** Fixed navigation with smooth scroll links

**Features:**
- Backdrop blur effect
- Staggered nav item animations
- Hover underline animations
- Mobile-responsive (hamburger menu ready)

**Customization:**
```typescript
const navItems = [
  { name: 'Home', href: '#home' },
  // Add more items here
]
```

### Hero

**Purpose:** Full-viewport hero with staggered letter animation

**Features:**
- Letter-by-letter reveal (0.05s stagger)
- Floating particle background
- Dual CTA buttons
- Scroll indicator animation

**Animation Timing:**
- Tagline: 0.2s delay
- Title: 0.4s + index*0.05s
- Subtitle: 0.8s delay
- CTAs: 1.0s delay
- Scroll indicator: 1.5s delay

### Journey

**Purpose:** 3-step process visualization

**Features:**
- Large numbered steps (01, 02, 03)
- Hover lift animation
- Connector lines between steps
- Scroll-triggered fade-in

**Content Structure:**
```typescript
const steps = [
  {
    number: '01',
    title: 'From Rough',
    description: '...',
  },
  // Add more steps
]
```

### Brilliance

**Purpose:** Feature showcase with image

**Features:**
- 2-column grid (content + image)
- Icon-based feature list
- Floating badge overlay
- Scroll-triggered slide-in

**Image Source:**
Uses Magnific-generated diamond macro shot.

### Cuts

**Purpose:** Diamond cut types grid

**Features:**
- 6-card responsive grid
- Hover border glow effect
- Background gradient on hover
- Staggered entry animation

**Available Cuts:**
- Round, Princess, Cushion
- Oval, Emerald, Pear

### Collection

**Purpose:** Product category showcase

**Features:**
- 2-column grid with aspect ratio
- Image hover scale effect
- Gradient overlay
- Animated CTA arrow

**Images:**
All images from Magnific AI generation.

### Footer

**Purpose:** Site footer with links

**Features:**
- 4-column layout
- Social media icons
- Hover animations on all links
- Responsive stacking

## Animation System

### Framer Motion Variants

```typescript
// Fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
}

// Stagger container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

### Scroll Animations

All sections use `whileInView` with viewport margin:

```typescript
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6 }}
>
```

### Hover Animations

```typescript
whileHover={{ scale: 1.05, y: -2 }}
whileTap={{ scale: 0.98 }}
transition={{ duration: 0.2 }}
```

## Styling System

### Tailwind Configuration

**Custom Colors:**
```typescript
colors: {
  background: '#0A0A0A',
  surface: '#0D0D0D',
  border: '#262626',
  gold: {
    500: '#E0A045',
    // ... more shades
  },
}
```

**Custom Fonts:**
```typescript
fontFamily: {
  heading: [geistSans.variable, 'sans-serif'],
  body: [inter.variable, 'sans-serif'],
}
```

### Utility Classes

**Common Patterns:**

```typescript
// Section padding
py-32 px-6

// Container
max-w-7xl mx-auto

// Text gradients
text-gradient-to-r from-gold-500 to-gold-300

// Borders
border border-border rounded-2xl

// Shadows
shadow-2xl shadow-gold-500/10
```

## Development Workflow

### 1. Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

### 2. Making Changes

**Component Updates:**
1. Edit component in `src/components/`
2. Changes auto-reload via Fast Refresh
3. Test in browser

**Style Updates:**
1. Update `tailwind.config.ts` for theme changes
2. Update component classes for layout changes
3. Check responsive behavior

### 3. Testing

```bash
# Run ESLint
npm run lint

# Build for production
npm run build

# Test production build
npm start
```

### 4. Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-section

# Commit changes
git add .
git commit -m "Add new section"

# Push to GitHub
git push origin feature/new-section

# Create Pull Request on GitHub
```

## Performance Best Practices

### Image Optimization

- Use Next.js `<Image>` component
- Specify width/height for aspect ratio
- Lazy loading enabled by default

### Font Loading

- Geist and Inter auto-optimize
- `font-display: swap` prevents blocking
- Preload critical weights

### Code Splitting

- Next.js automatic code splitting
- Components lazy-loaded per route
- Tree-shaking removes unused code

### Bundle Analysis

```bash
# Analyze bundle size
npm install -g webpack-bundle-analyzer
npm run build
npx next-bundle-analyzer
```

## Accessibility

### WCAG 2.1 Compliance

- **Color Contrast:** 4.5:1 minimum (gold on black: 8.2:1)
- **Focus States:** Visible on all interactive elements
- **ARIA Labels:** Added to icons and buttons
- **Keyboard Navigation:** Full support

### Testing Tools

```bash
# Install axe-core
npm install -g @axe-core/cli

# Run accessibility audit
axe http://localhost:3000
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Troubleshooting

### Common Issues

**Issue:** Fonts not loading

**Solution:** Check `layout.tsx` imports and `tailwind.config.ts` font family config.

**Issue:** Animations janky

**Solution:** Reduce animation complexity, use `will-change` sparingly.

**Issue:** Images not showing

**Solution:** Verify remote patterns in `next.config.mjs` allow Magnific CDN.

**Issue:** Build fails

**Solution:** Run `npm run lint` to catch TypeScript errors.

## Contributing

### Code Style

- Use TypeScript strict mode
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

### Component Guidelines

1. **Single Responsibility:** One component, one purpose
2. **Reusable:** Extract common patterns
3. **Accessible:** ARIA labels, keyboard support
4. **Responsive:** Mobile-first design
5. **Documented:** JSDoc comments for complex logic

### Pull Request Template

```markdown
## Description
[Brief description of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Design update
- [ ] Performance improvement
- [ ] Documentation

## Testing
- [ ] Tested locally
- [ ] Responsive on mobile
- [ ] Accessibility checked
- [ ] Lighthouse score verified

## Screenshots
[Before/After if applicable]
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Geist Font](https://github.com/vercel/geist-font)
- [Inter Font](https://rsms.me/inter/)

---

**Code with precision. Build for brilliance.** 💎
