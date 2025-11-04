//POO Programacion Orientada a Objetos 
//paradigma de programacion 
//agrega a los actores intervinientes
//les asigna capcidades 
//encapsular codigo - herencia -no tengan acceso a toda la informacion y manejo de funciones todos los intervinientes 

// clases -> actuan como moldes donde definimos las capacidades y caracteristicas de estas entidades 

//Creando clases ------------- 
/* 
    sintaxis:  class NombreClase{
        //caracteristicas 


        //capacidades -> funciones 
         nombreFuncion(){
            procedimiento..
            }

    }
*/

//ejemplo : sitio de la facultad : Docentes - Alumnos - Administrativo

//creamos la clase -> molde del docente

//super clase -> clase generica de la que extienden otras clases 
class Usuario{
    constructor(nombre,email,usuario){
        this.nombre=nombre
        this.email=email
        this.usuario=usuario
    };
    logearse(usuario){
        console.log(`Proceso de logeo de ${usuario}`)
    } 
}

// subclase -> clases que herando de otra clase 
class Docente extends Usuario{
        constructor(nombreDocente,emailDocente,usuarioDocente,panelDocente){
            super(nombreDocente,emailDocente,usuarioDocente)
            this.panelCurso=panelDocente
        };
        cargarNotas(){
            //llama a la lista de alumnos 
            console.log("el docente carga notas...")
        }
        CrearContenido(){
            console.log("crea contenido en el sitio..")
        }
    }

class Alumno extends Usuario{
        constructor(nombreAlumno,emailAlumno,usuarioAlumno){//ejecuta el constructor de la subclase 
            super(nombreAlumno,emailAlumno,usuarioAlumno)//ejecuta el constructor de la super clase
        };
        mandarMensajeAlDocente(){
            console.log("manda mensaje")
        }
        resolverExamen(){
            console.log("El alumno resuelve el cuestionario...")
        }
    }
class Curso{
    constructor(nombre){
        this.nombre=nombre
    }
    mostrarLinksClase(){

    }
}
// instancias de esas clases -> objetos, entidades en si 
//sintaxis -> new Clase

let docente1= new Docente("Marta Sanchez","marta@correofacultad.com","martaS","curso1");
let docente2= new Docente("Juan Perez","juan@correofacultad.com","juanP","curso2");

let alumno1=new Alumno();

docente1.logearse(docente1.usuario);
docente2.logearse(docente2.usuario);

docente1.cargarNotas();
console.log(docente1.nombre);

docente2.CrearContenido();
alumno1.resolverExamen();

console.log(docente1,docente2)


//Herencias -> crear una clase en base a otra 

