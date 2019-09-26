1. Ejecutar en la terminal:
```bash 
node index.js
```
2. En el navegador:
http://localhost:5000/

3. crear el archivo package.json 
```
npm init -y
```
4. instalar express en local
```
npm install express
```
5.instalar nodemon ```npm install nodemon -D```

6. ejecutar en la terminal
```npx nodemon index.js```

7. probar los send con postman

### middleware
Es un manejador de peticion que podemos ejecutar antes de que llegue a su ruta original
Funciona para cualquier ruta que creemos
Los middleware se deben de colocar antes de las rutas

middleware morgan
instalar 
```
npm install morgan
npx nodemon  index.js
```

### static files
Es un middleware que se encarga de poder enviar archivos al front end. Archivos estaticos como html,css y js.
Este middleware viene incluido dentro del framework express, no hay necesidad de instalarlo

### Express Settings
Mediante su metodo set('nombreVariable','valor') le puedo establecer configuraciones para mi aplicacion como: el puerto, motor de plantillas, etc.

Instalar el motor de plantillas ejs