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


const backgroundChange = () => {
	let oldAnchorId = 'HomeA'

	//preloads images
	let bulbs = []
	$('bulbImg').each(function() {
		let img = new Image()
		img.src = this.href
		bulbs.push(img)
	})

	$(window).on('resize scroll', function() {
		let oldImg = $('#bulbDiv .changeThis')
		$('.anchor').each(function() {
			let activeAnchor = $(this)
			let activeAnchorId = $(this).attr('id')
			let oldImg = $('#bulbDiv .changeThis')
			let img = new Image()
			img.src = $(document.getElementById(classPicker(activeAnchorId))).attr('src')
			let newImg = $(img).hide()
			console.log(`activeAnchorID = ${activeAnchorId}, oldImg = ${oldImg.attr('id')}, img = ${img}, newImg = ${newImg}`)
			if($(this).viewCheck()){
				if ($(this).attr('id') !== oldAnchorId) {
					// console.log(`anchor was ${oldAnchorId}`)
					// oldAnchorId = $(this).attr('id')
					// console.log(`anchor is now ${oldAnchorId}`)
					// let newImgEl = document.getElementById(classPicker(oldAnchorId))
					// newImg.src = $(newImgEl).attr('src')
					$('#bulbDiv').append(img)
					oldImg.stop(true).fadeOut(500, function() {
						$(this).remove()
					})
					newImg.fadeIn(500).addClass('bulbImg changeThis')
					return false
					// console.log($(newImg).attr('src'))




				}
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


				// let oldImg = $('#bulbDiv .changeThis')
				// let img = new Image()
				// img.src = classPicker(activeAnchor)
				// let newImg = $(img).hide()
				// $('#bulbDiv').append(img)

				// oldImg.stop(true).fadeOut(500, function() {
				// 	$(this).remove()
				// })
				// newImg.fadeIn(500).addClass('bulbImg changeThis')
				// return false
			}
		})
	})

}


module.exports = backgroundChange