//API -> Aplication Programing Interfase 
//Geolocalizacion -> ubicar las coordenadas del dispositivo que utiliza nuestro sitio ( siempre y cuando el usuario lo permita )

//metodos : getCurrentPosition(funcionOK,fnError,obConfig) -
//  watchPosition(funcionOK,fnError,obConfig)

//objeto position tiene la propiedad coords que contiene la informacion de la ubicacion del dispositivo
//dentro de coords:
// accuracy -> difernecia(precision) en metros que puede llegar a tener 
//longitude - latitude - altitude -> coordenadas de la ubicacion

//objeto de error que contiene la informacion de error:
// code -> 1(no tuvimos permiso) -2(no pudo ubicarlo) -3(limite de tiempo)
//massege -> string con info del error ocurrido

//propiedades del objeto de configuracion:
//     enableHighAccuracy -> booleano , trata de reducir la diferencia en metros de la distacia , ser mas preciso
//     timeout-> tiempo en ms de maximo de espera
//  maximumAge ->tiempo(ms) maximo entre cada llamado 
const funcionPosition=(position)=>{
    let parrafo=document.querySelector("p");

    console.log("Se logro conseguir la ubicacion!!!");
    parrafo.textContent=`el dispositivo se encuentra en la longitud ${position.coords.longitude}, latitud ${position.coords.latitude}, con un error de ${position.coords.accuracy} metros.`

};

const FuncionError=(err)=>{
    console.log("No se ubico el dispositivo");
    let parrafo=document.querySelector("p");
    if(err.code == 1){
        parrafo.textContent="Le pedimos que nos de acceso a su ubicacion,ya que es requisito necesario para nuestro programa.."
    }
    if(err.code ==2){
        parrafo.textContent="Ups!! Surgio un problema y no logramos ubicarlo,pruebe mas tarde"
    }

    if(err.code ==3){
        parrafo.textContent="Tiempo insuficiente..."
    }


};
const objConfig={
    enableHighAccuracy:true,
    timeout:30,
};

navigator.geolocation.getCurrentPosition(funcionPosition,FuncionError,objConfig)