import consumer from "./consumer"

if(location.pathname.match(/\/articles\/\d/)){
  consumer.subscriptions.create({
    channel: "CommentChannel",
    article_id: location.pathname.match(/\d+/)[0]
  }, {



  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    const currentUser = document.getElementById('article-show-comment-form-image')
    const commentUser = document.getElementById('article-show-comment-image')
    console.log("preview.jsが読み込まれました");
    console.log(currentUser.src);
    console.log(data.image);
    const html = `
    <div class="article-show-comment-contents">
      <div class="article-show-comment-image">
      <a href= ${data.path}><img src= "${data.image}" class="article-show-comment-image"></a>
      </div>
      <div class="article-show-comment-info">
        <a href= ${data.path}><div class="article-show-comment-username">${data.user.username}</div></a>
          <div class="article-show-comment-box">
            <div class="article-show-comment-field">
              <div class="article-show-comment">${data.comment.text}</div>
              <div class="article-show-comment-destroy">
                <a class="article-show-comment-destroy-btn" id="article-show-comment-destroy-btn" data-method="delete" href= ${data.delete}>削除</a>
              </div>
            </div>
            <div class="article-show-comment-date">${data.time}</div>
          </div>
        </div>
      </div>
    </div`

    const html2 = `
    <div class="article-show-comment-contents">
      <div class="article-show-comment-image">
      <a href= ${data.path}><img src= "${data.image}" class="article-show-comment-image"></a>
      </div>
      <div class="article-show-comment-info">
        <a href= ${data.path}><div class="article-show-comment-username">${data.user.username}</div></a>
          <div class="article-show-comment-box">
            <div class="article-show-comment-field">
              <div class="article-show-comment">${data.comment.text}</div>
            </div>
            <div class="article-show-comment-date">${data.time}</div>
          </div>
        </div>
      </div>
    </div`

  const comments = document.getElementById("article-show-comments")

  if (currentUser.src == data.image) {
    comments.insertAdjacentHTML('beforeend', html);
  } else {
    comments.insertAdjacentHTML('beforeend', html2);
  }
  const commentForm = document.getElementById("article-show-comment-form")
  commentForm.reset();
  comments.scrollTop = comments.scrollHeight;

  }
});
}