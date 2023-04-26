document.addEventListener('DOMContentLoaded', () => {
  const signupBtn = document.querySelector('.sginup-btn1');
  const signupEmail = document.querySelector('.sginup-email');
  const signupPassword = document.querySelector('.sginup-password');
  const signupUsername = document.querySelector('.sginup-username');
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
            console.log(response);
          } else {
            console.log('wrong');
          }
        })
        .then((response) => console.log(response));
  });


  signupBtn.addEventListener('click', () => {
    console.log('hey');
    fetch('/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: signupUsername.value,
        email: signupEmail.value,
        password: signupPassword.value,
      }),
    })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.status) {
            window.location.href = '/home';
          } else {
            console.log('something wrong');
          }
        });
  });
});

