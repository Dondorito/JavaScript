//------------------COMIENZO SCRIPT------------------
$(function() {

  var animals = ["img/cat.jpg", "img/horse.jpg", "img/kang.jpg", "img/carrion.jpg"]
  var random, randomUno, randomDos, randomTres, randomCuatro;
  random = randomUno = randomDos = randomTres = randomCuatro = Math.floor(Math.random() * (4 - 1 + 1));
  var nombre = $("#usu");
  var edad = $("#ed");
  var contador = 0;
  var fracasos = 0;

  $("#btn").click(function(){
    $("#usuario").html(nombre.val());
    $("#inicio").animate({height: '0px'});
    $("#edad").html(edad.val());
  });

  function aleatorio(){
  while(randomUno === randomDos || randomDos === randomTres || randomTres === randomCuatro || randomUno === randomTres || randomDos === randomCuatro || randomUno === randomCuatro){
    var random = Math.floor(Math.random() * (4 - 1 + 1));
    var randomUno = Math.floor(Math.random() * (4 - 1 + 1));
    var randomDos = Math.floor(Math.random() * (4 - 1 + 1));
    var randomTres = Math.floor(Math.random() * (4 - 1 + 1));
    var randomCuatro = Math.floor(Math.random() * (4 - 1 + 1));
  }

  $("#uno").attr("src", animals[randomUno]);
  $("#dos").attr("src", animals[randomDos]);
  $("#tres").attr("src", animals[randomTres]);
  $("#cuatro").attr("src", animals[randomCuatro]);
  $("#resultado").attr("src", animals[random]);


  //------------------COMIENZO IF TEXTO------------------
  if (random == 0) {
    $("#textoResultado").html("猫");
  } else if (random == 1) {
    $("#textoResultado").html("馬");
  } else if (random == 2) {
    $("#textoResultado").html("カンガルー");
  } else {
    $("#textoResultado").html("腐肉");
  }
  //------------------FINAL IF TEXTO------------------
}
  //------------------COMIENZO FUNCION CLICK------------------
  $(".imagen").click(function() {
    if ($(this).attr("src") == $("#resultado").attr("src")) {
      alert("exito");
      contador++;
      if(contador == 6){
        $("#win").animate({height: '100%'});
        $("#win").click(function(){
          location.reload();
        })
      }
      aleatorio();
    } else {
      alert("fracaso");
      fracasos++;
      if(fracasos == 6){
        $("#lose").animate({height: '100%'});
        $("#lose").click(function(){
          location.reload();
        })
      }
      aleatorio();
    }
  })
  //------------------FINAL FUNCION CLICK------------------
})
//------------------FINAL SCRIPT------------------
