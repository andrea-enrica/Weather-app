/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const button = document.querySelector('button');\nbutton.addEventListener('click', function() {\n    fetchWeather();\n});\n\n//get location from user\nfunction fetchWeather() {\n    const userLocation = document.querySelector('input').value;\n    console.log(userLocation);\n    getWeatherData(userLocation);\n}\n\n//make an API call that take a location and return the weather data for that location\nasync function getWeatherData(location) {\n    try {\n        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=74a58e9047d5de25ecab53c33f932b6f&units=metric', {mode: 'cors'});\n        const weatherData = await response.json();\n        processData(weatherData);\n        reset();\n    } catch(err) {\n        console.log(err);\n    } \n}\n\nfunction processData(dataToProcess) {\n    //process the json data and return an object with only the data I require for my app\n    const myData = {\n        condition: dataToProcess.weather[0].description.toUpperCase(),\n        location: dataToProcess.name.toUpperCase(),\n        country: dataToProcess.sys.country.toUpperCase(),\n        temperature: Math.round(dataToProcess.main.temp),\n        feels_like: Math.round(dataToProcess.main.feels_like),\n        temp_min: Math.round(dataToProcess.main.temp_min),\n        temp_max: Math.round(dataToProcess.main.temp_max),\n        humidity: dataToProcess.main.humidity,\n        wind: Math.round(dataToProcess.wind.speed)\n    };\n    console.log(myData);\n    return myData;\n}\n\nfunction reset() {\n    const input = document.querySelector('input');\n    input.value = '';\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;