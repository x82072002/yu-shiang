var windowWidth = $(window).width();

$(document).ready(function(e){

	//openmobilenav
	$('.hamburger').click(function(e){
		e.preventDefault();
		$('#mbnavbackgroung').css({'display':'block'});
		$('.mobile-nav').addClass('openmobilenav-active');
	});

	//closemobilenav
	$('.mobile-x').click(function(e){
		e.preventDefault();
		//background close
		$('#mbnavbackgroung').css({'display':'none'});

		//mobile-nav close animation
		$('.mobile-nav').removeClass('openmobilenav-active');
	});

	//owlCarousel
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoWidth:true,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    items:1
	})
	

	if(windowWidth<=767) {
		//index
		$('#intro h1 , #intro .intro-content , #intro a').addClass('fadeIn-active');
		$('.growing-right').addClass('fadeInFromRight-active');
		$('.yourclass-left').addClass('fadeInFromLeft-active');
		$('.yourclass-right .classimage').addClass('fadeInFromTop-active');
		$('.yourclass-right .circled').addClass('fadeInFromBottom-active');
		$('.result-left').addClass('fadeIn-active');
		$('.result-right').addClass('fadeInFromRight-active');
        
		//page-title
		$('.page-title').addClass('fadeInFromTop-active');

		//aboutus
		$('.smile-left').addClass('fadeInFromLeft-active');
		$('.smile-right').addClass('fadeIn-active');
		$('.careful-left').addClass('fadeIn-active');
		$('.careful-right').addClass('fadeInFromRight-active');
		$('.everyclass-left').addClass('fadeInFromLeft-active');
		$('.everyclass-right').addClass('fadeIn-active');
		$('.circle-title').addClass('fadeIn-active');
		$('.list-name').addClass('fadeIn-active');

		//aboutclass
		$('.curriculum').addClass('fadeIn-active');
		$('.curriculum-note').addClass('fadeIn-active');
		$('.child-left').addClass('fadeIn-active');
		$('.child-right').addClass('fadeInFromRight-active');
		$('.basic-left').addClass('fadeInFromLeft-active');
		$('.basic-right').addClass('fadeIn-active');
		$('.enterschool-left').addClass('fadeIn-active');
		$('.enterschool-right').addClass('fadeInFromRight-active');

		//aboutteacher
		$('.four-advantage > div:first-child').addClass('fadeInFromTop-active');
		$('.four-advantage .content').addClass('fadeInFromBottom-active');
		$('.chen-teacher .flexbox').addClass('fadeIn-active');
		$('.lu-teacher .flexbox').addClass('fadeIn-active');

		//ourwork
		$('.allartwork').addClass('fadeIn-active');

		//contactus
		$('.question-left').addClass('fadeIn-active');
		$('.question-right').addClass('fadeInFromRight-active');
		$('.location-left').addClass('fadeInFromLeft-active');
		$('.location-right').addClass('fadeIn-active');
		$('.follow-left').addClass('fadeIn-active');
		$('.follow-right').addClass('fadeInFromRight-active');

	}

	if(windowWidth>=768 && windowWidth<=1023) {
		//index
		$('#intro h1 , #intro .intro-content , #intro a').addClass('fadeIn-active');
        
		//page-title
		$('.page-title').addClass('fadeInFromTop-active');

		//contactus
		$('.question-left').addClass('fadeIn-active');
		$('.question-right').addClass('fadeInFromRight-active');

		//ourwork
		$('.allartwork').addClass('fadeIn-active');

		$(document).scroll(function(e){

			var scrollTop = $(document).scrollTop();
 			
 			//index
			if(scrollTop>=200) {
				$('.aesthetic h2').addClass('animation-aesthetic-active');
				$('.focus h2').addClass('animation-focus-active');
				$('.create h2').addClass('animation-create-active');
				$('.color h2').addClass('animation-color-active');
				$('.eyesandhands h2').addClass('animation-eyesandhands-active');
				$('.growing-right').addClass('fadeInFromRight-active');
			}

			if(scrollTop>=1300) {
				$('.yourclass-left').addClass('fadeInFromLeft-active');
				$('.yourclass-right .classimage').addClass('fadeInFromTop-active');
				$('.yourclass-right .circled').addClass('fadeInFromBottom-active');
			}

			if(scrollTop>=2200) {
				$('.result-left').addClass('fadeIn-active');
				$('.result-right').addClass('fadeInFromRight-active');
			}

			//aboutus
			if(scrollTop>=0) {
				$('.smile-left').addClass('fadeInFromLeft-active');
				$('.smile-right').addClass('fadeIn-active');
			}

			if(scrollTop>=1050) {
				$('.careful-left').addClass('fadeIn-active');
				$('.careful-right').addClass('fadeInFromRight-active');
			}

			if(scrollTop>=2100) {
				$('.everyclass-left').addClass('fadeInFromLeft-active');
				$('.everyclass-right').addClass('fadeIn-active');
			}

			if(scrollTop>=3600) {
				$('.circle-title').addClass('fadeIn-active');
			}

			if(scrollTop>=3850) {
				$('.list-name').addClass('fadeIn-active');
			}

			//aboutclass
			if(scrollTop>=0) {
				$('.curriculum').addClass('fadeIn-active');
			}

			if(scrollTop>=0) {
				$('.curriculum-note').addClass('fadeIn-active');
			}

			if(scrollTop>=900) {
				$('.child-left').addClass('fadeIn-active');
				$('.child-right').addClass('fadeInFromRight-active');
			}

			if(scrollTop>=2400) {
				$('.basic-left').addClass('fadeInFromLeft-active');
				$('.basic-right').addClass('fadeIn-active');
			}

			if(scrollTop>=3850) {
				$('.enterschool-left').addClass('fadeIn-active');
				$('.enterschool-right').addClass('fadeInFromRight-active');
			}

			//aboutteacher
			if(scrollTop>=0) {
				$('.four-advantage > div:first-child').addClass('fadeInFromTop-active');
				$('.four-advantage .content').addClass('fadeInFromBottom-active');
			}

			if(scrollTop>=400) {
				$('.chen-teacher .flexbox').addClass('fadeIn-active');
			}

			if(scrollTop>=2700) {
				$('.lu-teacher .flexbox').addClass('fadeIn-active');
			}

			//contactus
			if(scrollTop>=750) {
				$('.location-left').addClass('fadeInFromLeft-active');
				$('.location-right').addClass('fadeIn-active');
			}

			if(scrollTop>=2400) {
				$('.follow-left').addClass('fadeIn-active');
				$('.follow-right').addClass('fadeInFromRight-active');
			}

		});
	}

	if(windowWidth>=1024 && windowWidth<=1919) {

		//index
		$('#intro h1 , #intro .intro-content , #intro a').addClass('fadeIn-active');
        
		//page-title
		$('.page-title').addClass('fadeInFromTop-active');

		//contactus
		$('.question-left').addClass('fadeIn-active');
		$('.question-right').addClass('fadeInFromRight-active');

		//aboutclass
		$('.curriculum').addClass('fadeIn-active');
		$('.curriculum-note').addClass('fadeIn-active');

		//ourwork
		$('.allartwork').addClass('fadeIn-active');

		$(document).scroll(function(e){

			var scrollTop = $(document).scrollTop();

 			//index
			if(scrollTop>=350) {
				$('.aesthetic h2').addClass('animation-aesthetic-active');
				$('.focus h2').addClass('animation-focus-active');
				$('.create h2').addClass('animation-create-active');
				$('.color h2').addClass('animation-color-active');
				$('.eyesandhands h2').addClass('animation-eyesandhands-active');
				$('.growing-right').addClass('fadeInFromRight-active');
			}

			if(scrollTop>=1600) {
				$('.yourclass-left').addClass('fadeInFromLeft-active');
				$('.yourclass-right .classimage').addClass('fadeInFromTop-active');
				$('.yourclass-right .circled').addClass('fadeInFromBottom-active');
			}

			if(scrollTop>=2500) {
				$('.result-left').addClass('fadeIn-active');
				$('.result-right').addClass('fadeInFromRight-active');
			}

			//aboutus
			if(scrollTop>=250) {
				$('.smile-left').addClass('fadeInFromLeft-active');
				$('.smile-right').addClass('fadeIn-active');
			}

			if(scrollTop>=1125) {
				$('.careful-left').addClass('fadeIn-active');
				$('.careful-right').addClass('fadeInFromRight-active');
			}

			if(scrollTop>=2150) {
				$('.everyclass-left').addClass('fadeInFromLeft-active');
				$('.everyclass-right').addClass('fadeIn-active');
			}

			if(scrollTop>=3300) {
				$('.circle-title').addClass('fadeIn-active');
			}

			if(scrollTop>=3700) {
				$('.list-name').addClass('fadeIn-active');
			}

			//aboutclass
			if(scrollTop>=1700) {
				$('.child-left').addClass('fadeIn-active');
				$('.child-right').addClass('fadeInFromRight-active');
			}

			if(scrollTop>=2700) {
				$('.basic-left').addClass('fadeInFromLeft-active');
				$('.basic-right').addClass('fadeIn-active');
			}

			if(scrollTop>=3700) {
				$('.enterschool-left').addClass('fadeIn-active');
				$('.enterschool-right').addClass('fadeInFromRight-active');
			}

			//aboutteacher
			if(scrollTop>=130) {
				$('.four-advantage > div:first-child').addClass('fadeInFromTop-active');
				$('.four-advantage .content').addClass('fadeInFromBottom-active');
			}

			if(scrollTop>=850) {
				$('.chen-teacher .flexbox').addClass('fadeIn-active');
			}

			if(scrollTop>=2700) {
				$('.lu-teacher .flexbox').addClass('fadeIn-active');
			}

			//contactus
			if(scrollTop>=650) {
				$('.location-left').addClass('fadeInFromLeft-active');
				$('.location-right').addClass('fadeIn-active');
			}

			if(scrollTop>=1700) {
				$('.follow-left').addClass('fadeIn-active');
				$('.follow-right').addClass('fadeInFromRight-active');
			}

		});
	}

	if(windowWidth>=1920) {

		//index
		$('#intro h1 , #intro .intro-content , #intro a').addClass('fadeIn-active');
        
		//page-title
		$('.page-title').addClass('fadeInFromTop-active');

		//contactus
		$('.question-left').addClass('fadeIn-active');
		$('.question-right').addClass('fadeInFromRight-active');

		//aboutclass
		$('.curriculum').addClass('fadeIn-active');
		$('.curriculum-note').addClass('fadeIn-active');

		//ourwork
		$('.allartwork').addClass('fadeIn-active');

		$(document).scroll(function(e){

			var scrollTop = $(document).scrollTop();
 			
 			//index
			if(scrollTop>=500) {
				$('.aesthetic h2').addClass('animation-aesthetic-active');
				$('.focus h2').addClass('animation-focus-active');
				$('.create h2').addClass('animation-create-active');
				$('.color h2').addClass('animation-color-active');
				$('.eyesandhands h2').addClass('animation-eyesandhands-active');
				$('.growing-right').addClass('fadeInFromRight-active');
			}

			if(scrollTop>=2000) {
				$('.yourclass-left').addClass('fadeInFromLeft-active');
				$('.yourclass-right .classimage').addClass('fadeInFromTop-active');
				$('.yourclass-right .circled').addClass('fadeInFromBottom-active');
			}

			if(scrollTop>=3000) {
				$('.result-left').addClass('fadeIn-active');
				$('.result-right').addClass('fadeInFromRight-active');
			}

			//aboutus
			if(scrollTop>=250) {
				$('.smile-left').addClass('fadeInFromLeft-active');
				$('.smile-right').addClass('fadeIn-active');
			}

			if(scrollTop>=1400) {
				$('.careful-left').addClass('fadeIn-active');
				$('.careful-right').addClass('fadeInFromRight-active');
			}

			if(scrollTop>=2600) {
				$('.everyclass-left').addClass('fadeInFromLeft-active');
				$('.everyclass-right').addClass('fadeIn-active');
			}

			if(scrollTop>=4500) {
				$('.circle-title').addClass('fadeIn-active');
			}

			if(scrollTop>=5000) {
				$('.list-name').addClass('fadeIn-active');
			}

			//aboutclass
			if(scrollTop>=1700) {
				$('.child-left').addClass('fadeIn-active');
				$('.child-right').addClass('fadeInFromRight-active');
			}

			if(scrollTop>=2700) {
				$('.basic-left').addClass('fadeInFromLeft-active');
				$('.basic-right').addClass('fadeIn-active');
			}

			if(scrollTop>=3700) {
				$('.enterschool-left').addClass('fadeIn-active');
				$('.enterschool-right').addClass('fadeInFromRight-active');
			}

			//aboutteacher
			if(scrollTop>=100) {
				$('.four-advantage > div:first-child').addClass('fadeInFromTop-active');
				$('.four-advantage .content').addClass('fadeInFromBottom-active');
			}

			if(scrollTop>=1000) {
				$('.chen-teacher .flexbox').addClass('fadeIn-active');
			}

			if(scrollTop>=3000) {
				$('.lu-teacher .flexbox').addClass('fadeIn-active');
			}

			//contactus
			if(scrollTop>=700) {
				$('.location-left').addClass('fadeInFromLeft-active');
				$('.location-right').addClass('fadeIn-active');
			}

			if(scrollTop>=1800) {
				$('.follow-left').addClass('fadeIn-active');
				$('.follow-right').addClass('fadeInFromRight-active');
			}

		});
	}

});



		