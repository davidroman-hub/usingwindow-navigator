

// ejemplo de ciclos en los dibujos de canvas 




var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lienas = 30;
var l = 0; 
var yi, xf;

while(l < lienas) // for( l=0; l<lienas ; l++) esta es la forma normas de programar ciclos

{
    yi = 10 * l;
    xf = 10 * (l + 1);
dibujarlinea ("grey", 0 , yi, xf, 300);
console.log("linea" + l);

l = l + 1;// importante cerr ar el ciclo
//l++ es lo mismo que arriba

}

for ( l=0; l<lienas ; l++)
{
dibujarlinea ("red", )
console.log()
}

dibujarlinea("red",1,1,1,300);
dibujarlinea("red",1,299,299,299);


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); //arrancan un dibujo
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); // cierran un dibujo
}

//dibujarlinea ("grey", 0, 0, 10, 300, );
//dibujarlinea ("grey", 0, 10, 20, 300, );


// ejemplo