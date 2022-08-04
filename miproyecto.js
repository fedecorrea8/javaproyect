class Productos{

    
    constructor(categoria, subCategoria, marca, presentacion, precio, stock){
        this.categoria = categoria;
        this.subCategoria = subCategoria; 
        this.marca = marca;
        this.presentacion = presentacion;
        this.precio = precio;
        this.stock = stock;
    }
     
mostrarDescripcion(){
    
    return this.categoria + " "+ this.subCategoria + " " + this.marca +" Presentación: "+ this.presentacion + " $" + this.precio + " Stock: " + this.stock;
}
}



let catalogo = new Array();

catalogo.push(new Productos("BEBIDAS", "GASEOSA", "COCA-COLA", "12 x 2,25 LT", 2500, true));
catalogo.push(new Productos("BEBIDAS", "GASEOSA", "COCA-COLA", "12 x 1,50 LT", 1800, true));
catalogo.push(new Productos("BEBIDAS", "CERVEZA", "QUILMES", "12 x 1 LT", 2400, false));
catalogo.push(new Productos("BEBIDAS", "CERVEZA", "AMSTEL", "12 x 1 LT", 2000, true));
catalogo.push(new Productos("BEBIDAS", "AGUA", "GLACIAR", "12 x 2LT", 1500, false));
catalogo.push(new Productos("FIAMBRES", "QUESOS", "SANCOR", "BARRA x 5 KG", 5300, true));
catalogo.push(new Productos("FIAMBRES", "JAMONES", "PALADINI", "PIEZA x 4 KG", 6200, true));
catalogo.push(new Productos("FIAMBRES", "SALAMES", "CALCHAQUI", "PIEZA x 3 KG", 4800, true));
catalogo.push(new Productos("FIAMBRES", "QUESOS", "SERENISIMA", "PIEZA x 5 KG", 5500, false));

let catalogoBebidas = catalogo.filter((el) => el.categoria.includes("BEBIDAS"))
let catalogoFiambres = catalogo.filter((el) => el.categoria.includes("FIAMBRES"))
let pregunta = prompt("¿QUE DESEA VER? \n 1-BEBIDAS \n 2-FIAMBRES \n 3-INGRESAR PRODUCTO");

if (pregunta =="1") {
  
   for(let i = 0; i <= catalogoBebidas.length; i++){
    alert(catalogoBebidas[i].mostrarDescripcion())
   }
}else if (pregunta =="2"){
    for(let i = 0; i<= catalogoFiambres.length; i++){
        alert(catalogoFiambres[i].mostrarDescripcion())
    }
}else if (pregunta =="3") {
    ingresarNuevoProducto();
}else{alert("Ingrese una opcion valida")}





function nuevoProducto(){
    let check = true ;
    
    while (check){
        let msj = "";
        let categoria = prompt("Ingrese categoria").trim();
        let subCategoria = prompt ("ingrese subcategoria").trim();
        let marca = prompt("Ingrese marca").trim();
        let presentacion = prompt("Ingrese presentación").trim();
        let precio = parseFloat(prompt ("Ingrese precio"));   
        let stock = prompt("ingrese si tiene stock")

            if (!categoria){

                msj += "\nDebe ingresar categoria";

            }

            if (!subCategoria){

                msj += "\nDebe ingresar subcategoria" ;
            }

            if (!marca) {
                msj += "\nDebe inresar marca"
            }

            if (!presentacion) {
                msj += "\nDebe ingresar presentación"
            }

            if (isNaN(precio)){

                msj += "\nDebe ingresar un valor numerico en precio";

            }

            if (!stock) {
                msj += "\nDebe ingresar si tiene stock"
            }

            if (msj != ""){

                alert(msj);
                check = confirm("Desea cargar de nuevo los datos");
                

            }else{


                return new Productos (categoria,subCategoria,marca,presentacion,precio,stock);

            }


    }

    return false;


}

function ingresarNuevoProducto (){

    let producto = nuevoProducto();

    if (producto){

        catalogo.push(producto);
        alert("Producto agregado con exito!");

    }


}




