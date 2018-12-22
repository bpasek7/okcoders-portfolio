$(document).ready(() => {
	console.log('Document is ready');

	var userBryan = {
		email: 'bryan@gmail.com',
		password: 'password',
		name: 'Bryan Pasek',
	};

	$('.btn.login').click(() => {
		var emailAddress = $('.input.email').val();
		var password = $('.input.password').val();
		login(emailAddress,password);
	});

	function login(email,password) {
		if(email===userBryan.email && password===userBryan.password) {
			window.location.href = "homePage.html";
		}
		else {
			$('.input.email').hide(500);
			$('.input.password').hide(500);
			$('.btn.login').hide(500);
			$('body').append('<h1>Intruder Alert!</h1>').css({'color': 'red', 'text-align': 'center'});
		}
	};
})
