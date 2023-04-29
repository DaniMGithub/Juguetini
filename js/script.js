const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


//creamos el div de cada producto
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Edad: ${producto.edad}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
//lo inyectamos con appenChild
    contenedorProductos.appendChild(div)

     const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con el id del producto
        agregarAlCarrito(producto.id)
        
    })
})

//CARRITO
//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ
        const item = stockProductos.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //LLAMAMOS A LA FUNCION CADA VEZ Q SE MODIFICA EL CARRITO
}


// ELIMINAR DEL CARRITO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}

//ACTUALIZAR CARRITO, va agregando productos
const actualizarCarrito = () => {
       contenedorCarrito.innerHTML = "" 
      //Por cada producto creamos un div 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //acumulador suma el precio
 
}



/* Mail para el formulario de contacto realizado con emailjs.com */

function SendMail(){
  const params = {
  from_name : document.getElementById("fullName").value,
  email_id : document.getElementById("email_id").value,
  message : document.getElementById("message").value,
  }
  emailjs.send("service_1klskos", "template_hn0nrzr", params).then(function(res) {
    alert("exito" +res.status);
  })
  }

 
