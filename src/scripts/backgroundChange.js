const $ = require('jquery')

const classPicker = (header) => {
	switch (header) {
	case 'HomeA':
		return './assets/img/bulb0.png'
		break
	case 'BioA':
		return './assets/img/bulb0.png'
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

$.fn.viewCheck = function() {
	const elementTop = $(this).offset().top
	const elementBottom = elementTop + $(this).outerHeight()
	const viewportTop = $(window).scrollTop()
	const viewportBottom = viewportTop + $(window).height()

	return elementBottom > viewportTop && elementTop < viewportBottom

}


const backgroundChange = () => {
	$(window).on('resize scroll', function() {
		$('.anchor').each(function() {
			let activeAnchor = $(this).attr('id')
			if($(this).viewCheck()){
				$('#bulb').fadeOut(function(){
					$(this).load(function() { $(this).fadeIn()})
					$(this).attr('src', classPicker(activeAnchor))
				})
			}
		})
	})

}

module.exports = backgroundChange