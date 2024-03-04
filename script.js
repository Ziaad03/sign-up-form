let userEnteredPassword = document.getElementById("password");
let userEnteredConfirmPassword = document.getElementById("confirm-password");
let submitBtn = document.getElementById("submit-btn");
let errorText = document.getElementById("error-text");

function validatePassword() {
    console.log(userEnteredPassword.value, userEnteredConfirmPassword.value);
    if (userEnteredPassword.value !== userEnteredConfirmPassword.value) {
        submitBtn.disabled = true; // Disable the submit button
        errorText.style.backgroundColor = "red"
        errorText.textContent = "Passwords do not match";
    } else {
        submitBtn.disabled = false; // Enable the submit button if passwords match
        errorText.textContent = ""; // Clear any previous error message
    }
}

// Call the validatePassword function whenever the password fields change

userEnteredConfirmPassword.addEventListener('input', validatePassword);

// Call the validatePassword function initially to check the passwords when the page loads
validatePassword();
