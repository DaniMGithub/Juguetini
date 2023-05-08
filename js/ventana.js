const contenedorVentana = document.getElementsByClassName('ventana-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const ventanaCarrito = document.getElementsByClassName('ventana-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorVentana.classList.toggle('ventana-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorVentana.classList.toggle('ventana-active')
})

contenedorVentana.addEventListener('click', (event) => {
    contenedorVentana.classList.toggle('ventana-active')

})
ventanaCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
}) 

