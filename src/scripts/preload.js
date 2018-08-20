let images = new Array()
const preload = () => {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
	preload(
		'./assets/img/off.png',
		'./assets/img/bulb0.png',
		'./assets/img/bulb1.png',
		'./assets/img/bulb2.png',
		'./assets/img/bulb3.png',
		'./assets/img/erin.png'
	)
}

module.exports = preload