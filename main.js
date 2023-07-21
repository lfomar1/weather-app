/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);


/***/ }),

/***/ "./src/modules/weatherData.js":
/*!************************************!*\
  !*** ./src/modules/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherData);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/view */ "./src/modules/view.js");
/* harmony import */ var _modules_weatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weatherData */ "./src/modules/weatherData.js");



const card = document.querySelector(".card");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");

card.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (searchInput.value === "") return;
  const weather = await _modules_weatherData__WEBPACK_IMPORTED_MODULE_1__["default"].getData(searchInput.value);
  console.log(weather);
  _modules_view__WEBPACK_IMPORTED_MODULE_0__["default"].setSearchResult(weather);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLGlCQUFpQjtBQUNyRCw4Q0FBOEMseUJBQXlCO0FBQ3ZFLDJDQUEyQyx1QkFBdUI7QUFDbEUsd0NBQXdDLHNCQUFzQjtBQUM5RCxzQ0FBc0MsdUJBQXVCO0FBQzdEO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFvRDtBQUNsRSxjQUFjLGtCQUFrQjtBQUNoQyxNQUFNO0FBQ04sYUFBYTtBQUNiO0FBQ0E7QUFDQSwwRUFBMEUsS0FBSztBQUMvRTtBQUNBLCtDQUErQyxjQUFjO0FBQzdELGdEQUFnRCxNQUFNO0FBQ3REO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNELGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ3ZCM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDYzs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0REFBVztBQUNuQztBQUNBLEVBQUUscURBQUk7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy92aWV3LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2aWV3ID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gc2V0U2VhcmNoUmVzdWx0KHdlYXRoZXJEYXRhKSB7XG4gICAgaWYgKCF3ZWF0aGVyRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1uYW1lXCIpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZVwiKTtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzLWxpa2VcIik7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpO1xuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRcIik7XG5cbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGBDaXR5OiAke3dlYXRoZXJEYXRhLm5hbWV9YDtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHt3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZX0gwrBDYDtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHt3ZWF0aGVyRGF0YS5mZWVsc0xpa2V9IMKwQ2A7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGEuaHVtaWRpdHl9ICVgO1xuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyRGF0YS53aW5kU3BlZWR9IGttL2hgO1xuICB9XG4gIHJldHVybiB7IHNldFNlYXJjaFJlc3VsdCB9O1xufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHZpZXc7XG4iLCJjb25zdCB3ZWF0aGVyRGF0YSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNvbnZlcnREYXRhKGRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgbWFpbjogeyB0ZW1wOiB0ZW1wZXJhdHVyZSwgZmVlbHNfbGlrZTogZmVlbHNMaWtlLCBodW1pZGl0eSB9LFxuICAgICAgd2luZDogeyBzcGVlZDogd2luZFNwZWVkIH0sXG4gICAgfSA9IGRhdGE7XG4gICAgcmV0dXJuIHsgbmFtZSwgdGVtcGVyYXR1cmUsIGZlZWxzTGlrZSwgaHVtaWRpdHksIHdpbmRTcGVlZCB9O1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eSkge1xuICAgIGNvbnN0IGVuZFBvaW50ID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD05MzViNjNkOWEwNjVhNDRmOTljNjM0MTA2ZTBjZjVjYSZ1bml0cz1tZXRyaWNgO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZFBvaW50LCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBDaXR5ICR7Y2l0eX0gbm90IGZvdW5kYCk7XG4gICAgICBjb25zdCBkYXRhID0gY29udmVydERhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgZ2V0RGF0YSB9O1xufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJEYXRhO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdmlldyBmcm9tIFwiLi9tb2R1bGVzL3ZpZXdcIjtcbmltcG9ydCB3ZWF0aGVyRGF0YSBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXJEYXRhXCI7XG5cbmNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIik7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWlucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnRuXCIpO1xuXG5jYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoc2VhcmNoSW5wdXQudmFsdWUgPT09IFwiXCIpIHJldHVybjtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHdlYXRoZXJEYXRhLmdldERhdGEoc2VhcmNoSW5wdXQudmFsdWUpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgdmlldy5zZXRTZWFyY2hSZXN1bHQod2VhdGhlcik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==