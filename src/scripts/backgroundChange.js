const $ = require('jquery')

const classPicker = (header) => {
	// This function returns which image should be shown depending on which anchor is passed in
	switch (header) {
	case 'ProjectsA':
		return './assets/img/bulb1.png'
		break
	case 'SkillsA':
		return './assets/img/bulb2.png'
		break
	case 'ContactA':
		return './assets/img/bulb3.png'
		break
	case 'HomeA':
	case 'BioA':
		return './assets/img/off.png'
		break
	default:
		console.log(`backgroundChange script attempting to pass ${header} to the add switch statement`)
		return './assets/img/off.png'
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


const backgroundChange = () => {
	let scrollTimeout
	const throttle = 500
	let lastScrollTop = 0

	//preloads images
	let bulbs = []
	$('bulbImg').each(function() {
		let img = new Image()
		img.src = this.href
		bulbs.push(img)
	})

	$(window).on('resize scroll', function() {
		let st = $(this).scrollTop()
		if (!scrollTimeout) {
			scrollTimeout = setTimeout(function() {
				$('.anchor').each(function() {
					let activeAnchor = $(this).attr('id')
					if($(this).viewCheck()){
						// $('#bulb').fadeOut(function(){
						// 	$(this).on('load', (function() { $(this).fadeIn()}))
						// 	$(this).attr('src', classPicker(activeAnchor))
						// })

						// $('#bulb').attr('src', classPicker(activeAnchor)).fadeIn(2000)
						// if (st > lastScrollTop){
						// 	//down
						// 	console.log(`down; st = ${st} lastscrolltop = ${lastScrollTop}`)
						// } else {
						// 	//up
						// 	console.log(`up; st = ${st} lastscrolltop = ${lastScrollTop}`)
						// }
						// lastScrollTop = st

						let oldImg = $('#bulbDiv .changeThis')
						let img = new Image()
						img.src = classPicker(activeAnchor)
						let newImg = $(img).hide()
						$('#bulbDiv').append(img)

						oldImg.stop(true).fadeOut(500, function() {
							$(this).remove()
						})
						newImg.fadeIn(500).addClass('bulbImg changeThis')
						return false
					}
				})
				scrollTimeout = null
			}, throttle)
		}
	})

}

module.exports = backgroundChange