$(document).ready(function() {

  $(".wa, .ul, .ts, .sb ").hide();

  $(".wagon").click(function() {
    $(".resume").fadeToggle('slow', function(){
      $('.resume').replaceWith('<p class="resume">Fullstack web developer, Bootcamp développeur web, prototypage d’application, développement de projets, gestion des ressources.<br> mai-juin 2015, Le wagon</p>')

    });

  });

  $(".ulg").click(function() {
    $(".resume").fadeToggle('slow', function(){
      $('.resume').replaceWith('<p class="resume">Master en sciences politiques finalité spécialisée en relations internationales.<br>2010 - 2012, Ulg</p>')
    });

  });

  $(".tsc").click(function() {
    $(".resume").fadeToggle('slow', function(){
      $('.resume').replaceWith('<p class="resume">The Smart Company Développement de projets, Recherche de financements publics et support de gestion de projets.<br> décembre 2013-janvier 2015, Liège</p>')
    });
  });

  $(".sbs").click(function() {
    $(".resume").fadeToggle('slow', function(){
      $('.resume').replaceWith('<p class="resume">Step by Steppes Création, réalisation et suivi de projets, activité de conseil en octroi de subsides et gestion de projets collaboratifs.<br> septembre 2013, Liège</p>')
    });
  });

  $(document).on('click', function(event) {
    if (!$(event.target).closest('#restartResume').length) {
      $(".resume").fadeToggle('slow', function(){
        $('.resume').replaceWith('<p class="resume">De la Science Politique au web developement. <br>Une approche pluridisciplinaire est essentielle pour comprendre toutes les implications de la "troisième révolution industrielle".<br>La Science Politique me permet de comprendre le contexte d&#39; une problématique et la programmation me permet d&#39; apporter <br> une réponse technique ciblée pour la résoudre.')
    });
    }
  });

  // picture foter geek
  $(".profil").hover(
    function() {
    $(this).attr('src', '/assets/geek_foot.png');
    },
    function() {
      $(this).attr('src', '/assets/fabien.jpg');
    }
  );


});
