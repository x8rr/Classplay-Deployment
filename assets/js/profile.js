// get html elements
const loginButton = document.getElementById('login-btn')
const loginUser = document.getElementById('login-username')
const loginPassword = document.getElementById('login-password')
const loginDiv = document.getElementById('login')

const registerUser = document.getElementById('register-username')
const registerPassword = document.getElementById('register-password')
const registerButton = document.getElementById('register-btn')
const registerDiv = document.getElementById('register')

// view functions
function displayLogin() {
    registerDiv.style.display = 'none'
    loginDiv.style.display = 'block'
}

function displayRegister() {
    registerDiv.style.display = 'block'
    loginDiv.style.display = 'none'
}

// register functions