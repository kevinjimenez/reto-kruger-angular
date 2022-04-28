# Vacunacion

El proyecto tiene el fin de registrar a las personas que se hayan vacunado y podran agregar sus respectivas dosis con sus respectivas vacunas

El aplicativo web cuento con dos roles Administrador y usuario

El administrador podra agrear, eliminar y editar a los diferentes empleados, mientras que el usuario solo podra editar su informacion



# Ingreso a la app
Para poder ingresar a la app web se debe ingresar con las credenciales:

```
usuario: admin
password: 12345678
```


# Frontend

El proyecto se realizo en angular con su version 13.3.3.

Se uso librerias de estilo tales como: 
- <strong>ANGULAR MATERIAL<strong>
- <strong>BOOTSTRAP<strong>

## Pasos para levantar la app web
1. Primero se debe clonar el repositorio.
2. Se debe instalar sus dependencias con el comando:
``` 
npm i
```
3. Para poder ejecutar el proyecto de forma local se debe ejecuntar el comando:
``` 
ng serve -o
```
4. La app web se levantara en la url http://localhost:4200/#/

# Backend

El backend se desarrollo en el framework NestJS con base de datos Postgres, ademas, para su uso se desplego en heroku

Se desarrollo las diferentes Api rest para poder realizar el reto.

#### Link repositorio backend `https://github.com/kevinjimenez/reto-kruger-backend`

#### API heroku `https://kruger-backend.herokuapp.com/`

