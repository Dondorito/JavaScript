function intro() {
  document.getElementById('inicio').style.height = "0";
  document.getElementById('inicio2').style.height = "100%";
}

function intro2() {
  var usuario = document.getElementById('usuario').value;
  if(usuario == ""){
    alert('You must put a username')
    return false;
    usuario.focus();
  }
  document.getElementById('inicio2').style.height = "0";
  document.getElementById('Game').style.height = "100%";
  document.getElementById('currentUser').innerText = usuario.toUpperCase();

  setTimeout(
    function(){
      document.getElementById('cancion').volume = 0.2;
      document.getElementById('cancion').play();
    }, 3000
  )



//Guardamos el canvas en las variables
var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext('2d');
//Variables para el ancho y alto del Canvas
var canvasancho = screen.width;
var canvasalto = screen.height - (screen.height * 0.35);
//Le asignamos las variables al ancho y alto del canvasalto
canvas.width = canvasancho;
canvas.height = canvasalto;

//-------VARIABLES--------
//Variable del radio de la pelota
var ballRadius = 10;
//Variables de posicion y velocidad
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 7;
var dy = -7;
//Variables de ancho, alto y poscicion de la pala
var paddleHeight = 10;
var paddleWidth = 150;
var paddleX = (canvas.width - paddleWidth) / 2;
//Variables de movimiento con las teclas
var rightPressed = false;
var leftPressed = false;
//Variables de tamaño de los bricks y filas y columnas
var brickWidth = 100;
var brickPadding = 10;
var bWP = brickWidth + brickPadding;
var brickRowCount = Math.trunc(canvasancho/bWP);
var brickColumnCount = 5;
var brickHeight = 20;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
//Variables de puntuacion y vida
var score = 0;
var lives = 3;

//Con esto definimos el array de ladrillos
var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {
      x: 0,
      y: 0,
      status: 1
    };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//Funciones de pulsación de teclas, derecha e izquierda
function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}
//Funcion de detección de colisiones
function collisionDetection() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            document.getElementById('cancion').pause();
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

//Función de dibujar la pelota
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

//Función de dibujar la pala
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

//Función para dibujar los ladrillos
function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

//Función para dibujar todo en el canvas.
setTimeout(function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  document.getElementById('ESCORE').innerText = score;
  document.getElementById('LAIFS').innerText = lives;
  collisionDetection();

  //Con esto evitamos que la pelota se salga del borde del canvas.
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    //Aquí definimos que pasa si pierdes
    else {
      lives--;
      if (!lives) {
        document.getElementById('cancion').pause();
        alert("GAME OVER");
        document.location.reload();
      }
      //En caso de que toques el suelo y tengas mas de 1 vida se reseta la posición
      else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 7;
        dy = -7;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  //Esto es para la velocidad de la pala
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 10;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 10;
  }

  //Esto es para que la pelota se mueva cada vez que se refrescan los frames.
  x += dx;
  y += dy;
  requestAnimationFrame(draw);

}, 3000);
//Aquí lo mostramos todo por pantalla llamando a la función
draw();

}
