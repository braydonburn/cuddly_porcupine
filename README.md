A custom element which wraps the Clipchamp API.
Gulp was used to join the distribution files together into a single JS output.

## How to Install
### CDN
Copy the following stylesheet link into your `<head>`:
```html
<link rel="stylesheet" href="UPDATE ME">
```

Copy the following script reference before the closing of your `<body>`:
```html
<script src="UPDATE ME"></script>
```

## How to Use
Insert the following line in your `html` file:
```
<clipchamp-element UPDATE ME></clipchamp-element>
```

### Parameters
The following paramaters are optional and are simply a proof of concept.
| Parameter | Type | Description |
| --- | --- | --- |
| `label` | String | Mandatory |
| `size` | String | The size of the Clipchamp button. |
| `title` | String | The title of the UI that appears after a user clicks on the embedded button. |
| `color` | String | Any valid color format (RGB, Hex, etc.) for the Clipchamp button |
