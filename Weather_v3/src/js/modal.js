import $ from 'jquery'

const body = $('body');
const timeOut = 500;

export function bodyLock() {
    const lockPaddingValue = window.innerWidth - $('main').offsetWidth + 'px';
    body.css({'padding-right': `${lockPaddingValue}`});
    body.addClass('lock');
};

function bodyUnlock() {
    setTimeout(() => {
        body.css({'padding-right': '0px'});
        body.removeClass('lock');
    }, timeOut);
};

export function closeModal(event) {
    event.target.closest('.modal').classList.remove('open');
    bodyUnlock();
};
