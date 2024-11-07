function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!phone.match(phonePattern)) {
        alert("Please enter a 10-digit phone number.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If validation is successful, show a success message and reset the form
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('signupForm').reset();
    return false;
}
