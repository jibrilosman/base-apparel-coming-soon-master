function validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}


function validation() {
    let emailInput = document.getElementById('email').value;
    if(validateEmail(emailInput)) {
        document.getElementById('error').style.display = "none";
        document.getElementById('small').style.display = "none"
        document.getElementById('email').style.border = "1px solid hsl(0, 36%, 70%)"
        document.getElementById('email').style.border = "1px solid rgb(191, 191, 191)"
    }
    else {
        document.getElementById('error').style.display = "block"
        document.getElementById('small').style.display = "block"
    }
}


