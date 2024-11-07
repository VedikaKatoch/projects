function validateHospitalForm() {
    const hospitalName = document.getElementById('hospitalName').value;
    const registrationID = document.getElementById('registrationID').value;
    const adminEmail = document.getElementById('adminEmail').value;
    const adminPassword = document.getElementById('adminPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const contactNumber = document.getElementById('contactNumber').value;

    // Basic validation
    if (!hospitalName || !registrationID || !adminEmail || !adminPassword || !confirmPassword || !contactNumber) {
        alert('All fields are required!');
        return false;
    }

    // Validate that passwords match
    if (adminPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // Validate password length (e.g., minimum 8 characters)
    if (adminPassword.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }

    // Additional validations can go here, e.g., checking email format, phone number, etc.

    // Display success message and reset form
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('hospitalForm').reset();

    // Prevent actual form submission for demonstration purposes
    return false;
}
