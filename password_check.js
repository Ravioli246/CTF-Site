function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "AAAAAAAAAAAAAACMOSHE"; // Placeholder until the end
    const errorMessage = document.getElementById("error-message");
    const loginForm = document.getElementById("login-form");
    const congratulations = document.getElementById("congratulations");

    if (password === correctPassword) {
        loginForm.style.display = "none";
        congratulations.style.display = "block";
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}
