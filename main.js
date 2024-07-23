class Producto {
    constructor(nombre, precio, promocion) {
      this.nombre = nombre.toUpperCase();
      this.precio = precio;
      this.promocion = promocion;
    }
  
    descuentoPromo() {
      this.precio = this.precio * 1.10;
    }
  }
  
  
  let productos = [];
  
  productos.push(new Producto("cheesseburger", 1300, true));
  productos.push(new Producto("american", 1500, false));
  productos.push(new Producto("crispy", 1600, false));
  productos.push(new Producto("bacon", 1800, true));
  productos.push(new Producto("triple queso", 1850, false));
  
  console.log(productos);
  let precioFinal = 0;
  let productosCarrito = [];
  let total = 0;
  let respuesta;
  
  function saludar() {
    alert("Bienvenidxs, gracias por visitar nuestro sitio");
  }
  
  function mostrarMenu() {
    let option = prompt(`Agregar productos al carrito:
                1- Cheesseburger: $1300
                2- American: $1500
                3- Crispy: $1600
                4- Bacon: $1800
                5- Triple queso: $1850
                6: Descuentos
                7: Recargo por pago con tarjeta
                8: Salir
                `);
  
    switch (option) {
      case "1":
        alert(`Se agrego ${productos[0].nombre} al carrito`);
        total = total + productos[0].precio;
        productosCarrito.push(productos[0].nombre);
        respuesta = prompt("Desea agregar algo mas? Si o No");
        break;
  
      case "2":
        alert(`Se agrego ${productos[1].nombre} al carrito`);
        total = total + productos[1].precio;
        productosCarrito.push(productos[1].nombre);
        respuesta = prompt("Desea agregar algo mas? Si o No");
        break;
  
      case "3":
        alert(`Se agrego ${productos[2].nombre} al carrito`);
        total = total + productos[2].precio;
        productosCarrito.push(productos[2].nombre);
        respuesta = prompt("Desea agregar algo mas? Si o No");
        break;
  
      case "4":
        alert(`Se agrego ${productos[3].nombre} al carrito`);
        total = total + productos[3].precio;
        productosCarrito.push(productos[3].nombre);
        respuesta = prompt("Desea agregar algo mas? Si o No");
        break;
  
      case "5":
        alert(`Se agrego ${productos[4].nombre} al carrito`);
        total = total + productos[4].precio;
        productosCarrito.push(productos[4].nombre);
        respuesta = prompt("Desea agregar algo mas? Si o No");
        break;
  
      case "6":
        const productoPromo = productos.filter(
          (producto) => producto.promocion == true
        );
        alert(JSON.stringify(productoPromo));
        console.log(productoPromo);
        respuesta = prompt("Desea comprar algo mas? Si o No");
        break;
  
        case "7": let descuentoPromo=[]
        productos.forEach((producto) => {
          producto.precio = producto.precio  * 1.10
          descuentoPromo.push(producto)
           document.write(JSON.stringify(producto))
        })
         alert(JSON.stringify(descuentoPromo))
        respuesta = prompt("Desea comprar algo mas? si o no");
        break;
  
      case "8":
        alert("Gracias por su visita");
        break;
    }
  }
  
  mostrarMenu();
  while (respuesta == "si") {
    mostrarMenu();
  }
  
  alert(`El total de su compra es de ${total}`);
  alert(`Lista de Productos: ${productosCarrito}`);
  
  