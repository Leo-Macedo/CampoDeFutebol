//inicializando canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//campo
ctx.fillStyle = '#00ff15';
ctx.fillRect(10, 20, 1200, 600);

//linha do campo
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.strokeRect(10, 20, 1200, 600);

//escanteio 1
 ctx.beginPath();
 ctx.arc(10,20,60, 0 ,  Math.PI*0.5, false);
 ctx.stroke();

 //escanteio 2
 ctx.beginPath();
 ctx.arc(10,620,60, Math.PI*1.5 ,  0, false);
 ctx.stroke();

  //escanteio 3
  ctx.beginPath();
  ctx.arc(1210,20,60, Math.PI*1 ,  Math.PI*0.5, true);
  ctx.stroke();

   //escanteio 4
   ctx.beginPath();
   ctx.arc(1210,620,60, Math.PI*1.5 ,  Math.PI*1, true);
   ctx.stroke();
  

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
 ctx.arc(210,320,100, Math.PI*1.5 ,  Math.PI*0.5, false);
 ctx.stroke();

 //meia lua 2
 ctx.beginPath();
 ctx.arc(1010,320,100, Math.PI*1.5 ,  Math.PI*0.5, true);
 ctx.stroke();

 //penalti 1
 ctx.fillStyle='white';
 ctx.beginPath();
 ctx.arc(150,320, 10,0,Math.PI* 2);
 ctx.stroke();
 ctx.fill();

  //penalti 2
  ctx.beginPath();
  ctx.arc(1060,320, 10,0,Math.PI* 2);
  ctx.stroke();
  ctx.fill();

  //jogadores corinthinas
  ctx.lineWidth='6'
  ctx.strokeStyle='black'
  ctx.fillStyle='white';
  ctx.beginPath();
  ctx.arc(40,320, 20,0,Math.PI* 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(400,150, 20,0,Math.PI* 2);
  ctx.fill();
  ctx.stroke();


  ctx.beginPath();
  ctx.arc(800,400, 20,0,Math.PI* 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(500,500, 20,0,Math.PI* 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(1000,230, 20,0,Math.PI* 2);
  ctx.fill();
  ctx.stroke();

  //jogadores são paulo
  ctx.lineWidth='6'
  ctx.strokeStyle='black'
  ctx.fillStyle='red';
  ctx.beginPath();
  ctx.arc(1177,320, 20,0,Math.PI* 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(440,200, 20,0,Math.PI* 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(840,360, 20,0,Math.PI* 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(540,450, 20,0,Math.PI* 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(1050,270, 20,0,Math.PI* 2);
  ctx.fill();
  ctx.stroke();

  //placar cor
  ctx.fillStyle = "black";
  ctx.fillRect(540, 0, 70, 100);

  //placar sao
  ctx.fillStyle = "red";
  ctx.fillRect(610, 0, 70, 100);
  
  //letras
  ctx.fillStyle='white';
  ctx.font = '60px Bernard MT Condensed';
  ctx.fillText('6 x 1', 552, 70);

   //bola
   var imagem=new Image();
   imagem.onload=function(){
   ctx.drawImage(this, 950, 200, 40, 40);
   }
   imagem.src = "img/bola.png"; 



 

 


 







