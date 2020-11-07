let html = '';
function getRandomValue() {
    return Math.floor(Math.random() * 256);
}

function getRandomColor(value) {
    const color = `rgb( ${value()}, ${value()}, ${value()} )`;
    return color;
}

for (let i = 1; i <= 100; i++) {
    html += `<div style="background-color: ${getRandomColor(getRandomValue)}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;