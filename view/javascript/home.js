/* eslint-disable max-len */
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.querySelector('.header__logout');
  const createPostBtn = document.querySelector('.create-post');
  const postTitleInput = document.querySelector('.title');
  const contentInput = document.querySelector('.content');
  const imgUrl = document.querySelector('.img-url');
  const username = document.querySelector('.username');


  fetch('/get-posts')
      .then((response) => response.json())
      .then((response) => {
        username.textContent= response.username;
        return response;
      })
      .then((response) => {
        response.result.forEach((post) => {
          console.log(post);
          const card = createPostCard({postId: post.id, postTitle: post.post_title, content: post.content, voteSum: post.vote_sum, userId: post.user_id, createAt: post.created_at});
          document.querySelector('.card-container').appendChild(card);
        });


        logoutBtn.addEventListener('click', () => {
          fetch('/logout')
              .then((response) => response.json())
              .then((response) => {
                if (response.status == 200) {
                  window.location.href = '/';
                } else {
                  console.log('Hello');
                }
              });
        });
        createPostBtn.addEventListener('click', () => {
          fetch('/add-post', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              title: postTitleInput.value,
              imgUrl: imgUrl.value,
              content: contentInput.value,
            }),
          })
              .then((response) => response.json())
              .then(() => {
                postTitleInput.value = '';
                imgUrl.value = '';
                contentInput.value = '';
              })
              .catch((error) => console.log(error));
        });
      });
});

