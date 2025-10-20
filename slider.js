
const data = [
	{
		"id":1,
		"city": "Rostov-on-Don",
		"district": "LCD admiral",
		"apartment area": 81,
		"repair time": 3.5,
		"repair rost:": "Upon request",
		"img sqr": ""
	},
	 {

	}, {

	}
]








const chatBody = document.querySelector(".chat__container--body")

const connection = new WebSocket('wss://echo.websocket.org');


connection.addEventListener("open", (event) => {

	chatBody.innerHTML += 
		`<span class="chat__text chat__text--servise-message">Соединение установлено.</span>`

})


connection.addEventListener("error", () => {

	chatBody.innerHTML += 
		`<span class="chat__text chat__text--servise-message">Что то пошло не так!!!</span>`

})

connection.addEventListener("message", (event) => {
	
	if (event.data.includes("Request")) {
		return
	}
	

	chatBody.innerHTML += 
		`<div class="chat__container chat__container--message chat__container--server">
		<span class="chat__text chat__text--message">${event.data}</span></div>`

	resizeMessage()

})


function resizeMessage() {

	const message = chatBody.lastElementChild
	const messageText = message.firstElementChild

	if (messageText.offsetWidth >= (chatBody.clientWidth * 0.7)) {
	 messageText.style.width = `${chatBody.clientWidth * 0.6}px`
	} 
}

function sendMesaage() {
	const input = document.querySelector(".chat__input")

	if (input.value === "") {
		return
	}

	chatBody.innerHTML += 
		`<div class="chat__container chat__container--message chat__container--user">
		<span class="chat__text chat__text--message">${input.value}</span></div>`
		

	resizeMessage()


	connection.send(input.value)
	input.value = ""
	}


const okPosition = (positon) => {
	const latitude = positon.coords.latitude
	const longitude = positon.coords.longitude
	chatBody.innerHTML += 
		`<div class="chat__container chat__container--message chat__container--user">
            <a href="https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=8/${latitude}/${longitude}" class="chat__link">Вы тут</a>
         </div>`

}

const errorPosition = () => {
	chatBody.innerHTML += 
		`<span class="chat__text chat__text--servise-message">Ошибка при получении позиции!</span>`

}


function geoLocation() {

	if (!navigator.geolocation) {

		chatBody.innerHTML += 
		`<span class="chat__text chat__text--servise-message">Ваш браузер не потдерживает геолокацию</span>`

	} else {
		chatBody.innerHTML += 
		`<span class="chat__text chat__text--servise-message">Определяем местоположение!</span>`
		navigator.geolocation.getCurrentPosition(okPosition, errorPosition)
	}
	
	
}
