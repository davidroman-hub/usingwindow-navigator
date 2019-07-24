




var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0; 
var yi, xf;
//var yf, xi;


function dibujarraya (color, xinicial, yinicial, xfinal,yfinal) 
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal)
lienzo.stroke();
lienzo.closePath();
}


dibujarraya("red",0,0,0,300)
dibujarraya("red",0,300,300,300)

dibujarraya("green",1,299,299,299)
dibujarraya("green",299,299,299,1)//rayas hacia arriba

dibujarraya("grey", 300,300,290,300);
//dibujarraya("red",300,0,0,300) linea guia

/*while( l < lineas) // mientras l es menor que lineas se escribe el codigo
{
yi= 10 * l;
xf = 10* ( l + 1);
dibujarraya("blue",0,yi,xf,300);
;
console.log("linea" + 1); 
l = l + 1; // esto hace que se dibujen las 30 lineas, si yo pusiera el 2 se harian solamenrte la mitad
}*/




for(l=0;l<lineas;l++){

dibujarraya ("green", 0, 10*l, 10* (l+1), 300);  
dibujarraya( "blue", 300 , (10*l),300-l*10,300);
dibujarraya("red",10*l,0,300,10*l+1);
dibujarraya("brown",300-l*10,0,0,10*l );
    console.log("linea "+ l);
}