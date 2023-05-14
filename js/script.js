
const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

const showAlert = () => { Swal.fire('boton-agregar'); } 

let carrito = []

//promesa, async y await del archivo json (colocotodas las funciones aquí adentro para que funcionen)
const getProductos = async()=>{
    const response = await fetch("./json/data.json");
    const data = await response.json();

//CARRITO
//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId)//comprobar si el elemento ya existe en el carro
    Swal.fire(
        'Producto agregado!',
        'Has hecho click en el boton!',
        'success'
      )

    if (existe){ 
        const prod = carrito.map (prod => { 
           
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = data.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito() 
}

  

//creamos el div de cada producto
data.forEach((producto) => {
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
    contenedorProductos.appendChild(div)

     const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        // agregar el carrito con el id del producto
        agregarAlCarrito(producto.id)
        
    })
})


// ELIMINAR DEL CARRITO
const eliminarDelCarrito = (prodId) => {
const item = carrito.find((prod) => prod.id === prodId)
const indice = carrito.indexOf(item);
carrito.splice(indice, 1); 
actualizarCarrito(); 
console.log(carrito);
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
    contadorCarrito.innerText = carrito.length 
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //acumulador suma el precio
 
}

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


    
  // Agrega hover al div de cada producto
  producto.addEventListener('mouseenter', () => {
    producto.classList.add('hover');
  });
  
    producto.addEventListener('mouseleave', () => {
    producto.classList.remove('hover');
  });
  
  contenedorProductos.appendChild(div);
;
    };
    
    getProductos();



