// log-in and sign-up plssss gumana ka TT

const usersList = JSON.parse(localStorage.getItem("listAccounts"));

// LOGIN FUNCTION
function login(){
  const usernameInput = document.querySelector('#js-username').value;
  const passwordInput = document.querySelector('#js-password').value;
  const feedback = document.querySelector('.input-feedback');

  if(!usernameInput || !passwordInput){
    feedback.innerHTML = `<p class="failed">Please fill up the fields.</p>`;
    return;
  }

  for(i = 0; i < usersList.length; i++){
    const lastIndex = usersList.length-1;
    const userArray = usersList[i];
    const {name, username, password} = userArray;
    if(usernameInput === username && passwordInput === password){
      feedback.innerHTML = `<p class="passed">Log-in successful. Welcome ${name}!</p>`;
      return;
    }else if(i === lastIndex){
      feedback.innerHTML = `<p class="failed">Wrong username or password</p>`;
      return;
    }
  }
}

// Algorithms
const loginSubmit = document.querySelector('#js-login-button');
const enterKey = document.querySelectorAll('.input-data');
loginSubmit.addEventListener('click', login);

