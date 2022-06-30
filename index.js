let ancho_de_pantalla = window.screen.width;
let imagen_perfume = document.getElementById('imagen_perfume');


function asignarImagen () {
    ancho_de_pantalla = window.innerWidth;
    if (ancho_de_pantalla > 630) {
        imagen_perfume.src = "images/image-product-desktop.jpg"
    } else {
        imagen_perfume.src = "images/image-product-mobile.jpg"
        
    }
}

asignarImagen();


window.addEventListener('resize', () =>{
    asignarImagen();
})