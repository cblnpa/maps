const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresasSchema = new Schema({
    nombre: {type: String, trim: true},
    direccion: {type: String, trim: true},
    sitioWeb: {type: String, trim: true}
});

module.exports = mongoose.model('Empresas', empresasSchema);