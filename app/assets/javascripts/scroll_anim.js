
$(document).ready(function() {



    // navbar transition jQuery script
    $(window).scroll(function(e){
      if ($(this).scrollTop() > 300) {
        $(".navbar").css("margin-top", "-12px");
      }
      else {
        $(".navbar").css("margin-top", "0px");
      }
    });






    //Scrool to section
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });

  //scroll slide animation
  window.sr = new scrollReveal();



});
