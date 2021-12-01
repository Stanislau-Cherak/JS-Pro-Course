import { DOC } from './constants'

const body = DOC.querySelector('body');
const timeOut = 500;

export function bodyLock() {
    const lockPaddingValue = window.innerWidth - DOC.querySelector('main').offsetWidth + 'px';
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
}

function bodyUnlock() {
    setTimeout(() => {
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeOut);
}

export function closeModal (event) {
    event.target.closest('.modal').classList.remove('open');
    bodyUnlock();
}
