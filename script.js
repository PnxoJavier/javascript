let nombre =prompt("¿Cual es tu nombre").toLowerCase();

alert("Hola " + nombre + ". Esta es una calculadora de Impuestos Aduaneros Chile");


let valor = parseInt(prompt("Cuál es valor de tu producto"));

    let impuesto = 0;

    let iva = 0;

    if (valor >= 40){
        impuesto = valor * 0.04;
        iva = valor * 0.19;

    }

    let valortotal = (valor + impuesto + iva)

        alert (`El valor de tu impuesto es ${impuesto} , el valor de tu IVA es ${iva} por lo cual el valor total es  ${valortotal} dolares`);

    function Validaragente(valortotal) {
        
        if (valortotal > 1000) {
            alert(`Tome Contacto con Agente Aduanero el producto con el valor de ${valortotal} es superior a 1.000 dolares`)
                    
        } else {
            alert (`Por el valor del producto, no debe contactar a un agente aduanbero`)

                    
        }

    }
    Validaragente(valortotal);



