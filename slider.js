
const data = [
	{
		"id":1,
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
	}
]


const chatBody = document.querySelector(".chat__container--body")


function getInfoToHtml (object) {

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

function getNavAndMarkerToHtml(list) {
	const contentContainerNav = document.querySelector(".content__container--nav")
	const contentContainerMarkers = document.querySelector(".content__container--markers")

	for (obj of list) {
		contentContainerNav.innerHTML += `<span data-id="${obj.id}" class="content__header content__header--nav">${obj.city}, ${obj.district}</span>`
		contentContainerMarkers.innerHTML += `<div data-id="${obj.id}" class="content__container content__container--marker">
                            
												<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="9.56667" height="9.56667" rx="4.78333" fill="white" fill-opacity="0.3"/>
												</svg>
											 </div>`
	}


}

getInfoToHtml(data[0])

getNavAndMarkerToHtml(data)

