//Web Storage
//API incluida - almacenar informacion (no debe ser sensible) en el browser de cada usuario

//la informacion a almacenar -> siempre de tipo string - texto 

//herramientas: 
// localStorage -> almacena esa informacion hasta que le indiquemos que lo elimine

// sessionStorage -> almacena por sesion ,luego se elimina 

//metodos: 
// setItem(key,valor)-> nos permite almacenar  
// getItem(key) -> obtengo informacion almacenada con web storage
// removeItem(key) -> eliminar el valor almacenado
let nombre="Juan";

localStorage.setItem("nombrePersona",nombre)

sessionStorage.setItem("valor",55)//almaceno el numero 55, que se almacena como un string
let nombreAlmacenado=localStorage.getItem("nombrePersona");

const cambiarNombre=()=>{
    let nuevoNombre=prompt("ingrese un nuevo nombre");
    localStorage.setItem("nombrePersona",nuevoNombre);
}

const eliminarNombre=()=>{

    localStorage.removeItem("nombrePersona")
}

// let valorNumerico=sessionStorage.getItem("valor")
// console.log(typeof(valorNumerico))//string
//lo que hace es transformar a string lo que coloquemos dentro 
const sumar=()=>{
let valorNumerico=sessionStorage.getItem("valor")
    let total=parseInt(valorNumerico) +50;
    sessionStorage.setItem("valor",total)
}

localStorage.setItem("verdadero",true);

let persona={
    nombre:"Julieta",
    edad:20,
    nacionalidad:"Argentina"
};

let lista=[persona,persona]

localStorage.setItem("persona",JSON.stringify(persona))
localStorage.setItem("listaPersona",JSON.stringify(lista))

let personaAlmacenada=localStorage.getItem("persona");
console.log(JSON.parse(personaAlmacenada))



//JSON -> JavaScript Object Notation
//formato de texto -> puede ser interpretado por distintos lenguajes 
//se usa mucho para el envio y recepcion de informacion
//es liviano y es practico 
// JS lo reconoce pero no puede acceder a la informacion como con cualquier array/objeto.
//Por eso utiliza metodos para transformarlo.Viven en un objeto de JS que se llama JSON
//tiene dos metodos : 
// stringify(dato) -> transformar un objeto/array a un JSON
// parse(infoJSON) -> transformar a un objeto/array un JSON

let datoJSON=`
[
    {
        "product":"product 1",
        "price":44,
        "description":"description 1",
        "id":"1"
    },
    {   "product":"product 2",
        "price":69,
        "description":"description 2",
        "id":"2"
    }
]`

let datoJSON2=`
{
  "dato": {
        "product":"product 1",
        "price":44,
        "description":"description 1",
        "id":"1"
    },
    {   "product":"product 2",
        "price":69,
        "description":"description 2",
        "id":"2"
    }
}`

console.log(datoJSON)
let datoTransformado=JSON.parse(datoJSON);
console.log(datoTransformado)

let JSONpersona=JSON.stringify(persona);
console.log(JSONpersona)