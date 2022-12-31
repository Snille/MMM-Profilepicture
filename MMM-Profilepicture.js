/* global Module */

/* Magic Mirror
 * Module: MMM-Profilepicture
 *
 * By Erik Pettersson - http://www.snille.net
 * MIT Licensed.
 */

Module.register("MMM-Profilepicture",{

	requiresVersion: "2.1.0",

	defaults: {
		// Transparency of the picture.
		opacity: 0.2,
		// Maximum width of the picture.
		maxWidth: "100%",
		// Maximum height of the picture.
		maxHeight: "100%",
		// The URL to the picture.
		url: false,
		// Time to update the picture (if you replace the image from another system), if set to false, it never updates.
		updateInterval: false,
		// Speed of the fade when updating/reloading the picture.
		fadeSpeed: 800,
		// ID of this module (if you want to remotely refresh just this modules picture), set to false to always update on the "REFRESHPICTURE" notification.
		id: false,
	},

	// Refresh the picture if the notification "REFRESHPICTURE(x)" arrives.
	notificationReceived: function (notification, payload, sender) {
		var self = this;
		if (self.config.id !== false ) {
			if (notification === "REFRESHPICTURE" + self.config.id) {
				this.updateDom(self.config.fadeSpeed || 0);
			} 
		} else {
			if (notification === "REFRESHPICTURE") {
				this.updateDom(self.config.fadeSpeed || 0);
			}
		}
	},

	// Checks if the URL config is set. If not uses the default picture.
	start: function () {
		if (this.config.url === false) { 
			Log.info("No URL set under config, using dafault profile image: " + this.data.path + "pictures/carbon.jpg");
			this.config.url = "./" + this.data.path + "pictures/carbon.jpg";
		}
		// Auto update if set.
		if (this.config.updateInterval !== false) {
			var self = this;
			setInterval(function() {
				self.updateDom(self.config.fadeSpeed || 0);
			},
			this.config.updateInterval);
		}
	},

	// Displays the picture.
	getDom: function () {
		var wrapper = document.createElement("div");
		var image = document.createElement("img");
		image.src = this.config.url + "?" + new Date().getTime();
		image.id = "mmm-profilepicture";
		image.style.maxWidth = this.config.maxWidth;
		image.style.maxHeight = this.config.maxHeight;
		image.style.opacity = this.config.opacity;
		wrapper.appendChild(image);
		return wrapper;
	}
});