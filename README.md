# E-Sphera E-commerce Platform

A modern, professional e-commerce website for electronics and smart devices.

## 📁 Project Structure

```
E-Sphera/
├── index.html                 # Main HTML file
├── css/
│   ├── main.css              # Main stylesheet (professional design)
│   └── styles-backup.css     # Backup of previous styles
├── js/
│   └── script.js             # JavaScript functionality
├── images/
│   ├── logos/
│   │   └── logo.svg          # E-Sphera logo
│   ├── products/
│   │   ├── product-1.svg     # Smart Speaker
│   │   ├── product-2.svg     # Fitness Tracker
│   │   └── product-3.svg     # Wireless Headphones
│   └── banners/
│       └── hero-bg.svg       # Hero section background
└── README.md                  # This file
```

## 🎨 Design Features

### Typography
- **Primary Font**: Inter (clean, modern sans-serif)
- **Secondary Font**: Poppins (for headings)
- **Font Sizes**: Responsive clamp() values for scalability
- **Line Heights**: Optimized for readability (1.6 for body, 1.2 for headings)

### Color Palette
- **Primary**: #2563eb (Professional Blue)
- **Primary Dark**: #1e40af
- **Primary Light**: #dbeafe
- **Text**: #0f172a (Near Black)
- **Text Secondary**: #475569 (Gray)
- **Success**: #22c55e
- **Warning**: #f59e0b
- **Error**: #ef4444

### Spacing & Layout
- **Max Width**: 1320px (optimal reading width)
- **Container Padding**: 24px (responsive)
- **Section Spacing**: 80px vertical
- **Card Padding**: 32px
- **Border Radius**: 6px (small), 10px (medium), 16px (large)

### Components
✅ Sticky Header with Search
✅ Mega Menu Navigation
✅ Shopping Cart & Wishlist Counters
✅ Product Cards with Hover Effects
✅ Responsive Mobile Menu
✅ Contact Form with Validation
✅ Footer with Newsletter
✅ Toast Notifications

## 🚀 Features

- **Fully Responsive**: Mobile-first design approach
- **Modern UI/UX**: Professional e-commerce standards
- **Accessibility**: Semantic HTML, ARIA labels
- **Performance**: Optimized CSS, minimal JavaScript
- **SEO-Friendly**: Proper meta tags and structure

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎯 Key Sections

1. **Top Bar**: Contact info, promotional banner
2. **Header**: Logo, navigation, search, cart, account
3. **Hero**: Call-to-action with highlights
4. **Products**: Featured product categories
5. **Deals**: Hot deals with badges
6. **About**: Company information
7. **Contact**: Form and contact details
8. **Footer**: Multi-column with links and newsletter

## 🛠️ Technologies

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, Poppins)
- SVG Graphics

## 📖 Usage

1. Open `index.html` in a modern web browser
2. Navigate through sections using the menu
3. Test responsive design by resizing the browser
4. Interact with cart, wishlist, and search features

## 🎨 Customization

### Changing Colors
Edit CSS variables in `:root` selector in `css/main.css`:

```css
:root {
      --primary: #2563eb;        /* Main brand color */
      --text-primary: #0f172a;   /* Main text color */
      /* ... other variables */
}
```

### Modifying Layout
- Adjust `--max-width` for container width
- Change `--section-spacing` for vertical rhythm
- Update grid columns in `.grid-3`, `.grid-4`, etc.

### Adding Products
1. Add product images to `images/products/`
2. Update HTML in the products section
3. Follow existing card structure

## 📄 License

© 2025 E-Sphera. All rights reserved.

## 🤝 Support

For questions or support, contact: support@e-sphera.com

---

**Built with ❤️ for modern e-commerce**
