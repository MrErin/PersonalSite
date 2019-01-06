let images = new Array()
const preload = () => {
	const preImages = [
		'./assets/img/erin.jpg',
		'./assets/img/off.png',
		'./assets/img/bulb0.png',
		'./assets/img/bulb1.png',
		'./assets/img/bulb2.png',
		'./assets/img/bulb3.png'
	]
	preImages.forEach(image => {
		images[image] = new Image()
		images[image].src = image
	})

}

module.exports = preload