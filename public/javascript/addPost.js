document.addEventListener('DOMContentLoaded', () => {
  const logout = document.querySelector('.logout');
  const addPostBtn = document.querySelector('.add-post-btn');
  const imgInput = document.querySelector('.img-input');
  const contentInput = document.querySelector('.content-input');


  fetch('/get-posts')
      .then((response) => response.json())
      .then((response) => {
        response.result.forEach((post) => {
          const card = `
          <div class="card">
          <img src="https://via.placeholder.com/350x150" alt="Post image">
          <div class="card-content">
            <h2 class="card-title">Post Title</h2>
            <p class="card-text">Post Content</p>
            <div class="card-vote">
              <button class="upvote" value=${post.id}>Upvote</button>
              <button class="downvote" value=${post.id}>Downvote</button>
            </div>
          </div>
        </div>
          `;
          document.querySelector('.container').innerHTML += card;
        });
      })
      .catch((error) => console.log(error));
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
  addPostBtn.addEventListener('click', () => {
    fetch('/add-post', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        imgUrl: imgInput.value,
        content: contentInput.value,
      }),
    })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .then(() => {
          imgInput.value = '';
          contentInput.value = '';
        })
        .catch((error) => console.log(error));
  });
});
