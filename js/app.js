$(document).ready(function () {
    new WOW().init();
	/* Slide variable */
		var slideIndexBis = 1;
		var sliding = false;
    var $isAnimatedSecond = $('.second .is-animated');
    var $isAnimatedFour = $('.four .is-animated');
    var $isAnimatedFive = $('.five .is-animated');
    var $isAnimatedSix = $('.six .is-animated');
    var $isAnimatedSeven = $('.seven .is-animated');
	$('#fullpage').fullpage({
        onLeave: function(index,nextIndex, direction){
            // animate__animated animate__fadeIn" data-wow-delay="0.5s"
             // first animation
                if( index == 1 && nextIndex == 2 ) { 
                    $isAnimatedSecond.addClass('animate__animated animate__fadeInRightBig animate__delay-2s 2s')
                    //$isAnimatedSecond.eq(0).css('animation-delay', '.3s');
                    // $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
                    // $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
                    //$isAnimatedSecondSingle.addClass('animated animate__fadeInRightBig').css('animation-delay', '1.7s');
                }

                else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
                    // $isAnimatedThird.addClass('animate__animated animate__fadeInLeft animate__repeat-2	2').attr("data-wow-delay","2.5s"); 
                    // $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
                    // $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
                }

           
                // third animation
                else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
                    $isAnimatedFour.eq(0).addClass('animate__animated animate__fadeInRight animate__delay-1s 1s');
                    $isAnimatedFour.eq(1).addClass('animate__animated animate__fadeInLeft animate__delay-2s 2s');
                }
                else if( ( index == 1 || index == 2 || index == 3 || index == 4 ) && nextIndex == 5 ) {
                    $isAnimatedFive.eq(0).addClass('animate__animated animate__fadeInLeft animate__delay-1s 1s');
                    $isAnimatedFive.eq(1).addClass('animate__animated animate__fadeInLeft animate__delay-2s 2s');
                    $isAnimatedFive.eq(2).addClass('animate__animated animate__fadeInLeft animate__delay-3s 3s');
                    $isAnimatedFive.eq(3).addClass('animate__animated animate__fadeInRight animate__delay-4s 4s');
                    $isAnimatedFive.eq(4).addClass('animate__animated animate__fadeInRight animate__delay-5s 5s');
                }

                else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ) && nextIndex == 6 ) {
                    $isAnimatedSix.eq(0).addClass('animate__animated animate__fadeIn animate__delay-1s 1s');
                    $isAnimatedSix.eq(1).addClass('animate__animated animate__fadeInLeft animate__delay-2s 2s');
                    $isAnimatedSix.eq(2).addClass('animate__animated animate__fadeInRight animate__delay-3s 3s');
                }

                else if( ( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 ) && nextIndex == 7 ) {
                    $isAnimatedSeven.eq(0).addClass('animate__animated animate__fadeIn animate__delay-1s 1s');
                    $isAnimatedSeven.eq(1).addClass('animate__animated animate__fadeOutLeftBig animate__delay-2s 2s');
                    $isAnimatedSeven.eq(2).addClass('animate__animated animate__fadeInLeft animate__delay-2s 2s');
                }
        },
        // first animation
		// anchors: [
		// 	'page1',
		// 	'page2',
		// 	'page3',
		// 	'page4'
		// ],
		sectionsColor: [
			'#00B0FF',
			'#00C853',
			'#FF1744',
			'#6200ea'
		]
	});
	
});