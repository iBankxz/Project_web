function validateLogin() {
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "") {
        document.getElementById("usernameError").innerText = "Por favor, ingresa tu usuario.";
        document.getElementById("username").classList.add("input-error");
    } else if (username.length < 5 || username.length > 8) {
        document.getElementById("usernameError").innerText = "El usuario debe tener entre 5 y 8 caracteres.";
        document.getElementById("username").classList.add("input-error");
    } else {
        document.getElementById("username").classList.remove("input-error");
    }

    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "Por favor, ingresa tu contraseña.";
        document.getElementById("password").classList.add("input-error");
    } else if (password.length < 8 || password.length > 15) {
        document.getElementById("passwordError").innerText = "La contraseña debe tener entre 8 y 15 caracteres.";
        document.getElementById("password").classList.add("input-error");
    } else {
        document.getElementById("password").classList.remove("input-error");
    }

    if (username.trim() !== "" && password.trim() !== "") {
        alert("Campos válidos");
    }
}