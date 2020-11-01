var widthBottom = $(window).width()-150;
var velocity = 5000;
function goRight() {
    $(".bottom-cloud").animate({
    left: widthBottom-50
  }, 8000, function() {
     setTimeout(goLeft, 50);
  });
}
function goLeft() {
    $(".bottom-cloud").animate({
    left: 50
  }, 8000, function() {
     setTimeout(goRight, 50);
  });
}
setTimeout(goRight, 50);
