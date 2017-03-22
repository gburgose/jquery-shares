(function( $ ){
	
	'use strict';
	
	$.fn.shares = function() {

		var constructor = function( $anchor ){

			var __popupWindow = function (url, w, h) {
				var left, top;
				left = ($(window).width() / 2) - (w / 2);
				top = ($(window).height() / 2) - (h / 2);
				return window.open(url, "Compartir", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
			}

			var __trigger = function (e){

				e.preventDefault();

				var $object = $(this);

				var data_href  = encodeURIComponent($object.attr("href"));
				var data_text  = encodeURIComponent($object.attr("data-text"));
			
				if ( $object.hasClass('facebook') ){
					var url = "https://www.facebook.com/sharer/sharer.php?u="+data_href;
				} else if ( $object.hasClass('twitter') ){
					var url = "https://twitter.com/intent/tweet?source=webclient&amp;text="+data_text+"&amp;url="+data_href;
				} else if ( $object.hasClass('linkedin') ){
					var url = "https://www.linkedin.com/shareArticle?mini=true&url="+data_href+"&title="+data_text
				} else if ( $object.hasClass('google-plus') ){
					var url = "https://plus.google.com/share?url="+data_href
				} else {
					return false;
				}

				__popupWindow(url, 500, 310);
			
			}

			$anchor.bind( "click" , __trigger );

		}

		return this.each(function () {
			constructor( $(this) );
		});

 }; 

})( jQuery );