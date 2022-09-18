if (document.URL.match(/users/)){
  document.addEventListener('DOMContentLoaded', () => {
    const createImageHTML = (blob) => {  
      const imageElement = document.getElementById('prev-image'); 
      const blobImage = document.createElement('img'); 
      blobImage.id ='default-image'
      blobImage.setAttribute('class', 'prev-img')
      blobImage.setAttribute('src', blob); 
      imageElement.appendChild(blobImage);
    }; 
    document.getElementById('user-image').addEventListener('change', (e) =>{
      const imageContent = document.querySelector( '#default-image'); 
      if (imageContent){ 
        imageContent.remove(); 
      } 
      const file = e.target.files[0];  
      const blob = window.URL.createObjectURL(file); 
      createImageHTML(blob); 
    });
  });
}
