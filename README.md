ACF - Color Swatch field add-on
===

* **Author:** Nick Ford 
* **Tags:** acf, acf add-on, color, color swatch, color swatches
* **Requires at least:** 4.0  
* **Tested up to:** 4.4.3

License: [GPLv2](http://www.gnu.org/licenses/gpl-2.0.html) or later

Description
---

This is a simple ACF Add-on field that allows the creation of limited color swatches that behave as radio buttons. This is particularly useful if you want to limit the color options available, instead of using a color picker field. 

This is an add-on for the [Advanced Custom Fields](http://wordpress.org/extend/plugins/advanced-custom-fields/)
WordPress plugin and will not provide any functionality to WordPress unless Advanced Custom Fields is installed
and activated.

The color swatch field is a radio button field, with a few modifications. The syntax for building the choices is the same as a radio button field, in that you may include a key : value pair, or just a single value, each option separated by a line break. 

The field expects each line to be a color string, and can interpret all of the possible color formats.

For example, all of the following will produce a bright red swatch:

* `red`
* `#ff0000`
* `rgb(255,0,0)`
* `rgba(255,0,0, 1)`
* `hsl(0,100%,50%)`
* `hsla(0,100%,50%, 1)`

Additionally, if you are using rgb/rgba or hsl/hsla, you may use only the values, if desired. For instance:

* `255,0,0, 1 // will be recognized as rgba`
* `0,100%,50% // will be recognized as hsl`

This may be useful for defining CSS linear-gradients, or other situations where you may want to alter some of the values in the view.

Note that while the field can recognize these shortened syntaxes to display the color swatch in the Wordpress back end, it will still output only what you entered when using `the_field()` or `get_field()`.


Source Repository
---
[https://github.com/nickforddesign/acf-swatch](https://github.com/nickforddesign/acf-swatch)


Installation
===

Clone the repository to /wp-content/plugins/ in your Wordpress installation, and then activate in the Plugins manager.

Suggested Usage
===

Assuming you select a swatch with value `"255,0,0"`:

```html
<section style="background-color: rgba(<?php the_field('swatches')?>, 0.9">
```

Screenshots
===

![Choices Field](/images/choices.png?raw=true)

![Color Swatches](/images/swatches.png?raw=true)

Changelog
===

1.0
---
* Initial Release
