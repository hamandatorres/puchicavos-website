// Image Manager - Dynamically updates all images on the page
// This script runs after the page loads and updates all image sources

document.addEventListener("DOMContentLoaded", function () {
	updateAllImages();
});

function updateAllImages() {
	// Update hero background image (CSS background)
	updateHeroBackground();

	// Update all menu item images
	updateMenuImages();

	console.log("🖼️ All images updated from ImageConfig");
}

function updateHeroBackground() {
	const heroUrl = ImageConfig.getImageUrl("hero");
	if (heroUrl) {
		// Update CSS custom property for hero background
		document.documentElement.style.setProperty(
			"--hero-bg-image",
			`url("${heroUrl}")`
		);
	}
}

function updateMenuImages() {
	// Appetizers
	const appetizers = document.querySelectorAll(
		".menu-category:nth-child(1) .item-image"
	);
	appetizers.forEach((img, index) => {
		const itemKey = `item${index + 1}`;
		img.src = ImageConfig.getImageUrl("menu", "appetizers", itemKey);
		img.alt = ImageConfig.getAltText("menu", "appetizers", itemKey);
	});

	// Main Courses
	const mainCourses = document.querySelectorAll(
		".menu-category:nth-child(2) .item-image"
	);
	mainCourses.forEach((img, index) => {
		const itemKey = `item${index + 1}`;
		img.src = ImageConfig.getImageUrl("menu", "mainCourses", itemKey);
		img.alt = ImageConfig.getAltText("menu", "mainCourses", itemKey);
	});

	// Desserts
	const desserts = document.querySelectorAll(
		".menu-category:nth-child(3) .item-image"
	);
	desserts.forEach((img, index) => {
		const itemKey = `item${index + 1}`;
		img.src = ImageConfig.getImageUrl("menu", "desserts", itemKey);
		img.alt = ImageConfig.getAltText("menu", "desserts", itemKey);
	});
}

// Utility function to switch to local images (call this when ready)
function switchToLocalImages() {
	// Update the config to use local images
	const script = document.createElement("script");
	script.textContent = `
        ImageConfig.getImageUrl = function(category, subcategory = null, item = null) {
            const baseUrl = this.baseUrl.local;
            let imageData;
            
            if (category === 'hero') {
                imageData = this.images.hero;
            } else if (category === 'menu' && subcategory && item) {
                imageData = this.images.menu[subcategory][item];
            }
            
            if (!imageData) return '';
            return baseUrl + imageData.localFilename;
        };
    `;
	document.head.appendChild(script);

	// Re-update all images
	updateAllImages();

	console.log("🔄 Switched to local images from Vultr server");
}

// Make switch function available globally for easy testing
window.switchToLocalImages = switchToLocalImages;
