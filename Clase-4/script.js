const rotar=()=>{
    let elementoRotador=document.querySelector(".rotate");
    elementoRotador.classList.toggle("rotar")
}

/*--------- */
let skewElement=document.querySelector(".skew")
skewElement.addEventListener('mouseover',(event)=>{

    event.target.classList.add('animacion-skew')
    setTimeout(()=>{event.target.classList.remove('animacion-skew')},10000)//ejecutar una funcion ,despues de un cierto tiempo(en milisegundos)
})
//scroll 

const cambio=()=>{
    let titulo=document.querySelector("h1")
    if(window.scrollY>window.innerHeight*0.5){
        titulo.classList.add("scrollSelector")
    }else{
        titulo.classList.remove("scrollSelector")
    }
}

//window(pantalla) -document(documento HTML)
//window.scrollY -> cuanto se scrolleo sobre ese elemento en sentido vertical
//window.innerHeight -> alto de la pantalla 