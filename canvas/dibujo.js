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