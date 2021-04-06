const cityForm = document.querySelector(".firstSection form");
const card = document.querySelector(".card");
const details = document.querySelector(".card .details");
const time = document.querySelector(".card .time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  const city_details = data.city_details;
  const weather = data.weather;

  console.log(data);

  //atualizar os templates
  details.innerHTML = `
        <h1>${city_details.EnglishName}</h1>
        <div>${weather.WeatherText}</div> 
        
        <div>
            <span>${weather.Temperature.Metric.Value} &deg;C</span> 
            <span>${weather.Temperature.Imperial.Value} &deg;F</span>
        </div>
    `;

  //atualizar para noite ou dia & icones
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = weather.isDayTime ? "./img/day.svg" : "/img/night.svg"; //ternary operator

  time.setAttribute("src", timeSrc);
};

const updateCity = async (city) => {
  const city_details = await getCity(city);
  const weather = await getWeather(city_details.Key);

  return { city_details, weather };
};

cityForm.addEventListener("submit", (e) => {
  // o começo
  // ação default
  e.preventDefault();

  // pegar os dados digitados no input da cidade
  const city = cityForm.city_name.value.trim();
  cityForm.reset();

  //atualizar a tela com nova cidade
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
