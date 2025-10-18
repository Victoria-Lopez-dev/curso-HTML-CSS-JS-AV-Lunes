//En la clase de hoy:
//SVG 
 
//concepto de API
//intermediarios entre servidores (DB) y el cliente (front)
//nos permiten resolver algunas acciones de manera simple 

//API -> Aplication Programing Interfase 
//API externas (asincronia) - API incluidas en incluidas a partir HTML5

//Canvas -> API grafica
//conjunto de metodos para poder crear graficos 

let canvas=document.querySelector("canvas");
let lienzo=canvas.getContext("2d");

//figuras primitivas : rectangulos - trazos 

//rectangulos 
//fillRect(x,y,width,height) - strokeRect(x,y,width,height) - clearRect(x,y,width,height)
console.log(lienzo)
lienzo.fillStyle="violet";
lienzo.strokeStyle="blue";
lienzo.lineWidth=4;
lienzo.fillRect(10,10,100,10);

lienzo.strokeRect(10,40,100,100);

lienzo.fillStyle="#f89";
lienzo.fillRect(100,100,50,10);

lienzo.clearRect(20,13,50,50);


//--------------
//trazos
//lineTo(x,y) - moveTo(x,y)
//stroke() - fill()
//arc(cx,cy,r,angInicial,angFinal,direccion)
// -arcTo()
//quadraticCurveTo(cpx,cpy,x,y)
//bezierCurveTo(cpx1,cpy,cpx2,cpy2,x,y)
//angulos -> radianes 


//Math.PI/180*grados -> 

let grados45=Math.PI/180*45;
let grados360=Math.PI/180*360;
lienzo.strokeStyle="green";
lienzo.lineWidth=1;

lienzo.beginPath();// inicia el trazo
lienzo.moveTo(200,100);
lienzo.lineTo(200,150);
lienzo.lineTo(220,10);
lienzo.arc(220,10,40,0,grados45,false);
lienzo.stroke()
lienzo.closePath(); //cierra el trazo

//circulos
lienzo.beginPath();// inicia el trazo
lienzo.moveTo(100,100);
lienzo.arc(120,100,40,0,grados360,true);
lienzo.fill()
lienzo.closePath(); 


//trazos curvos
lienzo.strokeStyle="yellow";
lienzo.beginPath();// inicia el trazo
lienzo.moveTo(120,100);
lienzo.quadraticCurveTo(160,190,170,100);
lienzo.bezierCurveTo(200,10,234,100,250,50);
lienzo.stroke();
lienzo.closePath(); 


//proxima clase :
// - texto en canvas y animacion;
//drag&drop y Geolocalizacion (API)
