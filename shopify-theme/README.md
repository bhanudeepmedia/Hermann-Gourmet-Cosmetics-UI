# Hermann Gourmet Cosmetics - Shopify Theme

A premium, vintage-inspired Shopify theme for Hermann Gourmet Cosmetics, featuring warm Mediterranean aesthetics, organic shapes, and engaging animations.

## 🎨 Theme Features

### Design
- **Warm, Joyful Aesthetic**: Cream and terracotta color palette with organic shapes
- **Premium Typography**: Fraunces (serif) and Outfit (sans-serif) fonts
- **Smooth Animations**: GSAP-powered interactions and scroll effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile

### Functionality
- **Mega Menu Navigation**: Comprehensive product categories and collections
- **Dynamic Product Grid**: With "Best Seller" and "New Batch" tags
- **Quick Add to Cart**: Streamlined shopping experience
- **Blog System**: Full blog with featured articles and categories
- **Contact Form**: Integrated contact page with location info
- **Cart Management**: Full cart with quantity updates and checkout
- **Theme Customization**: Colors, fonts, and layout options via Shopify customizer

## 📦 Installation

### Method 1: Upload ZIP File (Recommended)

1. **Download the theme**
   - Locate `hermann-shopify-theme.zip` in your files

2. **Upload to Shopify**
   - Log in to your Shopify admin panel
   - Go to **Online Store** → **Themes**
   - Click **Add theme** → **Upload zip file**
   - Select `hermann-shopify-theme.zip`
   - Wait for the upload to complete

3. **Publish the theme**
   - Once uploaded, click **Actions** → **Publish** on the Hermann theme

### Method 2: Manual Installation via Shopify CLI

1. **Install Shopify CLI** (if not already installed)
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Navigate to theme directory**
   ```bash
   cd shopify-theme
   ```

3. **Connect to your store**
   ```bash
   shopify theme push
   ```

4. **Follow the prompts** to select your store and publish

## ⚙️ Theme Customization

After installing the theme, you can customize it via the Shopify theme editor:

### Colors
- **Background Color**: Default cream (#FDFBF7)
- **Text Color**: Default dark brown (#2C1810)
- **Accent Color (Orange/Terracotta)**: Default #D35E35
- **Secondary Accent (Sage)**: Default #8B9D83
- **Sand/Beige**: Default #E8DCC4

### Typography
- **Heading Font**: Choose from Google Fonts (default: Fraunces)
- **Body Font**: Choose from Google Fonts (default: Outfit)
- **Base Font Size**: Adjust from 14px to 20px

### Layout
- **Page Width**: Adjust max content width (default: 1400px)
- **Sticky Header**: Toggle sticky navigation on/off

### Product Cards
- **Show Vendor**: Display product vendor/brand
- **Show Quick Add Button**: Enable/disable quick add to cart
- **Image Aspect Ratio**: Choose between square, portrait, or landscape

## 📄 Pages to Create

After installing the theme, create these pages in Shopify:

### 1. Our Story
- **Template**: `page.liquid`
- **Handle**: `our-story`
- Add your brand story, history, and values

### 2. Contact
- **Template**: `page.contact.liquid`
- **Handle**: `contact`
- Contact form is pre-built in the template

### 3. Awards
- **Template**: `page.liquid`
- **Handle**: `awards`
- Add your awards and recognition

### 4. Press
- **Template**: `page.liquid`
- **Handle**: `press`
- Add press mentions and media coverage

### 5. Our Island
- **Template**: `page.liquid`
- **Handle**: `our-island`
- Tell the story of Cyprus and your Mediterranean roots

## 🛍️ Collections to Create

Create these collections for the mega menu to work properly:

- **hand-body-cream**: Hand & Body Cream products
- **face-body-scrub**: Face & Body Scrub products
- **face-eye-cream**: Face & Eye Cream products
- **handmade-soaps**: Handmade Soaps
- **balm-care**: Balm Care products
- **perfumes**: Perfumes
- **the-perfect-gift**: Gift items
- **sets**: Product sets
- **candles-diffusers**: Candles & Diffusers
- **perfume-jewellery**: Perfume Jewellery
- **best-sellers**: Best selling products (tag products with "bestseller")
- **new-arrivals**: New products (tag products with "new")

## 🏷️ Product Tags

Use these tags on products for special badges:

- **bestseller**: Shows "Best Seller" badge
- **new**: Shows "New Batch" badge

## 📝 Blog Setup

1. Create a blog called **"News"** (handle: `news`)
2. Add articles with featured images
3. Use tags to categorize articles (e.g., "Recipes", "Skincare", "Lifestyle")

## 🎯 Homepage Sections

The homepage includes these sections (editable in theme customizer):

1. **Announcement Bar**: Top banner for promotions
2. **Header**: Logo and navigation
3. **Hero**: Main hero section with CTA buttons
4. **Product Grid**: Featured products from a collection
5. **Footer**: Brand info, links, and newsletter signup

## 🔧 Advanced Customization

### Adding Custom Metafields

For enhanced product pages, add these metafields:

- **Product Subtitle**: `custom.subtitle` (single line text)
- **Ingredients**: `custom.ingredients` (multi-line text)

### Modifying Colors in Code

Edit `assets/styles.css.liquid` and update the CSS variables:

```css
:root {
  --cream: {{ settings.color_background }};
  --text: {{ settings.color_text }};
  --orange: {{ settings.color_accent }};
  /* etc. */
}
```

## 📱 Mobile Optimization

The theme is fully responsive with:
- Mobile-friendly navigation (hamburger menu)
- Touch-optimized interactions
- Responsive product grids
- Mobile-optimized forms

## 🚀 Performance

- **Lazy Loading**: Images load as needed
- **Optimized Assets**: Minified CSS and JS
- **Fast Animations**: GPU-accelerated GSAP animations
- **Efficient Code**: Clean, semantic HTML

## 🆘 Support & Troubleshooting

### Theme not displaying correctly?
1. Clear your browser cache
2. Check that all required pages and collections are created
3. Ensure product images are uploaded

### Mega menu not working?
- Verify collection handles match exactly (e.g., `hand-body-cream`)
- Check that collections contain products

### Animations not smooth?
- Ensure GSAP scripts are loading (check browser console)
- Try disabling browser extensions that might interfere

## 📞 Contact

For theme support or customization requests, contact your developer.

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Shopify Compatibility**: 2.0+

Enjoy your beautiful new Hermann theme! 🌿✨
