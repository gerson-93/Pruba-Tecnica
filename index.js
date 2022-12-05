const express = require('express');
const app = express();
const json = require('./datopolo.json');

app.set('port',4000)

app.get('/', (req, res) => {
 return res.send('el api se esta ejecutando');
});

app.get('/getAll',(req, res) => {
    return res.send(json);
   });

app.listen(app.get('port'), () =>{
    console.log(`El servi estra ecuchando el puerto ${app.get('port')}`);
});

