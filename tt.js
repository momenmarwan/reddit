/* eslint-disable max-len */
const createHtmlElement = (tag, className, id, textContent) => {
  const element = document.createHtmlElement(tag);
  if (className) element.className = className;
  if (id) element.id = id;
  if (textContent) element.textContent = textContent;
  return element;
};

const createBtn = (className, id, textContent, eventFunction) => {
  const button = createHtmlElement('button', className, id, textContent);
  button.addEventListener('click', eventFunction);
  return button;
};
const appendChildren = (parent, ...children) => {
  children.forEach((child) => {
    parent.append(child);
  });
};
// const createPostCard = () => {
//   const postCard = createHtmlElement('div', 'post-card');
//   const userInfo = createHtmlElement('div', 'user-info');
//   const userAvatar = createHtmlElement('div', 'user-avatar');
//   const avatarImg = createHtmlElement('img');
//   avatarImg.setAttribute('src', 'https://via.placeholder.com/50x50');
//   appendChildren(userAvatar, avatarImg);
//   appendChildren(userInfo, userAvatar);
// };
module.exports = {createHtmlElement, createBtn, createPostCard, appendChildren};

/*

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
      <button class="upvote">
        <i class="fa fa-arrow-up"></i>
      </button>
      <span class="vote-count">12</span>
      <button class="downvote">
        <i class="fa fa-arrow-down"></i>
      </button>
    </div>
    <button class="comment-btn">
      <i class="fa fa-comment"></i> Comment
    </button>
  </div>
</div>

*/
