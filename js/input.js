(function($){


	function initialize_field( $el ) {

		//$el.doStuff();

	}


	if( typeof acf.add_action !== 'undefined' ) {

		/*
		*  ready append (ACF5)
		*
		*  These are 2 events which are fired during the page load
		*  ready = on page load similar to $(document).ready()
		*  append = on new DOM elements appended via repeater field
		*
		*  @type	event
		*  @date	20/07/13
		*
		*  @param	$el (jQuery selection) the jQuery element which contains the ACF fields
		*  @return	n/a
		*/

		acf.add_action('ready append', function( $el ){

			// search $el for fields of type 'swatch'
			acf.get_fields({ type : 'swatch'}, $el).each(function(){

				initialize_field( $(this) );

			});

		});


	} else {


		/*
		*  acf/setup_fields (ACF4)
		*
		*  This event is triggered when ACF adds any new elements to the DOM.
		*
		*  @type	function
		*  @since	1.0.0
		*  @date	01/01/12
		*
		*  @param	event		e: an event object. This can be ignored
		*  @param	Element		postbox: An element which contains the new HTML
		*
		*  @return	n/a
		*/

		$(document).on('acf/setup_fields', function(e, postbox){

			$(postbox).find('.field[data-field_type="swatch"]').each(function(){

				initialize_field( $(this) );

			});

			jQuery(function($) {

			    var sectioncolor = $('div[data-field_type="swatch"] input, tr[data-field_type="swatch"] input');

			    console.log(sectioncolor)

			    sectioncolor.each(function() {
			      var val = $(this).val()
			      var result

			      if (val.indexOf('#') < 0 && val.indexOf('rgb') < 0 && val.indexOf('hsl') < 0) {
				      if (val.indexOf('%') > -1) { // this means HSL without enclosure
					      if (val.split(',').length > 3) { // hsla confirmed
						      result = 'hsla(' + val + ')'; //hsla wrap
					      } else {
						      result = 'hsl(' + val + ')'; //hsl wrap
					      }

				      } else if (val.split(',').length > 1) { // probably rgb
					      if (val.split(',').length > 3) { // rgb confirmed
						      result = 'rgba(' + val + ')'; //rgba wrap
					      } else {
						      result = 'rgb(' + val + ')'; //rgb wrap
					      }
				      } else {
					       result = val; // prob just a color string 'red'
				      }

			      } else {
				      result = val; // already a complete color statement
			      }

			      var bg = result;

			      //if (bg == 'dark_grey_pattern') bg = 'url(http://i.imgur.com/9DdI85n.png)';
			      $(this).css('background', bg)
			    })
			  });

		});


	}


})(jQuery);
