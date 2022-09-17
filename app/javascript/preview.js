if (document.URL.match(/sign_up/)){
  document.addEventListener('DOMContentLoaded', () => {
    const createImageHTML = (blob) => {  
      const imageElement = document.getElementById('prev-image'); 
      const blobImage = document.createElement('img'); 
      blobImage.id ='currentImg'
      blobImage.setAttribute('class', 'prev-img') 
      blobImage.setAttribute('src', blob); 
      imageElement.appendChild(blobImage);
    }; 
    document.getElementById('user-image').addEventListener('change', (e) =>{
      const imageContent = document.querySelector('#currentImg'); 
      if (imageContent){ 
        imageContent.remove(); 
      } 
      const file = e.target.files[0];  
      const blob = window.URL.createObjectURL(file); 
      createImageHTML(blob); 
    });
  });
}
