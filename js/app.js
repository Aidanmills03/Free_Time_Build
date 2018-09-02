$(document).ready(function() {
  $(window).scroll(function() {
    if($(window).scrollTop()) {
      $('nav').addClass('black');
    }
    else {
      $('nav').removeClass('black');
    }
  })

  $('.toggle').click(function(){
    $('ul').toggleClass('block');
  });

});
