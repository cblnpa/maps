const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//configurar el servidor con express
const app = express();

//conexión a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/maps', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//habilitar el bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exntended: true}));

//puerto y arranque del servidor
app.listen(3000, ()=>{
    console.log('Servidor funcionando');
})