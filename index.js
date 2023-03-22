



const input = document.querySelector('#uploaded_image')
const display = document.querySelector('#canvas')
const ctx = display.getContext('2d');







// event listeneer on the upload image button

input.addEventListener('change', (event)=>{

  const file = event.target.files[0];

  const reader = new FileReader();



  reader.addEventListener('load', (event)=>{

    const img = new Image();
    img.onload = function () { 
        display.width  = img.width;
        display.height = img.height;
        ctx.drawImage(img, 0, 0);

     };

     img.src = event.target.result;
     
  })

  reader.readAsDataURL(file)
    
})