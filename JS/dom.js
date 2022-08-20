class Productos{

    
    constructor(id,categoria, subCategoria, marca, presentacion, precio, stock, imagen){
        this.id= id;
        this.categoria = categoria;
        this.subCategoria = subCategoria; 
        this.marca = marca;
        this.presentacion = presentacion;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
     
mostrarDescripcion(){
    
    return this.categoria + " "+ this.subCategoria + " " + this.marca +" Presentación: "+ this.presentacion + " $" + this.precio + " Stock: " + this.stock;
}

getMarca(){
    return this.marca;
}

getPrecio(){
    return "$ " +this.precio;
}

getPresentacion(){
    return this.presentacion;
}


}

window.onload = iniciar();

let catalogo = new Array();

catalogo.push(new Productos(1,"BEBIDAS", "GASEOSA", "COCA-COLA", "12 x 2,25 LT", 2500, true, "./img/cocacola225.jpg"));
catalogo.push(new Productos(2,"BEBIDAS", "GASEOSA", "COCA-COLA", "12 x 1,50 LT", 1800, true, "./img/coca15a.webp"));
catalogo.push(new Productos(3,"BEBIDAS", "CERVEZA", "QUILMES", "12 x 1 LT", 2400, false, "./img/quilmes.jpg"));
catalogo.push(new Productos(4,"BEBIDAS", "CERVEZA", "AMSTEL", "12 x 1 LT", 2000, true,"./img/amstel.webp" ));
catalogo.push(new Productos(5,"BEBIDAS", "AGUA", "GLACIAR", "12 x 2LT", 1500, false, "./img/glaciar.webp"));
catalogo.push(new Productos(6,"FIAMBRES", "QUESOS", "SANCOR", "BARRA x 5 KG", 5300, true, "./img/sancor.jpg"));
catalogo.push(new Productos(7,"FIAMBRES", "JAMONES", "PALADINI", "PIEZA x 4 KG", 6200, true, "./img/jamonpaladini.png"));
catalogo.push(new Productos(8,"FIAMBRES", "SALAMES", "CALCHAQUI", "PIEZA x 3 KG", 4800, true, "./img/salame.jpg"));
catalogo.push(new Productos(9,"FIAMBRES", "QUESOS", "SERENISIMA", "BARRA x 5 KG", 5500, false, "./img/serenisima.jpg"));
catalogo.push(new Productos(10,"FIAMBRE", "MORTADELA", "PALADINI", "PIEZA X 5 KG", 4300, true, "./img/mortadela.jpg"));
catalogo.push(new Productos(11,"FIAMBRES", "FIAMBRIN", "SERENISIMA", "BARRA X 4 KG", 6200, true, "./img/fiambrin2.jpg"));
catalogo.push(new Productos(12,"BEBIDAS", "VINO", "QUARA", "6 X 750 ML", 2520, true, "./img/quara.jpg"));





let productoCtn = document.getElementById("productoCtn");


mostrarCaja();


function mostrarCaja(){

    for(let i=0; i<= catalogo.length; i++){

        let objProducto =  catalogo[i];
        crearCaja(objProducto);
    }
}

function crearCaja(producto){
    let ctn = document.createElement("div");
    let marca = document.createElement("h2");
    marca.textContent = producto.getMarca();
    let precio = document.createElement("h5");
    precio.textContent = producto.getPrecio();
    let presentacion = document.createElement("p");
    presentacion.textContent = producto.getPresentacion();
    let boton = document.createElement("button");
    boton.textContent = "Comprar";
    let img = document.createElement("img");
    img.setAttribute("src", producto.imagen);

    ctn.appendChild(marca);
    ctn.appendChild(precio);
    ctn.appendChild(presentacion);
    ctn.appendChild(img);
    ctn.appendChild(boton);

    productoCtn.appendChild(ctn);

    boton.addEventListener("click",() =>{
        alert("añadido al carrito")
    })

    boton.addEventListener("click", ()=>{
        ctn.style.background = "red";
        
    })

    

}



function iniciar(){
    let boton = document.getElementById("btn_crear");
    boton.addEventListener("click", clickAgregar)
}

function clickAgregar(){

    let categoria = document.getElementById("categoria");
    let subCategoria = document.getElementById("subcategoria");
    let marca = document.getElementById("marca");
    let presentacion = document.getElementById("presentacion");
    let precio = document.getElementById("precio");
    let stock = document.getElementById("stock");
    let imagen =  document.getElementById("imagen");

    let id = catalogo.length + 1;

    let input = new Productos(id, categoria.value, subCategoria.value, marca.value, presentacion.value, precio.value, stock.value, imagen.value);

    localStorage.input = JSON.stringify(input);

    catalogo.push(input);

    crearCaja(input);

}

