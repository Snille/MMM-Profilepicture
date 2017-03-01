# MMM-Profilepicture
A simple module to add a background picture to the current profile.

Note from Snille: I'm new to the MagicMirror world and Node.js, this is my first attempt to modify a module. There are probably lot's of things that could have been done better. :)

## Usage

_Prerequisites_

- requires MagicMirror v2.1.0
- install and [run](https://github.com/MichMich/MagicMirror/wiki/Auto-Starting-MagicMirror)

### Installation

In your terminal, go to your MagicMirror's Module folder:

```
cd ~/MagicMirror/modules
```

Clone this repository:

```
git clone https://github.com/Snille/MMM-Profilepicture.git
```

Add some [config entries](#configuration) to your config.js file. After that the content will be added to your mirror.

### Configuration

```javascript
     {
			module: "MMM-Profilepicture",
			position: "fullscreen_below",
			config: {
				// See below for configurable options
			}
		},
```

Here are the configuration options to configure the module.

| Option | Description |
|---|---| 
|`opacity`|Transparency of the picture. 1.0 is not transperent at all<br><br>**Default value:** `0.2`|
|`maxWidth`|Maximum width of the picture..<br><br>**Default value:** `100%`|
|`maxHeight`|Maximum height of the picture.<br><br>**Default value:** `100%`|
|`url`|The URL to the picture.<br><br>**Requierd value:** `URL`|

All done. :)
