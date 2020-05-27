(function ($) {
	"use strict";
	var parallaxContent,
        $navbar_transparent;
	
	$(document).ready(function(){
		
		// Parallax Content Hero
		parallaxContent = $('div[data-parallax="true"]');
		var $navscroll = $(".navscroll");
		var $bgScroll = $navscroll.data("bgscroll");
		var $bgunscroll = $navscroll.data("bgunscroll");
		
		// console.log($navscroll.offset().top);
		
		// Navigation
		if ($navscroll.offset().top > 100) {
			$navscroll.addClass($bgScroll);
			$navscroll.removeClass($bgunscroll);
			$navscroll.addClass("with-shadow isScroll");
		} else {
			$navscroll.removeClass($bgScroll);
			$navscroll.addClass($bgunscroll);
			$navscroll.removeClass("with-shadow isScroll");
		}
		
		var $root = $('html, body');
        $('.onepage a[href^="#"]').on("click", function(){
            $root.animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top - 50
			}, 500);

			return false;
        });
		
		
		$(window).on("scroll", function(){		
			
				if($navscroll.length){					
					var top = 100;
					if ($(window).scrollTop() >= top) {

						$navscroll.addClass($bgScroll);
						$navscroll.removeClass($bgunscroll);
						$navscroll.addClass("with-shadow isScroll");
					} else {
						$navscroll.removeClass($bgScroll);
						$navscroll.addClass($bgunscroll);
						$navscroll.removeClass("with-shadow isScroll");
					}
				}
				
				if(parallaxContent.length){
					parallaxContent.css({
						"transform":"translateY(-" + ($(this).scrollTop() / 3) + "px)",
						"-webkit-transform":"translateY(-" + ($(this).scrollTop() / 3) + "px)",
						"-o-transform":"translateY(-" + ($(this).scrollTop() / 3) + "px)",
						"-ms-transform":"translateY(-" + ($(this).scrollTop() / 3) + "px)"				
					});
				}
			
				
				
		});	
			
	
		// Typing Text
		if($(".typing").length){
			$(".typing").each(function(){
				var typed1 = $(this).data("typed1"),		
					typed2 = $(this).data("typed2"),
					isLooping = $(this).data("looping");
				var typed = new Typed(this, {
					  strings: [typed1, typed2],
					  typeSpeed: 80,
					  backSpeed: 50,
					  loop:isLooping,
					  showCursor:false
					});	
			});
		}
		
		// progress animation		
		var hello_progressbar = $(".hello-progressbar");
		if(hello_progressbar.length){				
			  $(".progress-bar").each(function() {
				  $(this).waypoint(function() {
				  var progressBar = $(".progress-bar");
				  progressBar.each(function(i){
					  
					  var progress_value = $(this).attr("aria-valuenow") ;
					  
					  $(this).find(".progress-value").text(progress_value + "%");
					    
					  $(this).css({
						  
						  "width": progress_value + "%",
						  "transition-delay": "."+((i+1)/.5) + "s"
						 });
					  
				  });
			  }, {
				  offset: 'bottom-in-view'
				});
			   });			
			
		}
		
		
		var tslide = $(".t-slide");
		if(tslide.length){
			
			tslide.owlCarousel({
				loop:true,
				margin:10,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				},
				autoplay:true,
				autoplayTimeout:3500,
				autoplayHoverPause:true
				
			});
			
		}
        
        
        
		var related_articles = $(".related-articles.owl-carousel");
		if(related_articles.length){
			related_articles.owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:2
					}
				},
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				autoplay:true,
				autoplayTimeout:3500,
				autoplayHoverPause:true,
				dots:false	
			});			
		}
        
        var portfolio_slide = $(".portfolio-slideshow.owl-carousel");
        if(portfolio_slide.length){
            portfolio_slide.owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				},
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				autoplay:false,
				autoplayTimeout:3500,
				autoplayHoverPause:true,
				dots:true	
			});	            
        }
        
        var milestones_slideshow = $(".milestones-slide.owl-theme");
        if(milestones_slideshow.length){
            milestones_slideshow.owlCarousel({
				loop:false,
				margin:20,
                center:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:3
					}
				},
				nav:true,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				autoplay:false,
				autoplayTimeout:3500,
				autoplayHoverPause:true,
				dots:false	
			});	            
        }
        
		// Counter Number
		var factnum = $(".factnum");		
		if(factnum.length){			
			factnum.counterUp();			
		}
        
        
        
        /* Responsive Toggle Navigation */
        var $navbar_toggler = $(".navbar-toggler");
        var $mainmenu = $("#mainMenu");
        if($navbar_toggler.length){
            $navbar_toggler.on("click", function(){
                $(this).toggleClass("active");
                $mainmenu.toggleClass("active");
            });
            
            $(".nav-item.dropdown .nav-link").on("click", function(e){
               e.preventDefault();
                $(".dropdown-content").removeClass("active");
                $(this).next().addClass("active");
                
            });
            
            
        }
        
        
		
	});
	
	
})(jQuery);