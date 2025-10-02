# CSS Design System Configuration Guide

This guide explains how to customize the Puchicavos website design system using CSS custom properties (variables).

## 🎨 **Color Customization**

### **Primary Brand Colors**

```css
--primary-color: #2c3e50; /* Main brand color (dark blue-gray) */
--primary-light: #34495e; /* Lighter variant */
--primary-dark: #1a252f; /* Darker variant */
```

### **Secondary/Accent Colors**

```css
--secondary-color: #e67e22; /* Accent color (orange) */
--secondary-light: #f39c12; /* Lighter accent */
--secondary-dark: #d35400; /* Darker accent */
```

### **Quick Color Themes**

**🔵 Blue Theme:**

```css
--primary-color: #3498db;
--secondary-color: #e74c3c;
```

**🟢 Green Theme:**

```css
--primary-color: #27ae60;
--secondary-color: #f39c12;
```

**🟣 Purple Theme:**

```css
--primary-color: #8e44ad;
--secondary-color: #e67e22;
```

## 🔤 **Typography Customization**

### **Font Families**

```css
--font-primary: "Your Font", sans-serif; /* Body text */
--font-display: "Your Display Font", serif; /* Headings */
```

### **Font Sizes (Mobile-First)**

```css
--font-size-xs: 0.75rem; /* 12px */
--font-size-sm: 0.875rem; /* 14px */
--font-size-base: 1rem; /* 16px - base size */
--font-size-lg: 1.125rem; /* 18px */
--font-size-xl: 1.25rem; /* 20px */
--font-size-2xl: 1.5rem; /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem; /* 36px */
--font-size-5xl: 3rem; /* 48px */
```

### **Popular Font Combinations**

**Modern & Clean:**

```css
--font-primary: "Inter", "Segoe UI", sans-serif;
--font-display: "Inter", sans-serif;
```

**Elegant & Classic:**

```css
--font-primary: "Source Sans Pro", sans-serif;
--font-display: "Playfair Display", serif;
```

**Warm & Friendly:**

```css
--font-primary: "Open Sans", sans-serif;
--font-display: "Montserrat", sans-serif;
```

## 📏 **Spacing System**

### **Standard Spacing Scale**

```css
--space-xs: 0.25rem; /* 4px */
--space-sm: 0.5rem; /* 8px */
--space-md: 1rem; /* 16px */
--space-lg: 1.5rem; /* 24px */
--space-xl: 2rem; /* 32px */
--space-2xl: 3rem; /* 48px */
--space-3xl: 4rem; /* 64px */
--space-4xl: 5rem; /* 80px */
```

### **Layout Spacing**

```css
--section-padding: 60px; /* Space between sections */
--container-padding: 20px; /* Side padding for containers */
--container-max-width: 1200px; /* Maximum content width */
```

## 🎭 **Visual Effects**

### **Shadows**

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12); /* Subtle */
--shadow-md: 0 2px 10px rgba(0, 0, 0, 0.1); /* Standard */
--shadow-lg: 0 4px 20px rgba(0, 0, 0, 0.15); /* Prominent */
--shadow-xl: 0 8px 32px rgba(31, 38, 135, 0.37); /* Dramatic */
```

### **Border Radius**

```css
--radius-sm: 5px; /* Buttons, small elements */
--radius-md: 10px; /* Cards, containers */
--radius-lg: 20px; /* Large containers */
--radius-full: 50px; /* Circular elements */
```

### **Transitions**

```css
--transition-fast: 0.15s ease; /* Quick interactions */
--transition-normal: 0.3s ease; /* Standard animations */
--transition-slow: 0.5s ease; /* Slow, dramatic effects */
```

## 🎯 **Component-Specific Variables**

### **Hero Section**

```css
--hero-height: 80vh; /* Hero section height */
--hero-bg-image: url("your-image.jpg"); /* Background image */
```

### **Navigation**

```css
--nav-padding: 15px 0; /* Navigation padding */
```

### **Buttons**

```css
--btn-padding: 12px 30px; /* Button padding */
--btn-radius: var(--radius-sm); /* Button border radius */
```

### **Menu Items**

```css
--menu-item-image-size: 80px; /* Menu item image size */
--menu-item-gap: 15px; /* Gap between elements */
```

## 🚀 **Quick Customization Examples**

### **1. Change to a Dark Theme**

```css
:root {
	--bg-primary: #1a1a1a;
	--bg-secondary: #2d2d2d;
	--text-color: #ffffff;
	--text-light: #cccccc;
}
```

### **2. Make Everything More Rounded**

```css
:root {
	--radius-sm: 15px;
	--radius-md: 25px;
	--radius-lg: 35px;
}
```

### **3. Increase Overall Spacing**

```css
:root {
	--section-padding: 100px;
	--space-md: 1.5rem;
	--space-lg: 2.5rem;
	--space-xl: 3.5rem;
}
```

### **4. Use Google Fonts**

Add to HTML head:

```html
<link
	href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
	rel="stylesheet"
/>
```

Then update CSS:

```css
:root {
	--font-primary: "Poppins", sans-serif;
	--font-display: "Poppins", sans-serif;
}
```

## 📱 **Responsive Breakpoints**

```css
--breakpoint-sm: 576px; /* Small phones */
--breakpoint-md: 768px; /* Tablets */
--breakpoint-lg: 992px; /* Small desktops */
--breakpoint-xl: 1200px; /* Large desktops */
```

## 🛠️ **How to Make Changes**

1. **Open `styles.css`**
2. **Find the `:root` section at the top**
3. **Modify the variables you want to change**
4. **Save the file**
5. **Refresh your browser to see changes**

## 💡 **Pro Tips**

1. **Start small** - Change one variable at a time to see its effect
2. **Use browser dev tools** - Inspect elements to see which variables they use
3. **Maintain contrast** - Ensure text is readable on backgrounds
4. **Test on mobile** - Check responsive behavior after changes
5. **Keep backups** - Save your original CSS before making major changes

## 🎨 **Popular Restaurant Color Schemes**

**🍕 Italian Restaurant:**

```css
--primary-color: #8b0000; /* Deep red */
--secondary-color: #228b22; /* Forest green */
```

**🍜 Asian Cuisine:**

```css
--primary-color: #8b4513; /* Saddle brown */
--secondary-color: #ff6347; /* Tomato */
```

**🥐 French Bistro:**

```css
--primary-color: #2f4f4f; /* Dark slate gray */
--secondary-color: #ffd700; /* Gold */
```

**🌮 Mexican Restaurant:**

```css
--primary-color: #8b4513; /* Saddle brown */
--secondary-color: #ff4500; /* Orange red */
```

Your design system is now completely customizable! Change any of these variables to instantly transform your website's appearance.
