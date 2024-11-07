function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Dummy credentials for the purpose of this example
    const validUsername = "user123";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        // Simulate successful login
        alert("Login successful! Welcome to the Organ Donation System.");
        return true; // Allow the form to submit (or redirect to a dashboard page)
    } else {
        // Show error message if login fails
        document.getElementById('errorMessage').classList.remove('hidden');
        return false; // Prevent form submission
    }
}
