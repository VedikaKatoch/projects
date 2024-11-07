function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

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

    if (fullName === '' || address === '') {
        alert("Please fill out all required fields.");
        return false;
    }

    // If validation is successful, show a success message and reset the form
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('donorForm').reset();
    return false;
}
