const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('emailAddress')
const password = document.getElementById('password')


form.addEventListener('submit', e => {
    e.preventDefault()

    let firstName = fname.value.trim();
    let lastName = lname.value.trim();
    let mailValue = email.value.trim();
    let passwordValue = password.value.trim();

    
    if(firstName === ''){
        errorFunc(fname, 'First name cannot be empty')
    }else{
        successFunc(fname)
    }

    


    function errorFunc(req, message){
        const formControl = req.parentElement;
        const span = formControl.querySelector('span');
        span.innerText = message;
        req.className +='error';
        span.className += 'error-text';

    }

    function successFunc(req){
        req.className = 'success';
    }
})