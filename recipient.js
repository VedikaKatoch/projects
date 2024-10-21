document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bloodType = document.getElementById('bloodType').value;
    const organNeeded = document.getElementById('organNeeded').value;
    const contact = document.getElementById('contact').value;

    // Simple form validation
    if (!name || !age || !bloodType || !organNeeded || !contact) {
        displayMessage('Please fill in all fields.', 'error');
        return;
    }

    // Simulate successful registration
    displayMessage('Registration successful!', 'success');
});

function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;

    if (type === 'success') {
        messageDiv.style.color = 'green';
    } else {
        messageDiv.style.color = 'red';
    }
}
