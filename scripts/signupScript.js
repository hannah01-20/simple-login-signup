// log-in and sign-up plssss gumana ka TT

const usersList = JSON.parse(localStorage.getItem("listAccounts"));


// Sign up function here!!!
function signup(){
  const nameInput = document.querySelector('#js-name').value;
  const usernameInput = document.querySelector('#js-username').value;
  const passwordInput = document.querySelector('#js-password').value;
  const feedback = document.querySelector('.input-feedback');


  if(!nameInput || !usernameInput || !passwordInput){
    // alert('Please fill up the fields');
    feedback.innerHTML = `<p class="failed">Please fill up the fields.</p>`;

    return;
  }


  // Checks if username exist
  for(i = 0; i < usersList.length; i++){
    const checkAccout = usersList[i];
    const {username} = checkAccout;
    if(usernameInput === username){
      // alert('Username already taken');
      feedback.innerHTML = `<p class="failed">Username already taken. Please try again.</p>`;
      return;
    }
  }
  // Storing Inputs to system
  usersList.push({
    name: nameInput,
    username: usernameInput,
    password: passwordInput
  });

  let usersToString = JSON.stringify(usersList);

  localStorage.setItem("listAccounts", usersToString);

  // Verifying inputs successfully stored
  checkLocalUsers();
}

// Confirmation inputs stored in local storage
function checkLocalUsers(){
  const usernameInput = document.querySelector('#js-username').value;
  const feedback = document.querySelector('.input-feedback');


  for(i = 0; i < usersList.length; i++){
    const lastIndex = usersList.length-1;
    const existedAccount = usersList[i];
    const {username} = existedAccount;
    if(usernameInput === username){
      // alert('Successfully sign-up!');
      feedback.innerHTML = `<p class="passed">Successfully sign-up!</p>`;
      return;
    }else if(i === lastIndex){
      // alert('Something went wrong.');
      feedback.innerHTML = `<p class="failed">Something went wrong. Please try again.</p>`;
      return;
    }
  }
}


// Algorithms
const signupSubmit = document.querySelector('#js-signup-button');

signupSubmit.addEventListener('click', signup)
