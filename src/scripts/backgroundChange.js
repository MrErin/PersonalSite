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
	// This function returns true or false for whether or not the passed element is in the viewport.
	const elementTop = $(this).offset().top
	const elementBottom = elementTop + $(this).outerHeight()
	const viewportTop = $(window).scrollTop()
	const viewportBottom = viewportTop + $(window).height()

	return elementBottom > viewportTop && elementTop < viewportBottom

}
// TODO: change the calculation to determine whether the anchor is in the middle of the viewport
// https://jsfiddle.net/atcwL1mz/


const backgroundChange = () => {
	let oldAnchorId = 'HomeA'

	$(window).on('resize scroll', function() {
		let oldImg = $('#bulbDiv .changeThis')
		$('.anchor').each(function() {
			let activeAnchor = $(this)
			let activeAnchorId = $(this).attr('id')
			let oldImg = $('#bulbDiv .changeThis')
			let newImg = $(document.getElementById(classPicker(activeAnchorId)))
			if($(this).viewCheck()){
				if ($(this).attr('id') !== oldAnchorId) {
					console.log(`oldAnchorId = ${oldAnchorId}, activeAnchorID = ${activeAnchorId}, oldImg = ${oldImg.attr('id')}, newImg = ${newImg.attr('id')}`)


					// css keyframes
					oldImg.stop(true).fadeOut('fast')
					newImg.fadeIn('fast')

					oldImg.removeClass('changeThis')
					oldImg.addClass('hideThis')
					newImg.removeClass('hideThis')
					newImg.addClass('changeThis')
					oldAnchorId = activeAnchorId


				}
			}
		})
	})
}

module.exports = backgroundChange