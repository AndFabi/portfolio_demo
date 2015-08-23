$(document).ready(function() {

  $(".wa, .ul, .ts, .sb ").hide();

  $(".wagon").hover(function() {
    $(".wa").fadeToggle('fast')

  });

  $(".ulg").hover(function() {
    $(".ul").fadeToggle('fast')

  });

  $(".tsc").hover(function() {
    $(".ts").fadeToggle('fast')

  });

  $(".sbs").hover(function() {
    $(".sb").fadeToggle('fast')

  });


});
