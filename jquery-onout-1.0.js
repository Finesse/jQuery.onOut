/*
	jQuery plugin that binds event outside of the element(s)

	https://github.com/FinesseRus/jQuery.onOut

	v1.0
*/


(function($, doc) {

	/*
		Binds event to everything except the element. 
		If called on array of elements only one handler is attached. Handler is called when event triggers everywhere except any of element from the array.
	*/
	$.fn.onOut = function(eventType, arg2, arg3) {

		var eventData = {},
			handler = arg3,
			query = this;

		if(handler === undefined)
			handler = arg2;
		else
			eventData = arg2;

		if(typeof eventType !== 'string')
			throw new Exception('EventType must be string');

		if(typeof handler !== 'function')
			throw new Exception('Handler must be function');


		$(doc).bind(eventType, eventData, function(event) {

			var found = false;

			query.each(function() {
				if(!found)
					if($(event.target).closest($(this)).length)
						found = true;
			});

			if(!found)
				handler(event);

		});
		
		return this;

	};

	/*
		Alias to .onOut()
	*/
	$.fn.bindOut = $.fn.onOut;

})(jQuery, document);