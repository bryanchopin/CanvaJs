//version de 29 de diciembre del 2021

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujar_ojo_inferior(color) //dibujar_ojo("blue","#FAA");
{
  var linea = 60;
  var l = 0;
  var xf,yi;

  while(l < linea)
  {
    yi = 10 * l;
    xf = 10 * (1+l);
    dibujar_linea(color,0,yi,xf,600);
    l = l+1;
  }

}

function dibujar_ojo_superior(color)
{
  var linea = 60;
  var l = 0;
  var xf,yi;
  for(l=0;l<linea;l++)
  {
    yi = 10 * l;
    xf = 10 * (1+l);
    dibujar_linea(color, yi, 0, 600, xf);
  }
}

function dibujar_linea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujar_cuadrado(L,color)
{
  dibujar_linea(color,0,0,L,0); //arriba
  dibujar_linea(color,0,L,L,L);//abajo
  dibujar_linea(color,L,L,L,0);//lado derecho
  dibujar_linea(color,0,0,0,L); //lado izquierdo
}

/////////////////////////////////////////////////////////////////////////////////////////

 var texto = document.getElementById("texto_lineas");
 var boton = document.getElementById("botoncito");
 boton.addEventListener("click",dibujo_click);

 function dibujar_por_lineas(color,lineass)
 {

   var l = 0;
   var xf,yi;
   var espacio = ancho/lineass;
   while(l < lineass)
   {
     yi = espacio * l;
     xf = espacio * (1+l);
     dibujar_linea(color,0,yi,xf,600);
     l = l+1;
   }
 }

 function dibujo_click()
 {
   var lineass = parseInt(texto.value);
   dibujar_por_lineas("red",lineass);
 }

//////////////////////////////////////////////////////////////////////////////////////////

dibujar_cuadrado(600,"black");
dibujar_linea("black",300,50,300,550);
dibujar_linea("black",50,300,550,300);

function SEAD(color)
{
  var linea = 25;
  var l = 0;
  var xf,yi;

  while(l < linea)
  {
    yi = 10 * (l+5);
    xf = (100 * 3)+(l*10);
    l = l + 1;
    dibujar_linea(color,300,yi,xf,300);
  }
}

function SEAI(color)
{
  var linea = 25;
  var l = 0;
  var xf,yi;
  for(l=0;l<linea;l++)
  {
    yi = 10 * (l+5);
    xf = (100*3) - (l*10);
    dibujar_linea(color,300,yi,xf,300);
  }
}

function SEDI(color)
{
  var linea = 25;
  var l = 0;
  var xf,yi;
  for(l=0;l<linea;l++)
  {
    yi = 550 - (l*10);
    xf = (100*3) - (l*10);
    dibujar_linea(color,300,yi,xf,300);
  }
}

function SEDD(color)
{
  var linea = 25;
  var l = 0;
  var xf,yi;
  for(l=0;l<linea;l++)
  {
    yi = 540 - (10*l);
    xf = 310 + (10*l);
    dibujar_linea(color,300,yi,xf,300);
  }
}

SEAD("black");
SEAI("black");
SEDI("black");
SEDD("black");
////////////////////////////////////////////////////////////////////////////////////////////
