const inputTitle = document.getElementById("inputTitle");
const inputTextarea = document.getElementById("inputTextarea");

inputTitle.addEventListener('input', removeRedBorder);
inputTextarea.addEventListener('input', removeRedBorder);

function removeRedBorder() {
    if (this.value.trim() !== '') {
        this.style.border = '';
    }
}


function send(e) {
    e.preventDefault();

    const titleValue = inputTitle.value.trim();
    const descriptionValue = inputTextarea.value.trim();

    const inputTitleError = document.getElementById("inputTitleError");
    const inputTextareaError = document.getElementById("inputTextareaError");

    inputTitleError.innerHTML = "";
    inputTextareaError.innerHTML = "";

    if (titleValue === '') {
        inputTitleError.innerHTML = "Por favor, ingresa un título.";
        inputTitleError.style.color = 'red';
        inputTitle.style.border = '1px solid red';
    }
    if (descriptionValue === '') {
        inputTextareaError.innerHTML = "Por favor, ingresa una descripción.";
        inputTextareaError.style.color = 'red';
        inputTextarea.style.border = '1px solid red';
    }

    if (titleValue !== '' && descriptionValue !== '') {
        console.log("Título: " + titleValue);
        console.log("Descripción: " + descriptionValue);
    }
}
