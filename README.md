# MMM-Profilepicture
A simple module to add a background picture to the selected profile.
This module works well with the [MMM-ProfileSwitcher](https://github.com/tosti007/MMM-ProfileSwitcher) module.
Set the URL to the users picture, then set the class for each user on each instans of the module in your config.

Note from Snille: I'm new to the MagicMirror world and Node.js, this is my first attempt to modify a module. There are probably lot's of things that could have been done better. :)

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
		class: "John"
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
		class: "Jane"
		config: {
			// See below for configurable options
			url: "http://the-url-to-janes-picture"
		}
	},
	// And so on...
```

### Options
Here are the configuration options to configure the module.

| Option | Description |
|---|---| 
|`opacity`|Transparency of the picture. 1.0 is not transperent at all<br><br>**Default value:** `0.2`|
|`maxWidth`|Maximum width of the picture..<br><br>**Default value:** `100%`|
|`maxHeight`|Maximum height of the picture.<br><br>**Default value:** `100%`|
|`url`|The URL to the picture.<br><br>**Requierd value:** `URL`|

All done. :)
