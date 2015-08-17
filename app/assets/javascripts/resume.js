$(document).ready(function() {

  $(".wa, .ul, .ts, .sb ").hide();

  $(".wagon").hover(function() {
    $(".wa").fadeToggle('slow/400')

  });

  $(".ulg").hover(function() {
    $(".ul").fadeToggle('slow/400')

  });

  $(".tsc").hover(function() {
    $(".ts").fadeToggle('slow/400')

  });

  $(".sbs").hover(function() {
    $(".sb").fadeToggle('slow/400')

  });


});
