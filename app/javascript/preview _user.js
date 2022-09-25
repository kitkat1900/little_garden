document.addEventListener('DOMContentLoaded', function(){
  // 新規投稿・編集ページのフォームを取得
  const postForm = document.getElementById('user-image');
  // プレビューを表示するためのスペースを取得
  const previewList = document.getElementById('prev-image');
  const defaultList = document.getElementById('default-image');
  const userList = document.getElementById('user-img');
 
  // 新規投稿・編集ページのフォームがないならここで終了。「!」は論理否定演算子。
  if (!postForm) return null;


  // input要素を取得
  const fileField = document.querySelector('input[type="file"][name="user[image]"]');
  
  // input要素で値の変化が起きた際に呼び出される関数
  fileField.addEventListener('change', function(e){
    // 古いプレビューが存在する場合は削除
    const alreadyPreview = document.querySelector('.preview');
    if (alreadyPreview) {
      alreadyPreview.remove();
    };
    const defaultImage = document.querySelector('.default');
    if (defaultImage) {
      defaultImage.remove();
    }
    const defaultPreview = document.querySelector('#default-image');
    if (defaultPreview) {
      defaultPreview.remove();
    }
    const userImage = document.querySelector('#user-img');
    if (userImage) {
      userImage.remove();
    }
    const file = e.target.files[0];
    if (file) {
      const blob = window.URL.createObjectURL(file);
      
      // 画像を表示するためのdiv要素を生成
      const previewWrapper = document.createElement('div');
      previewWrapper.setAttribute('class', 'preview');
      // 表示する画像を生成
      const previewImage = document.createElement('img');
      previewImage.setAttribute('class', 'preview-image');
      previewImage.setAttribute('src', blob);
    
      // 生成したHTMLの要素をブラウザに表示させる
      previewWrapper.appendChild(previewImage);
      previewList.appendChild(previewWrapper);
    } else {
      if (userList) {
        const userWrapper = document.createElement('div');
        userWrapper.setAttribute('class', 'user');
        const userImage = document.createElement('img')
        userImage.setAttribute('class', 'user-image');
        userImage.setAttribute('src', userList.src);
        userWrapper.appendChild(userImage);
        previewList.appendChild(userWrapper);
        console.log(userList.src);
        console.log(userWrapper);
        console.log(userImage);
      } else {
        const defaultWrapper = document.createElement('div');
        defaultWrapper.setAttribute('class', 'default');
        const defaultImage = document.createElement('img')
        defaultImage.setAttribute('class', 'default-image');
        defaultImage.setAttribute('src', 'http://localhost:3000/assets/default-a7c52a401515c13bceac48e8883802f8e32627a7d86ca713df73d6ebb7d03412.png');
        defaultWrapper.appendChild(defaultImage);
        previewList.appendChild(defaultWrapper);
      }
    }

  });
});

