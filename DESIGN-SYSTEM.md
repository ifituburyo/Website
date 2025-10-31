/* ====================================
   E-SPHERA DESIGN SYSTEM
   Quick Reference Guide
   ==================================== */

/* ========== COLORS ========== */

/* Primary Palette */
--primary: #2563eb;           /* Main brand color - buttons, links, CTAs */
--primary-dark: #1e40af;      /* Hover states, emphasis */
--primary-light: #dbeafe;     /* Backgrounds, subtle highlights */

/* Neutral Palette */
--white: #ffffff;
--bg-primary: #ffffff;        /* Main backgrounds */
--bg-secondary: #f8fafc;      /* Alternate sections */
--bg-tertiary: #f1f5f9;       /* Cards, panels */
--text-primary: #0f172a;      /* Headings, important text */
--text-secondary: #475569;    /* Body text, descriptions */
--text-muted: #94a3b8;        /* Labels, meta info */
--border: #e2e8f0;            /* Dividers, borders */
--border-dark: #cbd5e1;       /* Emphasized borders */

/* Status Colors */
--success: #22c55e;           /* Success messages, badges */
--warning: #f59e0b;           /* Warnings, sale badges */
--error: #ef4444;             /* Errors, cart counters */
--info: #3b82f6;              /* Info messages */

/* ========== TYPOGRAPHY ========== */

/* Font Families */
--font-primary: 'Inter';       /* Body, UI elements, navigation */
--font-secondary: 'Poppins';   /* Headings, emphasis */

/* Font Sizes */
h1: clamp(2.5rem, 5vw, 3.75rem)    /* 40px - 60px */
h2: clamp(2rem, 4vw, 3rem)         /* 32px - 48px */
h3: clamp(1.5rem, 3vw, 2rem)       /* 24px - 32px */
h4: clamp(1.25rem, 2vw, 1.5rem)    /* 20px - 24px */
h5: 1.125rem                        /* 18px */
body: 1rem                          /* 16px */
small: 0.875rem                     /* 14px */

/* Font Weights */
300: Light
400: Regular
500: Medium
600: Semi-bold (headings)
700: Bold (emphasis)
800: Extra-bold (h1, h2)
900: Black (special cases)

/* Line Heights */
1.2 - Headings (tight)
1.6 - Body text (comfortable)
1.7 - Long-form content
1.8 - Lead paragraphs

/* ========== SPACING ========== */

/* Base Unit: 8px */
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 5rem;     /* 80px */

/* Container */
--max-width: 1320px;
--container-padding: 24px;

/* Sections */
--section-spacing: 80px;
--section-sm: 60px;
--section-lg: 120px;

/* Cards */
--card-padding: 32px;

/* ========== BORDER RADIUS ========== */

--radius-sm: 6px;      /* Small elements, badges */
--radius-md: 10px;     /* Cards, buttons */
--radius-lg: 16px;     /* Large cards, modals */
--radius-full: 9999px; /* Pills, rounded buttons */

/* ========== SHADOWS ========== */

--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* ========== TRANSITIONS ========== */

--transition-fast: 150ms;    /* Hover effects */
--transition-base: 250ms;    /* Default animations */
--transition-slow: 350ms;    /* Complex animations */

/* Easing: cubic-bezier(0.4, 0, 0.2, 1) */

/* ========== COMPONENT SIZES ========== */

/* Buttons */
Default: 12px × 24px padding
Large: 16px × 32px padding
Height: ~44px (touch-friendly)

/* Icons */
Small: 16px
Medium: 20px
Large: 24px
XL: 32px

/* Input Fields */
Height: ~48px
Padding: 14px × 18px
Border: 2px solid

/* Cards */
Padding: 32px
Min-height: 200px
Gap: 32px between

/* ========== LAYOUT GRID ========== */

Grid Gap: 32px

Desktop (1200px+):
- 4 columns (product grids)
- 3 columns (feature cards)
- 2 columns (content + sidebar)

Tablet (768-1199px):
- 2 columns
- Stack on narrow screens

Mobile (<768px):
- 1 column
- Full-width elements

/* ========== USAGE EXAMPLES ========== */

/* Button Variants */
.btn.primary    → Primary actions (Shop Now, Add to Cart)
.btn.outline    → Secondary actions (Learn More)
.btn.ghost      → Tertiary actions (Cancel, Back)

/* Text Colors */
.text-primary   → Headings, important content
.text-secondary → Body text, descriptions  
.text-muted     → Labels, meta, timestamps

/* Backgrounds */
.bg-primary     → White sections
.bg-secondary   → Gray sections (alternating)
.bg-tertiary    → Sidebar, cards

/* Spacing Utilities */
.mb-1 → margin-bottom: 0.5rem
.mb-2 → margin-bottom: 1rem
.mb-3 → margin-bottom: 1.5rem
.mb-4 → margin-bottom: 2rem

/* ========== ACCESSIBILITY ========== */

Contrast Ratios (WCAG AA):
- Text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

Touch Targets:
- Minimum: 44px × 44px
- Recommended: 48px × 48px

Focus Indicators:
- Visible outline on all interactive elements
- 4px offset, 2px width
- Primary color

/* ========== BREAKPOINTS ========== */

@media (max-width: 1200px) { /* Large Tablet */ }
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small Mobile */ }

/* ========== FILE ORGANIZATION ========== */

css/
  main.css          → All styles
  
js/
  script.js         → All functionality
  
images/
  logos/            → Brand logos
  products/         → Product images
  banners/          → Hero banners, backgrounds
  icons/            → UI icons (optional)

/* ========== QUICK TIPS ========== */

1. Always use CSS variables for colors
2. Use clamp() for responsive typography
3. Maintain 8px spacing rhythm
4. Test on mobile devices
5. Check color contrast
6. Add hover states to interactive elements
7. Use semantic HTML
8. Include alt text for images
9. Test keyboard navigation
10. Validate HTML/CSS

/* ========== COMMON PATTERNS ========== */

/* Centering */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Card Hover */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

/* Button Hover */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.35);
}

/* Responsive Image */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Flex Center */
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Grid Auto-Fit */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}
