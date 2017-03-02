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
		url: false
	},

	// Checks if the URL config is set. If not uses the default picture.
	start: function () {
		if (this.config.url === false) { 
			Log.info("No URL set under config, using dafault profile image: " + this.data.path + "pictures/carbon.jpg");
			this.config.url = "./" + this.data.path + "pictures/carbon.jpg";
		}
	},	

	// Displays the picture.
	getDom: function () {
		var wrapper = document.createElement("div");
		var image = document.createElement("img");
		image.src = this.config.url;
		image.id = "mmm-profilepicture";
		image.style.maxWidth = this.config.maxWidth;
		image.style.maxHeight = this.config.maxHeight;
		image.style.opacity = this.config.opacity;

		wrapper.appendChild(image);
		return wrapper;
	}
});