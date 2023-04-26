/* eslint-disable max-len */
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.querySelector('.header__logout');
  const createPostBtn = document.querySelector('.create-post');
  const postTitleInput = document.querySelector('.title');
  const contentInput = document.querySelector('.content');
  const imgUrl = document.querySelector('.img-url');
  const username = document.querySelector('.username');


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
        .then((response) => {
          const voteCount = document.querySelector(`#vote_${postId}`);
          console.log(response);
          voteCount.textContent = response.rows[0].vote_sum;
          console.log(voteCount);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  fetch('/get-posts')
      .then((response) => response.json())
      .then((response) => {
        username.textContent= response.username;
        console.log(response);
        return response;
      })
      .then((response) => {
        response.result.forEach((post) => {
          const card = `
            <div class="post-card">
            <div class="user-info">
              <div class="user-avatar">
                <img src="https://via.placeholder.com/50x50" alt="User Avatar">
              </div>
              <div class="user-name">
                <h3>Jane Doe</h3>
                <span>10 minutes ago</span>
              </div>
            </div>
            <div class="post-content">
              <h2>My Awesome Post</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mauris vel elit dictum, ac aliquet velit semper. Nullam id enim sit amet massa lobortis luctus. Sed vehicula, arcu quis vulputate bibendum, dolor neque pretium purus, eget aliquam magna lacus id arcu.</p>
              <img src="https://via.placeholder.com/500x300" alt="Post Image">
            </div>
            <div class="post-actions">
              <div class="vote">
                <button class="upvote"  value=${post.id}>
                  <i class="fa fa-arrow-up"></i>
                </button>
                <span id="vote_${post.id}" class="vote-count">${post.vote_sum}</span>
                <button class="downvote"  value=${post.id}>
                  <i class="fa fa-arrow-down"></i>
                </button>
              </div>
              <button class="comment-btn">
                <i class="fa fa-comment"></i> Comment
              </button>
              <div id="comment-input-container" style="display:none;">
            <input type="text" id="comment-input" placeholder="Enter your comment...">
            <button value=${post.id} id="submit-comment-btn">Submit</button>
          </div>
          <section class="comment"></section>
            </div>
            </div>
              `;
          document.querySelector('.card-container').innerHTML += card;
          fetch(`/get-comment-for-post/${post.id}`)
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
                const commentCard = `
                <section class="comment">
                <div class="comment-card">
                <div class="comment-header">
                  <div class="user-avatar">
                    <img src="https://via.placeholder.com/50x50" alt="User Avatar">
                  </div>
                  <div class="user-name">
                    <h4></h4>
                    <span>5 minutes ago</span>
                  </div>
                </div>
                <div class="comment-content">
                  <p></p>
                </div>
              </div>
              </section>
                `;
                document.querySelector('.comment').innerHTML += commentCard;
              })
              .catch((error) => {
                console.log(error);
              });
        });
        const commentBtn = document.querySelectorAll('.comment-btn');
        commentBtn.forEach((commentBtn) => {
          commentBtn.addEventListener('click', () => {
            const commentInputContainer = commentBtn.nextElementSibling;
            commentInputContainer.style.display = 'block';
            const inputComment = commentInputContainer.firstElementChild;
            const addCommentBtn = commentInputContainer.lastElementChild;
            addCommentBtn.addEventListener('click', () => {
              fetch('/add-comment', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  content: inputComment.value,
                  postId: addCommentBtn.value,
                }),
              })
                  .then((response) => response.json())
                  .then((response) => {
                    console.log(response);
                    const commentCard = `
                    <div class="comment-card">
                        <div class="comment-header">
                          <div class="user-avatar">
                            <img src="https://via.placeholder.com/50x50" alt="User Avatar">
                          </div>
                          <div class="user-name">
                            <h4>${response.author}</h4>
                            <span>5 minutes ago</span>
                          </div>
                        </div>
                        <div class="comment-content">
                          <p>${response.rows[0].content}</p>
                        </div>
                      </div>
                    `;
                    document.querySelector('.comment').innerHTML += commentCard;
                  })
                  .catch((error) => {
                    console.log(error);
                  });
            });
          });
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
      });
  logoutBtn.addEventListener('click', () => {
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
        .then((response) => console.log(response))
        .then(() => {
          postTitleInput.value = '';
          imgUrl.value = '';
          contentInput.value = '';
        })
        .catch((error) => console.log(error));
  });
});
