import $ from 'jquery';
/* lodash is not used. Just an example of connection.*/
import { isEqual } from 'lodash';
import { API_KEY, MAIN_MODAL, ALERT_MODAL, CITY, COUNTRY, SUBMIT, MY_LOCATION, HISTORY, CLOSE_BUTTONS, OK_BUTTONS, CLEAR } from './constants.js';
import { addCloseButtonsListener, prepareString, checkLocalStarage, renderWeatherHistory } from './functions.js';
import { bodyLock, closeModal } from './modal.js';

const weatherImage = $('.weather-section-image');
const currentTemperature = $('.current-temperature');
const location = $('.location');
const currentTimeValue = $('.current-time-value');
const currentWindDirection = $('.current-wind-direction-value');
const currentFeelsLike = $('.current-feels-like-value');
const currentWindSpeed = $('.current-wind-speed-value');
const curentTodayIs = $('.current-today-is-value');
const curentPressureValue = $('.current-pressure-value');

const weatherHistory = checkLocalStarage('weatherHistory');
historyCheck(weatherHistory, HISTORY[0]);

const allCloseModalButtons = [...CLOSE_BUTTONS, ...OK_BUTTONS];
addCloseButtonsListener(allCloseModalButtons);

MAIN_MODAL.bind('click', (event) => {
    if (!event.target.closest('.modal-content')) {
        closeModal(event);
    };
});

ALERT_MODAL.bind('click', (event) => {
    if (!event.target.closest('.modal-content')) {
        closeModal(event);
    };
});

SUBMIT.bind('click', () => {
    if ((CITY.val() != '') && (COUNTRY.val() != '')) {
        const city = prepareString(CITY.val());
        const country = prepareString(COUNTRY.val());
        sendRequest(city, country);
        CITY.val('');
        COUNTRY.val('');
    } else {
        showAlertMessage('Error: Please select your city and country.')
    };
});

HISTORY.bind('click', () => {
    MAIN_MODAL.addClass('open');
    renderWeatherHistory(weatherHistory, MAIN_MODAL.find('.modal-body_content')[0]);
    bodyLock();
});

CLEAR.bind('click', (event) => {
    MAIN_MODAL.find('.modal-body_content').html('<p class="modal-body_text">Weather history successfully deleted.</p>');
    localStorage.removeItem('weatherHistory');
    weatherHistory.length = 0;
    historyCheck(weatherHistory, HISTORY[0]);
});

MY_LOCATION.bind('click', () => {
    navigator.geolocation.getCurrentPosition(navigationSuccess, navigationError, { enableHighAccuracy: true });
});

function sendRequest(parameter1, parameter2) {
    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${parameter1},${parameter2}`;
    fetch(url)
        .then(responce => responce.json())
        .then((data) => {
            if ('success' in data) {
                throw new Error('Something went wrong! Please check the entered data and try again.');
            } else {
                return data;
            };
        })
        .then((data) => {
            showWeather(data);
            saveInLocalStorage(weatherHistory, data);
            historyCheck(weatherHistory, HISTORY[0]);
        })
        .catch((error) => {
            showAlertMessage(error);
        })
};

function showWeather(data) {
    weatherImage.css({'background': `url('${data.current.weather_icons[0]}') center`});    
    currentTemperature.text(`${data.current.temperature}`);
    location.text(`${data.location.name}, ${data.location.country}`);
    currentTimeValue.text(`${data.current.observation_time}`);
    currentWindDirection.text(`${data.current.wind_dir}`);
    currentFeelsLike.html(`${data.current.feelslike} &deg C`);
    currentWindSpeed.text(`${data.current.wind_speed} km/h`);
    curentTodayIs.text(`${data.current.weather_descriptions[0].toLowerCase()}`);
    curentPressureValue.text(`${data.current.pressure} hPa`);
};

function saveInLocalStorage(name, newData) {
    let rewritten = false;
    name.forEach((data, index) => {
        if ((data.location.name == newData.location.name) && (data.location.country == newData.location.country)) {
            name[index] = newData;
            rewritten = true;
        };
    });
    if (!rewritten) {
        name.push(newData);
    };
    localStorage.setItem('weatherHistory', JSON.stringify(name));
};

function historyCheck(dataArray, button) {
    if (dataArray.length == 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    };
};

function showAlertMessage(message) {
    ALERT_MODAL.find('.modal-body-text').text(message);
    ALERT_MODAL.addClass('open');
    bodyLock();
};

function navigationSuccess({ coords }) {
    const { latitude, longitude } = coords;
    sendRequest(latitude, longitude);
};

function navigationError({ message }) {
    showAlertMessage('Error: Geo location data is not available.');
};
