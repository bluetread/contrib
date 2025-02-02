# Form.io contrib components library
test2

This module contains contributed components for use with Form.io. It also serves as a good example on how you can
create your very own custom components library that can be used with Form.io platform.

## Installation
To install this library, do the following.

```
npm install --save @formio/contrib
```

## Test
For local testing of custom component changes, after every change do: 
```
npm run build 
```
Run http-server.

Browser cache will affect things so clear cache before testing new changes if your expected changes dont display

## Usage - BlueTread
1. update contrib repo 
2. update [custom components contrib repo](https://github.com/bluetread/formio-custom-components) with use.min.js file   (that second step is the repo we made with github actions, could probably move the first repo into that one but it was on the backlog) 

MarkerJS

https://markerjs.com/docs/getting-started

## Usage

```javascript
import { Formio } from 'formiojs';
import FormioContrib from '@formio/contrib';
Formio.use(FormioContrib);
```

You can also include this library within the DOM of your application like the following.

```html
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script src="https://unpkg.com/@formio/contrib@latest/dist/formio-contrib.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@formio/contrib@latest/dist/formio-contrib.css">
<script type="text/javascript">
    Formio.use(FormioContrib);
</script>
```

Or you can use the **formio-contrib.use.min.js** file which automatically adds the ```Formio.use``` method.

```html
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script src="https://unpkg.com/@formio/contrib@latest/dist/formio-contrib.use.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@formio/contrib@latest/dist/formio-contrib.css">
```

#Why We're doing this
We're extending from the file component because eventually we want to be able to take a picture and modify it. 

### Using within the Form.io Developer Portal
It is also possible to inject custom components within the Form.io Developer Portal. This allows you to use the Developer Portal to create forms that include your custom components. Note: This currently only works with the Next portal @ https://next.form.io

To make this work, navigate to your project settings, and then click on **Custom JS and CSS**. Within the **Custom JavaScript** box, you will then place the hosted URL to the **dist/formio-contrib.use.min.js** file within this library, like so.

![](https://api.monosnap.com/file/download?id=dQmYlhPWLa7mDDDJMN1VpkJwXy7iHG)

You can also use the unpkg url to this repo to test this out. [https://unpkg.com/@formio/contrib@latest/dist/formio-contrib.use.min.js](https://unpkg.com/@formio/contrib@latest/dist/formio-contrib.use.min.js)

### Using within the Form Manager application
You can also use this method to introduce custom components into the Form Manager application. To get this to work, you just need to Enable Public configurations within your project settings, and then provide the **js** setting to contain the URL of the **dist/formio-contrib.use.min.js** file within this repository like so.

![](https://api.monosnap.com/file/download?id=lvK2kW9eOuAEVDMNW96hP5qLOCaQEY)
