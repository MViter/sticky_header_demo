$(window).scroll(function() {
      if ($(this).scrollTop() > 1){
      $('.header').addClass('sticky');
      $('.logo').addClass('smallLogo');
      }
      else{
      $('.header').removeClass('sticky');
      $('.logo').removeClass('smallLogo');
      }
});