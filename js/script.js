const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');




//campo
ctx.fillStyle = '#00ff15';
ctx.fillRect(10, 20, 1200, 600);

//linha do campo
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.strokeRect(10, 20, 1200, 600);

//linha do meio
ctx.beginPath();
ctx.moveTo(610,620);
ctx.lineTo(610,20);
ctx.lineWidth = 10;
 
//area 1
ctx.strokeRect(10, 160, 200, 320);
ctx.stroke();

//area 2
ctx.strokeRect(1010, 160, 200, 320);
ctx.stroke();

// pequena area 1
ctx.strokeRect(10, 240, 100, 160);
ctx.stroke();

//pequena area 2
ctx.strokeRect(1110, 240, 100, 160);
ctx.stroke();

 //circulo do meio
 ctx.beginPath();
 ctx.arc(610,320,100,0,Math.PI* 2);
 ctx.stroke();

//circulo pequeno do meio
 ctx.beginPath();
 ctx.arc(610,320,10,0,Math.PI* 2);
 ctx.stroke();

 //meia lua 1
 ctx.beginPath();
 ctx.arc(210,320,100, 1.6,4.7,  Math.PI*1, true);
 ctx.stroke();

 

 


 







