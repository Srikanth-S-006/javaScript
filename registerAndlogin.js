function register() {
    try {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById("password").value;
        const confirmpassword = document.getElementById("confirmpassword").value;
        clearErrorMessages('registerform').value;
        if (username === '') {
            throw new Error('Username is required.');
        }
        if (email === '') {
            throw new Error('email is required.');
        }
        if (password === '') {
            throw new Error('password is required.');
        }
        if (password !== confirmpassword) {
            throw new Error('password do  not match.');
        }

        alert('Registered Successfully.');
    } catch (error) {

        displayErrorMessage('registerform', error.message);
    }
}
function clearErrorMessages(formId) {
    const form=document.getElementById(formId);
    const errorMessages=form.getElementsByClassName('error-message');
    for(let i=0;i<errorMessages.length;i++){
        errorMessages[i].textContent='';
    }
}
function displayErrorMessage(formId,message){
    const form=document.getElementById(formId);
    const errorMessages=form.getElementsByClassName('error-message');
    errorMessages[0].textContent=message;
}