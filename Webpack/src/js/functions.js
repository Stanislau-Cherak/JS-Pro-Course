import { closeModal } from './modal';

export function addCloseButtonsListener(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            closeModal(event);
        });
    });
}

export function prepareString(string) {
    const tempString = string.trim();
    return tempString[0].toUpperCase() + tempString.substr(1).toLowerCase();
}

export function checkLocalStarage(name) {
    if (name in localStorage) {
        return JSON.parse(localStorage.getItem(`${name}`))
    }
    else {
        return new Array;
    }
}

export function renderWeatherHistory(dataArray, targetBlock) {
    let tempHTML = '';
    dataArray.forEach((data) => {
        tempHTML += `
        <div class='modal-body_content-row'>
        <p class="modal-body_text">${data.location.name}, ${data.location.country}</p>
        <p class="modal-body_text">${data.current.observation_time}</p>
        <p class="modal-body_text">${data.current.wind_dir}</p>
        <p class="modal-body_text">${data.current.feelslike} &deg C</p>
        <p class="modal-body_text">${data.current.wind_speed} km/h</p>
        <p class="modal-body_text">${data.current.weather_descriptions[0].toLowerCase()}</p>
        <p class="modal-body_text">${data.current.pressure} hPa</p>
        </div>`;
    });
    targetBlock.innerHTML = tempHTML;
}
