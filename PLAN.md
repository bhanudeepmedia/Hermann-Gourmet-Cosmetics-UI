# Project Plan: Hermann Gourmet Cosmetics

## Status: Design Phase Complete (Joyful/Homely Theme)

We have successfully created a high-end, user-friendly UI with:
- [x] **Warm "Kitchen" Aesthetic**: Cream/Terracotta palette & Fraunces typography.
- [x] **Interactive Home Page**: Hero, Product Grid, Process Steps, Blog, and Map.
- [x] **Premium Animations**: GSAP scroll reveals and hover effects.
- [x] **Mobile Responsive**: Sticky nav and adaptable grids.

## Next Steps (Roadmap to Launch)

### Phase 1: content & Asset Finalization
- **Replace Images**: Swap the generated/Unsplash images with high-res photos of the actual Hermann products.
- **Copywriting**: Ensure all text (titles, prices, descriptions) matches the live inventory.
- **Links**: Update the navigation links (`#shop`, etc.) to point to real pages.

### Phase 2: Shopify Integration
Since this is currently a static HTML site, we need to move it to Shopify.
**Recommended Approach:**
1.  **Create a New Layout File**: In Shopify, create `layout/theme.hermann-landing.liquid`.
2.  **Asset Upload**: Upload all CSS, JS, and Images to Shopify 'Assets'.
3.  **Dynamic Sections**: Convert the HTML blocks (Hero, Grid, etc.) into Shopify `{% schema %}` sections so they are editable in the Customizer.

### Phase 3: Deployment
- **GitHub**: Push the final code to the remote repository.
- **Hosting**:
    - If staying static: Deploy to Netlify/Vercel.
    - If Shopify: Install the theme file.

## Immediate Action
- [ ] Decide if we creating a full Shopify Theme or just a Landing Page.
- [ ] Connect GitHub Repository to remote.
