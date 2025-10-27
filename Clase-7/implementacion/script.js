//pliegue y despliegue del navegador

function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}
//defino los cambios del tema noche
const estiloNoche=()=>{
    let body=document.querySelector("body");
    let botones=document.querySelectorAll(".boton");
    body.classList.add("fondo")
    botones.forEach((boton)=>{boton.classList.add("botonNight")})
}
//------------------------
//API (Application Programing Interfase)


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