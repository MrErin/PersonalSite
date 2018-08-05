const $ = require('jquery')

const $headers = $('.anchor')
const $window = $(window)
const bulbDiv = $('#bulb')

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
		let changeClass = classPicker(elHead)

		if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
			bulbDiv.addClass(changeClass)
		} else {
			bulbDiv.removeClass(changeClass)
		}
	})
}


const classPicker = (header) => {
	switch (header) {
	case 'HomeA':
		return 'zero'
		break
	case 'BioA':
		return 'one'
		break
	case 'ProjectsA':
		return 'two'
		break
	case 'SkillsA':
		return 'three'
		break
	case 'ContactA':
		return 'four'
		break
	default:
		console.log(`backgroundChange script attempting to pass ${header} to the add switch statement`)
		return 'zero'
		break
	}
}

const backgroundChange = () => {


	$window.on('scroll resize', viewCheck)
	$window.trigger('scroll')
// 	// $(document).scroll(function () {
// 	// 	let y = $(this).scrollTop()

// 	// 	if (y > 150) {
// 	// 		$('#bulb > img:first').next().appendTo('#bulb').fadeIn({})
// 	// 	}
// 	// 	else {$('#img1').fadeOut('fast')};

// 	// 	if (y > 300) {
// 	// 		$('#img2').fadeIn({})
// 	// 	}
// 	// 	else {$('#img2').fadeOut('fast')};

// 	// 	if (y > 450) {
// 	// 		$('#img3').fadeIn({})
// 	// 	}
// 	// 	else {$('#img3').fadeOut('fast')};

// 	// })


// // The above was commented out when this was still available. Recommenting the whole thing because of a new approach

// 	let num = 1
// 	$('img').attr('src','http://sendamessage.to/dist/images/fistbump-700/1.jpg')

// 	$(window).scroll(function () {
// 	  num = $(window).scrollTop() / 3

// 	 if( parseInt(num) === num){

// 		  $('img').attr('src','http://sendamessage.to/dist/images/fistbump-700/' + num + '.jpg')}
// 	  else{}

// 	  if (num < 1){
// 			$('img').attr('src','http://sendamessage.to/dist/images/fistbump-700/1.jpg')
// 	  }
// 		if (num > 30){
// 			$('img').attr('src','http://sendamessage.to/dist/images/fistbump-700/30.jpg')
// 		  $('img').css('position','absolute')
// 	  }


// 	})



}

module.exports = backgroundChange

// $('#graphics > img:first').next().appendTo('#graphics')
