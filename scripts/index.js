document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameFeedback = document.getElementById('usernameFeedback');
    const passwordFeedback = document.getElementById('passwordFeedback');

    let isValid = true;

    // Validate Username
    const usernamePattern = new RegExp(usernameInput.pattern);
    if (!usernameInput.value || !usernamePattern.test(usernameInput.value)) {
        usernameInput.classList.add('is-invalid');
        usernameFeedback.textContent = 'Username must be at least 3 alphanumeric characters.';
        isValid = false;
    } else {
        usernameInput.classList.remove('is-invalid');
        usernameFeedback.textContent = '';
    }

    // Validate Password
    if (!passwordInput.value) {
        passwordInput.classList.add('is-invalid');
        passwordFeedback.textContent = 'Password cannot be empty.';
        isValid = false;
    } else {
        passwordInput.classList.remove('is-invalid');
        passwordFeedback.textContent = '';
    }

    if (isValid) {
        // In a real application, you would send these credentials to a server for authentication.
        // For this example, we'll simulate a successful login and redirect.
        //alert('Login successful! Redirecting to Pharmacist Dashboard.');
        window.location.href = 'pharmacist.html'; // Redirect to pharmacist page
    } else {
        alert('Please correct the errors in the form.');
    }
});