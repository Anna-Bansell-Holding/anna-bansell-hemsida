# Anna Bansell - Standalone Frontend

This is a complete standalone frontend implementation of the Anna Bansell consulting website, exported from Figma design and converted to HTML/CSS/JavaScript.

## 📁 Files Structure

```
Frontend/
├── index.html              # Main HTML file (complete standalone)
├── styles.css              # Additional utility styles (optional)
├── README.md               # This file
├── Anna Bansell.svg        # Logo
├── anna-bansell-hero.png   # Hero image
├── hero-background.jpg     # Background image
└── [other assets]          # Various icons and images from Figma
```

## 🚀 How to Use

### Method 1: Direct Browser Opening
1. Open `index.html` in any modern web browser
2. Everything is self-contained - no server required!

### Method 2: Local Server (Recommended)
For best results, serve via a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## ✨ Features

### 🌐 Bilingual Support
- **Swedish** (default for non-Swedish browsers)
- **English** (default for Swedish browsers)
- Click the globe icon to switch languages
- Language preference saved in localStorage

### 📱 Responsive Design
- **Desktop**: Full hero layout with Anna's image
- **Tablet**: Adapted navigation and content flow
- **Mobile**: Optimized for small screens
- **Print**: Clean print-friendly styles

### ♿ Accessibility
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Reduced motion support
- Semantic HTML structure

### 🎨 Modern CSS Features
- CSS Grid and Flexbox layouts
- CSS Custom Properties (variables)
- Smooth animations and transitions
- Mix-blend-mode effects
- Intersection Observer animations

## 🎯 Design Implementation

### Hero Section
- ✅ Full-screen hero with Anna's image
- ✅ Overlay effects matching Figma design
- ✅ Responsive navigation with language switcher
- ✅ Call-to-action button with hover effects

### Vision Section
- ✅ Principle cards with icons from Figma
- ✅ Proper typography hierarchy
- ✅ Responsive card layout

### Assets Used
All assets are directly from Figma export:
- `Anna Bansell.svg` - Main logo
- `anna-bansell-hero.png` - Hero portrait
- `hero-background.jpg` - Forest background
- Various SVG icons for principles

## 🛠 Customization

### Colors
Edit CSS variables in `index.html` or `styles.css`:
```css
:root {
    --color-primary: #eb7100;    /* Orange */
    --color-secondary: #22396a;  /* Blue */
    --color-background: #f6f9fb; /* Light blue */
}
```

### Typography
Fonts can be customized by importing different Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
```

### Content
All text content is stored in the JavaScript `translations` object for easy editing.

## 📊 Performance

- **Optimized images**: All assets properly sized
- **Minimal dependencies**: Only uses native browser APIs
- **Fast loading**: Inline CSS/JS for zero network requests
- **Efficient animations**: Uses CSS transforms and opacity

## 🧪 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Technical Notes

### Language Detection Logic
```javascript
// Browser language → Default language
// Swedish (sv) → English (en)
// English (en) → English (en)  
// Other languages → Swedish (se)
```

### Asset Paths
All assets use relative paths, so the entire folder can be moved or hosted anywhere.

### JavaScript Features
- Intersection Observer for scroll animations
- LocalStorage for language preferences
- Smooth scrolling navigation
- Dynamic language switching

## 🔧 Development

If you want to modify this implementation:

1. **Edit HTML**: Update structure in `index.html`
2. **Edit Styles**: Modify CSS in `<style>` tag or `styles.css`
3. **Edit JavaScript**: Update the `<script>` section
4. **Add Content**: Extend the `translations` object
5. **Add Assets**: Place new images in the same folder

## 📞 Support

This is a pixel-perfect implementation of the Figma design with added functionality for:
- Multi-language support
- Responsive behavior  
- Accessibility compliance
- Modern web standards

The code is self-contained and production-ready!


