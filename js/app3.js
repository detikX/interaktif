$(document).ready(function () {
  // new WOW().init();
/* Slide variable */
  var slideIndexBis = 1;
  var sliding = false;
  var $isAnimatedSecond = $('.second .is-animated');
  var $isAnimatedFour = $('.four .is-animated');
  var $isAnimatedFive = $('.five .is-animated');
  var $isAnimatedSix = $('.six .is-animated');
$('#fullpage').fullpage({
      scrollOverflow: true,
      scrollingSpeed: 700,
      onLeave: function(index,nextIndex, direction){
          // animate__animated animate__fadeIn" data-wow-delay="0.5s"
           // first animation
          if (index == 1 && direction == "down") {
            $(".second").addClass("show");
            // $(".page__animation__city--train").velocity({right:"0"}, {delay: 500, duration: 5000});
            // $(".page__static__build").addClass("moveDown");
            // $(".social").fadeOut(300);
          } 
      },
      // first animation
  anchors: [
  	'page1',
  	'page2',
  	'page3',
  	'page4'
  ],
  sectionsColor: [
    '#00B0FF',
    '#00C853',
    '#FF1744',
    '#6200ea'
  ]
});

});