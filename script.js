
//Funcion Para realizar el Local Storage 
function test(){
const nombre = document.getElementById("nombres").value;
const email = document.getElementById("mail").value;


//Guardar en el local storage y posterior llamrlo en el HTML

const user = localStorage.setItem("nombre", nombre);
const mailto = localStorage.setItem("email", email);

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

function cargarProductos() {
    const seleccionarProd = document.getElementById("seleccionarprod").value;
  
   const productosJSON = [
    "Libros", "Electrodomesticos", "Cuadernos", "Utileria", "Comida", "Muebles", "Vino", "Whiskey", "Pisco", "Fernet", "Malboro", "Lucky", "Kent", "Dunhill", "Pall Mall"
  ] ;
  
const tipoProducto = productosJSON[seleccionarProd];
  
    // Obtener el elemento select del HTML
 const productoSelect = document.getElementById("seleccionarprod");
 
 productoSelect.HTMLOptionElement = "<option value=''> 'Seleccione el producto a importar' </option>";
  
    // Agregar opciones al elemento select
    for (var i = 0; i <productosJSON.length; i++) {
     var option = document.createElement("option");
     option.value = productosJSON[i];
     option.textContent = productosJSON[i];
    productoSelect.appendChild(option);
   }
 }

// Calcular impuestos y valor total
function calcularImpuestos() {
    const valor = parseFloat(document.getElementById("valores").value);
    const producto = (document.getElementById("producto").value);
  
    const impuestos = {
      arancel: 0,
      iva: 0,
      adicional: 0
    };
    //El fin es poder determinar si coloca la frase Licores o Cigarros, el sistema podria agregar el 15% como adicional
    const productossinimpuesto = ["Libros", "Electrodomesticos", "Cuadernos", "Utileria", "Comida", "Muebles"];
    const productosconimpuestos = ["Vino", "Whiskey", "Pisco", "Fernet", "Malboro", "Lucky", "Kent", "Dunhill", "Pall Mall"];
  
    if (valor >= 47 && !productossinimpuesto.includes(producto)) {
      impuestos.iva = valor * 0.19;
  
      if (productosconimpuestos.includes(producto)) {
        impuestos.adicional = valor * 0.15;
      } else {
        impuestos.arancel = valor * 0.06;
      }
    }


    // Calcular el valor total incluyendo impuestos
    let valorTotal = valor + impuestos.iva + impuestos.adicional + impuestos.arancel;

    // Mostrar el resultado al usuario
    // alert(`El valor de tu impuesto es ${impuestos.arancel}, el valor de tu IVA es ${impuestos.iva}. Si es licor o cigarro, el impuesto adicional es ${impuestos.adicional}. El valor total es ${valorTotal} dólares.`);

    const resultadoElement = document.getElementById("msj");
    resultadoElement.textContent = `El valor de tu impuesto es ${impuestos.arancel}, el valor de tu IVA es ${impuestos.iva}. Si es licor o cigarro, el impuesto adicional es ${impuestos.adicional}. El valor total es ${valorTotal} dólares.`;




    // Función para validar si se debe contactar a un agente aduanero si el valor total es superior a 1000 dólares
    function validarAgente(valorTotal) {
        if (valorTotal > 1000) {
          const resultadoElement = document.getElementById("agente");
          resultadoElement.textContent = `Contacta con un agente aduanero. El valor del producto (${valorTotal} dólares) es superior a 1000 dólares.`;
        } else {
          const resultadoElement = document.getElementById("agente");
          resultadoElement.textContent = "No es necesario contactar a un agente aduanero por el valor del producto.";
        }
    
      }

      // Mostrar el resultado al usuario
      

 
       validarAgente(valorTotal);


    }




//generar  un cuadro con los valores, para dejar de utilizar el Alert.





       
    
    
 


   



