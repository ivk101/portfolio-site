$(function(){ 

	var swiper = new Swiper('.swiper-container', { 
		pagination: {          
			el: '.swiper-pagination', 
			clickable: true,           
		},
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,   

		breakpoints: {    
    768: {
    	    spaceBetween: 40,
    	    slidesPerView: 2,
    	    slidesPerGroup: 2,             
    },
    
    1230: {        	        	
        	navigation: {
        		nextEl: '.swiper-button-next',
        		prevEl: '.swiper-button-prev'
        	},
        	pagination: {
        		el: null,
        	},
        	slidesPerView: 3,
        	slidesPerGroup: 3,
        	spaceBetween: 29,
        }
    }    

});

	$('.open-menu').click(function(){
		$('.dropdown').slideDown(1000);
		$('.modal-overlay').css('display', 'block');
		$('body').addClass('no-scroll');

		$('.close').click(function(){
			$('.dropdown').slideUp(1000);
			$('.modal-overlay').css('display', 'none');
			$('body').removeClass('no-scroll');
		})
		$('.modal-overlay').click(function(){
			$('.dropdown').slideUp(1000);
			$('.modal-overlay').css('display', 'none');
			$('body').removeClass('no-scroll');
		})		
		$('.dropdown-nav__link').click(function(){
			$('.dropdown').slideUp(1000);
			$('.modal-overlay').css('display', 'none');
			$('body').removeClass('no-scroll');
		})
	})

	$('.header__phone-button').click(function(){
		$('.callback-modal').removeClass('closed');
		$('.modal-overlay').css('display', 'block');
		$('body').addClass('no-scroll');

		$('.callback-modal__close').click(function(){
			$('.callback-modal').addClass('closed');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
		$('.modal-overlay').click(function(){
			$('.callback-modal').css('display', 'none');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
	});
	$('.header__phone-call').click(function(){
		$('.callback-modal').removeClass('closed');
		$('.modal-overlay').css('display', 'block');
		$('body').addClass('no-scroll');

		$('.callback-modal__close').click(function(){
			$('.callback-modal').addClass('closed');
			$('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
		$('.modal-overlay').click(function(){
			$('.callback-modal').css('display', 'none');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
	});
	$('.footer__phone-link').click(function(){
		$('.callback-modal').removeClass('closed');
		$('.modal-overlay').css('display', 'block');
		$('body').addClass('no-scroll');

		$('.callback-modal__close').click(function(){
			$('.callback-modal').addClass('closed');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
		$('.modal-overlay').click(function(){
			$('.callback-modal').css('display', 'none');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
	});

	
	$('.presentation__learn-more').click(function() {
		$('.feedback-modal').removeClass('closed');
		$('.modal-overlay').css('display', 'block');
		$('body').addClass('no-scroll');

		$('.feedback-modal__close').click(function(){
			$('.feedback-modal').addClass('closed');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
		$('.modal-overlay').click(function(){
			$('.feedback-modal').css('display', 'none');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
	});
	$('.skills__link').click(function(){		
		$('.feedback-modal').removeClass('closed');
		$('.modal-overlay').css('display', 'block');
		$('body').addClass('no-scroll');

		$('.feedback-modal__close').click(function(){
			$('.feedback-modal').addClass('closed');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
		$('.modal-overlay').click(function(){
			$('.feedback-modal').css('display', 'none');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});		
	});
	$('.works__order-link').click(function(){
		$('.feedback-modal').removeClass('closed');
		$('.modal-overlay').css('display', 'block');
		$('body').addClass('no-scroll');

		$('.feedback-modal__close').click(function(){
			$('.feedback-modal').addClass('closed');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
		$('.modal-overlay').click(function(){
			$('.feedback-modal').css('display', 'none');
		    $('.modal-overlay').css('display', 'none');
		    $('body').removeClass('no-scroll');
		});
	});	
});

