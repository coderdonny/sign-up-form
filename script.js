const password = document.getElementById('user-password');
const confirmPassword = document.getElementById('confirm-password');
const errorElement = document.getElementById('error');

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	let messages = [];
	// if (password != confirmPassword) {
	// 	e.preventDefault();
	// 	errorElement.innerText = 'Passwords do not match, please try again';
	// 	// messages.push('Passwords do not match, please try again');
	// }

	if (password.value != confirmPassword.value) {
		e.preventDefault();
		messages.push('Passwords do not match, please try again');
		// errorElement.innerText = 'Passwords do not match, please try again';
	}

	if (password.value.length < 6) {
		e.preventDefault();
		messages.push('Password must be longer than 6 characters');
	}

	if (messages.length > 0) {
		e.preventDefault();
		errorElement.innerText = messages.join(', ');
	}
});
