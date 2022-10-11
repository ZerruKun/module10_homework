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
  alert(`
        Ширина устройства: ${deviceWidth} px
        Высота устройства: ${deviceHeight} px
        Ширина окна браузера с полосой прокрутки: ${browserWithBandWidth} px
        Высота окна браузера с полосой прокрутки: ${browserWithBandHeight} px
        Ширина окна браузера без полосы прокрутки: ${browserWithoutBandWidth} px
        Высота окна браузера без полосы прокрутки: ${browserWithoutBandHeight} px
    `);
});