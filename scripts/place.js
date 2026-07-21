const temp = 8;
const wind = 15;

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const windchillEl = document.querySelector('#windchill');

if (temp <= 10 && wind > 4.8) {
    windchillEl.textContent = `${calculateWindChill(temp, wind)}°C`;
} else {
    windchillEl.textContent = "N/A";
}

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;