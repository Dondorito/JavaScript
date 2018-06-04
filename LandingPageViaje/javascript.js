function travel() {
  var nights = parseInt(document.getElementById('nights').value);
  var flights = document.getElementById('flights');
  var yes = document.getElementById('yes');
  var no = document.getElementById('no');

  var resultNights = 140 * nights;
  if (flights.value == 'oviedo') {
    var resultFlights = 325;
  } else if (flights.value == 'madrid') {
    var resultFlights = 200;
  } else if (flights.value == 'tokyo') {
    var resultFlights = 1200;
  } else {
    var resultFlights = 150;
  }
  if (nights >= 3) {
    resultFlights *= 0.9;
  }

  if(yes.checked = true){
    var resultCar = nights * 40;
  }
  var result = resultNights + resultFlights + resultCar;

  if(nights >= 3){
    result -= 20;
  }
  else if(nights >= 7){
    result -= 50;
  }
  alert(result);
}
