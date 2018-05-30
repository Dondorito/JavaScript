//------------------COMIENZO SCRIPT------------------
$(function() {
  var animals = ["img/cat.jpg", "img/horse.jpg", "img/kang.jpg", "img/carrion.jpg"]
  var random = Math.floor(Math.random() * (4 - 1 + 1));

  var randomUno = Math.floor(Math.random() * (4 - 1 + 1));
  var randomDos = Math.floor(Math.random() * (4 - 1 + 1));
  var randomTres = Math.floor(Math.random() * (4 - 1 + 1));
  var randomCuatro = Math.floor(Math.random() * (4 - 1 + 1));

  while(randomUno === randomDos || randomDos === randomTres || randomTres === randomCuatro || randomUno === randomTres || randomDos === randomCuatro || randomUno === randomCuatro){
    var randomUno = Math.floor(Math.random() * (4 - 1 + 1));
    var randomDos = Math.floor(Math.random() * (4 - 1 + 1));
    var randomTres = Math.floor(Math.random() * (4 - 1 + 1));
    var randomCuatro = Math.floor(Math.random() * (4 - 1 + 1));
  }

  var imgUno = $("#uno").attr("src", animals[randomUno]);
  var imgDos = $("#dos").attr("src", animals[randomDos]);
  var imgTres = $("#tres").attr("src", animals[randomTres]);
  var imgCuatro = $("#cuatro").attr("src", animals[randomCuatro]);


  $("#resultado").attr("src", animals[random]);
  //------------------COMIENZO IF TEXTO------------------
  if (random == 0) {
    $("#texto").html("GATO");
  } else if (random == 1) {
    $("#texto").html("CABALLO");
  } else if (random == 2) {
    $("#texto").html("CANGURO");
  } else {
    $("#texto").html("CARRION");
  }
  //------------------FINAL IF TEXTO------------------
  //------------------COMIENZO FUNCION CLICK------------------
  $(".imagen").click(function() {
    if ($(this).attr("src") == $("#resultado").attr("src")) {
      alert("exito");
      location.reload();
    } else {
      alert("fracaso");
      location.reload();
    }
  })
  //------------------FINAL FUNCION CLICK------------------
})
//------------------FINAL SCRIPT------------------
