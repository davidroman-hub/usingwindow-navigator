alert("me cagas")

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

//dibujar una linea en java
lienzo.beginPath(); //arrancan un dibujo
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath(); // cierran un dibujo


// segunda linea de diferente color

lienzo.beginPath(); //arrancan un dibujo
lienzo.strokeStyle = "blue";
lienzo.moveTo(50, 10);
lienzo.lineTo(290, 200);
lienzo.stroke();
lienzo.closePath(); // cierran un dibujo

// ejemplo de funcion para no estar haciendo linea por linea 

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); //arrancan un dibujo
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); // cierran un dibujo
}

dibujarlinea ("pink", 10, 300, 220, 10, );
dibujarlinea ("orange", 100, 200, 120, 200, );



