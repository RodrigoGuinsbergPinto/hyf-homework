const input = document.getElementById("cityInput");
input.innerHTML = input.value;

const btn = document.getElementById("searchBtn");

btn.addEventListener("click", function fetchCity() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=6899a4b583fbd1b6c8368db19d056741`
  )
    .then((response) => response.json())
    .then((data) => {
      if (input.value === "" || input.value === " ") {
        alert(`Please type city name.`);
        // console.log()
      } else {
        const city = data.name;
        const temp = data.main.temp;
        const icon = data.weather[0].icon;
        const windSpeed = data.wind.speed;
        const sky = data.weather[0].description;
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
        const country = data.sys.country;

        document.querySelector("#city").innerHTML = `${city} - ${country}`;
        document.querySelector("#temp").innerHTML =
          `Now: ` + temp.toFixed(0) + "°c";
        document.querySelector("#icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";

        document.querySelector("#sky").innerHTML = sky;
        document.querySelector("#windSpeed").innerHTML = `Wind speed: ${
          windSpeed.toFixed(0) * 10
        } km/h`;
        document.querySelector("#sunrise").innerHTML =
          `Sunrise: ` + new Date(sunrise * 1000).toLocaleTimeString("en-US");
        document.querySelector("#sunset").innerHTML =
          `Sunset: ` + new Date(sunset * 1000).toLocaleTimeString("en-US");
      }
    });
});
