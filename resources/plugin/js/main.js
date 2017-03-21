(function( $ ){
	 
	 $.fn.share = function() {

		function social_share(e){

			e.preventDefault();

			$object = $(this);

			var share_url = encodeURIComponent($object.attr("href"));
			var share_text = encodeURIComponent($object.attr("data-text"));
		
			if ( $object.hasClass('facebook') ){
					var url = "https://www.facebook.com/sharer/sharer.php?u="+share_url;
				} else if ( $object.hasClass('twitter') ){
					var url = "https://twitter.com/intent/tweet?source=webclient&amp;text="+share_text+"&amp;url="+share_url;
						} else if ( $object.hasClass('linkedin') ){
									var url = "https://www.linkedin.com/shareArticle?mini=true&url="+share_url+"&title="+share_text
						} else if ( $object.hasClass('google-plus') ){
									var url = "https://plus.google.com/share?url="+share_url
				} else {
					return true;
				}

				popupWindow(url, 500, 310);
		
			}

			function popupWindow(url, w, h) {
						var left, top;
						left = ($(window).width() / 2) - (w / 2);
						top = ($(window).height() / 2) - (h / 2);
						return window.open(url, "Compartir", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
			}

			$(this).click(social_share);

	 }; 

})( jQuery );