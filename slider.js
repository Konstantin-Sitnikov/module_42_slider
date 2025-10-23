
const data = [
	{
		"id": 1,
		"city": "Rostov-on-Don",
		"district": "Admiral",
		"apartment area": 81,
		"repair time": 3.5,
		"repair rcost": "Upon request",
		"img sqr": "images/Rostov-on-Don_admiral.png"
	},

	 {
		"id": 2,
		"city": "Sochi",
		"district": "Thieves",
		"apartment area": 105,
		"repair time": 4,
		"repair rcost": "Upon request",
		"img sqr": "images/Sochi.png"
	}, 

	{
		"id": 3,
		"city": "Rostov-on-Don",
		"district": "Patriotic",
		"apartment area": 93,
		"repair time": 3,
		"repair rcost": "Upon request",
		"img sqr": "images/Rostov-on-Don_patriotic.png"
	},


]


const chatBody = document.querySelector(".chat__container--body")
const contentMarker = document.getElementsByClassName("content__marker")
const contentHeaderNav = document.getElementsByClassName("content__header--nav")
let currentNumber = 0

console.log(currentNumber)

function addInfoToHtml (object) {

	const contentTextCity = document.querySelector(".content__text--city")
	const contentTextArea = document.querySelector(".content__text--area")
	const contentTextRepairTime = document.querySelector(".content__text--repair-time")
	const contentTextRepairRcost = document.querySelector(".content__text--repair-rcost")
	const contentContainerImg = document.querySelector(".content__container--img")

	contentTextCity.innerHTML = `${object.city}<br>${object.district}`
	contentTextArea.innerHTML = `${object["apartment area"]}`
	contentTextRepairTime.innerHTML = `${object["repair time"]}`
	contentTextRepairRcost.innerHTML = `${object["repair rcost"]}`
	contentContainerImg.innerHTML = `<img src="${object['img sqr']}" alt="foto" class="content__img">` 


}

function addNavAndMarkerToHtml(list) {
	const contentContainerNav = document.querySelector(".content__container--nav")
	const contentContainerMarkers = document.querySelector(".content__container--markers")

	const firstObject = list[currentNumber]
	const remainingList = list.slice(1)

	contentContainerNav.innerHTML += `<span data-id="${firstObject.id}" class="content__header content__header--nav content__header--active">${firstObject.city}, ${firstObject.district}</span>`
	contentContainerMarkers.innerHTML += `<div data-id="${firstObject.id}" class="content__marker content__marker--active"></div>`


	for (obj of remainingList) {
		contentContainerNav.innerHTML += `<span data-id="${obj.id}" class="content__header content__header--nav">${obj.city}, ${obj.district}</span>`
		contentContainerMarkers.innerHTML += `<div data-id="${obj.id}" class="content__marker"></div>`
	}

	addInfoToHtml(firstObject)

}

addNavAndMarkerToHtml(data)






function deleteActiveClass (list) {
	for (elem of list) {
		elem.classList.remove("content__marker--active", "content__header--active")
	}
}



function addActiveClass (dataSetId, list) {
	for (elem of list) {
		if (elem.dataset.id === dataSetId) {
			if(elem.classList.contains("content__marker")) {
				elem.classList.add("content__marker--active")
			}
			if(elem.classList.contains("content__header--nav")) {
				elem.classList.add("content__header--active")
			}
		}
	}
}


function changingPositionActiveClasses (dataSetId) {
			deleteActiveClass(contentMarker)
			deleteActiveClass(contentHeaderNav)
			addActiveClass(dataSetId, contentMarker)
			addActiveClass(dataSetId, contentHeaderNav)
}



function addEventClickToHtml (list) {
	for (let object of list) {
		object.addEventListener("click",  function(){
			changingPositionActiveClasses(this.dataset.id)
			searchAddInfoToHtml(this.dataset.id)
		});
	}
}

addEventClickToHtml(contentMarker)
addEventClickToHtml(contentHeaderNav)

function searchAddInfoToHtml(dataSetId) {
	
	for (elem of data) {
		if (elem.id === Number(dataSetId)) {
			currentNumber = data.indexOf(elem)
			console.log(currentNumber)
			addInfoToHtml(data[currentNumber]) 
		}
	}
}


function clickRightButton () {

	if (currentNumber < (data.length - 1)) {
		currentNumber += 1
	} else {
		currentNumber = 0
	}	
		console.log (currentNumber)
		const obj = data[currentNumber]
	addInfoToHtml(obj)
	changingPositionActiveClasses(String(obj.id))
}


function clickLeftButton() {
	
	if (currentNumber > 0 ) {
		currentNumber -= 1
	} else {
		currentNumber = (data.length - 1)
	}	
		console.log (currentNumber)
		const obj = data[currentNumber]
	addInfoToHtml(obj)
	changingPositionActiveClasses(String(obj.id))

}