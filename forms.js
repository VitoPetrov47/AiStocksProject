document.addEventListener("DOMContentLoaded", function () {
	const $tradingForm = document.getElementById('trading-form');
	const $bIntroForm = document.getElementById('b-intro-form');

	$tradingForm.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the default form submission behavior

		// Get form inputs values
		const firstName = document.getElementById('trading-form-first-name').value;
		const lastName = document.getElementById('trading-form-last-name').value;
		const email = document.getElementById('trading-form-email').value;
		const phone = document.getElementById('trading-form-phone-number').value;

		// Compose data
		const data = {
			firstName,
			lastName,
			email,
			phone
		}
		console.log(data)
	});

	$bIntroForm.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the default form submission behavior

		// Get form inputs values
		const firstName = document.getElementById('b-intro-form-first-name').value;
		const lastName = document.getElementById('b-intro-form-last-name').value;
		const email = document.getElementById('b-intro-form-email').value;
		const phone = document.getElementById('b-intro-form-phone-number').value;

		// Compose data
		const data = {
			firstName,
			lastName,
			email,
			phone
		}
		console.log(data)
	});
});