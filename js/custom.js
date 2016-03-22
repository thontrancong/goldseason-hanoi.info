$(document).ready(function() {

	$(".carousel").swiperight(function() {
		$(this).carousel('prev');
	});
	$(".carousel").swipeleft(function() {
		$(this).carousel('next');
	});

	$(window).scroll(function(e){
		if(e.currentTarget.pageYOffset>=32 && $('.header').hasClass('fixed')==false){
			$('.header').addClass('fixed');
		}else if(e.currentTarget.pageYOffset<32 && $('.header').hasClass('fixed')==true){
			$('.header').removeClass('fixed');
		}
	});

	if($('.block-ly-do .btn-expand').length>0){
		$('.block-ly-do .btn-expand').click(function(){
			var p = $(this).parent();
			if(p.hasClass('expand')){
				p.removeClass('expand');
				$(this).removeClass('ion-minus').addClass('ion-plus');
			}else{
				$('.block-ly-do .btn-expand').removeClass('ion-minus').addClass('ion-plus');
				$('.block-ly-do .block-item p').removeClass('expand');
				p.addClass('expand');
				$(this).removeClass('ion-plus').addClass('ion-minus');
			}
		});
	}

	//popup register
	//$('#popup-register').delay(40000).fadeIn(300);
	$('#popup-register .popup-btn-close').click(function(e){
		e.preventDefault();
		$('#popup-register').fadeOut(300);
		return false;
	});
	$('#popup-contact .popup-btn-close').click(function(e){
		e.preventDefault();
		$('#popup-contact').fadeOut(200);
		return false;
	});
});