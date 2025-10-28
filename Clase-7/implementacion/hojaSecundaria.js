const actualizar=()=>{

    //actualizamos el tema de la pagina definido por el usuario
    let tema=localStorage.getItem("tema");
    if(tema === "noche"){
        document.querySelector("body").classList.add("fondo");
        document.querySelector("body").style.color="white"
    }

    //colocamos la lista de productos cargados al carrito de compras

    let listaJSON=localStorage.getItem("listaProductos");

    let listaUl=document.querySelector("ul");

    let lista=JSON.parse(listaJSON);//lo transformamos a un array de objetos

    for (let prod of lista) {
        let item=document.createElement('li');
        item.textContent=`producto : ${prod.nombre} precio ${prod.precio}`;

        listaUl.appendChild(item)
    }
}