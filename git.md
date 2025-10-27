 Git

## Trabajando con terminal

* `cd`: Change directory, para cambiar la posición de la carpeta
		Ruta relativa (`cd NOMBRE-CARPETA` o `cd ../`)
		Ruta absoluta (`cd 'COPIO RUTA O ARRASTRO'`)
		~ C:\Users\Eva}\Desktop\clase-git
* `cls` o `clear`: limpia la terminal
* `ls` o `dir` o `ll`: muestra contenidos de la carpeta actual

Windows
	... Windows (Powershell)

Bash
	... Unix... Linux / Mac

## Git

Crear un nuevo repositorio
`git init`

Cómo va todo?
`git status`

Agregar archivos a la "caja abierta"
`git add nombre-archivo.extension`

Hacer un commit (cerrar la caja y ponerle un mensaje)
`git commit -m "Escribir el mensaje acá"`

_"tell me who you are"_ (solo una vez por computadora)
Usamos `--global` solamente si es NUESTRA compu

`git config --global user.name "usuarioGithub"`

`git config --global user.email "mimail@mail.com"`

Cambiar de `master` a `main`  
`git branch -M main`

Creamos el enlace del repositorio local con el de GitHub
`git remote add origin git@github.com:usuario/repositorio.git`

Push de commit por primera vez
`git push -u origin main`