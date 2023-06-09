
//Funcion Para realizar el Local Storage 
function test(){
var nombre = document.getElementById("nombres").value;
var email = document.getElementById("mail").value;


//Guardar en el local storage y posterior llamrlo en el HTML

var user = localStorage.setItem("nombre", nombre);
var mailto = localStorage.setItem("email", email);

}
// Remover informacion del Local Storage
function remove(){
localStorage.removeItem("nombre");
localStorage.removeItem("email");

}

// Falta Mostrar  "nombre" del Local Storage en el HTML 

function mostrarNombre() {
    var nombre = localStorage.getItem("nombre");
    if (nombre) {
      document.getElementById("nombre-guardado").textContent = nombre;
    }
  }

//El fin es poder determinar si coloca la frase Licores o Cigarros, el sistema podria agregar el 15% como adicional


//Cargar productos 

//MANTENGO PROBLEMAS CON EL ITEM DE CARGAR PRODUCTOS PARA VERLOS EN EL HTML

function cargarProductos() {
    var seleccionarProd = document.getElementById("seleccionarprod").value;
  
   const productosJSON = {
    "productosgeneral": ["Libros", "Electrodomesticos", "Cuadernos", "Utileria", "Comida", "Muebles", "Vino", "Whiskey", "Pisco", "Fernet", "Malboro", "Lucky", "Kent", "Dunhill", "Pall Mall"]
    };
  
const tipoProducto = productosJSON[seleccionarProd];
  
    // Obtener el elemento select del HTML
 var productoSelect = document.getElementById("product");
 
 //ME MARCA ERROR EN LA LINEA 49
 productoSelect.innerHTML = "<option value=''> 'Seleccione el producto a importar' </option>";
  
    // Agregar opciones al elemento select
    for (var i = 0; i < tipoProducto.length; i++) {
     var option = document.createElement("option");
     option.value = tipoProducto[i];
     option.textContent = tipoProducto[i];
    productoSelect.appendChild(option);
   }
 }

// Calcular impuestos y valor total
function calcularImpuestos() {
    var valor = parseFloat(document.getElementById("valores").value);
    var producto = document.getElementById("product").value.toLowerCase();
  
    var impuestos = {
      arancel: 0,
      iva: 0,
      adicional: 0
    };
    
    var productossinimpuesto = ["Libros", "Electrodomesticos", "Cuadernos", "Utileria", "Comida", "Muebles"];
    var productosconimpuestos = ["Vino", "Whiskey", "Pisco", "Fernet", "Malboro", "Lucky", "Kent", "Dunhill", "Pall Mall"];
  
    if (valor >= 47 && !productossinimpuesto.includes(producto)) {
      impuestos.iva = valor * 0.19;
  
      if (productosconimpuestos.includes(producto)) {
        impuestos.adicional = valor * 0.15;
      } else {
        impuestos.arancel = valor * 0.06;
      }
    }


    // Calcular el valor total incluyendo impuestos
    let valorTotal = valores + impuestos.iva + impuestos.adicional + impuestos.arancel;

    // Mostrar el resultado al usuario
    alert(`El valor de tu impuesto es ${impuestos.arancel}, el valor de tu IVA es ${impuestos.iva}. Si es licor o cigarro, el impuesto adicional es ${impuestos.adicional}. El valor total es ${valorTotal} dólares.`);

    // Función para validar si se debe contactar a un agente aduanero si el valor total es superior a 1000 dólares
    function validarAgente(valorTotal) {
        if (valorTotal > 1000) {
        alert(`Contacta con un agente aduanero. El valor del producto (${valorTotal} dólares) es superior a 1000 dólares.`);
        } else {
        alert("No es necesario contactar a un agente aduanero por el valor del producto.");
        }
    }

    validarAgente(valorTotal);
}


