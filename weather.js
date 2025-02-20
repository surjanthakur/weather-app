let btn = document.querySelector(".search-btn");
let inp = document.querySelector(".search-input");
let icon = document.querySelector(".weather-icon");

btn.addEventListener("click", async () => {
  let city = inp.value;
  if (city == "") {
    alert("please enter the city name");
  } else {
    let weather = await getWeather(city);
    checkWeather(weather);
    inp.value = "";
  }
});

function checkWeather(weather) {
  let info = weather.data;
  document.querySelector(".city").innerHTML = info.name;
  document.querySelector(".temperature").innerHTML = `${info.main.temp}&deg;C`;
  document.querySelector(".condition").innerHTML = info.weather[0].description;
  document.querySelector(
    ".humidity"
  ).innerHTML = `💧&nbsp;${info.main.humidity} % humidity`;
  document.querySelector(
    ".feels"
  ).innerHTML = `☀️&nbsp;${info.main.feels_like}&deg;C feels-like`;

  // add icons weather codition -->
  document.querySelector(".weather-icon");
  if (info.main.temp < 15) {
    icon.innerHTML = "🌧️";
  } else if (info.main.temp < 20) {
    icon.innerHTML = "⛅";
  } else if (info.main.temp < 5) {
    icon.innerHTML = "❄️";
  } else if (info.main.temp > 21) {
    icon.innerHTML = "☀️";
  } else {
    icon.innerHTML = "☀️";
  }
}

const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const API_KEY = "80afe5a6258d9680dff01abd4e6ccc8d";

async function getWeather(city) {
  try {
    const result = await axios.get(`${API_URL}&q=${city}&appid=${API_KEY} `);
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
