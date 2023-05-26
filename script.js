
//incio solicita el nombre para interactuar

let nombre =prompt("¿Cual es tu nombre").toLowerCase();

alert("Hola " + nombre + ". Esta es una calculadora de Impuestos Aduaneros Chile");

//prompt el fin es poder determinar si coloca la frase Licores o Cigarros, el sistema podria agregar el 15% como adicional

let tipodeproducto =prompt ("Indica que tipo de producto vas a importar. El Licores y cigarros tienen un 15% de impuesto adicional").toLocaleLowerCase();

// Prompt para que indique el valor del producto a importar

let valor = parseInt(prompt("Cuál es valor de tu producto"));

// Se establecio como Objeto para almacenar los impuestos y porcentajes

    let impuestos = {
        arancel:    0,
        iva : 0,
        adicional : 0,
        };


// Array de productos exentos de impuestos
let productosExentos = ["libro", "medicamento", "alimento"];

// Array de productos con impuesto adicional del 15%
let productosConImpuestoAdicional = ["licores", "cigarros"];

    // Verificar si el producto está exento de impuestos
    if (valor >= 47 && !productosExentos.includes(tipodeproducto.toLowerCase())) {
    impuestos.iva = valor * 0.19;

    // Verificar si el producto tiene impuesto adicional del 15%
    if (productosConImpuestoAdicional.includes(tipodeproducto.toLowerCase())) {
        impuestos.adicional = valor * 0.15;
    } else {
        impuestos.arancel= valor * 0.06;
    }
}
// Se crea un Alert para que si el valor total es superior a 1000 dolares indique que tome un contacto con un agente de aduanas 
    let valortotal = (valor + impuestos.iva + impuestos.adicional + impuestos.arancel)

        alert (`El valor de tu impuesto es ${impuestos.arancel} , el valor de tu IVA es ${impuestos.iva} , si es Licor o cigarro su impuesto es de ${impuestos.adicional} por lo cual el valor total es  ${valortotal} dolares`);

    function Validaragente(valortotal) {
        
        if (valortotal > 1000) {
            alert(`Tome Contacto con Agente Aduanero el producto con el valor de ${valortotal} es superior a 1.000 dolares`)
                    
        } else {
            alert (`Por el valor del producto, no debe contactar a un agente aduanbero`)

                    
        }

    }
    Validaragente(valortotal);



