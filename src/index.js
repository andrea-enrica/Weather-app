getWeatherData('London');

const button = document.querySelector('button');
button.addEventListener('click', function() {
    fetchWeather();
});

//get location from user
function fetchWeather() {
    const userLocation = document.querySelector('input').value;
    getWeatherData(userLocation);
}

//make an API call that take a location and return the weather data for that location
async function getWeatherData(location) {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=74a58e9047d5de25ecab53c33f932b6f&units=metric', {mode: 'cors'});
        const weatherData = await response.json();
        const dataToDispay = processData(weatherData);
        displayData(dataToDispay);
        reset();
    } catch(err) {
        alert("Location not found!");
    } 
}

function processData(dataToProcess) {
    //process the json data and return an object with only the data I require for my app
    const myData = {
        condition: dataToProcess.weather[0].description.toUpperCase(),
        location: dataToProcess.name.toUpperCase(),
        country: dataToProcess.sys.country.toUpperCase(),
        sunrise: dataToProcess.sys.sunrise,
        sunset: dataToProcess.sys.sunset,
        temperature: Math.round(dataToProcess.main.temp),
        feels_like: Math.round(dataToProcess.main.feels_like),
        temp_min: Math.round(dataToProcess.main.temp_min),
        temp_max: Math.round(dataToProcess.main.temp_max),
        humidity: dataToProcess.main.humidity,
        wind: Math.round(dataToProcess.wind.speed)
    };
    console.log(myData);
    return myData;
}

function displayData(dataToDisplay) {
    let sunrise = convertSunTime(`${dataToDisplay.sunrise}`);
    let sunset = convertSunTime(`${dataToDisplay.sunset}`);

    document.querySelector('.location').textContent = `${dataToDisplay.location}, ${dataToDisplay.country}`;
    document.querySelector('.condition').textContent = dataToDisplay.condition;
    document.querySelector('.sunrise').textContent = `Sunrise: ${sunrise}`;
    document.querySelector('.sunset').textContent = `Sunset: ${sunset}`;
    document.querySelector('.degrees').textContent = `${dataToDisplay.temperature}\u00B0C`;
    document.querySelector('.min-max').textContent = `L: ${dataToDisplay.temp_min}\u00B0C / H: ${dataToDisplay.temp_max}\u00B0C`;
    document.querySelector('.feels-like').textContent = `Feels like: ${dataToDisplay.feels_like}\u00B0C`;
    document.querySelector('.windy').textContent = `Wind: ${dataToDisplay.wind}mph`;
    document.querySelector('.humidity').textContent = `Humidity: ${dataToDisplay.humidity}%`;
}

function convertSunTime(sunTime) {
    let date = new Date(sunTime * 1000);
    //show only hours and minutes
    return date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
}

function reset() {
    const input = document.querySelector('input');
    input.value = '';
}