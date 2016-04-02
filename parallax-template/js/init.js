var english;
(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$('#slider_init').slider({full_width: true, indicators: false, height: 700});
	$('#slider_tournament').slider({full_width: true, height: 600, interval: 50000});
	$('#slider_dashboard').slider({full_width: true, height: 600, interval: 50000});
	$('#slider_sicklists').slider({full_width: true, height: 600, interval: 50000});
	$('#slider_chatroom').slider({full_width: true, height: 600, interval: 50000});
	english = get_english_values();
  });
})(jQuery);