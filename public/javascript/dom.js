const closeBtn = document.getElementsByClassName('close')[0];
const closeBtn1 = document.getElementsByClassName('close')[1];


const par = document.getElementsByClassName('par')[0];
const par1 = document.getElementsByClassName('par1')[0];

const SignUpinSigninBtn =document.getElementById('SignUpinSignin');
const SignininSignUpBtn =document.getElementById('SignininSignUp');

const showLogin = document.querySelector('.login');

const sginupBtn = document.querySelector('.sginup-btn1');
const sginupEmail = document.querySelector('.sginup-email');
const sginupPassword = document.querySelector('.sginup-password');
const sginupUsername = document.querySelector('.sginup-username');
const loginBtn = document.querySelector('.login-btn');
const loginEmail = document.querySelector('.login-email');
const loginPassword = document.querySelector('.login-password');
const loginUsername = document.querySelector('.login-username');
loginBtn.addEventListener('click', () => {
  fetch('/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: loginUsername.value,
      password: loginPassword.value,
      email: loginEmail.value,
    }),
  })
      .then((response) => response.json())
      .then((response) => {
        if (response.status == 200) {
          window.location.href = '/home';
        } else {
          console.log('wrong');
        }
      })
      .then((response) => console.log(response));
});

sginupBtn.addEventListener('click', () => {
  fetch('/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: sginupUsername.value,
      email: sginupEmail.value,
      password: sginupPassword.value,
    }),
  })
      .then((response) => response.json())
      .then((response) => {
        if (response.status) {
          window.location.href = '/home';
        } else {
          console.log('something wrong');
        }
      });
});

showLogin.addEventListener('click', () => {
  document.querySelector('.par').style.display = 'block';
});


closeBtn.onclick = function() {
  par.style.display = 'none';
};

closeBtn1.onclick = function() {
  par1.style.display = 'none';
};


SignUpinSigninBtn.addEventListener('click', () => {
  document.getElementsByClassName('par1')[0].style.display = 'block';
  document.getElementsByClassName('par')[0].style.display = 'none';
});

SignininSignUpBtn.addEventListener('click', () => {
  document.getElementsByClassName('par')[0].style.display = 'block';
  document.getElementsByClassName('par1')[0].style.display = 'none';
});

