/*******  creando un servidor con nodejs **** */
/*
const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

server.listen(2000,()=>{

    console.log('port 2000');
    
});*/


//*************  creando un servidor con express  **** */  

//requiriendo el modulo express
const express = require('express');
const morgan = require('morgan');
const app = express();

/************************   SETTINGS      **************************** */
app.set('appName','Titulo de mi aplicacion');
app.set('port', 3000);//configurando el puerto de mi app
//definiendo el motor de plantillas
app.set('view engine','ejs');//usare el motor de plantillas ejs
/************************************************************************** */


/*********************    MIDDLEWARES  ************** */
/* //middleware logger: funciona igual que morgan
function logger(request, response, next) {
    console.log(`Route Received: ${request.protocol}://${request.get('host')}${request.originalUrl}`);
    next();
}

//ejecutando el middleware logger
app.use(logger); */

//ejecutando middleware morgan
app.use(morgan('dev'));

app.use(express.json());//es un middleware que transforma cualquier dato a formato json
/************************************************************************** */


/***************************    ROUTES    *************************** */

//all es una funcion de express q hace q podamos hacer algo antes de que llegue a esa ruta
// app.all('/user', (req, res, next) => {
//     console.log(`Por aqui pasó`);
//     // res.send('finish');//hace que ya no se ejecuten las demas rutas
//     next();//continua con lo siguiente
// })

app.get('/user', (req, res) => {
    res.json(
        {
            username: 'carmen',
            edad: 25,
            email: 'carmen@gmail.com'
        }
    );
});

//ruta dinamica : 
app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Peticion POST recibida');
})

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
})

app.put('/test/:id', (req, res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
})

//si lo q ha introducido el user es http://localhost:4000/ y no coincide con ninguna de las rutas de arriba llega a  esta y la ejecuta
//middleware Static Files
app.use(express.static('public'));//ejecuta lo q hay dentro de public(archivos estaticos)

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log(`server on port ${app.get('port')}`);
});

