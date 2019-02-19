var vreme = [];

var today = new Date();
var todayDay = today.toISOString();
var todayOnlyDay = todayDay.substring(0,10);

// Definim functia ce va obtine datele din baza de date
function getWeather() {
    // Facem un nou request catre server
    var xhttp1 = new XMLHttpRequest();
    // In momentul in care primim raspuns de la server, chemam o functie
    xhttp1.onreadystatechange = function () {
    // Daca raspunsul de la server este pozitiv (serverul este gata si broswerul poate comunica)
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        // Folosim JSON pentru a parsa informatiile din DB
        vreme = JSON.parse(this.responseText); //JSON.parse() transforma din String in Obiect
        drawWeather();
        }
    }
    // Cerem serverului sa ne dea informatiile din DB folosind "GET"
    xhttp1.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=Bucharest&units=metric&appid=2bb2bc441d43d1cc1f1459538bc1c89f`, true);
    xhttp1.send();

    document.getElementById("currentBtn").classList.remove('scale-out');
    document.getElementById("currentBtn").classList.add('scale-in');
    document.getElementById("forecastBtn").classList.remove('scale-out');
    document.getElementById("forecastBtn").classList.add('scale-in');

};

function drawWeather(){

  var symbol = vreme.weather[0].icon;
  var sign = `<img src='http://openweathermap.org/img/w/${symbol}.png'>`;

    //console.log(vreme.weather[0].description);
    document.getElementById("currentDescription").innerText = "Description: " + vreme.weather[0].description;
    document.getElementById("weatherSign").innerHTML = sign;
    document.getElementById("currentHumidity").innerText = "Humidity: " + vreme.main.humidity;
    document.getElementById("currentPressure").innerText = "Pressure: " + vreme.main.pressure;
    document.getElementById("currentTemp").innerText = "Current temp: " + vreme.main.temp + " °C";
    document.getElementById("dayMinimum").innerText = "Day Minimum:  " + vreme.main.temp_min + " °C";
    document.getElementById("dayMaximum").innerText = "Day Maximum:  " + vreme.main.temp_max + " °C";
    document.getElementById("mapFrame").src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAUXfXP3rEbzzwPJXAFS8rCSR7A60_maew
            &q=${vreme.coord.lat},${vreme.coord.lon}&&zoom=12`;

    /*if (vreme.weather[0].description == "clear sky"){
      var z = new Image();
      z.src = "sunny.jpeg";
      document.body.background= z.src;
    } else if (vreme.weather[0].description == "drizzle") {
      var z = new Image();
      z.src = "rainy.jpg";
      document.body.background= z.src;
    }*/

};

function showWeather(){
    var city = document.querySelector("#city").value;

    var xhttp1 = new XMLHttpRequest();
    // In momentul in care primim raspuns de la server, chemam o functie
    xhttp1.onreadystatechange = function () {
    // Daca raspunsul de la server este pozitiv (serverul este gata si broswerul poate comunica)
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        // Folosim JSON pentru a parsa informatiile din DB
        vreme = JSON.parse(this.responseText); //JSON.parse() transforma din String in Obiect
        drawWeather();
        }
    }
    // Cerem serverului sa ne dea informatiile din DB folosind "GET"
    xhttp1.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2bb2bc441d43d1cc1f1459538bc1c89f`, true);
    xhttp1.send();
};


function getForecast(){
  // Facem un nou request catre server
  var xhttp1 = new XMLHttpRequest();
  // In momentul in care primim raspuns de la server, chemam o functie
  xhttp1.onreadystatechange = function () {
  // Daca raspunsul de la server este pozitiv (serverul este gata si broswerul poate comunica)
  if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      // Folosim JSON pentru a parsa informatiile din DB
      vreme = JSON.parse(this.responseText); //JSON.parse() transforma din String in Obiect
      drawForecast();
      }
  }
  // Cerem serverului sa ne dea informatiile din DB folosind "GET"
  xhttp1.open("GET", `https://api.openweathermap.org/data/2.5/forecast?q=Bucharest&units=metric&appid=2bb2bc441d43d1cc1f1459538bc1c89f`, true);
  xhttp1.send();
}

function drawForecast(){

  var today = new Date();
  var todayDay = today.toISOString();
  var todayOnlyDay = todayDay.substring(0,10);

  document.getElementById('dayHeader1').innerHTML = todayOnlyDay;


  var str = "";

  for (var i = 0; i < vreme.list.length; i++) {

    var symbol = vreme.list[i].weather[0].icon;
    var sign = `<img src='http://openweathermap.org/img/w/${symbol}.png'>`;
    var dt = new Date(vreme.list[i].dt*1000);
    var dateString = dt.toISOString();
    var date = vreme.list[i].dt_txt;
    var hour = date.substring(10,16);
    var day = dateString.substring(0,10);

    var today = new Date();
    var todayDay = today.toISOString();
    var todayOnlyDay = todayDay.substring(0,10);

    str+= ` <div style="width:18%; margin:5px;">
              <div class="card-panel white">
                <p><b>${day}</b></p>
                <div id="weatherSign">${sign}</div>
                <p>Hour: ${hour}</p>
                <p>Temp: ${vreme.list[i].main.temp} °C</p>
              </div>
            </div>`
  }
    document.getElementById("forecastArea").innerHTML = str;

}
