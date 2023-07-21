import view from "./modules/view";
import weatherData from "./modules/weatherData";

const card = document.querySelector(".card");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");

card.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (searchInput.value === "") return;
  const weather = await weatherData.getData(searchInput.value);
  console.log(weather);
  view.setSearchResult(weather);
});
