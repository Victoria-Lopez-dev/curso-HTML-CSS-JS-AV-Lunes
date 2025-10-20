//API arrastrar elementos
let tituloH1=document.querySelector("h1");
tituloH1.draggable=true;
console.dir(tituloH1);
let ancla=document.querySelector("a")
console.dir(ancla)
//elementos que por defecto son arrastrables -> draggable(booleano) lo tienen en true
//<img> <a> 


//nos ofrece eventos(7) permitir manejar el arrastre de elementos y un objeto dataTransfer(que vive en el evento)
//contiene metodos y propiedades
//metodos de dataTransfer:

//setData("tipo","dato") -> guardar informacion
//getData("tipo") -> obtener la informacion almacenada 
//clearData("tipo")

//"tipo" -> Text -URL -text/plain -text/html - text/uri-list
//"dato" -> siempre es un string

// Eventos que ocurren en el elemento a arrastrar
// dragstart -> escucha apenas empieza el arrastre
// - dragend  -> cuando se suelte el elemento arrastrado (sin importar donde)
// - drag -> se ejecuta mientras nos movemos en el sitio con el elemento arrastado

//por medio del addEventLister()
// atributo (on+evento) la funcion el en JS.

tituloH1.addEventListener("dragstart",(event)=>{
    // let contenidoTexto=tituloH1.textContent;
    // event.dataTransfer.setData("Text",contenidoTexto);
    let idTitulo=tituloH1.id;
    event.dataTransfer.setData("Text",idTitulo);

    console.log("Este elemento inicia su arrastre");
});
// tituloH1.addEventListener("dragend",()=>{
//     console.log("Se solto el elemento")
// });
// tituloH1.addEventListener("drag",()=>{
//     console.log("Se esta arrastrando el elemento ...")
// });

//Eventos que ocurren en la zona destino(elemento o zona en la que vamos a soltar a elemento )

// dragenter -> se ejecuta siempre que este ingresando sobre ese elemento un elemento arrastrado

// dragleave -> se ejecuta siempre que este "saliendo" de un elemento destino con un elemento arrastrado

// dragover -> similar al drag, se ejecuta siempre que estemos con un elemento arrastrado dentro de la zona destino
//como tambien engloba a cuando se suelta el elemento, "cancela" el drop
//para poder cancelar esta situacion y lograr utilizar el drop s, se uda un metodo de los eventos que se llama preventDefault();
//este metodo vive dentro del objeto event 

const noRedirigir=(e)=>{
    e.preventDefault();// cancela la accion por defecto: en este caso el redirigir
}
// drop -> se ejecuta cuando soltemos al elemento sobre este elemento destino.



// const funcionEnter=()=>{
//     console.log("tenemos un elemento arrastrado ingresando...")
// };

// const funcionLeave=()=>{
//     console.log("tenemos un elemento arrastrado  que sale de la zona destino")
// };
const funcionOver=(event)=>{
    event.preventDefault();
    // console.log("estamos dentro de la zona destino con el elemento arrastrado")
};
const funcionDrop=(event)=>{
    console.log("se solto el elemento");
    const info1=event.dataTransfer.getData("Text");

    if(info1 =="tituloUnico"){
        let titulo=document.querySelector("#tituloUnico")
        event.target.innerHTML=`<h1>${titulo.textContent}</h1>`
        titulo.style.visibility="hidden"
    }
    //else{
    //     event.target.innerHTML=`<img src=${info}/>`
    // }
    let info=event.dataTransfer.files[0];
    if(info.type.split("/").pop() === "pdf"){
        event.target.innerHTML=`
                        <p>${info.name}</p>
                        <img src="./imagenes/img-pdf.png"/>`        
    }

    console.log(event.dataTransfer.files[0])
};

//--------

let imagenCohete=document.querySelector("#cohete")
imagenCohete.addEventListener("dragstart",(event)=>{
  
    let srcImg=imagenCohete.src;
    event.dataTransfer.setData("Text",srcImg);

    console.log("Este elemento inicia su arrastre");
});