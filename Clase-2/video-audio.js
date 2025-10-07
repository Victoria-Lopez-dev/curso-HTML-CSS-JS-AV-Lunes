let video=document.querySelector("video");
// console.dir(video.controls)
// console.dir(video.autoplay)

//video2
let video2=document.getElementById("video2");
//video-audio nos trae propiedades 
//play() -> metodo reproducir video 
//pause() -> metodo que pausa el video
//duration -> duracion del video
//

//botones
let botonPlay=document.querySelector("#play");
let botonPause=document.querySelector("#pause");


console.dir(video2)

// setTimeout(()=>{
//     document.querySelector(".duracion").textContent=video2.duration
// },3000)

 let tiempoActual;//variable global

window.addEventListener("load",()=>{
    let duracionModificada=transformarTiempo(video2.duration);
    
    document.querySelector(".duracion").textContent=duracionModificada
})


botonPlay.addEventListener("click",()=>{
    video2.play();
    tiempoActual=setInterval(()=>{
     let tiempoActual=document.querySelector("#actual");
        tiempoActual.textContent=transformarTiempo(video2.currentTime);
        console.log(video2.currentTime)
    },1000)
    
});

botonPause.addEventListener("click",()=>{
    video2.pause()
  clearInterval(tiempoActual)
});

const sonido=()=>{
    let spanBoton=document.querySelector("#sonido")
    if(video2.muted== false){
        video2.muted=true;
        spanBoton.textContent="OFF"

    }else{
        video2.muted=false;
        spanBoton.textContent="ON"
    }
    console.log(video2.muted)
    
}

const transformarTiempo=(tiempo)=>{
    let minutos;
    let segundos;
    if(tiempo>=60){
      minutos=tiempo/60;   
    }else{
        minutos="00";
    }
    segundos=(tiempo%60).toFixed(0)
    return `${minutos}:${segundos}`
}




   //setTimeOut -> ejecuta una funcion luego de una cantidad de milisegundo que determinemos
   // setTimeOut(funcion,ms)

   //setInterval -> ejecutar una funcion cada cierto tiempo, nos genera un bucle 
//  setInterval(funcion,ms)

//clearInterval(setInterval)-> pausa del bucle del setInterval
   //toFixed(decimales) - parseInt() 