const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



canvas.style.height = '600px';
canvas.style.width = '800px'

ctx.beginPath();
ctx.moveTo(30, 30);
ctx.lineTo(200, 100);
ctx.stroke();
