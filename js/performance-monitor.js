// Performance Monitoring Script for Puchicavos Website
// This script tracks key performance metrics and logs them to the console

(function () {
	"use strict";

	// Performance observer for Core Web Vitals
	function observePerformance() {
		// First Contentful Paint (FCP)
		if ("PerformanceObserver" in window) {
			const observer = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if (entry.name === "first-contentful-paint") {
						console.log(
							"🎨 First Contentful Paint:",
							Math.round(entry.startTime) + "ms"
						);
					}
					if (entry.name === "largest-contentful-paint") {
						console.log(
							"🖼️ Largest Contentful Paint:",
							Math.round(entry.startTime) + "ms"
						);
					}
				}
			});

			try {
				observer.observe({ entryTypes: ["paint", "largest-contentful-paint"] });
			} catch (e) {
				console.log("Performance Observer not fully supported");
			}
		}

		// Page Load Time
		window.addEventListener("load", () => {
			const loadTime =
				performance.timing.loadEventEnd - performance.timing.navigationStart;
			const domReady =
				performance.timing.domContentLoadedEventEnd -
				performance.timing.navigationStart;

			console.log("⚡ Performance Metrics:");
			console.log("  DOM Ready:", Math.round(domReady) + "ms");
			console.log("  Page Load:", Math.round(loadTime) + "ms");

			// Check if performance is good
			if (loadTime < 3000) {
				console.log("✅ Great performance! Page loaded in under 3 seconds.");
			} else if (loadTime < 5000) {
				console.log("⚠️ Good performance, but could be faster.");
			} else {
				console.log(
					"❌ Performance needs improvement. Page took over 5 seconds to load."
				);
			}
		});

		// Image Loading Performance
		const images = document.querySelectorAll("img");
		let imagesLoaded = 0;
		const totalImages = images.length;

		images.forEach((img, index) => {
			if (img.complete) {
				imagesLoaded++;
			} else {
				img.addEventListener("load", () => {
					imagesLoaded++;
					if (imagesLoaded === totalImages) {
						console.log("🖼️ All images loaded (" + totalImages + " images)");
					}
				});
				img.addEventListener("error", () => {
					console.warn("❌ Failed to load image:", img.src);
				});
			}
		});

		// Network Connection Info (if available)
		if ("connection" in navigator) {
			const connection = navigator.connection;
			console.log("🌐 Network Info:");
			console.log("  Type:", connection.effectiveType || "unknown");
			console.log("  Downlink:", (connection.downlink || "unknown") + " Mbps");
			console.log("  RTT:", (connection.rtt || "unknown") + "ms");
		}
	}

	// Memory usage (if available)
	function checkMemoryUsage() {
		if ("memory" in performance) {
			const memory = performance.memory;
			const used = Math.round((memory.usedJSHeapSize / 1048576) * 100) / 100;
			const total = Math.round((memory.totalJSHeapSize / 1048576) * 100) / 100;

			console.log("💾 Memory Usage:");
			console.log("  Used:", used + "MB");
			console.log("  Total:", total + "MB");
		}
	}

	// Start monitoring when DOM is ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", () => {
			observePerformance();
			setTimeout(checkMemoryUsage, 2000);
		});
	} else {
		observePerformance();
		setTimeout(checkMemoryUsage, 2000);
	}

	// Performance tips based on connection
	setTimeout(() => {
		if ("connection" in navigator && navigator.connection) {
			const effectiveType = navigator.connection.effectiveType;
			if (effectiveType === "slow-2g" || effectiveType === "2g") {
				console.log(
					"📱 Tip: User is on a slow connection. Consider showing a simplified version."
				);
			} else if (effectiveType === "3g") {
				console.log(
					"📱 Tip: User is on 3G. Images are lazy-loaded to save bandwidth."
				);
			}
		}
	}, 1000);
})();
