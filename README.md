# Restaurant-App-MaisonduBon

MaisonDuBon app de reservaciones y pagina web oficial del restaurante, esta página presenta una presentación del restaurante, una sección para consultar el menú y la sección tanto para generar una reservación en el restaurante, como consultar tu reservación, esta pagina se creo con el fin de crear una solución para las reservaciones en línea y tanto como gestionarlas en una base de datos (firebase)

Puedes dar un vistazo al demo [MaisonduBon](https://maisondubon.netlify.app)

## Screenshots

![App Screenshot](https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6456fd880554c812e143edb2/screenshot_2023-05-07-01-23-23-0000.png)

## Instalación

Clona el proyecto

```bash
  git clone https://github.com/DiegoADC/Restaurant-App-MaisonduBon.git
```

Ir al directorio del proyecto

```bash
  cd Restaurant-App-MaisonduBon
```

Instala las dependencias 

```bash
  yarn install
```

Inicia el servidor

```bash
  yarn dev
```

## Corre los test

Para ejecutar pruebas, ejecute el siguiente comando

```bash
  yarn test
```
## Variables de Entorno

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

Para obtenerlas ve a [firebase](https://firebase.google.com/) y crea un nuevo proyecto 

`VITE_APIKEY`

`VITE_AUTHDOMAIN`

`VITE_PROJECTID`

`VITE_STORAGEBUCKET`

`VITE_MESSAGINGSENDERID`

`VITE_APPID`

`VITE_MAX_RESERVATIONS`
