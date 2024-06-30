# MMM-Profilepicture
A simple module to add a background picture to the selected profile.
This module works well with the [MMM-ProfileSwitcher](https://github.com/tosti007/MMM-ProfileSwitcher) module.
Set the URL to the users picture, then set the class for each user on each instans of the module in your config.

Note: I'm new to the MagicMirror world and Node.js, this is my first real module. There are probably lot's of things that could have been done better. :)

### Screen shots

Janes Profilepicture:

![Jane](https://github.com/Snille/MMM-Profilepicture/blob/master/.github/jane.jpg)

Johns Profilepicture:

![John](https://github.com/Snille/MMM-Profilepicture/blob/master/.github/john.jpg)

## Usage

_Prerequisites_

- Requires MagicMirror v2.1.0
- Install and [run](https://github.com/MichMich/MagicMirror/wiki/Auto-Starting-MagicMirror)

### Installation

In your terminal, go to your MagicMirror's Module folder:

```
cd ~/MagicMirror/modules
```

Clone this repository:

```
git clone https://github.com/Snille/MMM-Profilepicture.git
```

Add some [config entries](#configuration) with the atleast the requierd [options](#options) in your config.js file. Add the module one time for each user (with different URL:s for each user of course).

### Configuration

```javascript
	// Johns picture.
	{
		module: "MMM-Profilepicture",
		position: "fullscreen_below",
		// This will show the picture only for the "John" user.
		classes: "John"
		config: {
			// See below for configurable options
			url: "http://the-url-to-johns-picture"
		}
	},
	// Janes picture.
	{
		module: "MMM-Profilepicture",
		position: "fullscreen_below",
		// This will show the picture only for the "John" user.
		classes: "Jane"
		config: {
			// See below for configurable options
			url: "http://the-url-to-janes-picture"
		}
	},
	// And so on...
```

Special case...

```javascript
	// Picture by notifications...
	{
		module: "MMM-Profilepicture",
		position: "middle_center",
		// The "first" picture will be shown until a new picture name is received from notifications.
		classes: "everyone"
		config: {
			// See below for configurable options
			// Start picture.
			url: "http://the-url-to-first-picture"
			// The base url for the rest of the pictures comming in via notifications.
			imageBaseUrl: "https://your_site/images/",
			// Uniqe ID for this instance (used when sending notifications (in this case it would be"REFRESHPICTUREPrettyPictures" as notification) and the "image name" (ex. "My-New-Car.jpg") as payload)
			id: "PrettyPictures",
			// Make the image fully visible (no transparency).
			opacity: 1,
		}
	},
```



### Options
Here are the configuration options to configure the module.

| Option | Description |
|---|---| 
|`opacity`|Transparency of the picture. 1.0 is not transperent at all<br><br>**Default value:** `0.2`|
|`maxWidth`|Maximum width of the picture..<br><br>**Default value:** `100%`|
|`maxHeight`|Maximum height of the picture.<br><br>**Default value:** `100%`|
|`updateInterval`|Picture refresh time in milliseconds (1000 * 60 * 5) = 5 min. `false` = no auto update <br><br>**Default value:** `false`|
|`fadeSpeed`|Fade speed in milliseconds when updating the picture.<br><br>**Default value:** `800`|
|`id`|The id of this module, if you want to refresh only THIS modules picture remotely you need to set an ID (int) and then send "REFRESHPICTUREID (ID = the number here).<br><br>**Default value:** `false`|
|`url`|The URL to the picture.<br><br>**Requierd value:** `URL`|
|`imageBaseUrl`|The "common" URL to the pictures if you want to send image names over notifications to the module.<br><br>**Defautl value:** `false`|

All done. :)
