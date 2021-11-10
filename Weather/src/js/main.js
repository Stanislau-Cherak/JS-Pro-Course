import {API_KEY, DOC, FORM, CITY, COUNTRY} from './constants.js';

const weatherImage=DOC.querySelector('.weather-section-image');
const currentTemperature=DOC.querySelector('.current-temperature');
const location=DOC.querySelector('.location');
const currentTimeValue=DOC.querySelector('.current-time-value');
const currentWindDirection=DOC.querySelector('.current-wind-direction-value');
const currentFeelsLike=DOC.querySelector('.current-feels-like-value');
const currentWindSpeed=DOC.querySelector('.current-wind-speed-value');
const curentTodayIs=DOC.querySelector('.current-today-is-value');
const curentPressureValue=DOC.querySelector('.current-pressure-value');

FORM.addEventListener('submit', (event)=>{
    event.preventDefault();
    if ((CITY.value!='')&&(COUNTRY.value!='')) {
        const city=prepareString(CITY.value);
        const country=prepareString(COUNTRY.value);
        sendRequest(city, country);
        CITY.value='';
        COUNTRY.value='';
    } else {
        alert('Error! Please select your city and country.')
    }
    
});

function prepareString (string) {
    const tempString=string.trim();
    return tempString[0].toUpperCase() + tempString.substr(1).toLowerCase();
}

function sendRequest (city, country) {
    const url=`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city},${country}`;
    fetch(url)
    .then(responce=>responce.json())
    .then((data)=>{
        if ('success' in data) {
            throw new Error('Something went wrong! Please check the entered data and try again.');
        } else {
            return data;
        }
    })
    .then (showWeather)
    .catch((error) => {
        alert(error)
      })    
 };

 function showWeather (data) {
    weatherImage.style.background=`url('${data.current.weather_icons[0]}') center`;
    currentTemperature.textContent=data.current.temperature;
    location.textContent=data.request.query;
    currentTimeValue.textContent=data.current.observation_time;
    currentWindDirection.textContent=data.current.wind_dir;
    currentFeelsLike.innerHTML=`${data.current.feelslike} &deg C`;
    currentWindSpeed.textContent=`${data.current.wind_speed} km/h`;
    curentTodayIs.textContent=data.current.weather_descriptions[0].toLowerCase();
    curentPressureValue.textContent=`${data.current.pressure} hPa`;
}