
````markdown
# Creaditor Newsletter Configuration Documentation

## Load the Script

```html
<script src="https://api.creaditor.ai/static/start/creaditor.bundle.js"></script>
```
````

### Basic Configuration

```js
{
  "width": "750px", // Options: 750 or 1200
  "onSave": (data) => {}, // Functions: toJSON, toHTML(promise)
  "theme": {
    "primaryColor": "#000",
    "topNavbar": "linear-gradient(to right top, #051937, #00293b, #113537, #303f38, #474944);",
  },
  "components": [], // Components load here
}
```

### Create a New Creaditor Instance with the Configuration

```html
new cdtrStarter(config);
```

### Connect the onSave Event for Saving in the Configuration File

```js
const config = {
  onSave: (data) => {
    data.toHTML().then((html) => {
      // Sync with server
    });

    const json = data.toJSON();
  },
};
```

### Load the Components Back into the Editor

```js
const config = {
  components: [
    /* Components loaded here... */
  ],
};
```
#   c r e a d i t o r - e x a m p l e s  
 