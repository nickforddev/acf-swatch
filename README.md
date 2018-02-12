ACF - Color Swatch field add-on
===

* **Author:** Nick Ford
* **Tags:** acf, acf add-on, color, color swatch, color swatches
* **Requires at least:** 4.0
* **Tested up to:** 5

License: [GPLv2](http://www.gnu.org/licenses/gpl-2.0.html) or later

Description
---

This is a simple ACF Add-on field allowing the creation of color swatches that behave as radio buttons. This is particularly useful if you want to limit the color options available to the end users, instead of using a color picker field.

This is an add-on for the [Advanced Custom Fields](http://wordpress.org/extend/plugins/advanced-custom-fields/)
WordPress plugin and will not provide any functionality to WordPress unless Advanced Custom Fields is installed and activated.

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

Screenshots
===

![Choices Field](/images/choices.png?raw=true)

![Color Swatches](/images/swatches.png?raw=true)

Installation
===

Normal
---
* Clone the repository to /wp-content/plugins/ in your Wordpress installation
* Activate in the Plugins manager.

or

Composer
---
If using Composer (e.g. with [Bedrock](https://roots.io/bedrock/))
* Add repo to `composer.json`:
```json
"repositories": [
  {
    "type": "git",
    "url": "https://github.com/nickforddesign/acf-swatch"
  }
]
```
* Install using composer `composer require nickford/acf-swatch`

Suggested Usage
===

Assuming you select a swatch with value `"rgba(255,0,0, 1)"`:

As inline CSS:

```html
<section style="background-color: <?php the_field('swatches')?>">
```

Inside a `<style>` tag:

```html
<style>
section {
  background-color: <?php the_field('swatches')?>;
}
</style>
```

One situation where you might want to take advantage of the shorthand syntax would be to control a CSS linear-gradient that fades a color from 100% opacity to 0%.

Assuming you select a swatch with value `"255,0,0"`:

```html
<style>
section {
  background: linear-gradient(
                to bottom,
                rgba(<?php the_field('swatches')?>, 1) 0%,
                rgba(<?php the_field('swatches')?>, 0) 100%
              );
}
</style>
```


Including Within Theme
===
Take advantage of the `acf/swatch_settings/path` and `acf/swatch_settings/url` filters to modify where acf-swatch is located so that js and css are found correctly in the backend.

```PHP
/**
 * Include ACF Color Swatch Field
 */

add_filter('acf/swatch_settings/path', 'my_swatch_path', 10, 1);

function my_swatch_path( $path ) {
  
  $path = get_template_directory() . '/path/to/acf-swatch';
  
  return $path;
  
}

add_filter('acf/swatch_settings/url', 'my_swatch_url', 10, 1);

function my_swatch_url( $url ) {
  
  $url = get_template_directory_uri() . '/path/to/acf-swatch';
  
  return $url;
  
}

include( 'path/to/acf-swatch.php' );
```

Changelog
===

10/23/17 - v1.0.6
---
* [d57ec40](https://github.com/nickforddesign/acf-swatch/pull/11) - Match background-color syntax
* [4892d0e](https://github.com/nickforddesign/acf-swatch/pull/10) - Allow transparent values to be selected

10/23/17 - v1.0.5
---
* [fa93a8b](https://github.com/nickforddesign/acf-swatch/pull/9) - Add return value option

2/13/17 - v1.0.4
---

* [44912a6](https://github.com/nickforddesign/acf-swatch/pull/7) - Allow inclusion within theme

10/21/16 - v1.0.3-rc.1
---

* [7bdc1d2](https://github.com/nickforddesign/acf-swatch/pull/5) - Improved composer instructions

10/7/16 - v1.0.3 
---
* [9d733d9](https://github.com/nickforddesign/acf-swatch/pull/4) - Add composer.json
* Added readme.txt for Wordpress plugin database

5/19/16 - v1.0.3-alpha
---
* [0b1b7f6](https://github.com/nickforddesign/acf-swatch/pull/2) - Added support for ACF5

11/9/15 - v1.0.2
---
* Added checkerboard pattern to indicate transparency
* Added subtle border to show swatches that match the background color

10/14/15 - v1.0.1
---
* Improved browser / OS support by replacing input elements with block elements

9/20/15 - v1.0.0
---
* Initial Release
