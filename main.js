console.log("Scripts loaded")

document.getElementById("TicTacToe").addEventListener('click', () => {
    console.log("click")
    window.location.href = "TicTacToe/TicTacToe.html"
});
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


const temperature = data.main.temp;
fetch('https://api.openweathermap.org/data/2.5/weather?q=Брно&appid=a134a253d1f330a8fa7218a6473f93bc')
  .then(response => response.json()) // Преобразование ответа в JSON-формат
  .then(data => {
    // Обработка данных о погоде
    console.log(data);
  })
  .catch(error => console.error(error)); // Обработка ошибок
  console.log(`temperature: ${temperature}°C`);
  