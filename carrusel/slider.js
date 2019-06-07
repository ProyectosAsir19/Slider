var contenido = ['img/imagen1.jpg',
                 'img/imagen2.jpg',
                 'img/imagen3.jpg',
                 'img/imagen4.jpg',
                 'img/imagen5.jpg'];
var imagenX = 0;

    function pasadordeimagen() {

          document.contenido.src = contenido[imagenX];

          if (imagenX < 4) {

              imagenX++;

          }else {
                    imagenX = 0;
                  }
      }

      function adelante() {
        document.getElementById("imagenescarrusel").src = contenido[imagenX];
        imagenX++;
        if (imagenX >= contenido.length) {
          imagenX = 0;
        }
      }
      function atras() {
                      imagenX--;
        if (imagenX <0) {
          imagenX = contenido.length-1; // poner contenido.length-1
        }
        document.getElementById("imagenescarrusel").src = contenido[imagenX];
      }

        setInterval(function(){
          pasadordeimagen();
        }, 2000);
