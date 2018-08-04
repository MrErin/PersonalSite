
const $ = require('jquery')

const backgroundChange = () => {
	$(document).scroll(function () {
		var y = $(this).scrollTop()
		if (y > 150) {
			$('#img1').fadeIn({})
		}
		else {$('#img1').fadeOut('fast')};

		if (y > 300) {
			$('#img2').fadeIn({})
		}
		else {$('#img2').fadeOut('fast')};

		if (y > 450) {
			$('#img3').fadeIn({})
		}
		else {$('#img3').fadeOut('fast')};

	})
}

module.exports = backgroundChange