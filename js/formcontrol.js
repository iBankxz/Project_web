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

function validateForm() {
    resetErrors();
  
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var birthdate = document.getElementById("birthdate").value;
  
    if (!firstName) {
      showError("firstName", "Ingrese su nombre");
    }
  
    if (!lastName) {
      showError("lastName", "Ingrese sus apellidos");
    }
  
    if (!username) {
      showError("username", "Ingrese un nombre de usuario");
    }
  
    if (!password) {
      showError("password", "Ingrese una contraseña");
    }
  
    if (!email || !isValidEmail(email)) {
      showError("email", "Ingrese un correo electrónico válido");
    }
  
    if (!phone || !isValidPhone(phone)) {
      showError("phone", "Ingrese un número de teléfono válido");
    }
  
    if (!city) {
      showError("city", "Ingrese su ciudad");
    }
  
    if (!birthdate) {
      showError("birthdate", "Ingrese su fecha de nacimiento");
    }
  }
  
  function showError(inputId, errorMessage) {
    var inputElement = document.getElementById(inputId);
    inputElement.classList.add("error");
  
    var errorElement = document.getElementById(inputId + "Error");
    errorElement.innerHTML = errorMessage;
  }
  
  function resetErrors() {
    var inputs = document.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("error");
    }
  
    var errorMessages = document.getElementsByClassName("error-message");
    for (var j = 0; j < errorMessages.length; j++) {
      errorMessages[j].innerHTML = "";
    }
  }
  
  function isValidEmail(email) {
    return email.includes("@");
  }
  
  function isValidPhone(phone) {
    return /^\d+$/.test(phone);
  }
  

  function validateFormPass() {
    resetErrors();

    var username = document.getElementById("username").value;

    if (!username || !isValidEmail(username)) {
        showError("username", "Ingrese un correo electrónico válido");
    }
}

function showError(inputId, errorMessage) {
    var inputElement = document.getElementById(inputId);
    inputElement.classList.add("error");

    var errorElement = document.getElementById(inputId + "Error");
    errorElement.innerHTML = errorMessage;
}

function resetErrors() {
    var inputs = document.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error");
    }

    var errorMessages = document.getElementsByClassName("error-message");
    for (var j = 0; j < errorMessages.length; j++) {
        errorMessages[j].innerHTML = "";
    }
}

function isValidEmail(email) {
    return email.includes("@");
}