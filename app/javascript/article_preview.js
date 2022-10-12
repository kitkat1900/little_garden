document.addEventListener('DOMContentLoaded', function(){
  // 新規投稿・編集ページのフォームを取得
  const postForm = document.getElementById('new_post');
  // プレビューを表示するためのスペースを取得
  const previewList = document.getElementById('previews');
  const articleList = document.getElementById('article-img');
  // 新規投稿・編集ページのフォームがないならここで終了。「!」は論理否定演算子。
  if (!postForm) return null;
  console.log("preview.jsが読み込まれました");
  // input要素を取得
  const fileField = document.querySelector('input[type="file"][name="article[image]"]');

  // input要素で値の変化が起きた際に呼び出される関数
  fileField.addEventListener('change', function(e){
  // 古いプレビューが存在する場合は削除
    const alreadyPreview = document.querySelector('.preview');
    if (alreadyPreview) {
      alreadyPreview.remove();
    };
    const articleImage = document.querySelector('#article-img');
    if (articleImage) {
      articleImage.remove();
    }
    const file = e.target.files[0];
    if (file) {
      const blob = window.URL.createObjectURL(file);
      // 画像を表示するためのdiv要素を生成
      const previewWrapper = document.createElement('div');
      previewWrapper.setAttribute('class', 'preview');
      // 表示する画像を生成
      const previewImage = document.createElement('img');
      previewImage.setAttribute('class', 'article-image');
      previewImage.setAttribute('src', blob);

      // 生成したHTMLの要素をブラウザに表示させる
      previewWrapper.appendChild(previewImage);
      previewList.appendChild(previewWrapper);
    } else {
      const articleWrapper = document.createElement('div');
      articleWrapper.setAttribute('class', 'article');
      const articleImage = document.createElement('img')
      articleImage.setAttribute('class', 'article-image');
      articleImage.setAttribute('src', articleList.src);
      articleWrapper.appendChild(articleImage);
      previewList.appendChild(articleWrapper);
    }
  });
});
