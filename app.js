document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const phoneNumber = document.getElementById('phoneNumber').value;
    const aadharNumber = document.getElementById('aadharNumber').value;

    let valid = true;  // Track whether the form is valid

    // Validate Phone Number
    const phoneError = document.getElementById('phoneError');
    if (!/^\d{10}$/.test(phoneNumber)) {
        phoneError.style.display = 'block';
        valid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // Validate Aadhar Number
    const aadharError = document.getElementById('aadharError');
    if (!/^\d{12}$/.test(aadharNumber)) {
        aadharError.style.display = 'block';
        valid = false;
    } else {
        aadharError.style.display = 'none';
    }

    // If the form is valid, store the information and show success message
    if (valid) {
        // Get other form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const fatherName = document.getElementById('fatherName').value;
        const dob = document.getElementById('dob').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;
        const address = document.getElementById('address').value;

        // Get existing users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the email already exists
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Email is already registered.');
            return;
        }

        // Store the user's details in the array
        const newUser = { firstName, lastName, fatherName, phoneNumber, aadharNumber, dob, email, password, gender, address };
        users.push(newUser);

        // Save the updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful!');
        window.location.href = 'login.html'; // Redirect to login page after registration
    }
});

// Handle Login
function validateLogin() {
    const enteredEmail = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;

    // Get the users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the entered email and password
    const user = users.find(user => user.email === enteredEmail && user.password === enteredPassword);

    if (user) {
        alert('Login successful!');
        window.location.href = 'courses.html'; // Redirect to courses page after login
    } else {
        document.getElementById('error-message').style.display = 'block'; // Show error message
    }
}