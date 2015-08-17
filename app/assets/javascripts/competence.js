$(document).ready(function() {

  $(".competence").hide();



  $(".web").click(function(){

    $(".competence").fadeToggle('slow', function() {

      $(".competence").replaceWith('<p class="competence text-center">Prototyper une application web suivant les meilleurs pratiques de développement web, tout en combinant plusieurs technologies comme le langage Ruby, Javascript et la gestion de base de données Sql.</p>')

    });


  });

  $(".dev").click(function(){

    $(".competence").fadeToggle('slow', function() {

      $(".competence").replaceWith('<p class="competence text-center"> Développement de produits dans les temps impartis.<br> Utilisation des technologies les plus adaptées pour traduire des objectifs stratégiques en un projet livrable et innovant.</p>')
    });



  });

  $(".des").click(function(){

    $(".competence").fadeToggle('slow', function() {

      $(".competence").replaceWith('<p class="competence text-center">Design d&#39; interface de web application à l&#39; aide des languages Html, Css et Javascript dans un soucis d&#39; UX adaptées.</p>')
    });


  });




});
