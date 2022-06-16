const BASE  = [
    {
        "id": 1,
        "nombre": "Royal Leblon",
        "img": "./assets/img/royal-leblon.jpg",
        "precio": 1190,
        "cantidad":1
    },
    {
        "id": 2,
        "nombre": "Americana",
        "img": "./assets/img/americana.jpg",
        "precio": 1190,
        "cantidad":1
    },
    {
        "id": 3,
        "nombre": "Crispy",
        "img": "./assets/img/crispy.jpg",
        "precio": 1190,
        "cantidad":1
    },
    {
        "id": 4,
        "nombre": "Doble Cuarto de Libra",
        "img": "./assets/img/doble-cuarto-libra.jpg",
        "precio": 990,
        "cantidad":1
    },
    {
        "id": 5,
        "nombre": "Triple Leblon",
        "img": "./assets/img/triple-leblon.jpg",
        "precio": 1300,
        "cantidad":1
    },
    {
        "id": 6,
        "nombre": "Doble Cheeseburger",
        "img": "./assets/img/doble-cheseeburger.jpg",
        "precio": 990,
        "cantidad":1
    },
    {
        "id": 7,
        "nombre": "La de Roque",
        "img": "./assets/img/la-de-roque.jpg",
        "precio": 1190,
        "cantidad":1
    },
    {
        "id": 8,
        "nombre": "Veggie",
        "img": "./assets/img/veggie.jpg",
        "precio": 90,
        "cantidad":1
    },
    {
        "id": 9,
        "nombre": "Papas Fritas Porcion",
        "img": "./assets/img/papas-fritas.jpg",
        "precio": 500,
        "cantidad":1
    },
    {
        "id": 10,
        "nombre": "Papas Fritas con Cheddar y Panceta",
        "img": "./assets/img/papas-cheddar-panceta.jpg",
        "precio": 700,
        "cantidad":1
    },
    {
        "id": 11,
        "nombre": "Cerveza APA Escalada",
        "img": "./assets/img/cerveza-apa.jpg",
        "precio": 380,
        "cantidad":1
    },
    {
        "id": 12,
        "nombre": "Cerveza IPA Escalada",
        "img": "./assets/img/cerveza-ipa.jpg",
        "precio": 380,
        "cantidad":1
    },
    {
        "id": 13,
        "nombre": "Cerveza Irish Escalada",
        "img": "./assets/img/cerveza-irish.jpg",
        "precio": 380,
        "cantidad":1
    },
    {
        "id": 14,
        "nombre": "Cerveza Stout Beata",
        "img": "./assets/img/cerveza-stout.jpg",
        "precio": 400,
        "cantidad":1
    },
    {
        "id": 15,
        "nombre": "Cerveza Le Blonde Escalada",
        "img": "./assets/img/cerveza-le-blonde.jpg",
        "precio": 350,
        "cantidad":1
    },
    {
        "id": 16,
        "nombre": "Gaseosa - Coca Cola/Sprite/Fanta 500ml",
        "img": "./assets/img/gaseosa.jpg",
        "precio": 270,
        "cantidad":1
    }
]

const carrito = [];

let total = 0;

function renderizarProductos(){

    let tienda = document.getElementById('tienda');


    BASE.forEach((e)=>{
        
        let productoHTML = `

        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${e.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>${e.precio}€</p>
                <button class="btn btn-primary" onClick="agregarProductoAlCarrito(${e.id})">Añadir al carrito</button>
            </div>
        </div>
        </div>
        `
        tienda.innerHTML += productoHTML
    });

}

renderizarProductos();

function agregarProductoAlCarrito(id){

    let producto = BASE.find(producto => producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id);

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;
       

    }else {
        
        producto.cantidad = 1;
        carrito.push(producto);
    

    }
    
    renderizarCarrito();
}

function renderizarCarrito(){

    let carritoHTML = document.getElementById('carrito');

    html = '';

    carrito.forEach((producto, id)=>{
        
        html += `
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
            <div class="card text-dark" style="width: 18rem;">
                <img class="card-img-top" src="${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p>${producto.precio}€</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button class="btn btn-danger" onClick="eliminarProductoDelCarrito(${id})">Eliminar</button>
                </div>
            </div>
        </div>
        `
    })

    carritoHTML.innerHTML = html;

    calcularTotal();
}

function calcularTotal(){

    carrito.forEach((producto) => {
        
        total += producto.precio * producto.cantidad;
    });
    
    console.log(total);

}


const eliminarProductoDelCarrito = (id)=> {

    console.log(carrito[id].cantidad); //1
    carrito[id].cantidad--;
    console.log(carrito[id].cantidad); 

    if(carrito[id].cantidad == 0){
        
        carrito.splice(id, 1);
    }
    
    renderizarCarrito();
}




