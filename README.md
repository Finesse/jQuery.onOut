Documentation on languages: [english](README.md), [русский](README-RU.md).

# jQuery.onOut

Simple jQuery plugin that attaches events outside of the element or the bunch of elements.

## Usage

First of all include download and include [jQuery](http://jquery.com/download/) and [jQuery.onOut](https://github.com/FinesseRus/jQuery.onOut/archive/master.zip) plugin to HTML:

	<script src="jquery-1.11.3.min.js"></script>
	<script src="jquery-onout-1.0.min.js"></script>

### .onOut

Binds event to everything except the element on which this method is called. 
If called on array of elements only one handler is attached. Handler is called when event triggers everywhere except any of element from the array.

	.onOut(eventType[, eventData], handler)

Parameters:
* `eventType` (string) — A string containing a JavaScript event type, such as `click` or `mousedown`.
* `eventData` (anything) — An object containing data that will be passed to the event handler.
* `handler` (function([Event](http://api.jquery.com/Types/#Event) event)) — A function to execute each time the event is triggered.

Example:

	<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia doloremque, eos quae dicta qui nobis tempore omnis a numquam ipsum id velit aliquid cum corporis rerum veritatis itaque quibusdam.</div>
	<div id="target">Click me!</div>
	<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime mollitia facilis iusto voluptas. Repudiandae ab accusantium doloribus, facilis! Reprehenderit, quia.</div>

	<script>
		$('#target').onOut('click', function() {
			alert('Missed!');
		});
	</script>

### .bindOut

Alias to [`.onOut`](#.onOut)