<?php

/*
Plugin Name: Advanced Custom Fields: Color Swatches
Plugin URI: #
Description: Allows for a radio type selection of a color swatch
Version: 1.0.0
Author: Nick Ford
Author URI: http://nickforddesign.com
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

// 1. set text domain
// Reference: https://codex.wordpress.org/Function_Reference/load_plugin_textdomain
load_plugin_textdomain( 'acf-swatch', false, dirname( plugin_basename(__FILE__) ) . '/lang/' );

// 2. Include field type for ACF5
// $version = 5 and can be ignored until ACF6 exists
function include_field_types_swatch( $version ) {
	include_once('acf-swatch-v5.php');
}

add_action('acf/include_field_types', 'include_field_types_swatch');

// 3. Include field type for ACF4
function register_fields_swatch() {
	include_once('acf-swatch-v4.php');
}

add_action('acf/register_fields', 'register_fields_swatch');
?>