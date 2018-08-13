const $ = require('jquery')

const $headers = $('.anchor')
const $window = $(window)

const viewCheck = () => {
	const windowHeight = $window.height()
	const windowTopPosition = $window.scrollTop()
	const windowBottomPosition = (windowTopPosition + windowHeight)

	$.each($headers, function(){
		let $element = $(this)
		let elHead = $element.prop('id')
		let elementHeight = $element.outerHeight()
		let elementTopPosition = $element.offset().top
		let elementBottomPosition = (elementTopPosition + elementHeight)


		// * Failed attempt to force set the topmost div to bulb0
		// if ($window.scrollTop() >= $('#HomeA').offset().top){
		// 	$('#bulb').attr('src', classPicker('HomeA')).fadeIn(1000)
		// } else

		// * This one was closer to working (try it without the stop(true, true) to see), but it wasn't there yet.
		// if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
		// 	$('#bulb').attr('src', classPicker(elHead)).fadeIn(1000)
		// } else {
		// 	$('#bulb').stop(true, true).fadeOut(1000)
		// }

		// * Reconfiguring to set a single variable with the current image.

		// let currentImage = classPicker(elHead)
		// if (currentImage !== $('#bulb').attr('src')) {
		// 	console.log(`image was ${currentImage}`)
		// 	currentImage = classPicker(elHead)
		// 	console.log(`image now ${currentImage}`)
		// 	$('#bulb').fadeOut(1000)
		// 	$('#bulb').attr('src', currentImage).fadeIn(1000)
		// }
	})
}


const classPicker = (header) => {
	switch (header) {
	case 'HomeA':
		return './assets/img/bulb0.png'
		break
	case 'BioA':
		return './assets/img/bulb1.png'
		break
	case 'ProjectsA':
		return './assets/img/bulb2.png'
		break
	case 'SkillsA':
		return './assets/img/bulb3.png'
		break
	case 'ContactA':
		return './assets/img/bulb4.png'
		break
	default:
		console.log(`backgroundChange script attempting to pass ${header} to the add switch statement`)
		return './assets/img/bulb0.png'
		break
	}
}

const backgroundChange = () => {


	$window.on('scroll resize', viewCheck)
	$window.trigger('scroll')
}

module.exports = backgroundChange