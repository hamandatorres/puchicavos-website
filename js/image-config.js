// Image Configuration for Puchicavos Website
// This file centralizes all image sources for easy management and future updates

const ImageConfig = {
	// Base URL configuration - Switch between API and local server
	baseUrl: {
		// Current: Using Unsplash API
		current: "https://images.unsplash.com/",
		// Future: Your Vultr server (update this when ready)
		local: "/images/", // or 'https://your-vultr-domain.com/images/'
	},

	// Image sources - organized by section
	images: {
		// Hero section background
		hero: {
			filename: "photo-1517248135467-4c7edcad34c4?w=1200",
			alt: "Puchicavos Restaurant Interior",
			localFilename: "hero-restaurant.jpg", // Future local filename
		},

		// Menu item images
		menu: {
			appetizers: {
				item1: {
					filename: "photo-1504674900247-0877df9cc836?w=150",
					alt: "Sample Appetizer 1",
					localFilename: "appetizer-1.jpg",
				},
				item2: {
					filename: "photo-1540189549336-e6e99c3679fe?w=150",
					alt: "Sample Appetizer 2",
					localFilename: "appetizer-2.jpg",
				},
				item3: {
					filename: "photo-1565299624946-b28f40a0ae38?w=150",
					alt: "Sample Appetizer 3",
					localFilename: "appetizer-3.jpg",
				},
			},
			mainCourses: {
				item1: {
					filename: "photo-1567620905732-2d1ec7ab7445?w=150",
					alt: "Sample Entree 1",
					localFilename: "entree-1.jpg",
				},
				item2: {
					filename: "photo-1546069901-ba9599a7e63c?w=150",
					alt: "Sample Entree 2",
					localFilename: "entree-2.jpg",
				},
				item3: {
					filename: "photo-1565958011703-44f9829ba187?w=150",
					alt: "Sample Entree 3",
					localFilename: "entree-3.jpg",
				},
			},
			desserts: {
				item1: {
					filename: "photo-1488477181946-6428a0291777?w=150",
					alt: "Sample Dessert 1",
					localFilename: "dessert-1.jpg",
				},
				item2: {
					filename: "photo-1551024506-0bccd828d307?w=150",
					alt: "Sample Dessert 2",
					localFilename: "dessert-2.jpg",
				},
				item3: {
					filename: "photo-1624353365286-3f8d62daad51?w=150",
					alt: "Sample Dessert 3",
					localFilename: "dessert-3.jpg",
				},
			},
		},
	},

	// Helper function to get image URL
	getImageUrl: function (category, subcategory = null, item = null) {
		const useLocal = false; // Set to true when ready to use local images
		const baseUrl = useLocal ? this.baseUrl.local : this.baseUrl.current;

		let imageData;

		if (category === "hero") {
			imageData = this.images.hero;
		} else if (category === "menu" && subcategory && item) {
			imageData = this.images.menu[subcategory][item];
		}

		if (!imageData) return "";

		const filename = useLocal ? imageData.localFilename : imageData.filename;
		return baseUrl + filename;
	},

	// Helper function to get alt text
	getAltText: function (category, subcategory = null, item = null) {
		if (category === "hero") {
			return this.images.hero.alt;
		} else if (category === "menu" && subcategory && item) {
			return this.images.menu[subcategory][item].alt;
		}
		return "";
	},
};

// Make it available globally
window.ImageConfig = ImageConfig;
