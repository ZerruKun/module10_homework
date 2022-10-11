//Получение кнопки и иконок
const iconChangeButton = document.querySelector(".icon-change-button");
const buttonIcons = document.querySelectorAll(".button-icon");

//Функция для смены иконки
const changeIcon = (icons) => {
  icons.forEach((el) => {
    el.classList.toggle("hidden");
  });
};

//Ивент по клику для смены иконки
iconChangeButton.addEventListener("click", (event) => {
  event.preventDefault();
  changeIcon(buttonIcons);
});