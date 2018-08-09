const $ = require('jquery')

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
	const $headerElements = $('.anchor')
	const $window = $(window)
	const windowHeight = $window.height()
	const windowTopPosition = $window.scrollTop()
	const windowBottomPosition = (windowTopPosition + windowHeight)
	let scrollTimeout
	const throttle = 500

	$window.on('scroll resize', function(){
		if (!scrollTimeout) {
			scrollTimeout = setTimeout(function(){
				$.each($headerElements, function(){
					let $element = $(this)
					let elHead = $element.attr('id')
					const elementHeight = $element.outerHeight()
					const elementTopPosition = $element.offset().top
					const elementBottomPosition = (elementTopPosition + elementHeight)
					if ((elementBottomPosition >= windowTopPosition) &&
					(elementTopPosition <= windowBottomPosition)){
						// $('#bulb').attr('src', classPicker(elHead)).fadeIn(1000)
						console.log(elHead)
					}
				})
				scrollTimeout = null
			}, throttle)
		}
	})
	$window.trigger('scroll')



}

module.exports = backgroundChange