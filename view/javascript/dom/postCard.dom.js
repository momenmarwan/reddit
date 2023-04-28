/* eslint-disable no-unused-vars */
const commentCard = () => {
  const card = createHtmlElement('div', 'comment-card');
  const userInfo = createHtmlElement('div', 'user-info');
  const userAvatar = createHtmlElement('img');
  userAvatar.setAttribute('src', 'https://www.actualidadiphone.com/wp-content/uploads/2020/04/martin-scorsese.jpg');
  const username = createHtmlElement('span', false, false, 'ahmad');
  const commentText = createHtmlElement('p', false, false, 'comment');
  appendChildren(userInfo, userAvatar, username);
  appendChildren(card, userInfo, commentText);
  return card;
};

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
        voteCount.textContent = response.rows[0].vote_sum;
      })
      .catch((error) => {
        console.log(error);
      });
};
// eslint-disable-next-line no-unused-vars
const addComment = ({postId, content}) => {
  fetch('/add-comment', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      content,
      postId,
    }),
  })
      .then((response) => response.json());
};


const createHtmlElement = (tag, className, id, textContent) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (id) element.id = id;
  if (textContent) element.textContent = textContent;
  return element;
};

const createButton = (className, id, textContent, value, listenerFunction) => {
  const button = createHtmlElement('button', className, id, textContent);
  if (value) button.value= value;
  button.addEventListener('click', listenerFunction);
  return button;
};


const appendChildren = (parent, ...children) => {
  children.forEach((child) => parent.appendChild(child));
};


const createPostActions = ({postId, voteSum}) => {
  const postActions = createHtmlElement('div', 'post-actions');
  const vote = createHtmlElement('div', 'vote');
  const upButton = createButton('upvote', false, false, postId, () => {
    voteFunction({postId, voteStatus: true});
  });
  const upIcon = createHtmlElement('i', 'fa fa-arrow-up');
  upButton.appendChild(upIcon);
  const span = createHtmlElement('span', 'vote-count', `vote_${postId}`, voteSum);
  const downButton = createButton('upvote', false, false, postId, () => {
    voteFunction({postId, voteStatus: false});
  });
  const downIcon = createHtmlElement('i', 'fa fa-arrow-down');
  downButton.appendChild(downIcon);
  appendChildren(vote, upButton, span, downButton);
  postActions.appendChild(vote);
  return postActions;
};

const createPostContent = ({postTitle, content}) => {
  const postContent = createHtmlElement('div');
  const h2 = createHtmlElement('h2', false, false, postTitle);
  const p = createHtmlElement('p', 'lorem ipum dolor ist amet for now', false, content);
  const img = createHtmlElement('img', 'postImg');
  // img.setAttribute('src', 'https://m.media-amazon.com/images/M/MV5BM jI0ODA3NDQ4NV5BMl5BanBnXkFtZTcwMDMwMjMwNA@@._V1_.jpg');
  appendChildren(postContent, h2, p, img);
  return postContent;
};

const createUserInfo = ({userID, createAt}) => {
  const userInfo = createHtmlElement('div', 'user-info', false);
  const userAvatar = createHtmlElement('div', ' user-avatar');
  const avatarImg = createHtmlElement('img');
  avatarImg.setAttribute('src', 'https://www.actualidadiphone.com/wp-content/uploads/2020/04/martin-scorsese.jpg');
  userAvatar.appendChild(avatarImg);
  const username = createHtmlElement('div', 'username');
  const h3 = createHtmlElement('h3', false, false, userID);
  const span = createHtmlElement('span', false, false, createAt);
  appendChildren(username, h3, span);
  appendChildren(userInfo, userAvatar, username);
  return userInfo;
};


const createCommentSection = ({postId}) => {
  const commentModal = createHtmlElement('div', 'modal', 'comment-modal');
  const modalContent = createHtmlElement('div', 'modal-content');
  const span = createHtmlElement('span', 'close', false, '&times;');
  span.addEventListener('click', () => {
    document.getElementById('comment-modal').style.display = 'none';
  });
  const h2 = createHtmlElement('h2', false, false, 'add a comment');
  const commentContainer = createHtmlElement('div', false, 'comment-container');
  const textarea = createHtmlElement('textarea', false, 'comment-textarea');
  textarea.setAttribute('placeholder', 'write your comment here...');
  const sendCommentButton = createButton('any-thing', 'submit-comment', 'send comment', false, () => {
    addCommentRequest({content: textarea.value, postId}, commentContainer);
    textarea.value = '';
  });
  appendChildren(modalContent, span, h2, commentContainer, textarea, sendCommentButton);
  appendChildren(commentModal, modalContent );
  return {commentModal, commentContainer};
};
const createPostCard = ({postId, postTitle, content, voteSum, userId, createAt}) => {
  const postCard = createHtmlElement('div', 'post-card-1');
  const userInfo = createUserInfo({userId, createAt});
  const postContent = createPostContent({postTitle, content});
  const postActions = createPostActions({postId, voteSum});
  const {commentModal, commentContainer} = createCommentSection({postId});
  const addCommentButton = createButton(false, 'open-modal', 'add comment', false, () => {
    document.getElementById('comment-modal').style.display = 'block';
    getAllCommentForPost({postId}, commentContainer);
  });
  appendChildren(postCard, userInfo, postContent, postActions, addCommentButton, commentModal);
  return postCard;
};
const addCommentRequest = ({content, postId}, commentParent) => {
  fetch('/add-comment', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      content,
      postId,
    }),
  })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const comment = commentCard();
        commentParent.appendChild(comment);
      });
};
const getAllCommentForPost = ({postId}, commentParent) => {
  fetch(`/get-comment-for-post/${postId}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        response.rows.forEach((post) => {
          console.log(post);
          const comment = commentCard();
          commentParent.appendChild(comment);
        });
      });
};


