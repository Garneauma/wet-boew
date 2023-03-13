/**
 * @title WET-BOEW Tag filter
 * @overview Filter based content tagging
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, window, document, wb ) {
"use strict";

const componentName = "wb-sort",
	selector = ".provisional." + componentName,
	selectorCtrl = "." + componentName + "-ctrl",
	initEvent = "wb-init" + selector,
	defaults = {
		onLoad: true,
		selector: "> *",
		sorts: [
			{
				selector: "",
				name: "Name (ascending)",
				type: "string",
				order: "ASC"
			},
			{
				selector: "",
				name: "Name (descending)",
				type: "string",
				order: "DESC"
			}
		]
	},
	$document = wb.doc,

	init = function( event ) {
		let elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm ) {
			let settings,
				sortWrapper,
				sortLabel,
				sortDD,
				sortDDid = componentName + "-" + wb.getId();

			$elm = $( elm );

			settings = $.extend( true, {}, defaults, window[ componentName ], wb.getData( $elm, componentName ) );
			elm.items = elm.querySelectorAll( ":scope " + settings.selector );
			elm.sorts = settings.sorts;

			sortDD = document.createElement( "select" );
			sortDD.id = sortDDid;
			sortDD.classList.add( "form-control" );

			for ( let i = 0; i < elm.sorts.length; i++ ) {
				let sortConf = elm.sorts[ i ],
					sortEl = document.createElement( "option" );

				sortEl.textContent = sortConf.name;
				sortEl.value = sortConf.name;
				sortDD.appendChild( sortEl );
			}

			sortLabel = document.createElement( "label" );
			sortLabel.setAttribute( "for", sortDDid );
			sortLabel.textContent = "Sort by";
			sortLabel.classList.add( "mrgn-rght-md" );

			sortWrapper = document.createElement( "div" );
			sortWrapper.classList.add( "form-group", "form-inline" );
			sortWrapper.appendChild( sortLabel );
			sortWrapper.appendChild( sortDD );

			if ( settings.target ) {
				$( settings.target ).prepend( sortWrapper );
			} else {
				$elm.prepend( sortWrapper );
			}

			console.log( elm.items );
			console.log( elm.sorts );

			wb.ready( $( elm ), componentName );
		}
	};

// When a filter is updated
$document.on( "change", selectorCtrl, function()  {

} );

$document.on( "timerpoke.wb " + initEvent, selector, init );

wb.add( selector );

} )( jQuery, window, document, wb );
