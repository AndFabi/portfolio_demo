
$(document).ready(function() {


  $(window).scroll(function(e){
    if ($(this).scrollTop() > 300) {
      $(".navbar").css("margin-top", "-70px");
    }
    else {
      $(".navbar").css("margin-top", "0px");
    }
  });







  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
