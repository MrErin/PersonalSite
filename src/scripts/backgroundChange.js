
const $ = require('jquery')

const backgroundChange = () => {
	// $(document).scroll(function () {
	// 	let y = $(this).scrollTop()

	// 	if (y > 150) {
	// 		$('#bulb > img:first').next().appendTo('#bulb').fadeIn({})
	// 	}
	// 	else {$('#img1').fadeOut('fast')};

	// 	if (y > 300) {
	// 		$('#img2').fadeIn({})
	// 	}
	// 	else {$('#img2').fadeOut('fast')};

	// 	if (y > 450) {
	// 		$('#img3').fadeIn({})
	// 	}
	// 	else {$('#img3').fadeOut('fast')};

	// })

	let num = 1
	$('img').attr('src','http://sendamessage.to/dist/images/fistbump-700/1.jpg')

	$(window).scroll(function () {
	  num = $(window).scrollTop() / 3

	 if( parseInt(num) === num){

		  $('img').attr('src','http://sendamessage.to/dist/images/fistbump-700/' + num + '.jpg')}
	  else{}

	  if (num < 1){
			$('img').attr('src','http://sendamessage.to/dist/images/fistbump-700/1.jpg')
	  }
		if (num > 30){
			$('img').attr('src','http://sendamessage.to/dist/images/fistbump-700/30.jpg')
		  $('img').css('position','absolute')
	  }


	})



}

module.exports = backgroundChange

// $('#graphics > img:first').next().appendTo('#graphics')
