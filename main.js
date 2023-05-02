console.log("Scripts loaded")

function displayTime() {
    let date = new Date();
    let options = { hour: 'numeric', minute: 'numeric', hour12: true };
    let time = date.toLocaleTimeString('cz-CZ', options);
    document.getElementById("clock").innerHTML = time;
    
  }
  
  setInterval(displayTime, 1000); // обновляем время каждую секунду
  function displayTime1() {
    let date2 = new Date();
    let options2 = { hour: 'numeric', minute: 'numeric', hour12: true };
    let time2 = date2.toLocaleTimeString('cz-CZ', options2);
    document.getElementById("clock2").innerHTML = time2;
}
  
setInterval(displayTime1, 1000);

function drawGraph(temp) {

  const canvas = document.getElementById("graph");
  var ctx = canvas.getContext("2d");
  var r = 8;

  // canvas.width *= 2;
  // canvas.height *= 2; 

  // canvas.style.width = canvas.width / 2 + "px";
  // canvas.style.height = canvas.height / 2 + "px";

  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.font = "15px Arial";
  ctx.fillStyle = "white";

  var r = 8;
  // max y = 12 // min y = 128
  // var y = 128; 
  var x = 17;

  var centers = [20, 93, 0, 0, 0, 0];
  for (let i = 1; i < 6; i++) {
    centers[i] = centers[i-1] + 72;
  }
  
  const range = Math.max(...temp) - Math.min(...temp);
  const scale = (85 - 12) / range;
  const relativeValues = temp.map((val) => (val - Math.min(...temp)) * scale + 12);

  centers.forEach((element, index) => {
    y = relativeValues[index];
    ctx.arc(element, canvas.height - y, r, 0, 2 * Math.PI);
    ctx.fill();
    
    if (index > 0) {
      const prevElement = centers[index - 1];
      const prevY = relativeValues[index - 1];
      ctx.beginPath();
      ctx.moveTo(prevElement, canvas.height - prevY);
      ctx.lineTo(element, canvas.height - y);
      ctx.stroke();
    }
    ctx.closePath();
  });

  ctx.stroke();
}

// Так делать нельзя на релизе переделать
const apiKey = "a134a253d1f330a8fa7218a6473f93bc";
const city = "Brno";
const apiUrlCur = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

function updateTimeTemp() {
  const canvas = document.getElementById("graph");

  canvas.width *= 2;
  canvas.height *= 2; 

  canvas.style.width = canvas.width / 2 + "px";
  canvas.style.height = canvas.height / 2 + "px";


  let date = new Date();
  let time = date.toLocaleTimeString('cz-CZ', {hour: "numeric"}); //hour12: true
  let hours = parseInt(time.split(' ')[0])+3;
  let elements = document.querySelectorAll(".graphTime");

  if (hours > 24) {
    hours -= 24;
  }

  elements.forEach((element, index) => {
    if (hours+index*3 > 24) {
      hours = -index;
    }
    element.innerHTML = (hours+index*3) + ":00";
  });

  //cur temp
  fetch(apiUrlCur)
  .then(response => response.json())
  .then(data => {
    const currentTemperature = Math.floor(data.main.temp);
    // const currentWeather = data.weather[0].description;

    document.getElementById("temperature").innerHTML = currentTemperature + "°C";
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const weatherIcon = document.getElementById("weather-img");
    weatherIcon.src = iconUrl;

    console.log(`Current temperature: ${currentTemperature}°C`);
    // console.log(`Current weather: ${currentWeather}`);
  })
  .catch(error => console.error('Error fetching data:', error));

  //18 hour
  let temp = [];

  fetch(apiUrlForecast)
  .then(response => response.json())
  .then(data => {
    const forecast = data.list;
    for (let i = 0; i < 6; i += 1) {
      const integer = Math.floor(forecast[i].main.temp);
      temp.push(integer);
    }

    elements = document.querySelectorAll(".graphTemp");
    elements.forEach((element, index) => {
    element.innerHTML = temp[index] + "°C";

    drawGraph(temp);
  });
  })
  .catch(error => console.error('Error fetching data:', error));
}

updateTimeTemp();



const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const closeBtn = document.querySelector('.close-btn');

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("ipadress").innerHTML = data.ip;
  })
  .catch(error => console.error('Error fetching IP address:', error));

function openPopup() {
  popup.style.visibility = 'visible';
}

function closePopup() {
  popup.style.visibility = 'hidden';
}

closeBtn.addEventListener('click', closePopup);

popupContent.addEventListener('click', function(event) {
  event.stopPropagation();
});

