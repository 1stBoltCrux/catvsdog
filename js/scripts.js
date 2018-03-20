$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Bark!</li>");



  });

  $("button#hiss").click(function() {
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#dog").prepend("<li>That's not nice!</li>");
  });

  $("button#bark").click(function() {
    $("ul#cat").prepend("<li>Hiss</li>");
    $("ul#dog").prepend("<li>Bark!</li>");
  });

  $("h1").click(function() {
    $(".appender").after('<img class="dogcat" src="img/catvdog.jpg" />');
    $(".dogcat").click(function(){
      $(this).remove();
    });

  });
});
