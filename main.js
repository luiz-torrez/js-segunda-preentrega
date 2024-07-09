const carrito = [];

const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};
const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => "- "+producto.nombre+" $"+producto.precio);
    alert("Lista de precios: \n\n"+listaOrdenada.join("\n"));
    comprarProductos(listaOrdenada)
};
const comprarProductos = (listaOrdenada) => {
    let productoNombre = "";
    let productoCantidad = 0;
    let seguirComprando = false;
    let precioTotal= 0;
    let cantidadTotal = 0;
    // let precio= 0;

    do{
        productoNombre = prompt("Qué producto desea comprar?\n\n"+listaOrdenada.join("\n"));
        productoCantidad = parseInt(prompt("Cuantos desea comprar?"))

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());
        
        if (producto){
            agregarAlCarrito(producto, productoCantidad, producto.id);
        }
        else[
            alert ("El producto no existe!") 
        ];
        // const precioTotal = productos.reduce((acc, item)=> acc+(item.precio * item.cantidad),0);

        precioTotal += precio * productoCantidad;
        cantidadTotal += productoCantidad;        

        if(precioTotal >=2000 ){
        alert( "esta seguro de su compra")
    };

        seguirComprando = confirm("Desea seguir comprando?");       
    } while (seguirComprando);
    alert("Ha comprado "  +  cantidadTotal + " productos y el precio final es de $ " + precioTotal );


    
    }
const agregarAlCarrito = (productos, productoCantidad, productoId) => {
    const productoRepetido = carrito.find(producto => producto.id == productoId);
    if (productoRepetido){
        productoRepetido.cantidad += productoCantidad
    }else {
        productos.cantidad += productoCantidad;
        carrito.push(productos);
    }
    console.log(carrito);
}
ordenarMayorMenor();