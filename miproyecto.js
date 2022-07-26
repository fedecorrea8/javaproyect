const iva = 1.21;
let final = 0;
function valorFinal(precio,cuota) {
   
    if (cuota==2) {
        final = precio *iva;
        alert("El precio final con el IVA es de: $" + final + "\ny con 10% de recargo: $" + final * 1.10); 
    }

    else if (cuota==3) {
        final = precio *iva;
        alert("El precio final con el IVA es de: $" +final + "\ny con 20% de recargo: $" + final * 1.15 ); 
    }

    else if (cuota==4) {
        final = precio *iva;
        alert("El precio final con el IVA es de: $" +final + "\ny con 30% de recargo: $" + final * 1.20 ); 
    }else{
        alert("El precio final en 1 cuota más IVA es de: $" + precio * iva)
    }
}

let pedirPrecio = parseInt(prompt("Ingrese el precio del producto"));
let pedirCuotas = parseInt(prompt("Ingrese la cantidad de cuotas. Máximo 4 cuotas.")) 

valorFinal(pedirPrecio,pedirCuotas);