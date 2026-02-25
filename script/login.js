const VALID_USERNAME = "p4Ky0u";
const VALID_PASSWORD = "Marialnza10!";

const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

window.onload = function() {
    alert("p4Ky0u,Marialnza10! username and password");
}

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = "index.html";
    } else {
        errorMessage.classList.add('show');
        document.getElementById('password').value = '';
    }
});

console.log(errorMessage)