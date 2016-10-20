(function($){

	function validTextColour(string) {
		if (string === "") { return false; }
		if (string === "inherit") { return false; }
		if (string === "transparent") { return false; }

		var image = document.createElement("img");
		image.style.color = "rgb(0, 0, 0)";
		image.style.color = string;
		if (image.style.color !== "rgb(0, 0, 0)") { return true; }
		image.style.color = "rgb(255, 255, 255)";
		image.style.color = string;
		return image.style.color !== "rgb(255, 255, 255)";
	}

	function initialize_field($el) {
		var inputTag = $el.find('input:not([type="hidden"])');

		inputTag.each(function() {
			var val = $(this).val();
			var result;

			// check if color statement is in shorthand syntax

			if (val.indexOf('#') < 0 && val.indexOf('rgb') < 0 && val.indexOf('hsl') < 0) {

				if (val.indexOf('%') > -1) { // shorthand syntax for hsl
					if (val.split(',').length > 3) { // hsla confirmed
						result = 'hsla(' + val + ')'; //hsla
					} else {
						result = 'hsl(' + val + ')'; //hsl
					}

				} else if (val.split(',').length > 1) { // shorthand for either rgb or rgba
					if (val.split(',').length > 3) { // rgba confirmed
						result = 'rgba(' + val + ')'; //rgba
					} else {
						result = 'rgb(' + val + ')'; //rgb
					}
				} else {
					if (validTextColour(val)) {
						result = val; // color was already complete
					} else {
						result = 'transparent'; // invalid color
						$(this).attr('disabled', true).parent().addClass('disabled');
					}
				}

			} else {
				result = val; // not shorthand syntax
			}

			var bg = result;

			$(this).siblings('.swatch-toggle').children('.swatch-color').css('background', bg);
		});
	}


	if (typeof acf.add_action !== 'undefined') {

		// ACF5

		acf.add_action('ready append', function($el) {

			acf.get_fields({ type : 'swatch'}, $el).each(function() {
				initialize_field($(this));
			});
		});

	} else {

		// ACF4

		$(document).on('acf/setup_fields', function(e, postbox){

			$(postbox).find('.field[data-field_type="swatch"]').each(function(){
				initialize_field($(this));
			});

		});
	}

})(jQuery);
