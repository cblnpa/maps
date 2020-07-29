const express = require('express');

//configurar el servidor con express
const app = express();

app.use('/', (req,res) => {
    res.send('Escuchando en Puerto');
});
app.listen(3000);