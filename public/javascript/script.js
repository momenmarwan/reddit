document.addEventListener('DOMContentLoaded', () => {
  const logout = document.querySelector('.logout');

  logout.addEventListener('click', () => {
    fetch('/logout')
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            window.location.href = '/';
          } else {
            console.log('Hello');
          }
        });
  });
});

