const view = (() => {
  function setSearchResult(weatherData) {
    if (!weatherData) return;

    const card = document.querySelector(".card");
    card.classList.add("active");

    const cityName = document.querySelector(".city-name");
    const temperature = document.querySelector(".temperature");
    const feelsLike = document.querySelector(".feels-like");
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");

    cityName.textContent = `City: ${weatherData.name}`;
    temperature.textContent = `Temperature: ${weatherData.temperature} °C`;
    feelsLike.textContent = `Feels Like: ${weatherData.feelsLike} °C`;
    humidity.textContent = `Humidity: ${weatherData.humidity} %`;
    wind.textContent = `Wind Speed: ${weatherData.windSpeed} km/h`;
  }
  return { setSearchResult };
})();
export default view;
