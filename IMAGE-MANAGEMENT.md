# Image Management System for Puchicavos Website

This system makes it easy to switch from external image sources (like Unsplash) to your own Vultr server images.

## 📁 Current Setup

### Files Created:

- `js/image-config.js` - Centralized image configuration
- `js/image-manager.js` - Dynamic image loading system

### Current Status:

✅ **Currently using**: Unsplash API images  
🔄 **Ready to switch to**: Your Vultr server images

## 🔄 How to Switch to Your Vultr Server Images

### Step 1: Upload Images to Your Server

Create an `images/` folder on your Vultr server and upload these files:

**Hero Section:**

- `hero-restaurant.jpg` (1200px wide recommended)

**Menu Items:**

- `appetizer-1.jpg` (150px wide)
- `appetizer-2.jpg` (150px wide)
- `appetizer-3.jpg` (150px wide)
- `entree-1.jpg` (150px wide)
- `entree-2.jpg` (150px wide)
- `entree-3.jpg` (150px wide)
- `dessert-1.jpg` (150px wide)
- `dessert-2.jpg` (150px wide)
- `dessert-3.jpg` (150px wide)

### Step 2: Update Configuration

In `js/image-config.js`, change line 7:

```javascript
// FROM:
local: '/images/', // or 'https://your-vultr-domain.com/images/'

// TO:
local: 'https://your-actual-domain.com/images/',
```

### Step 3: Switch to Local Images

In `js/image-config.js`, change line 50:

```javascript
// FROM:
const useLocal = false;

// TO:
const useLocal = true;
```

## 🛠️ Advanced Usage

### Testing the Switch

You can test switching to local images by opening browser console and running:

```javascript
switchToLocalImages();
```

### Adding New Images

1. Add image info to `ImageConfig.images` in `image-config.js`
2. Update the `updateMenuImages()` function in `image-manager.js`
3. Use the helper functions:
   - `ImageConfig.getImageUrl(category, subcategory, item)`
   - `ImageConfig.getAltText(category, subcategory, item)`

### Image Optimization Tips

- **WebP format**: Better compression than JPEG
- **Responsive images**: Use `srcset` for multiple sizes
- **Lazy loading**: Add `loading="lazy"` to menu images
- **Compression**: Optimize images before upload

## 📋 Current Image Mapping

| Section     | Current Unsplash ID              | Future Local Filename |
| ----------- | -------------------------------- | --------------------- |
| Hero        | photo-1517248135467-4c7edcad34c4 | hero-restaurant.jpg   |
| Appetizer 1 | photo-1504674900247-0877df9cc836 | appetizer-1.jpg       |
| Appetizer 2 | photo-1540189549336-e6e99c3679fe | appetizer-2.jpg       |
| Appetizer 3 | photo-1565299624946-b28f40a0ae38 | appetizer-3.jpg       |
| Entree 1    | photo-1567620905732-2d1ec7ab7445 | entree-1.jpg          |
| Entree 2    | photo-1546069901-ba9599a7e63c    | entree-2.jpg          |
| Entree 3    | photo-1565958011703-44f9829ba187 | entree-3.jpg          |
| Dessert 1   | photo-1488477181946-6428a0291777 | dessert-1.jpg         |
| Dessert 2   | photo-1551024506-0bccd828d307    | dessert-2.jpg         |
| Dessert 3   | photo-1624353365286-3f8d62daad51 | dessert-3.jpg         |

## 🎯 Benefits of This System

✅ **Easy switching** - Change one setting to switch all images  
✅ **Centralized management** - All image sources in one file  
✅ **Future-proof** - Easy to add new images or sections  
✅ **Performance** - Optimized loading with proper alt text  
✅ **Maintainable** - Clean separation of concerns

## 🚀 Next Steps

1. Take high-quality photos of your actual dishes
2. Upload them to your Vultr server
3. Update the configuration as described above
4. Test the switch using browser console
5. Deploy the updated configuration

Your website will seamlessly switch from API images to your own professional food photography!
