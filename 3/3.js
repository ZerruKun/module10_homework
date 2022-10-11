const wsUri = "wss://echo-ws-service.herokuapp.com"
const sendButton = document.querySelector(".send-button");
const geolocationButton = document.querySelector(".geolocation-button");
const inputField = document.querySelector(".inputField");
const messages = document.querySelector(".messages")

//Объявление сокета и описание реакций
let websocket = new WebSocket(wsUri);
    
websocket.onopen = () => {
    console.log("Произведено подключение");
}

websocket.onmessage = (event) => {
    addNewMessage(event.data, "serverMessage");
    console.log("Сообщение от сервера");
}

websocket.onerror = (event) => {
    console.log("Ошибка: " + event.data);
}

//Добавление нового сообщения в чат
const addNewMessage = (msg, msgClass) => {
    messages.innerHTML = messages.innerHTML + `<span class="${msgClass}">${msg}<span>`;
}

//Кнопка отправки сообщения
sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    websocket.send(inputField.value);
    addNewMessage(inputField.value, "userMessage");
    inputField.value = '';
    console.log("Сообщение на сервер");
})

//При успехе определения геолокации
const sucсess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    messages.innerHTML = messages.innerHTML + `<a class="geoMessage" href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Геолокация</a>`;
    console.log("Добавлена ссылка на геолокацию");
}

//При ошибке определения геолокации
const error = () => {
    addNewMessage("Невозможно определить геолокацию");
}

//Кнопка отправки геолокации
geolocationButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (!navigator.geolocation) {
        console.log("Отсутсвует или запрещён доступ к геолокации")
    } else {
        navigator.geolocation.getCurrentPosition(sucсess, error);
    };
});