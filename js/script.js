$(document).ready(function(){
	$('.header__burger-wrapper').click (function(event)
	{
		$('.header__burger-wrapper, .header__menu-tel-wrapper, .promo').toggleClass('active');
	});
});