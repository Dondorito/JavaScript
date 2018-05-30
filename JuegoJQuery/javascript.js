//------------------COMIENZO SCRIPT------------------
$(function() {
  var animals = ["img/cat.jpg", "img/horse.jpg", "img/kang.jpg", "img/carrion.jpg"]
  var random = Math.floor(Math.random() * (4 - 1 + 1));
  
  var imgUno = $("#uno").attr("src", animals[Math.floor(Math.random() * (4 - 1 + 1))]);
  var imgDos =$("#dos").attr("src", animals[Math.floor(Math.random() * (4 - 1 + 1))]);
  var imgTres =$("#tres").attr("src", animals[Math.floor(Math.random() * (4 - 1 + 1))]);
  var imgCuatro =$("#cuatro").attr("src", animals[Math.floor(Math.random() * (4 - 1 + 1))]);

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
    } else {
      alert("fracaso");
    }
  })
  //------------------FINAL FUNCION CLICK------------------
})
//------------------FINAL SCRIPT------------------
