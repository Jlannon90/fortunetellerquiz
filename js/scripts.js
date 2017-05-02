$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    $("#fortuneFinal").show();
    $("input:checkbox[name=animal]:checked").each(function(){
      var animalMode =$(this).val();
      $(".animal").append(animalMode);
    });
    $("input:checkbox[name=color]:checked").each(function(){
      var colorMode = $(this).val();
      $('.color').append(colorMode);
    });
    $("#survey").hide();
  });
});
