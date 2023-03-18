const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// dropzone
Dropzone.options.myGreatDropzone = { // camelized version of the `id`
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    accept: function(file, done) {
      if (file.name == "justinbieber.jpg") {
        done("Naha, you don't.");
      }
      else { done(); }
    }
  };


canvas.style.height = '600px';
canvas.style.width = '800px'

ctx.beginPath();
ctx.moveTo(30, 30);
ctx.lineTo(200, 100);
ctx.stroke();


