const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deptosSchema = new Schema({
    direccion: {type: String, trim: true},
    valor: {type: int, trim: true}
});

module.exports = mongoose.model('Deptos', deptosSchema);