//inicializando canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


//campo
ctx.fillStyle = '#00ff15';
ctx.fillRect(10, 20, 1200, 600);

//linha do campo
ctx.strokeStyle = 'white';
ctx.lineWidth = 10;
ctx.strokeRect(10, 20, 1200, 600);

//escanteio 1
ctx.beginPath();
ctx.moveTo(70,20);
ctx.quadraticCurveTo(80,85,10,85);
ctx.stroke();

//escanteio 2
ctx.beginPath();
ctx.moveTo(70,620);
ctx.quadraticCurveTo(80,555,10,555);
ctx.stroke();

//escanteio 3
ctx.beginPath();
ctx.moveTo(1150,20);
ctx.quadraticCurveTo(1150,85,1210,85);
ctx.stroke();


//escanteio 4
ctx.beginPath();
ctx.moveTo(1150,620);
ctx.quadraticCurveTo(1150,555,1210,555);
ctx.stroke();






















