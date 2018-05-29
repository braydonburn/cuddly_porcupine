A custom element which wraps the Clipchamp API.
Gulp was used to join the distribution files together into a single JS output.

## How to Install
### CDN

Copy the following script reference before the closing of your `<body>`:
```html
<script src="https://github.com/braydonburn/cuddly_porcupine/blob/master/dist/clipchamp-element.js"></script>
```

## How to Use
Insert the following line in your `html` file:
```
<clipchamp-element UPDATE ME></clipchamp-element>
```

### Parameters
| Parameter | Type | Description |
| --- | --- | --- |
| `label` | String | Defines the label on the embedded button |
| `size` | String | The size of the Clipchamp button |
| `title` | String | The title of the UI that appears after a user clicks on the embedded button |
| `color` | String | Any valid color format (RGB, Hex, etc.) for the Clipchamp button |
