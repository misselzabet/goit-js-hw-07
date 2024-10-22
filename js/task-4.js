const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (ev) => {ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    if (email === '' || password ===''){
        alert('All form fields must be filled in');
    return
    }
const obj = {
    email : email,
    password : password,
}
console.log(obj);
loginForm.reset()
})