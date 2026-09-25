# MMM-Profilepicture

A simple module to add a background picture to the selected profile.

This module works well with the [MMM-ProfileSwitcher](https://github.com/tosti007/MMM-ProfileSwitcher) module.
Set the URL to the user's picture, then set the class for each user on each instance of the module in your config.

Note: I'm new to the MagicMirror² world and Node.js, this is my first real module. There are probably lots of things that could have been done better. :)

## Screenshots

Janes Profilepicture:

![Jane](https://github.com/Snille/MMM-Profilepicture/blob/master/.github/jane.jpg)

Johns Profilepicture:

![John](https://github.com/Snille/MMM-Profilepicture/blob/master/.github/john.jpg)

## Usage

_Prerequisites_

- Requires MagicMirror² v2.1.0
- Install and [run](https://docs.magicmirror.builders/getting-started/installation.html) MagicMirror²

## Installation

In your terminal, go to your MagicMirror² `modules` folder:

```bash
cd ~/MagicMirror/modules
```

Clone this repository:

```bash
git clone https://github.com/Snille/MMM-Profilepicture.git
cd MMM-Profilepicture
```

## Update

To update the module:

```bash
cd ~/MagicMirror/modules/MMM-Profilepicture
git pull
npm install
```

Add some [config entries](#configuration) with at least the required [options](#options) in your `config.js` file. Add the module one time for each user, with different URLs for each user.

## Configuration

```javascript
	// Johns picture.
	{
		module: "MMM-Profilepicture",
		position: "fullscreen_below",
		// This will show the picture only for the "John" user.
		classes: "John"
		config: {
			// See below for configurable options
			url: "http://the-url-to-johns-picture",
		}
	},
	// Janes picture.
	{
		module: "MMM-Profilepicture",
		position: "fullscreen_below",
		// This will show the picture only for the "Jane" user.
		classes: "Jane"
		config: {
			// See below for configurable options
			url: "http://the-url-to-janes-picture",
		}
	},
	// And so on...
```

## Options
Here are the configuration options to configure the module.

| Option | Description |
|---|---| 
|`opacity`|Transparency of the picture. `1.0` is not transparent at all.<br><br>**Default value:** `0.2`|
|`maxWidth`|Maximum width of the picture.<br><br>**Default value:** `100%`|
|`maxHeight`|Maximum height of the picture.<br><br>**Default value:** `100%`|
|`updateInterval`|Picture refresh time in milliseconds (1000 * 60 * 5) = 5 min. `false` = no auto update <br><br>**Default value:** `false`|
|`fadeSpeed`|Fade speed in milliseconds when updating the picture.<br><br>**Default value:** `800`|
|`id`|The id of this module. If you want to refresh only this module's picture remotely you need to set an ID (int) and then send `REFRESHPICTUREID`, where `ID` is the number here. An ID is also needed to change the picture with `SETPICTUREID` (see below).<br><br>**Default value:** `false`|
|`url`|The URL to the picture. An empty string (`""`) shows no picture.<br><br>**Required value:** `URL`|

## Change the picture remotely

A module with an `id` can change its picture without a restart. Send the notification `SETPICTUREID`, where `ID` is the module's `id`.

The payload is the URL as a string, or an object:

```javascript
this.sendNotification("SETPICTURE2", {
	url: "https://example.com/next-picture.png", // "" = no picture
	opacity: 1.0,        // optional
	maxWidth: "100%",    // optional
	maxHeight: "100%"    // optional
});
```

With [MMM-Remote-Control](https://github.com/Jopyth/MMM-Remote-Control) you can do the same over HTTP:

```bash
curl -X POST "http://MIRROR:8080/api/notification/SETPICTURE2?apiKey=YOUR_KEY"   -H "Content-Type: application/json"   -d '{"url":"https://example.com/next-picture.png"}'
```

Modules without an `id` ignore `SETPICTURE`. Then one notification cannot change every profile picture at once.

All done. :)
