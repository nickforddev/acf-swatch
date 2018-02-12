=== ACF Color Swatches ===
Contributors: nickforddesign
Tags: acf, advanced custom fields, color, swatch, color picker, select, options
Requires at least: 4.0
Tested up to: 5
Stable tag: 4.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==

An add-on for Advanced Custom Fields to allow users to select from a list of color choices. Setting up the field works exactly like setting up a radio button list, the main difference being that the key will also be used to style the element. 

This is useful for allowing users to pick from a limited selection of colors, rather than enter an arbitrary hex value or choose from a color picker. 

Supports all of the following color formats: 

*   hex: #FF0000
*   rgb: rgb(255,0,0)
*   rgba: rgba(255,0,0, 1)
*   hsl: hsl(0,100%,50%)
*   hsla: hsla(0,100%,50%, 1)
*		name: red

Note: you may also use `none` to show a transparent swatch with a checkerboard background.

== Compatibility ==

This ACF field type is compatible with:

*   ACF 4
*   ACF 5 (PRO version)


== Installation ==

1. Make sure to have [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/ "ACF") plugin installed.
2. Upload the plugin files to the `/wp-content/plugins/plugin-name` directory, or install the plugin through the WordPress plugins screen directly.
3. Activate the plugin through the 'Plugins' screen in WordPress
4. Use the plugin while creating custom fields


== Changelog ==

10/23/17 - v1.0.6
---
*  [d57ec40](https://github.com/nickforddesign/acf-swatch/pull/11) - Match background-color syntax
*  [4892d0e](https://github.com/nickforddesign/acf-swatch/pull/10) - Allow transparent values to be selected

10/23/17 - v1.0.5
---
*  [fa93a8b](https://github.com/nickforddesign/acf-swatch/pull/9) - Add return value option

2/13/17 - v1.0.4
---

*  [44912a6](https://github.com/nickforddesign/acf-swatch/pull/7) - Allow inclusion within theme

10/21/16 - v1.0.3-rc.1
---

*  [7bdc1d2](https://github.com/nickforddesign/acf-swatch/pull/5) - Improved composer instructions

10/7/16 - v1.0.3 
---
*  [9d733d9](https://github.com/nickforddesign/acf-swatch/pull/4) - Add composer.json
*  Added readme.txt for Wordpress plugin database

5/19/16 - v1.0.3-alpha
---
*  [0b1b7f6](https://github.com/nickforddesign/acf-swatch/pull/2) - Added support for ACF5

11/9/15 - v1.0.2
---
*  Added checkerboard pattern to indicate transparency
*  Added subtle border to show swatches that match the background color

10/14/15 - v1.0.1
---
*  Improved browser / OS support by replacing input elements with block elements

9/20/15 - v1.0.0
---
*  Initial Release