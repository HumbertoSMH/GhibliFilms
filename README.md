# Ghibli App

Demo técnica de prueba de FrontEnd para Resuelve tu Deuda. Muestra una lista de las películas de studio Ghibli, puedes buscar por titulo o por la sinopsis de la película. Ver los detalles de cada una, todo esto en un SPA.

## Requisitos del sistema.

El proyecto se desarrollo con React en el siguiente entorno: 
- NodeJs versión 14.16.0
- React versión 17.0.2

### Para correr el proyecto de forma local. 
```bash
#Clonamos el repositorio con el siguiente comando
git clone https://github.com/HumbertoSMH/GhibliFilms.git
```
- Instalamos las dependencias. 
```console
npm install
```
- Levantamos el servidor.
```console
npm start
```
El proyecto correra por defecto en el puerto 3000.

## Arquitectura de la aplicación. 
La aplicación esta desarrollada con una arquitectura básica de React basada en Hooks y Functional components. Se seleccionó React por su rapidez de desarrollo y su capacidad de escalabilidad de la aplicación. 


La Aplicación hace una primera llamada a las APIs involucradas, se guarda en un state que se comparte a traves de los diferentes componentes de la aplicación.
### Css 
Del lado de css se usa Sass. Esto nos permite tener estilos parametrizables y nos permite usar el potencial de las funciones que incluye Sass. Esto redujo el tiempo de desarrollo de css.  
### Routing
|Ruta|Descripción|
|---|---|
|*/*| Es la ruta inicial del proyecto muestra todas las peliculas de studio Ghibli |
|*/film/:filmId*| Muestra los detalles completos de la pelicula. |
### LLamadas a APIs
En un principio se hacia una llamada a la API de studio Ghibli al cargar la pagina inicial y uno más al entrar al detalle de la pelicula seleccionada. Este comportamiento se cambio durante el desarrollo por el uso de un context el cual comparte la información entre los distintos componentes de la aplicación reduciendo las llamadas a la API. Esto fue resultado de usar la API de [OMDb API](https://www.omdbapi.com/) la cual para usuarios gratuitos tiene un limite de 1000 peticiones por día.
### Busqueda
La busqueda integrada en la pagina nos permite hacer la busqueda por titulo (En ingles) o por la sinopsis de la pelicula. Se encuentra en un componente que obtiene la información de las peliculas desde el context padre. 
### Limitaciones. 
 - La busqueda no permite buscar por su titulo original romanizado.
 - La aplicación no hace uso de un cache lo cual podria reducir aun mas las llamadas a las APIs involucradas. 
 - La aplicación no hace uso de reducers o redux  

*Si se contara con un tiempo mayor de desarrollo todas estas características serian incorporadas en la aplicación.*

### Experiencia. 
El desarrollo de este demo me permitio conocer el framework de React, ver sus cualidades y tomar el desafio de mejorar no solo el codigo, si no la interacción entre componentes.

El codigo que mas trabajo y mas orgullo sentí desarrollar fue el [Autocomplete](https://github.com/HumbertoSMH/GhibliFilms/blob/master/src/components/Autocomplete.js) si bien no fue un desarrollo 100% propio, se tomo la inspiración de diferentes lugares y se parametrizo y configuro de acuerdo a las necesidades del proyecto. 

Hacer el deploy a GitHub Pages tambien fue un reto, aunque anteriormente habia utilizado GitHub para llevar mi control de codigo esta es la primera vez que se hace un deploy. 

### Demo 
El demo live se puede encontrar en el siguiente enlace [Ghibli APP](https://humbertosmh.github.io/GhibliFilms/) 