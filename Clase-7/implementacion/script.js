let listaPrevia=[]

//pliegue y despliegue del navegador

const desplegar=()=>{
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}

//------------------------

const temaNoche=()=>{
    document.querySelector("body").classList.add("fondo");
    localStorage.setItem("tema","noche")
}

const temaDia=()=>{
    document.querySelector("body").classList.remove("fondo");
     localStorage.setItem("tema","dia")
}

const actualizar=()=>{
    //actualize el tema seleccionado por el usuario
    let tema=localStorage.getItem("tema");
    if(tema === "noche"){
        document.querySelector("body").classList.add("fondo");
    }

    // actualice la lista
    let lista=localStorage.getItem("listaProductos");
    if(lista){
      listaPrevia=JSON.parse(lista);
      let contador=document.querySelector("#cantidad");
      contador.textContent=JSON.parse(lista).length;
    }
}
//----------

const sumarProducto=(boton)=>{

    //modificar el contador
    let contador=document.querySelector("#cantidad");
    let valorContador=parseInt(contador.textContent);
    contador.textContent=valorContador+1;

    //actualizar la lista
    if(boton.id =="boton1"){
        listaPrevia.push(producto1)
    }
     if(boton.id =="boton2"){
        listaPrevia.push(producto2)
    }
      if(boton.id =="boton3"){
        listaPrevia.push(producto3)
    }
   console.log(listaPrevia);
   localStorage.setItem("listaProductos",JSON.stringify(listaPrevia))
}


let producto1={
    nombre:'silla 1',
    precio:2500
}
let producto2={
    nombre:'silla 2',
    precio:3500
}
let producto3={
    nombre:'silla 3',
    precio:4500
}
//---
const borrar=()=>{
    localStorage.removeItem("listaProductos");
    let contador=document.querySelector("#cantidad");
    contador.textContent=0;
}


// push() es un metodo de array que nos permite agregar items al final de la lista.
//pop() -> saca el ultimo item de la lista
//shift()-> sacar el primero de la lista
//unshift()-> carga items al inicio de la lista
//splice()-> modificar items en cualquier lugar de la lista