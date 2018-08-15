const $ = require('jquery')

const classPicker = (header) => {
	// This function returns which image should be shown depending on which anchor is passed in
	switch (header) {
	case 'ProjectsA':
		return 'one'
		break
	case 'SkillsA':
		return 'two'
		break
	case 'ContactA':
		return 'three'
		break
	case 'HomeA':
	case 'BioA':
		return 'off'
		break
	default:
		console.log(`backgroundChange script attempting to pass ${header} to the add switch statement`)
		return 'off'
		break
	}
}

$.fn.viewCheck = function() {
	// This function returns true or false for whether or not the passed element is in the middle-ish of the viewport.

	const windowHeight = $(window).height()
	const middleTop = windowHeight * .1
	const middleBottom = windowHeight * .4
	const thisTop = $(this).offset().top - $(window).scrollTop()

	return thisTop > middleTop && (thisTop + $(this).height()) < middleBottom

}

const backgroundChange = () => {
	let oldAnchorId = 'HomeA'

	$(window).on('resize scroll', function() {
		let oldImg = $('#bulbDiv .changeThis')
		$('.anchor').each(function() {
			let activeAnchorId = $(this).attr('id')
			let oldImg = $('#bulbDiv .changeThis')
			let newImg = $(document.getElementById(classPicker(activeAnchorId)))
			if($(this).viewCheck()){
				if ($(this).attr('id') !== oldAnchorId) {

					oldImg.stop(true).fadeOut('fast')
					newImg.fadeIn('fast')

					oldImg.removeClass('changeThis')
					oldImg.addClass('hideThis')
					newImg.removeClass('hideThis')
					newImg.addClass('changeThis')
					oldAnchorId = $(this).attr('id')


				}
			}
		})
	})
}

module.exports = backgroundChange