var velocity = 4000;
var timeout = 50;
function goRight() {
    $(".bottom-cloud").animate({
    left:  $("#animation-div").width()-150
  }, velocity, function() {
     setTimeout(goLeft, timeout);
  });
}
function goLeft() {
    $(".bottom-cloud").animate({
    left:  0
  }, velocity, function() {
     setTimeout(goRight, timeout);
  });
}
setTimeout(goRight, timeout);
