document.addEventListener('DOMContentLoaded', () => {
  const logout = document.querySelector('.logout');
  const addPostBtn = document.querySelector('.add-post-btn');
  const imgInput = document.querySelector('.img-input');
  const contentInput = document.querySelector('.content-input');

  const voteFunction = ({postId, voteStatus}) => {
    fetch('/post-vote', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        postId: postId,
        status: voteStatus,
      }),
    })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        });
  };


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
            <button class="downvote" value=${post.id} >Downvote</button>
          </div>
        </div>
      </div>
        `;
          document.querySelector('.cards').innerHTML += card;
        });
        const upvoteButtons = document.querySelectorAll('.upvote');
        upvoteButtons.forEach((btn) => {
          btn.addEventListener('click', () => {
            voteFunction({postId: btn.value, voteStatus: true});
          });
        });
        const downvoteButton = document.querySelectorAll('.downvote');
        downvoteButton.forEach((btn) => {
          btn.addEventListener('click', () => {
            voteFunction({postId: btn.value, voteStatus: false});
          });
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
