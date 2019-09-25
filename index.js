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
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});


app.get('/about', () => {
    res.send('About me');
})

app.listen(2000, () => {
    console.log('server on port 2000');
});

