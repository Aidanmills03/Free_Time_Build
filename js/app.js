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

  $.each( $('*'), function() {
    if( $(this).width() > $('body').width()) {
        console.log("Wide Element: ", $(this), "Width: ", $(this).width());
    }
});

});
