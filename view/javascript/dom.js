const closeBtn = document.getElementsByClassName('close')[0];
const closeBtn1 = document.getElementsByClassName('close')[1];

const par = document.getElementsByClassName('par')[0];
const par1 = document.getElementsByClassName('par1')[0];

const SignUpinSigninBtn =document.getElementById('SignUpinSignin');
const SignininSignUpBtn =document.getElementById('SignininSignUp');

const showLogin = document.querySelector('.login');


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

