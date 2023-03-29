const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

//Global Variable
let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
    }
    // Check to see if passwords match
    if (password1El.value === password2El) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        message.textContent = 'Make sure the Passwords Match';
        message.style.color = 'red';
        message.style.borderColor = 'red';
        messageContainer.style.borderColor = 'red';
    }
    // If Form is Valid and Password match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

// This will Validate the Form // Store the Data
function processFormData(e) {
    e.preventDefault();
    // Validade Form
    validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData)