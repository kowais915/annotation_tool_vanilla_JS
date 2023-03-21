



const input = document.querySelector('#uploaded_image')
const display = document.querySelector('#canvas')
let image_up = "";

display.innerHTML = `<p>Hi I am owais</p>`





// event listeneer on the upload image button

input.addEventListener('change', (event)=>{

  const reader = new FileReader();
  reader.readAsDataURL(input.files[0])
  reader.addEventListener('load', ()=>{
    display.innerHTML = `<img src = '${reader.result}'/>`
  })

    
})