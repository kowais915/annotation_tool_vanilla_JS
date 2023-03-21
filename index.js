const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


var myDropzone = new Dropzone("#my-great-dropzone", {
    url: "/",
    maxFilesize: 100, // MB
    acceptedFiles: "image/*",
    success: function(file, response) {
      // Create an image element and set the source to the uploaded file URL
      var img = document.createElement("img");
      img.src = response.url;
      
      // Append the image to the dropzone area
      this.element.appendChild(img);
    }
  });



canvas.style.height = '600px';
canvas.style.width = '800px'

ctx.beginPath();
ctx.moveTo(30, 30);
ctx.lineTo(200, 100);
ctx.stroke();


