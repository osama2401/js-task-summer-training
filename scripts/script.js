window.addEventListener('keydown', (event)=>{
    if( event.altKey === true && event.key === 'h'){
        document.location.href = 'index.html';
    }else if( event.altKey === true && event.key === 's'){
        document.location.href = 'submit.html';
    }else if( event.altKey === true && event.key === 'v'){
        document.location.href = 'view.html';
    }
})

document.getElementById("myForm").addEventListener("submit", function(event) {
    let isValid = true;

    const title = document.getElementById("title").value;
    const titleError = document.getElementById("titleError");
    const titleField = document.getElementById("title");
    if (title === "" || title.length > 10) {
        isValid = false;
        titleError.textContent = "Title must not be empty and should be max 10 characters.";
        titleField.classList.remove("valid");
        titleField.classList.add("invalid");
    } else {
        titleError.textContent = "";
        titleField.classList.remove("invalid");
        titleField.classList.add("valid");
    }

    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailField = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        isValid = false;
        emailError.textContent = "Please enter a valid email address.";
        emailField.classList.remove("valid");
        emailField.classList.add("invalid");
    } else {
        emailError.textContent = "";
        emailField.classList.remove("invalid");
        emailField.classList.add("valid");
    }

    const message = document.getElementById("message").value;
    const messageError = document.getElementById("messageError");
    const messageField = document.getElementById("message");
    if (message === "" || message.length > 100) {
        isValid = false;
        messageError.textContent = "Message must not be empty and should be max 100 characters.";
        messageField.classList.remove("valid");
        messageField.classList.add("invalid");
    } else {
        messageError.textContent = "";
        messageField.classList.remove("invalid");
        messageField.classList.add("valid");
    }

    if (!isValid) {
        event.preventDefault();
    }
});