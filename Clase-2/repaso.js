// //Operaciones
// //Aritmeticas : + - * / ... Math
// //numerico - NaN(Not a Number)
// let calculo=33 -"hola" //NaN
// console.log(typeof calculo);
// //+ suma o concatenacion

// console.log("hola"+ " pedro"+22)

// let valor="valor";
// console.log(isNaN(valor))
// // comparacion -> == === != !== > < >= <= -> siempre booleanos

// // == compara valor | === compara valor y tipo 
// console.log(calculo === "un dato")
// valor !== 'otro dato'

// //logicas ->  
// // &&(and - "y"- todas las operaciones se cumplan ,para un resultado true) 
// // ||(or "o" - con que una de todas las operaciones de true , el resultado final da true )
// //  !(not - no) -> me da el opuesto 

// let campo1='';
// let campo2="completo";
// let campo3='completo';

// let camposVacios=campo1 !== '' && campo2 !== '' && campo3 !== '' //...
// campo1 === '' || campo2 ==='' || campo3 === '' 

// console.log(!true)

// //metodos de JS : console.log() typeof() isNaN()

// //condicionales 
// /*if/else -> 
// if(condicion){ 
//       accion/es-true
//  }else{
//       accion/es-false
// }
// -------
// if(condicion){ 
//       accion/es-true
//  }
// ---
//  * podemos evitar el else,
//  * podemos hacer multiples acciones tanto dentro del if como del else 
//  * anidar condicionales 
//     */



// /* operador ternario -> condicion? accion-true:accion-false;
//  - solo una accion true y una false
//  - no podemos evitar ninguno de los dos caminos
//  - si hago anidacion no puedo hacerlo en multiples lineas 
// */
// //  (switch) -> evalua un dato (key) - el valor en si 
// // case - break; - default 
// // switch (key) {
// //     case value:
        
// //         break;

// //     default:
// //         break;
// // }


// camposVacios?console.log("se puede enviar el formulario"):console.log("tenemos un campo sin completar");

// //funciones -> bloque de codigo - conjunto de instrucciones 

// //tradicional
// /*
//  function nombre(parametros){
//     .. acciones 
//     return
//  }
// */
// function saludo(nombre) {
    
//     if(verificarNombre(nombre) !== false){
//         console.log("hola!!"+ nombre)        
//     }else{
//         console.log("disculpe lo ingresado no es un nombre")
//     }

// }
// function verificarNombre(dato) {
//     if(isNaN(dato)) return dato
//     return false   
// }

// //ejecutar una funcion 
// // nombre() | nombre(argumento)

// console.log(saludo("Juan"))
// saludo("Paula")
// console.log(verificarNombre(22))

// //funciones flechas 
// /*
// cost nombre=(parametros)=>{
//      return   accion/es
//     }
// */
// //ejecutar una funcion 
// // nombre() | nombre(argumento)

// //hoisting 
// //saludo2("juan carlos")
const saludo2=(nombre)=> {
    
    if(verificarNombre2(nombre) !== false){
        console.log("hola!!"+ nombre)        
    }else{
        console.log("disculpe lo ingresado no es un nombre")
    }

}
const verificarNombre2=(dato)=> {
    if(isNaN(dato)) return dato
    return false   
}



// // arrays -> listas [item,item]
// //lista de cualquier tipo de dato
// //indice -> arranca del 0 - posiciones de los elementos 
// //length -> largo de la lista 
// //indice mas alto = length-1 

// //modificaciones en las listas : push()- pop()-shift()-unshift()-splice()-slice()
// let lista=[true,111,verificarNombre,"hola"];
// console.log(lista)
// console.log(lista.length)


// let datoString="hola mundo!"
// console.log(datoString.length)
// //como transformar un string en array -> split(ref)

// console.log(datoString.split(""));

// //como transformar un array a string -> join(ref)
// let listaInfo=['soy','una','frase','x',44];

// console.log(listaInfo.join(" "));

// //objetos - propiedad:valor
// /*
// definir un objeto:
//     {
//         propiedad:valor,
//         propiedad:valor
//     }
//     - no podemos colocar una propiedad sin valor
//     - puede ser el valor de cualquier tipo

// ver un valor 
// objeto.propiedad -> ver el valor
// objeto["propiedad"]

// objeto.propiedad=valor;
// objeto["propiedad"]=valor;

// delete objeto.propiedad
// delete objeto["propiedad"]
// */
// let persona={
//     nombre:"Juan",
//     edad:33,
//     saludo:saludo
// };
// let producto={
//     "nombre":"remera",
//     "cantidad":300,
//     "saludo":saludo
// }
// delete persona.saludo
// persona.nombre
// console.log(producto['nombre'])

// let mostrarValor=(propiedad)=>{
//     console.log(producto[propiedad])
// }
// mostrarValor("nombre")
// mostrarValor("cantidad")

//--------------

//DOM - Document Object Model // document
// 1 - llamar al nodo : 
// getElementsByTagName(),getElementsByClassName(),getElementById()..querySelector()- querySelectorAll()

let parrafos=document.getElementsByTagName('p');//array de nodos
let boton=document.querySelector("button")//objeto (nodo)
console.log(parrafos[1])
console.dir(boton)

//2 - llamar y utilizar sus propiedades
console.log(boton.classList.add("rojo"))
parrafos[1].textContent="otro texto..."



//eventos -> acciones que tienen un principio y fin 
//programamos que el browser escuche alguna accion en particular del usuario sobre algun elemento/nodo del documento y en consecuencia ejecute una accion
// nos traen como resultado un objeto llamado event 
//tres partes:
//nodo en el que se coloque la escucha
//la accion que tiene que estar escuchando: "click"- "input"-'submit'-'change' - 'mouseover'-"blur"-'focus'-load-'DomContentLoaded'...
//la funcion como respuesta 

//addEventListener()
/*
nodo.addEventListener("evento",funcion)
*/
let funcionBoton=(e)=>{
    console.log(e)
    parrafos[0].style.color='green'
    console.dir(e.target);
    saludo2()
}
//boton.addEventListener("click",funcionBoton);
boton.addEventListener("click",function(event){
    console.log(event)
    parrafos[0].style.color='green';
});

//atributo on+evento y la funcion definida en archivo JS 
