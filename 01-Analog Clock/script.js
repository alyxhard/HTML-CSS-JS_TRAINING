const degree = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    const data = new Date();
    const hh = data.getHours() * 30;
    const mm = data.getMinutes() * degree;
    const ss = data.getSeconds() * degree;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
}, 1000);
