import '../scss/main.scss';

import { DOC, API_KEY, MAIN_MODAL, ALERT_MODAL, CITY, COUNTRY, SUBMIT, MY_LOCATION, HISTORY, CLOSE_BUTTONS, OK_BUTTONS, CLEAR } from './constants';
import { addCloseButtonsListener, prepareString, checkLocalStarage, renderWeatherHistory } from './functions';
import { bodyLock, closeModal } from './modal';

const weatherImage = DOC.querySelector('.weather-section-image');
const currentTemperature = DOC.querySelector('.current-temperature');
const location = DOC.querySelector('.location');
const currentTimeValue = DOC.querySelector('.current-time-value');
const currentWindDirection = DOC.querySelector('.current-wind-direction-value');
const currentFeelsLike = DOC.querySelector('.current-feels-like-value');
const currentWindSpeed = DOC.querySelector('.current-wind-speed-value');
const curentTodayIs = DOC.querySelector('.current-today-is-value');
const curentPressureValue = DOC.querySelector('.current-pressure-value');

const weatherHistory = checkLocalStarage('weatherHistory');
historyCheck(weatherHistory, HISTORY);

const allCloseModalButtons = [...CLOSE_BUTTONS, ...OK_BUTTONS];
addCloseButtonsListener(allCloseModalButtons);

MAIN_MODAL.addEventListener('click', (event) => {
    if (!event.target.closest('.modal-content')) {
        closeModal(event);
    }
});

ALERT_MODAL.addEventListener('click', (event) => {
    if (!event.target.closest('.modal-content')) {
        closeModal(event);
    }
});

SUBMIT.addEventListener('click', () => {
    if ((CITY.value != '') && (COUNTRY.value != '')) {
        const city = prepareString(CITY.value);
        const country = prepareString(COUNTRY.value);
        sendRequest(city, country);
        CITY.value = '';
        COUNTRY.value = '';
    } else {
        showAlertMessage('Error: Please select your city and country.')
    }
});

HISTORY.addEventListener('click', () => {
    MAIN_MODAL.classList.add('open');
    renderWeatherHistory(weatherHistory, MAIN_MODAL.querySelector('.modal-body_content'));
    bodyLock();
});

CLEAR.addEventListener('click', () => {
    MAIN_MODAL.querySelector('.modal-body_content').innerHTML = '<p class="modal-body_text">Weather history successfully deleted.</p>';
    localStorage.removeItem('weatherHistory');
    weatherHistory.length = 0;
    historyCheck(weatherHistory, HISTORY);
});

MY_LOCATION.addEventListener('click', () => {
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
            }
        })
        .then((data) => {
            showWeather(data);
            saveInLocalStorage(weatherHistory, data);
            historyCheck(weatherHistory, HISTORY);
        })
        .catch((error) => {
            showAlertMessage(error);
        })
}

function showWeather(data) {
    weatherImage.style.background = `url('${data.current.weather_icons[0]}') center`;
    currentTemperature.textContent = `${data.current.temperature}`;
    location.textContent = `${data.location.name}, ${data.location.country}`;
    currentTimeValue.textContent = `${data.current.observation_time}`;
    currentWindDirection.textContent = `${data.current.wind_dir}`;
    currentFeelsLike.innerHTML = `${data.current.feelslike} &deg C`;
    currentWindSpeed.textContent = `${data.current.wind_speed} km/h`;
    curentTodayIs.textContent = `${data.current.weather_descriptions[0].toLowerCase()}`;
    curentPressureValue.textContent = `${data.current.pressure} hPa`;
}

function saveInLocalStorage(name, newData) {
    let rewritten = false;
    name.forEach((data, index) => {
        if ((data.location.name == newData.location.name) && (data.location.country == newData.location.country)) {
            name[index] = newData;
            rewritten = true;
        }
    });
    if (!rewritten) {
        name.push(newData);
    }
    localStorage.setItem('weatherHistory', JSON.stringify(name));
}

function historyCheck(dataArray, button) {
    if (dataArray.length == 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function showAlertMessage(message) {
    ALERT_MODAL.querySelector('.modal-body-text').textContent = message;
    ALERT_MODAL.classList.add('open');
    bodyLock();
}

function navigationSuccess({ coords }) {
    const { latitude, longitude } = coords;
    sendRequest(latitude, longitude);
}

function navigationError({ message }) {
    showAlertMessage(`Error: ${message}.`);
}
