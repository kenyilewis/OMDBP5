# OMDB

## OMDB API

## Directivas

En este proyecto puedes correr los siguientes comandos.

Primero clonar el repositorio.  
git clone https://github.com/kenyilewis/OMDBP5.git

Instalar localmente las dependencias 
cd back/ && npm install && npm start

en otra ventana de zsh/bash/shell

cd ..
cd front && npm install && npm run build 

La app esta en http://localhost:3000/movies

### Obtener información.

En este ejercicio vamos a crear una APP que utilice la API de [OMDB](http://www.omdbapi.com/). Un servicio RESTFULL de películas al estilo [IMDB](http://www.imdb.com/) pero open source!

### APIKEY

Puedes sacar su propia [key](https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0x0euvR%2FzVv1jLU3mGetH4R3kWtYKWACCaYcfoP1IY8g%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU5GG7XylwYou%2BzznFv7FbZmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulN6vYN8IikxxqwtGWTciOwQ4e4xie4N992dlfbpyqd1D&at=freeAcct&Email=).

### Uso

La API usa la misma dirección de la pagina `https://www.omdbapi.com/` pero agrega un _query string_ para hacer una búsqueda en particular.

> No se olviden de primero pasar la APIKEY!

Este query esta definido en su documentación y tiene varias opciones, por ejemplo:

  * `s`: sirve para hacer un **search** que devuelve un arreglo de películas que puedan matchear con el valor.

    EJ: `https://www.omdbapi.com/?apikey=20dac387&s=batman`

  * `t`: es para buscar por **title** que devuelve un objeto con la información puntual de una película.

    EJ: `https://www.omdbapi.com/?apikey=20dac387&t=batman`

> Fíjense que entre cada "propiedad" de la búsqueda se agrega un `&` para separar los comandos.