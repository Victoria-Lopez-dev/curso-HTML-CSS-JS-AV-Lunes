    // //Asincronia -> poder ejecutar acciones en "segundo plano", sin cortar el flujo de ejecucion restante

    // // JS -> naturalmente sincronico 
    // //herramientas JS manejar la asincronia 

    // //asincronismo 
    // //1- callbacks -> a una funcion que pasa como parametro de otra 
    // //ejemplo addEventListener()

    // //2- promesas , 
    // //3- async-await
    // const variables="JUan";



    // function funcionCallback(nombreCompleto,edad) {
    //     console.log(`la persona ingresada es : ${nombreCompleto} de : ${edad} años`)
    // }

    // function Ejecucion1(edad,nombre,apellido,callback) {
    //     let nombreTotal=nombre+" "+apellido;
        
    //     callback(nombreTotal,edad)
    //     console.log("HOLLLAAA")
    // }

    // Ejecucion1(22,"Marta","Gomez",funcionCallback)

    // let boton1=document.querySelector("#boton1");

    // boton1.addEventListener("click",()=>{
    //     console.log("Se pulso el boton!")
    // });
    // //...
    // console.log("resto del codigo...");


    // //promesas 
    // //estructura
    // ((resolve,reject)=>{
    //     //ejecute ....
    //     resolve("si se resolvio OK");
    //     reject("no logro cumplir con la promesa")
    // })

    // const mipromesa= new Promise((resolve,reject)=>{
    //     //accion que lleva mucho tiempo ....

    //     let resultado=false
    //     if(resultado){
    //         resolve("si se resolvio OK");
    //     }else{
    //         reject("no logro cumplir con la promesa")
    //     }
        
    // })
    // mipromesa
    // .then((resultadoOk)=>{
    //     console.log(resultadoOk);
    // //....
    // })
    // .catch((error)=>console.log("no se pudo cumplir la promesa"+error));

    // //metodo - un tipo de promesa:  fetch()-> ir a buscar y tambien mandar informacion a un recurso externo (generalmente una API)

//fetch(URL,{configuracion})
let mostrarPersonajes=(personajes)=>{
    let ul=document.querySelector("ul")
    for(let personaje of personajes){
        let item=document.createElement("li");
        item.innerHTML=`<p>${personaje.name}</p>
            <img src='${personaje.image}'/>`
        ul.appendChild(item)
    }
}

let listaPersonajes=[];
const pedirPersonajes=async()=>{
    listaPersonajes= await fetch("https://rickandmortyapi.com/api/character")
    .then((res)=>{return res.json()})
    .then((data)=>{return data.results})
    .catch((error)=>{
        console.log(`Error!`);
        console.log(error)
    });

    console.log(listaPersonajes) 
    mostrarPersonajes(listaPersonajes)
     
}
let boton2=document.querySelector("#boton2");

boton2.addEventListener("click",pedirPersonajes)
// pedirPersonajes()



//json
//------------
console.log("Resto de codigo por FUERA de la funcion pedirPersonaje")


//async-await
async function name(params) {
    
}
//axios 
/*protocolo HTTP
//verbos HTTP:
//  get-> de lectura (pidiendo informacion )
//  post-> para crear
// put-patch-> actualizar
// delete -> borrar/eliminar

//por defecto si no indico el verbo HTTP, estoy haciendo una peticion de tipo get 
*/

