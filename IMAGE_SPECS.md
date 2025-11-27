# Image Specifications for SEO and Social Media

This document outlines the image specifications needed for optimal SEO and social media sharing.

## Required Images

### 1. Favicon
- **Format**: ICO, PNG, or SVG
- **Sizes**: 
  - 16x16px (standard favicon)
  - 32x32px (high-resolution favicon)
  - 180x180px (Apple touch icon)
- **Location**: Place in `static/` directory
- **File names**: 
  - `favicon.ico` (16x16 or 32x32)
  - `favicon-32x32.png`
  - `apple-touch-icon.png` (180x180)
- **Usage**: Add to `layouts/partials/head.html`:
  ```html
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  ```

### 2. Open Graph Image (Social Media Sharing)
- **Format**: PNG or JPG
- **Size**: 1200x630px (recommended)
- **Minimum**: 600x315px
- **Aspect Ratio**: 1.91:1
- **File Size**: Under 1MB (optimized)
- **Location**: Place in `static/` directory
- **File name**: `og-image.png` or `og-image.jpg`
- **Content**: Should include:
  - Company logo
  - Company name "iStarter"
  - Tagline or key message
  - Professional design matching brand colors (#1a9d8f)
- **Usage**: Already configured in `layouts/partials/head.html` - just add the image file

### 3. Twitter Card Image
- **Format**: PNG or JPG
- **Size**: 1200x675px (for summary_large_image)
- **Alternative**: 1200x600px
- **Aspect Ratio**: 16:9 or 2:1
- **File Size**: Under 1MB
- **Location**: Can use the same as Open Graph image
- **Note**: Twitter will use the Open Graph image if no specific Twitter image is set

### 4. Logo (Already exists)
- **Current**: `istarter_new.png`
- **Recommendation**: Ensure it's optimized for web
- **Format**: PNG with transparency (if needed) or optimized JPG
- **File Size**: Keep under 100KB if possible

## Image Optimization Tips

1. **Compression**: Use tools like:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - ImageOptim (Mac)

2. **Format Selection**:
   - Use PNG for logos and graphics with transparency
   - Use JPG for photos and complex images
   - Use WebP for modern browsers (optional)

3. **Naming Convention**:
   - Use lowercase
   - Use hyphens instead of spaces
   - Be descriptive (e.g., `og-image-istarter.png`)

## Current Status

- ✅ Logo exists: `static/istarter_new.png`
- ⚠️ Favicon: Not yet created
- ⚠️ Open Graph Image: Not yet created
- ⚠️ Apple Touch Icon: Not yet created

## Next Steps

1. Create favicon files (16x16, 32x32, 180x180)
2. Create Open Graph image (1200x630px)
3. Optimize all images for web
4. Add favicon links to `layouts/partials/head.html` (optional - can be done after images are created)

