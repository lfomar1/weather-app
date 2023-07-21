const weatherData = (() => {
  function convertData(data) {
    const {
      name: name,
      main: { temp: temperature, feels_like: feelsLike, humidity },
      wind: { speed: windSpeed },
    } = data;
    return { name, temperature, feelsLike, humidity, windSpeed };
  }
  async function getData(city) {
    const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=935b63d9a065a44f99c634106e0cf5ca&units=metric`;
    try {
      const response = await fetch(endPoint, { mode: "cors" });
      if (!response.ok) throw new Error(`City ${city} not found`);
      const data = convertData(await response.json());
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  return { getData };
})();
export default weatherData;
