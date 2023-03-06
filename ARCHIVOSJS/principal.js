import {rotar} from './carrusel.js'
rotar()

const produto=document.querySelector('products')
const url="https://fakestoreapi.com/products"
async function traer(){
    const respuesta= await fetch(url)
    const datos=await respuesta.json()
    console.log(datos)
    datos.forEach(producto=>{
        producto.innerHTML+=`
        `
    });
}
traer()