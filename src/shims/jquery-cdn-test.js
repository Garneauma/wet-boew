// network information api test caniuse
// Test chinese major browser ucbrowser
/*
Wait 1000ms
Test if jQuery CDN loaded
If not, load local jQuery
Test if WET was inited
If yes, reinit ?
*/

( function( window ) {

"use strict";

setTimeout( function() {
	console.log( "Waited 1s!" );

	try {
		console.log( window.jQuery );
	} catch ( e ) {
		console.log( e );
		let scriptTag = document.createElement( 'script' );

		scriptTag.src = ".././wet-boew/js/jquery/2.2.4/jquery.min.js";
		document.body.appendChild( scriptTag );
		console.log( "Appended!" );
	}
}, 500 );

} )();
