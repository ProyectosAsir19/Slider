//contenido [0] = 'img/imagen1.jpg'
//contenido [1] = 'img/imagen2.jpg'
//contenido [2] = 'img/imagen3.jpg'
//contenido [3] = 'img/imagen4.jpg'
//contenido [4] = 'img/imagen5.jpg'


function adelante() {
  posicionActual++;
  if (posicionActual>3)
      posicionActual=1;
      var foto=document.getElementById('contenido')
      foto.src="contenido"+posicionActual+"".jpg"

}


var contenido = ['img/imagen1.jpg',
                 'img/imagen2.jpg',
                 'img/imagen3.jpg',
                 'img/imagen4.jpg',
                 'img/imagen5.jpg'];
var imagenX = 0;
//var posicionActual = 0;


/*window.addEventListener('load', function () {
            console.log('contenido cargado');*/

    function pasadordeimagen() {

          document.contenido.src = contenido[imagenX];

          if (imagenX < 4) {

              imagenX++;

          }else {
                    imagenX = 0;
                  }
      }

      function adelante() {
        document.getElementById("imagen").src = contenido[imagenX];
        imagenX++;
        if (imagenX >= contenido.length) {
          imagenX = 0;
        }
      }
      function atras() {
        document.getElementById("imagen").src = contenido[imagenX];
        imagenX--;
        if (imagenX >= contenido.length) {
          imagenX = 0;
        }
      }
          setIsnterval(pasadordeimagen, 4000); //Visto en el apartado Control de tiempos en la masterclass
