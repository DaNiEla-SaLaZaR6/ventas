export function rotar(){
    if(indice<fotos.length){
        foto_carrusel.src=fotos[indice]
        indice++
    }else{
        indice=0
    }
}
const fotos=[
    '../imagenes/carrusel/foto4.jpg',
    '../imagenes/carrusel/foto3.jpg',

]
let indice=0

setInterval(rotar,2000)

