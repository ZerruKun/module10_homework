//Получение кнопки и области для вывода значений
const showQuantities = document.querySelector(".show-quantities-button");
const resultsArea = document.querySelector(".results");

//Вывод величин при нажатии
showQuantities.addEventListener("click", (event) => {
    event.preventDefault();
    //Размеры экрана
    const deviceWidth = window.screen.width;
    const deviceHeight = window.screen.height;

    //Окно браузера с полосой прокрутки
    const browserWithBandWidth = window.innerWidth;
    const browserWithBandHeight = window.innerHeight;

    //Окно браузера без полосы прокрутки
    const browserWithoutBandWidth = document.documentElement.clientWidth;
    const browserWithoutBandHeight = document.documentElement.clientHeight;

    //Вывод информации
    resultsArea.innerHTML = `
        <span class="device-width">Ширина устройства: ${deviceWidth} px</span>
        <span class="device-height">Высота устройства: ${deviceHeight} px</span>
        <span class="browser-with-band-width">Ширина окна браузера с полосой прокрутки: ${browserWithBandWidth} px</span>
        <span class="browser-with-band-height">Высота окна браузера с полосой прокрутки: ${browserWithBandHeight} px</span>
        <span class="browser-without-band-width">Ширина окна браузера без полосы прокрутки: ${browserWithoutBandWidth} px</span>
        <span class="browser-without-band-height">Высота окна браузера без полосы прокрутки: ${browserWithoutBandHeight} px</span>
    `;
});