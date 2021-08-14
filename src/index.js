const button = document.querySelector('button');
button.addEventListener('click', function() {
    fetchWeather();
});

//get location from user
function fetchWeather() {
    const userLocation = document.querySelector('input').value;
    console.log(userLocation);
    getWeatherData(userLocation);
}

//make an API call that take a location and return the weather data for that location
async function getWeatherData(location) {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=74a58e9047d5de25ecab53c33f932b6f&units=metric', {mode: 'cors'});
        const weatherData = await response.json();
        processData(weatherData);
        reset();
    } catch(err) {
        console.log(err);
    } 
}

function processData(dataToProcess) {
    //process the json data and return an object with only the data I require for my app
    const myData = {
        condition: dataToProcess.weather[0].description.toUpperCase(),
        location: dataToProcess.name.toUpperCase(),
        country: dataToProcess.sys.country.toUpperCase(),
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

function reset() {
    const input = document.querySelector('input');
    input.value = '';
}