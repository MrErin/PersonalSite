const $ = require('jquery')

const navmenu = () => {
	$('#nav').click(function() {
		$(this).toggleClass('open')
	})
}

module.exports = navmenu