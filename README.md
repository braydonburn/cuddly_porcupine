A custom element which wraps the Clipchamp API.
Gulp was used to join the distribution files together into a single JS output.

## How to Install
### CDN

Copy the following script reference before the closing of your `<body>`:
```html
<script src="https://raw.githubusercontent.com/braydonburn/cuddly_porcupine/master/dist/clipchamp-element.js?token=AZcyHt25DbnFQdsFgiXk-d5NW1FsDyj0ks5bFpKuwA%3D%3D"></script>
```

## How to Use
Insert the following line in your `html` file:
```
<clipchamp-element
    label="Change me"
    title="Change me"
    logo="changeMe.png">
</clipchamp-element>
```
Start a localhost server in the directory of you HTML file:
```
python -m SimpleHTTPServer 8080
```
You should now be able to see and (partially) use the clipchamp button.  
Note: using gulp to join the files together has caused the clipchamp api to load twice causing an error. The unjoined Angular element still works with no errors.  

### Parameters
| Parameter | Type | Description |
| --- | --- | --- |
| `label` | String | Defines the label on the embedded button |
| `title` | String | The title of the UI that appears after a user clicks on the embedded button |
| `Logo` | String | Defines the logo in the top left corner of the popup iFrame |
